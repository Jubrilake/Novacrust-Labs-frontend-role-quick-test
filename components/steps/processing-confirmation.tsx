"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface ProcessingConfirmationProps {
  transactionId: string
  onGoHome: () => void
}

export function ProcessingConfirmation({ transactionId, onGoHome }: ProcessingConfirmationProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(transactionId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="p-8 bg-white shadow-lg text-center">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 bg-[#0F5856] rounded" />
          <span className="text-xl font-bold text-[#0F5856]">NOVACRUST</span>
        </div>
      </div>

      {/* Success icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-white" strokeWidth={3} />
        </div>
      </div>

      {/* Message */}
      <h2 className="text-xl font-semibold text-foreground mb-2">Your transaction is processing.</h2>
      <p className="text-muted-foreground mb-8">The recipient will receive it shortly.</p>

      {/* Transaction ID */}
      <div className="bg-muted/30 rounded-lg p-4 mb-8 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Transaction ID</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{transactionId}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Go back button */}
      <Button variant="link" onClick={onGoHome} className="text-foreground hover:text-foreground/80">
        Go back to home
      </Button>
    </Card>
  )
}
