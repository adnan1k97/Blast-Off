import { useState, useCallback, useEffect } from 'react';

const BASE_CHAIN_ID = '0x2105'; // 8453 in hex
const BASE_RPC_URL = 'https://mainnet.base.org';

interface WalletAccount {
  address: string;
}

interface WalletState {
  connected: boolean;
  connecting: boolean;
  account: WalletAccount | null;
  balance: number | null;
}

export function useCoinbaseWallet() {
  const [state, setState] = useState<WalletState>({
    connected: false,
    connecting: false,
    account: null,
    balance: null,
  });

  const getProvider = useCallback(() => {
    if (typeof window === 'undefined') return null;
    const ethereum = (window as any).ethereum;
    if (!ethereum) return null;
    if (ethereum.providers) {
      return ethereum.providers.find((p: any) => p.isCoinbaseWallet) || null;
    }
    return ethereum.isCoinbaseWallet ? ethereum : null;
  }, []);

  const fetchBalance = useCallback(async (address: string) => {
    try {
      const response = await fetch(BASE_RPC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_getBalance',
          params: [address, 'latest'],
        }),
      });
      const data = await response.json();
      if (data.result) {
        const wei = BigInt(data.result);
        const eth = Number(wei) / 1e18;
        setState(prev => ({ ...prev, balance: eth }));
      }
    } catch (error) {
      console.error('Failed to fetch balance:', error);
    }
  }, []);

  const connect = useCallback(async () => {
    const provider = getProvider();
    if (!provider) {
      window.open('https://www.coinbase.com/wallet', '_blank');
      throw new Error('Coinbase Wallet or Web3 provider not found. Please install it.');
    }

    setState(prev => ({ ...prev, connecting: true }));

    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts returned');
      }

      const address = accounts[0];

      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: BASE_CHAIN_ID }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          try {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: BASE_CHAIN_ID,
                  chainName: 'Base Mainnet',
                  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
                  rpcUrls: [BASE_RPC_URL],
                  blockExplorerUrls: ['https://basescan.org'],
                },
              ],
            });
          } catch (addError) {
            console.error('Failed to add Base network:', addError);
          }
        } else {
          console.error('Failed to switch to Base network:', switchError);
        }
      }

      setState({
        connected: true,
        connecting: false,
        account: { address },
        balance: null,
      });
      localStorage.setItem('coinbase_wallet_connected', 'true');

      fetchBalance(address);
    } catch (error) {
      console.error('Coinbase Wallet connection failed:', error);
      setState(prev => ({ ...prev, connecting: false }));
      throw error;
    }
  }, [getProvider, fetchBalance]);

  const disconnect = useCallback(async () => {
    localStorage.removeItem('coinbase_wallet_connected');
    setState({
      connected: false,
      connecting: false,
      account: null,
      balance: null,
    });
  }, []);

  // Autoconnect on mount
  useEffect(() => {
    const autoConnect = async () => {
      const provider = getProvider();
      if (!provider) return;

      try {
        // Silent accounts fetch
        const accounts = await provider.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
          const address = accounts[0];
          setState({
            connected: true,
            connecting: false,
            account: { address },
            balance: null,
          });
          fetchBalance(address);
          localStorage.setItem('coinbase_wallet_connected', 'true');
        } else if (localStorage.getItem('coinbase_wallet_connected') === 'true') {
          // Attempt proactive connect if previously connected
          await connect();
        }
      } catch (err) {
        console.warn('Autoconnect failed:', err);
      }
    };
    autoConnect();
  }, [getProvider, fetchBalance, connect]);

  useEffect(() => {
    const provider = getProvider();
    if (!provider) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        const address = accounts[0];
        setState(prev => ({
          ...prev,
          connected: true,
          account: { address },
        }));
        fetchBalance(address);
      }
    };

    const handleChainChanged = () => {
      if (state.account?.address) {
        fetchBalance(state.account.address);
      }
    };

    provider.on?.('accountsChanged', handleAccountsChanged);
    provider.on?.('chainChanged', handleChainChanged);

    return () => {
      provider.removeListener?.('accountsChanged', handleAccountsChanged);
      provider.removeListener?.('chainChanged', handleChainChanged);
    };
  }, [getProvider, state.account, disconnect, fetchBalance]);

  return {
    ...state,
    connect,
    disconnect,
    refreshBalance: () => state.account && fetchBalance(state.account.address),
    hasBrowserWallet: !!getProvider(),
    isNative: false,
  };
}
