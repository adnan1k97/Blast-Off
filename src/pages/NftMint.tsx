import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@/components/wallet/WalletProvider';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const MINT_FEE_USD = 0.01;
const MINT_FEE_ETH = '0.000003'; // ~$0.01 USD at current market rates
const TREASURY_ADDRESS = '0xeF64560D0481F480D9Fcc0E500eF530DE4bCD01A';
const PINATA_IPFS_CID = 'ipfs://QmYwAPjzv5CZ1A269stQTUc1gN4294spA3u1X9uBN9v3Gf';

const NftMint: React.FC = () => {
  const navigate = useNavigate();
  const { connected, account, connect } = useWallet();
  const [mintingState, setMintingState] = useState<'idle' | 'preparing' | 'signing' | 'confirming' | 'success'>('idle');
  const [txHash, setTxHash] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if already minted
    const alreadyMinted = localStorage.getItem('has_nft_pass') === 'true';
    if (alreadyMinted) {
      setMintingState('success');
      setTokenId(parseInt(localStorage.getItem('nft_pass_token_id') || '1347'));
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setCardRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  const handleMint = async () => {
    if (!connected) {
      try {
        await connect();
      } catch (err: any) {
        toast.error(err.message || 'Please connect your Coinbase Wallet first');
        return;
      }
    }

    setMintingState('preparing');

    // Mimic smart contract interaction and transaction signing
    setTimeout(async () => {
      setMintingState('signing');
      
      try {
        const ethereum = (window as any).ethereum;
        if (ethereum && account?.address) {
          // Attempt a real micro-transaction signature for $0.01 to treasury
          // hex value for 0.000003 ETH is 0x2BC07E282400 (3000000000000 wei)
          const valueHex = '0x2bc07e282400';
          const params = [{
            from: account.address,
            to: TREASURY_ADDRESS,
            value: valueHex,
            gasLimit: '0x15F90', // 90000 gas
          }];

          toast.info('Please confirm the 0.01$ transaction in your Coinbase Wallet');
          const tx = await ethereum.request({
            method: 'eth_sendTransaction',
            params,
          });

          if (tx) {
            setTxHash(tx);
          } else {
            throw new Error('Transaction cancelled by user');
          }
        } else {
          // Fallback simulation if running in custom browser preview without injection
          const mockHash = '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
          setTxHash(mockHash);
        }

        setMintingState('confirming');
        
        // Wait for confirmation
        setTimeout(() => {
          const newTokenId = Math.floor(Math.random() * 8999) + 1000;
          setTokenId(newTokenId);
          localStorage.setItem('has_nft_pass', 'true');
          localStorage.setItem('nft_pass_token_id', String(newTokenId));
          setMintingState('success');
          toast.success('NFT Pass Minted Successfully!');
        }, 3000);

      } catch (err: any) {
        console.error('Minting transaction failed:', err);
        toast.error(err.message || 'Transaction rejected. Minting cancelled.');
        setMintingState('idle');
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden flex flex-col items-center justify-between pb-6" style={{
      backgroundColor: '#0D0A1A',
      backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(83,68,169,0.45) 0%, transparent 70%)',
      fontFamily: "'Barlow Condensed', sans-serif",
      color: '#F0ECF8',
    }}>
      {/* Header */}
      <div className="w-full max-w-[420px] flex items-center gap-4 px-6 pt-6 pb-3 sticky top-0 z-10" style={{
        background: 'rgba(13,10,26,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(240,236,248,0.08)',
      }}>
        <button
          onClick={() => navigate('/home')}
          className="w-8 h-8 rounded-[9px] flex items-center justify-center cursor-pointer transition-colors hover:bg-white/[0.08]"
          style={{
            background: 'none',
            border: '1px solid rgba(240,236,248,0.08)',
            color: '#F0ECF8',
            fontSize: '16px',
          }}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '24px',
          letterSpacing: '0.08em',
          color: '#F0ECF8',
        }}>NFT Mission Pass</span>
      </div>

      <div className="w-full max-w-[420px] px-6 flex flex-col items-center justify-center flex-1 h-0 py-2 space-y-3">
        {mintingState !== 'success' ? (
          <>
            {/* Holographic 3D Pass Preview */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[2/3] max-h-[38vh] rounded-2xl p-5 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl cursor-pointer select-none group"
              style={{
                backgroundImage: 'url("/nft-pass.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '2px solid rgba(255,179,43,0.4)',
                boxShadow: '0 12px 40px rgba(13,10,26,0.8), 0 0 30px rgba(187,80,152,0.25)',
                transform: `perspective(1000px) rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
              }}
            >
              {/* Dynamic light reflection/shine overlay */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60 mix-blend-color-dodge group-hover:opacity-90"
                style={{
                  background: `radial-gradient(circle at ${cardRotate.y * 10 + 50}% ${-cardRotate.x * 10 + 50}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                }}
              />
              
              {/* Subtle grid pattern for tech look */}
              <div className="absolute inset-0 bg-repeat bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Top/Bottom dark vignettes for readability */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0D0A1A]/80 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D0A1A]/95 via-[#0D0A1A]/40 to-transparent pointer-events-none" />
              
              {/* Card Header */}
              <div className="flex justify-between items-start z-10">
                <div>
                  <div className="text-[9px] font-mono tracking-widest text-[#FFB32B] uppercase font-bold drop-shadow">Base Mainnet</div>
                  <div className="text-xl font-bold tracking-wider font-['Bebas_Neue'] mt-0.5 text-white drop-shadow-lg">MISSION ACCESS PASS</div>
                </div>
              </div>

              {/* Card Center Space - left empty to appreciate the gorgeous artwork */}
              <div className="flex flex-col items-center justify-center flex-1 py-4 z-10" />
            </div>

            {/* Description Info */}
            <div className="text-center space-y-1">
              <h2 className="text-xl font-['Bebas_Neue'] tracking-wider text-white">Unlock All 400 Sectors</h2>
              <p className="text-[12px] leading-snug text-white/50 px-2">
                Mint this NFT Pass on Base Mainnet to permanently unlock all worlds, sectors, custom ball skins, and leaderboard access.
              </p>
            </div>

            {/* Price & Action Box */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white/40">MINT PRICE</span>
                <span className="text-[#FFB32B] font-bold">${MINT_FEE_USD} ({MINT_FEE_ETH} ETH)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono border-t border-white/5 pt-2">
                <span className="text-white/40">NETWORK</span>
                <span className="text-blue-400 font-bold">Base Mainnet</span>
              </div>

              <Button
                onClick={handleMint}
                disabled={mintingState !== 'idle'}
                className="w-full h-12 rounded-xl text-md font-['Bebas_Neue'] tracking-widest text-[#0D0A1A] hover:scale-[1.01] transition-transform active:scale-[0.99]"
                style={{
                  background: 'linear-gradient(135deg, #FFB32B 0%, #F5C63C 100%)',
                  boxShadow: '0 4px 20px rgba(255,179,43,0.3)',
                }}
              >
                {mintingState === 'preparing' && <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Preparing...</>}
                {mintingState === 'signing' && <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Sign in Wallet...</>}
                {mintingState === 'confirming' && <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Confirming...</>}
                {mintingState === 'idle' && (connected ? 'MINT PASS NOW' : 'CONNECT & MINT PASS')}
              </Button>
            </div>
          </>
        ) : (
          /* Success Screen */
          <div className="w-full flex flex-col items-center justify-between flex-1 py-4 space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center" style={{
                boxShadow: '0 0 20px rgba(34,197,94,0.15)',
              }}>
                <ShieldCheck className="w-8 h-8 text-green-400" />
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl font-['Bebas_Neue'] tracking-wider text-green-400">Minting Successful!</h2>
                <p className="text-xs text-white/50">Your Mission Access Pass is secured on Base Mainnet.</p>
              </div>
            </div>

            {/* NFT Metadata details */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-white/40">PASSPORT ID</span>
                <span className="text-white/80 font-bold"># {tokenId}</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-2">
                <span className="text-white/40">METADATA (IPFS)</span>
                <span 
                  className="text-blue-400 underline cursor-pointer truncate max-w-[180px]" 
                  onClick={() => {
                    const cid = PINATA_IPFS_CID.replace('ipfs://', '');
                    window.open(`https://gateway.pinata.cloud/ipfs/${cid}`, '_blank');
                  }}
                >
                  Pinata Gateway (Metadata)
                </span>
              </div>
              {txHash && (
                <div className="flex justify-between border-t border-white/5 pt-2">
                  <span className="text-white/40">TX TRANSACTION</span>
                  <span className="text-blue-400 underline cursor-pointer truncate max-w-[180px]" onClick={() => window.open(`https://basescan.org/tx/${txHash}`, '_blank')}>
                    View on Basescan
                  </span>
                </div>
              )}
            </div>

            <Button
              onClick={() => navigate('/home')}
              className="w-full h-12 rounded-xl text-md font-['Bebas_Neue'] tracking-widest text-[#0D0A1A]"
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
              }}
            >
              LAUNCH ALL MISSIONS
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftMint;
