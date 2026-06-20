import { useState } from 'react';
import { Wallet, ChevronDown, Copy, LogOut, RefreshCw, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useWallet } from './WalletProvider';
import { toast } from 'sonner';

export function WalletButton() {
  const { connected, connecting, account, balance, connect, disconnect, refreshBalance } = useWallet();
  const [open, setOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
      toast.success('Wallet connected');
    } catch (error: any) {
      toast.error(error.message || 'Failed to connect wallet');
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    setOpen(false);
    toast.success('Wallet disconnected');
  };

  const copyAddress = () => {
    if (account?.address) {
      navigator.clipboard.writeText(account.address);
      toast.success('Address copied');
    }
  };

  const truncateAddress = (address: string) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  if (!connected) {
    return (
      <button
        onClick={handleConnect}
        disabled={connecting}
        className="h-10 px-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50 text-[12px] font-medium backdrop-blur-md w-full"
      >
        {connecting ? 'Connecting...' : 'Connect Wallet'}
      </button>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="h-10 px-4 rounded-xl border border-white/10 bg-white/5 flex items-center gap-2 text-white hover:bg-white/10 transition-colors text-[12px] font-medium font-mono backdrop-blur-md w-full justify-center">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {truncateAddress(account?.address || '')}
          <ChevronDown size={14} className="text-white/40" />
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-[32px] bg-[#1A1535] border-t-white/10 p-8">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3 text-white text-2xl font-['Bebas_Neue'] tracking-wider">
            <Wallet className="h-6 w-6 text-purple-400" />
            Coinbase Wallet
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40 font-['Space_Mono'] uppercase tracking-widest">Address</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-white/80">{truncateAddress(account?.address || '')}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-white" onClick={copyAddress}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40 font-['Space_Mono'] uppercase tracking-widest">Balance</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#FFB32B]">
                  {balance !== null ? `${balance.toFixed(4)} ETH` : 'Loading...'}
                </span>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/40 hover:text-white" onClick={refreshBalance}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-white/40 font-['Space_Mono'] uppercase tracking-widest">Network</span>
              <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Base</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="justify-start gap-3 h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
              onClick={() => {
                if (account?.address) {
                  window.open(`https://basescan.org/address/${account.address}`, '_blank');
                }
              }}
            >
              <ExternalLink className="h-4 w-4 text-blue-400" />
              <span className="font-['Space_Mono'] text-xs uppercase tracking-widest">View on Basescan</span>
            </Button>

            <Button
              variant="destructive"
              className="justify-start gap-3 h-12 bg-red-500/10 border-red-500/20 text-red-500 hover:bg-red-500/20 rounded-xl"
              onClick={handleDisconnect}
            >
              <LogOut className="h-4 w-4" />
              <span className="font-['Space_Mono'] text-xs uppercase tracking-widest">Disconnect</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
