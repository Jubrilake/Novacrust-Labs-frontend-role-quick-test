"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaymentTabs } from "@/components/payment-tabs"
import { CurrencySelector } from "@/components/currency-selector"
import { ComingSoon } from "./coming-soon"
import Image from "next/image"

interface CryptoToCashProps {
  onConvert: () => void
}

export function CryptoToCash({ onConvert }: CryptoToCashProps) {
  const [activeTab, setActiveTab] = useState("crypto-to-cash")
  const [youPayAmount, setYouPayAmount] = useState("1.00")
  const [youReceiveAmount, setYouReceiveAmount] = useState("1.00")
  const [youPayCurrency, setYouPayCurrency] = useState("ETH")
  const [youReceiveCurrency, setYouReceiveCurrency] = useState("NGN")
  const [payFrom, setPayFrom] = useState("")
  const [payTo, setPayTo] = useState("")

  const handleConvert = () => {
    if (!youPayAmount || !youReceiveAmount || !payFrom || !payTo) {
      alert("Please fill in all fields")
      return
    }
    onConvert()
  }

  if (activeTab === "cash-to-crypto") {
    return <ComingSoon activeTab={activeTab} onTabChange={setActiveTab} featureName="Cash to Crypto" />
  }

  if (activeTab === "crypto-to-fiat") {
    return <ComingSoon activeTab={activeTab} onTabChange={setActiveTab} featureName="Crypto to Fiat Loan" />
  }

  return (
    <Card className="p-6 bg-white shadow-lg">
      <PaymentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="space-y-4 mt-6">
        {/* You pay */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">You pay</Label>
          <div className="flex gap-2 items-center">
            <Input
              type="text"
              value={youPayAmount}
              onChange={(e) => setYouPayAmount(e.target.value)}
              className="flex-1 text-2xl font-semibold h-14 border-border"
              placeholder="0.00"
            />
            <CurrencySelector value={youPayCurrency} onChange={setYouPayCurrency} />
          </div>
        </div>

        {/* You receive */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">You receive</Label>
          <div className="flex gap-2 items-center">
            <Input
              type="text"
              value={youReceiveAmount}
              onChange={(e) => setYouReceiveAmount(e.target.value)}
              className="flex-1 text-2xl font-semibold h-14 border-border"
              placeholder="0.00"
            />
            <CurrencySelector
              value={youReceiveCurrency}
              onChange={setYouReceiveCurrency}
              currencies={["NGN", "USD", "EUR", "GBP"]}
            />
          </div>
        </div>

        {/* Pay from */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Pay from</Label>
          <Select value={payFrom} onValueChange={setPayFrom}>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="metamask">
                <div className="flex items-center gap-3">
                  <Image src="/metamask-fox-logo.jpg" alt="Metamask" width={24} height={24} className="rounded" />
                  <span>Metamask</span>
                </div>
              </SelectItem>
              <SelectItem value="rainbow">
                <div className="flex items-center gap-3">
                  <Image
                    src="/rainbow-wallet-colorful-logo.jpg"
                    alt="Rainbow"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span>Rainbow</span>
                </div>
              </SelectItem>
              <SelectItem value="walletconnect">
                <div className="flex items-center gap-3">
                  <Image
                    src="/walletconnect-blue-logo.jpg"
                    alt="WalletConnect"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span>WalletConnect</span>
                </div>
              </SelectItem>
              <SelectItem value="other">
                <div className="flex items-center gap-3">
                  <Image
                    src="/generic-crypto-wallet-icon.jpg"
                    alt="Other Wallets"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span>Other Crypto Wallets</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Pay to */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Pay to</Label>
          <Select value={payTo} onValueChange={setPayTo}>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank-account">Bank Account</SelectItem>
              <SelectItem value="mobile-money">Mobile Money</SelectItem>
              <SelectItem value="cash-pickup">Cash Pickup</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Convert button */}
        <Button
          onClick={handleConvert}
          className="w-full h-14 bg-[#0F5856] hover:bg-[#0d4745] text-white text-base font-medium mt-6"
        >
          Convert now
        </Button>
      </div>
    </Card>
  )
}
