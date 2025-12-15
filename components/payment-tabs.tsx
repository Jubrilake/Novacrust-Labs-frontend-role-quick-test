"use client"

interface PaymentTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function PaymentTabs({ activeTab, onTabChange }: PaymentTabsProps) {
  const tabs = [
    { id: "crypto-to-cash", label: "Crypto to cash" },
    { id: "cash-to-crypto", label: "Cash to crypto" },
    { id: "crypto-to-fiat", label: "Crypto to fiat loan" },
  ]

  return (
    <div className="flex gap-2 p-1 bg-muted/40 rounded-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab.id ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
