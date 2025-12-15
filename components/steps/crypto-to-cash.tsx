"use client";

import { CurrencySelector } from "@/components/currency-selector";
import { PaymentTabs } from "@/components/payment-tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { WalletSelector } from "../wallet-selector";
import { ComingSoon } from "./coming-soon";

interface CryptoToCashProps {
  onConvert: () => void;
}

export function CryptoToCash({ onConvert }: CryptoToCashProps) {
  const [activeTab, setActiveTab] = useState("crypto-to-cash");
  const [youPayAmount, setYouPayAmount] = useState("1.00");
  const [youReceiveAmount, setYouReceiveAmount] = useState("1.00");
  const [youPayCurrency, setYouPayCurrency] = useState("ETH");
  const [youReceiveCurrency, setYouReceiveCurrency] = useState("NGN");
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");
  const [loading, setLoading] = useState(false);

  // Regex to allow numbers with optional decimal
  const handleNumberInput = (value: string, setter: (val: string) => void) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const handleConvert = () => {
    if (!youPayAmount || !youReceiveAmount || !payFrom || !payTo) {
      toast.error("Please fill all fields!", {
        style: { background: "#ff4d4f", color: "#fff" },
        position: "top-right",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onConvert();
      setLoading(false);
      toast.success("Conversion processing!", {
        style: { background: "#10B981", color: "#fff" },
        position: "top-right",
      });
    }, 1500);
  };

  if (activeTab === "cash-to-crypto") {
    return (
      <ComingSoon
        activeTab={activeTab}
        onTabChange={setActiveTab}
        featureName="Cash to Crypto"
      />
    );
  }

  if (activeTab === "crypto-to-fiat") {
    return (
      <ComingSoon
        activeTab={activeTab}
        onTabChange={setActiveTab}
        featureName="Crypto to Fiat Loan"
      />
    );
  }

  return (
    <Card className="p-6 bg-white shadow-lg">
      <PaymentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="space-y-4 mt-6">
        {/* You pay */}
        <div className="bg-transparent rounded-2xl p-4 border border-gray-200">
          <Label className="text-sm text-gray-500">You pay</Label>
          <div className="flex items-center justify-between mt-2">
            <Input
              type="text"
              value={youPayAmount}
              onChange={(e) =>
                handleNumberInput(e.target.value, setYouPayAmount)
              }
              className="border-0 w-28 bg-transparent shadow-none lg:text-2xl text-xl font-semibold p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="0.00"
            />
            <CurrencySelector
              value={youPayCurrency}
              onChange={setYouPayCurrency}
            />
          </div>
        </div>

        {/* You receive */}
        <div className="bg-transparent rounded-2xl p-4 border border-gray-200">
          <Label className="text-sm text-gray-500">You receive</Label>
          <div className="flex items-center justify-between mt-2">
            <Input
              type="text"
              value={youReceiveAmount}
              onChange={(e) =>
                handleNumberInput(e.target.value, setYouReceiveAmount)
              }
              className="border-0 w-28 bg-transparent lg:text-2xl text-xl shadow-none font-semibold p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
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
          <WalletSelector value={payFrom} onChange={setPayFrom} />
        </div>

        {/* Pay to */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Pay to</Label>
          <Select value={payTo} onValueChange={setPayTo}>
            <SelectTrigger className="h-12 w-full rounded-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank-account">Bank Account</SelectItem>
              <SelectItem value="mobile-money">Mobile Money</SelectItem>
              <SelectItem value="cash-pickup">Cash Pickup</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleConvert}
          disabled={loading}
          className={`w-full h-14 text-white text-base font-medium mt-6 rounded-full ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "hover:bg-primary/90 bg-primary"
          }`}
        >
          {loading ? "Processing..." : "Convert now"}
        </Button>
      </div>
    </Card>
  );
}
