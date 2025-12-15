"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { wallets } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface WalletSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function WalletSelector({ value, onChange }: WalletSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedWallet = wallets.find((w) => w.id === value);

  const filteredWallets = wallets.filter(
    (wallet) =>
      wallet.name.toLowerCase().includes(search.toLowerCase()) ||
      wallet.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-12 justify-between border-border rounded-full bg-transparent"
        >
          {selectedWallet ? (
            <span className="flex items-center gap-2">
              <Image
                src={selectedWallet.icon || "/placeholder.svg"}
                alt={selectedWallet.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <span>{selectedWallet.name}</span>
            </span>
          ) : (
            <span className="text-muted-foreground">Select an option</span>
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="start">
        <div className="max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100">
          {filteredWallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => {
                onChange(wallet.id);
                setOpen(false);
                setSearch("");
              }}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
            >
              {" "}
              <Image
                src={wallet.icon || "/placeholder.svg"}
                alt={wallet.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="font-medium text-sm">{wallet.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
