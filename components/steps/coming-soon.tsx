"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaymentTabs } from "@/components/payment-tabs"
import { useState } from "react"

interface ComingSoonProps {
  activeTab: string
  onTabChange: (tab: string) => void
  featureName: string
}

export function ComingSoon({ activeTab, onTabChange, featureName }: ComingSoonProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email")
      return
    }
    alert(`Thank you! We'll notify you at ${email} when ${featureName} is available.`)
    setEmail("")
  }

  return (
    <Card className="p-6 bg-white shadow-lg">
      <PaymentTabs activeTab={activeTab} onTabChange={onTabChange} />

      <div className="flex flex-col items-center justify-center py-16 px-4">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Coming Soon!</h2>
        <p className="text-center text-muted-foreground mb-2">{featureName} is almost here.</p>
        <p className="text-center text-muted-foreground mb-8">
          Enter your email and we'll let you know the moment it's live.
        </p>

        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-14 bg-[#0F5856] hover:bg-[#0d4745] text-white text-base font-medium"
          >
            Update me
          </Button>
        </div>
      </div>
    </Card>
  )
}
