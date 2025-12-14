"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search } from "lucide-react"

interface CurrencySelectorProps {
  value: string
  onChange: (value: string) => void
  currencies?: string[]
}

const cryptoCurrencies = [
  { code: "ETH", name: "Ethereum", icon: "/ethereum-logo.jpg" },
  { code: "BTC", name: "Bitcoin", icon: "/bitcoin-logo.jpg" },
  { code: "USDT", name: "Tether", icon: "/tether-logo.jpg" },
  { code: "BNB", name: "Binance Coin", icon: "/binance-logo.jpg" },
]

const fiatCurrencies = [
  { code: "NGN", name: "Nigerian Naira", icon: "/nigeria-flag.jpg" },
  { code: "USD", name: "US Dollar", icon: "/usa-flag.jpg" },
  { code: "EUR", name: "Euro", icon: "/euro-flag.jpg" },
  { code: "GBP", name: "British Pound", icon: "/uk-flag.jpg" },
]

export function CurrencySelector({ value, onChange, currencies }: CurrencySelectorProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const isCrypto = !currencies
  const currencyList = isCrypto ? cryptoCurrencies : fiatCurrencies

  const filteredCurrencies = currencyList.filter(
    (currency) =>
      currency.code.toLowerCase().includes(search.toLowerCase()) ||
      currency.name.toLowerCase().includes(search.toLowerCase()),
  )

  const selectedCurrency = currencyList.find((c) => c.code === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-14 px-4 gap-2 min-w-[120px] justify-between border-border bg-transparent"
        >
          <span className="flex items-center gap-2">
            {selectedCurrency?.icon && (
              <Image
                src={selectedCurrency.icon || "/placeholder.svg"}
                alt={selectedCurrency.name}
                width={24}
                height={24}
                className="object-contain"
              />
            )}
            <span className="font-semibold">{value}</span>
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="end">
        <div className="p-3 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {filteredCurrencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                onChange(currency.code)
                setOpen(false)
                setSearch("")
              }}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
            >
              <Image
                src={currency.icon || "/placeholder.svg"}
                alt={currency.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{currency.code}</div>
                <div className="text-xs text-muted-foreground">{currency.name}</div>
              </div>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
