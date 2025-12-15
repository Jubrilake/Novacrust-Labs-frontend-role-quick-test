# NovaCrust - Crypto Payment Checkout

A modern, embeddable crypto payment checkout interface built with Next.js and TypeScript. Similar to Stripe Checkout, but designed specifically for cryptocurrency transactions with support for multiple wallets and currencies.

## Features

### Multi-Step Payment Flow

- **Crypto to Cash** - Convert cryptocurrency to fiat currency with real-time exchange rates

### Payment Options

- Multiple cryptocurrency support (ETH, BTC, USDT, BNB)
- Multiple fiat currency support (NGN, USD, ZAR, GBP, CEDIS)
- Searchable currency selector with visual icons
- Real-time currency conversion

### Wallet Integration

- MetaMask wallet support
- Rainbow wallet support
- WalletConnect protocol
- Support for other crypto wallets (Binance, Coinbase, Bybit, etc.)
- Easy wallet connection flow

### User Experience

- Fully responsive design (mobile and desktop)
- Clean, modern UI with professional typography (Outfit font)
- Intuitive tab-based navigation
- Form validation and error handling
- Transaction confirmation with copy-to-clipboard
- Loading states and user feedback

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Component Library**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd crypto-checkout
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   pnpm install

3. Run the development server:
   \`\`\`bash
   pnpm dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
pnpm build
pnpm start

## Project Structure

\`\`\`
crypto-checkout/
├── app/ # Next.js app directory
│ ├── globals.css # Global styles and theme tokens
│ ├── layout.tsx # Root layout with font config
│ └── page.tsx # Main page component
├── components/
│ ├── steps/ # Payment flow steps
│ │ ├── crypto-to-cash.tsx # Main crypto conversion interface
│ │ ├── coming-soon.tsx # Coming soon placeholder
│ │ └── processing-confirmation.tsx # Transaction confirmation
│ ├── currency-selector.tsx # Reusable currency dropdown
│ ├── wallet-selector.tsx # Wallet connection dialog
│ ├── payment-flow.tsx # Main payment flow container
│ ├── payment-tabs.tsx # Tab navigation component
│ └── ui/ # shadcn/ui components
├── lib/
│ └── utils.ts # Utility functions (cn, etc.)
└── public/ # Static assets
├── eth.png # Crypto logos
├── metamask.png.# Wallet logos
└── naira.png # currency
\`\`\`

## Key Components

### CryptoToCash

Main payment interface with currency selectors, wallet selection, and conversion functionality.

\`\`\`tsx
<CryptoToCash onComplete={(data) => console.log(data)} />
\`\`\`

### CurrencySelector

Reusable dropdown component for selecting cryptocurrencies or fiat currencies with search functionality.

\`\`\`tsx
<CurrencySelector 
  type="crypto" 
  value={currency}
  onChange={setCurrency}
/>
\`\`\`

### WalletSelector

Dialog component for connecting crypto wallets with support for multiple providers.

\`\`\`tsx
<WalletSelector 
  open={isOpen}
  onOpenChange={setIsOpen}
  onSelectWallet={handleWallet}
/>
\`\`\`

## Customization

### Adding New Cryptocurrencies

Edit `components/currency-selector.tsx`:

\`\`\`tsx
const cryptoCurrencies = [
{ code: "ETH", name: "Ethereum", icon: "/eth.png" },
{ code: "BTC", name: "Bitcoin", icon: "/bitcoin.png" },
// Add your currency here
]
\`\`\`

### Adding New Wallets

Edit `components/steps/crypto-to-cash.tsx`:

\`\`\`tsx
const wallets = [
{
id: "metamask",
name: "Metamask",
icon: "/metamask.png",
},
{
id: "rainbow",
name: "Rainbow",
icon: "/rainbow.png",
},
// Add your wallet here
]
\`\`\`

### Theme Customization

Modify design tokens in `app/globals.css`:

\`\`\`css
@theme inline {
--color-primary: #013941;
--color-primary-foreground: #ffffff;
/_ Customize other tokens _/
}
\`\`\`

## Form Validation

The form includes validation for:

- Required amount fields
- Valid wallet selection
- Valid payment destination selection
- Numeric input constraints

\`\`\`tsx
import { PaymentFlow } from '@/components/payment-flow'

export default function Checkout() {
return <PaymentFlow />
}
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For issues or questions, please open an issue on GitHub.

---

Built with Next.js 16 and TypeScript. Powered by Vercel.
