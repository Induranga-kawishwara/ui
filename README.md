# DENEB UI 🌟

> **Visual-First Commerce Component Library & Headless Storefront Design System**  
> Official Documentation: [deneb.fivora.site](https://deneb.fivora.site)  
> Built for [Fivora](https://fivora.com) Next-Gen Local E-Commerce

---

## What is DENEB UI?

**DENEB UI** is an open-source, enterprise-grade React component library and headless storefront engine built specifically for high-conversion localized e-commerce, small business websites, and instant visual editing.

It bridges the gap between **code-first developers** and **visual website builders**: developers write standard Next.js / React code with DENEB primitives, and non-technical merchants can instantly point, click, and edit any text, image, price, or business hours inside the Fivora Visual Builder.

---

## Features

- ⚡ **31+ Production-Ready Components**: Buttons, Cards, Dialogs, WhatsApp buttons, Hero banners, Product Cards, Business Hours, Navbars, and Footers.
- 🎨 **Dynamic CSS Token Engine (`ThemeStyles`)**: Runtime custom property injector supporting industry presets (Restaurant, Retail, Luxury, Medical).
- 🔄 **Headless Commerce State (`SiteDataProvider`)**: Integrated `useProducts()`, `useServices()`, and live API sync with zero layout shifts.
- 🎯 **Visual Editing Protocol (`data-deneb-*`)**: Built-in 2-way postMessage communication for live Fivora Studio previews.
- 📱 **Mobile-First & Ultra-Responsive**: Designed with touch targets, sticky call-to-actions, and offline resilience.
- 🚀 **100% Static Export Compatible**: Optimized for Next.js `output: 'export'` Jamstack hosting.

---

## Quickstart

### 1. Installation

```bash
npm install @deneb-ui/ui @deneb-ui/core lucide-react
```

### 2. Wrap your Next.js Layout

```tsx
import { SiteDataProvider, ThemeStyles, THEME_PRESETS } from "@deneb-ui/ui";
import siteData from "./data/site.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeStyles theme={THEME_PRESETS.luxury} />
      </head>
      <body>
        <SiteDataProvider initialData={siteData}>
          {children}
        </SiteDataProvider>
      </body>
    </html>
  );
}
```

### 3. Use Commerce Components

```tsx
import { ProductCard, WhatsAppButton, BusinessHours } from "@deneb-ui/ui";

export default function Storefront() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <ProductCard 
        title="Artisan Running Shoe"
        price={129.99}
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        whatsappNumber="+1234567890"
      />
      
      <BusinessHours 
        schedule={[
          { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", isOpen: true },
          { day: "Saturday", hours: "10:00 AM - 4:00 PM", isOpen: true },
          { day: "Sunday", hours: "Closed", isOpen: false },
        ]}
      />
    </main>
  );
}
```

---

## Component Catalog (31 Components)

| Category | Components |
| :--- | :--- |
| **Core Primitives** | `Button`, `Card`, `Badge`, `Typography`, `Dialog`, `Grid`, `Image` |
| **Smart Commerce Actions** | `ContactActions`, `WhatsAppButton`, `PhoneButton`, `EmailButton`, `FloatingContactWidget` |
| **Location & Navigation** | `LocationCard`, `LocationLink`, `MapEmbed`, `Address` |
| **Social & Business** | `BusinessHours`, `SocialLinks`, `SocialButton` |
| **Storefront Sections** | `Hero`, `ProductCard`, `ServiceCard`, `PricingCard`, `TestimonialCard`, `FAQAccordion`, `AnnouncementBar`, `CategoryPills`, `ContactForm`, `Navbar`, `Footer` |
| **Data & Theme Engine** | `SiteDataProvider`, `ThemeStyles` |

👉 **Read the Full Master Guide**: [DENEB_UI_MASTER_GUIDE.md](./DENEB_UI_MASTER_GUIDE.md)  
👉 **Live Component Playground**: [deneb.fivora.site](https://deneb.fivora.site)

---

## Deploying `deneb.fivora.site`

The documentation portal is configured for continuous deployment on **CapRover**:

1. **Build locally**:
   ```bash
   npm run build
   ```
2. **Deploy with CapRover**:
   ```bash
   caprover deploy
   ```
   Or push to the Git remote connected to your CapRover app. The repository includes `captain-definition` and `Dockerfile` for multi-stage standalone Next.js deployment.

---

## License

MIT © [Fivora](https://fivora.com)
