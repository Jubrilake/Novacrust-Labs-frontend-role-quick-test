"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"

interface WalletSelectorProps {
  value: string
  onChange: (value: string) => void
}

const wallets = [
  {
    id: "metamask",
    name: "Metamask",
    icon: "🦊",
  },
  {
    id: "rainbow",
    name: "Rainbow",
    icon: "🌈",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "🔵",
  },
  {
    id: "other",
    name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    icon: "💼",
  },
]

export function WalletSelector({ value, onChange }: WalletSelectorProps) {
  const [open, setOpen] = useState(false)

  const selectedWallet = wallets.find((w) => w.id === value)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full h-12 justify-between border-border bg-transparent">
          {selectedWallet ? (
            <span className="flex items-center gap-2">
              <span>{selectedWallet.icon}</span>
              <span>{selectedWallet.name}</span>
            </span>
          ) : (
            <span className="text-muted-foreground">Select an option</span>
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => {
                onChange(wallet.id)
                setOpen(false)
              }}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left rounded-lg border border-border"
            >
              <span className="text-2xl">{wallet.icon}</span>
              <span className="font-medium text-sm">{wallet.name}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
