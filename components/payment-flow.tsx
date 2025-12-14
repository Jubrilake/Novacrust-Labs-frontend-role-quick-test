"use client"

import { useState } from "react"
import { CryptoToCash } from "./steps/crypto-to-cash"
import { ProcessingConfirmation } from "./steps/processing-confirmation"

export type Step = "crypto-to-cash" | "processing"

export function PaymentFlow() {
  const [currentStep, setCurrentStep] = useState<Step>("crypto-to-cash")
  const [transactionId, setTransactionId] = useState("")

  const handleConvert = () => {
    // Generate mock transaction ID
    const mockId = "NC" + Math.floor(Math.random() * 1000000000)
    setTransactionId(mockId)
    setCurrentStep("processing")
  }

  const handleGoHome = () => {
    setCurrentStep("crypto-to-cash")
    setTransactionId("")
  }

  return (
    <div className="w-full max-w-lg">
      {currentStep === "crypto-to-cash" && <CryptoToCash onConvert={handleConvert} />}
      {currentStep === "processing" && <ProcessingConfirmation transactionId={transactionId} onGoHome={handleGoHome} />}
    </div>
  )
}
