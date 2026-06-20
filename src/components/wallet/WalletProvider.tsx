import React, { createContext, useContext, ReactNode } from 'react';
import { useCoinbaseWallet } from '../../hooks/use-coinbase-wallet';

type WalletContextType = ReturnType<typeof useCoinbaseWallet>;

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const wallet = useCoinbaseWallet();

  return (
    <WalletContext.Provider value={wallet}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
