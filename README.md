# DENEB UI 🌟

<p align="center">
  <a href="https://deneb.fivora.site">
    <img src="https://img.shields.io/badge/DENEB_UI-Documentation_Site-6366F1?style=for-the-badge&labelColor=0f172a" alt="DENEB UI Docs" />
  </a>
</p>

<p align="center">
  <a href="https://deneb.fivora.site"><img src="https://img.shields.io/badge/Live-deneb.fivora.site-818CF8?style=flat-square" alt="Live site" /></a>
  <a href="https://www.npmjs.com/org/deneb-ui"><img src="https://img.shields.io/npm/v/@deneb-ui/ui.svg?style=flat-square&color=6366F1" alt="npm" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-emerald?style=flat-square" alt="MIT" /></a>
</p>

<p align="center">
  <strong>Official documentation, component showcase, and design system for DENEB UI & Fivora.</strong>
</p>

<p align="center">
  <a href="https://deneb.fivora.site/docs/introduction"><strong>Docs Portal</strong></a> ·
  <a href="https://github.com/deneb-ui/core"><strong>Core Repo</strong></a> ·
  <a href="https://www.npmjs.com/org/deneb-ui"><strong>npm Packages</strong></a> ·
  <a href="./DENEB_UI_MASTER_GUIDE.md"><strong>Master Guide</strong></a>
</p>

---

## About

This repository powers **[deneb.fivora.site](https://deneb.fivora.site)** — the developer documentation portal for:

- **@deneb-ui/ui** — Visual-first React component library & headless commerce hooks
- **@deneb-ui/core** — Style engine, token resolver, CSS variables, and validation
- **@deneb-ui/cli** — Storefront authoring CLI (Deneb ARC)
- **@deneb-ui/create-template** — Project scaffolder

Package source lives in **[github.com/deneb-ui/core](https://github.com/deneb-ui/core)**.

---

## Features

- ⚡ **39+ Production-Ready Components**: Primitives, WhatsApp commerce, Cart Drawer, Filter Sidebar, Product Grids, QuickView, Dynamic Business Hours, Hero banners, and Navigation.
- 🎨 **Dynamic CSS Token Engine (`ThemeStyles`)**: Runtime custom property injector supporting industry presets (Restaurant, Retail, Luxury, Medical).
- 🔄 **Headless Commerce State (`SiteDataProvider`)**: Integrated `useProducts()`, `useServices()`, `useCart()`, and live API sync with zero layout shifts.
- 🎯 **Visual Editing Protocol (`data-deneb-*`)**: Built-in 2-way postMessage communication for live Fivora Studio previews.
- 📱 **Mobile-First & Ultra-Responsive**: Designed with touch targets, sticky call-to-actions, and offline resilience.
- 🚀 **100% Static Export Compatible**: Optimized for Next.js `output: 'export'` Jamstack hosting.

---

## Local Development

```bash
npm install
npm run dev        # Starts local docs dev server on http://localhost:3000
npm run sync:core  # Sync components from ../core/packages/deneb-ui
npm run build      # Production standalone build for CapRover (deneb.fivora.site)
```

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

## Component Catalog (39 Components)

| Category | Components |
| :--- | :--- |
| **Core Primitives** | `Button`, `Card`, `Badge`, `Typography`, `Dialog`, `Grid`, `Image` |
| **Smart Commerce Actions** | `ContactActions`, `WhatsAppButton`, `PhoneButton`, `EmailButton`, `FloatingContactWidget` |
| **Location & Navigation** | `LocationCard`, `LocationLink`, `MapEmbed`, `Address` |
| **Social & Business** | `BusinessHours`, `SocialLinks`, `SocialButton` |
| **Storefront Sections** | `Hero`, `ProductCard`, `ServiceCard`, `PricingCard`, `TestimonialCard`, `FAQAccordion`, `AnnouncementBar`, `CategoryPills`, `ContactForm`, `Navbar`, `Footer` |
| **E-Commerce Extensions** | `CartDrawer`, `FilterSidebar`, `ProductDetail`, `ProductQuickView`, `ProductGrid`, `CustomerReviews`, `TrustBadges`, `StickyMobileBar` |
| **Data & Theme Engine** | `SiteDataProvider`, `ThemeStyles` |

👉 **Read the Full Master Guide**: [DENEB_UI_MASTER_GUIDE.md](./DENEB_UI_MASTER_GUIDE.md)  
👉 **Live Component Playground**: [deneb.fivora.site](https://deneb.fivora.site)

---

## Documentation Sections

| Section | Path |
| :--- | :--- |
| Introduction | `/docs/introduction` |
| Installation & CLI init | `/docs/installation` |
| Responsive design | `/docs/responsive-design` |
| Theming & tokens | `/docs/theming` |
| CLI reference | `/docs/cli` |
| Storefront Scaffolding | `/docs/templates` |
| Setup on Fivora | `/docs/setup-fivora` |
| Component catalog | `/docs/components/*` |

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

## Authors

**[Chamika Gayashan](https://github.com/chamikathereal)** · **[Induranga Kawishwara](https://github.com/Induranga-kawishwara)**

<p align="center">
  <sub>MIT © DENEB UI</sub>
</p>
