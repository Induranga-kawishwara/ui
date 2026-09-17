# DENEB UI 🌟

<p align="center">
  <a href="https://deneb.fivora.site">
    <img src="https://img.shields.io/badge/DENEB_UI-Documentation_Site-6366F1?style=for-the-badge&labelColor=0f172a" alt="DENEB UI Docs" />
  </a>
</p>

<p align="center">
  <a href="https://deneb.fivora.site"><img src="https://img.shields.io/badge/Live-deneb.fivora.site-818CF8?style=flat-square" alt="Live site" /></a>
  <a href="https://www.npmjs.com/org/deneb-ui"><img src="https://img.shields.io/npm/v/@deneb-ui/ui.svg?style=flat-square&color=6366F1" alt="npm" /></a>
  <img src="https://img.shields.io/badge/Next.js-14%20%7C%2015%20%7C%2016-000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18%20%7C%2019-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-emerald?style=flat-square" alt="MIT" /></a>
</p>

<p align="center">
  <strong>The definitive visual-first UI component library, theme engine, and visual editing platform for modern Next.js storefronts on Fivora.</strong>
</p>

<p align="center">
  <a href="https://deneb.fivora.site/docs/introduction"><strong>Docs Portal</strong></a> ·
  <a href="https://deneb.fivora.site/docs/setup-fivora"><strong>Setup Fivora</strong></a> ·
  <a href="https://deneb.fivora.site/docs/components/button"><strong>Component Catalog</strong></a> ·
  <a href="./DENEB_UI_MASTER_GUIDE.md"><strong>AI Master Guide</strong></a> ·
  <a href="https://www.npmjs.com/org/deneb-ui"><strong>npm Packages</strong></a>
</p>

---

## Table of Contents

1. [About DENEB UI](#about-deneb-ui)
2. [Core Packages](#core-packages)
3. [Installation & Setup](#installation--setup)
4. [Core Architecture & Mandatory Files](#core-architecture--mandatory-files)
   - [`package.json`](#41-packagejson)
   - [`next.config.ts` (Static Export)](#42-nextconfigts-static-export-configuration)
   - [`fivora-template.json` (Template Manifest v2)](#43-fivora-templatejson-template-manifest-v2)
   - [`src/data/site-data.json` (Single Source of Truth)](#44-srcdatasite-datajson-single-source-of-truth)
   - [`src/app/layout.tsx` (Root Layout)](#45-root-layout-setupsrcapplayouttsx)
5. [Visual Editing Engine (`data-preview-*`)](#visual-editing-engine-data-preview-)
6. [Master Component Catalog (All 43 Components)](#master-component-catalog-all-40-components)
   - [Core Primitives (7)](#core-primitives)
   - [Smart Commerce Actions (5)](#smart-commerce-actions)
   - [Location & Navigation (4)](#location--navigation)
   - [Social & Business (3)](#social--business)
   - [Storefront Sections & Catalog (19)](#storefront-sections--catalog)
   - [Data & Theme Engine (2)](#data--theme-engine)
7. [Complete Storefront Implementation Examples](#complete-storefront-implementation-examples)
   - [Main Storefront Page (`src/app/page.tsx`)](#71-main-storefront-page-srcapppagetsx)
   - [Stable Live Product Route (`src/app/products/detail/page.tsx`)](#72-stable-live-product-route-srcappproductsdetailpagetsx)
8. [CLI Tooling & Validation Workflow](#cli-tooling--validation-workflow)
9. [Local Development](#local-development)
10. [Authors & License](#authors--license)

---

## About DENEB UI

**DENEB UI** is an enterprise-grade, visual-first component ecosystem designed specifically for the **Fivora** commerce platform. It enables frontend developers and agencies to build stunning, lightning-fast static Next.js storefronts that seamlessly embed inside the Fivora Merchant Studio.

When a merchant views your storefront inside Fivora:
- They can click directly on headlines, paragraphs, banners, and product cards to edit copy and photos in real time.
- Fivora communicates bidirectional updates via a secure `postMessage` protocol.
- The storefront renders instantly without server restarts using the `@deneb-ui/ui` state engine.
- Templates compile into 100% pure static HTML/JS/CSS bundles (`output: "export"`) deployable to any Jamstack CDN.

---

## Core Packages

| Package | Purpose | Version |
| :--- | :--- | :--- |
| [`@deneb-ui/ui`](https://www.npmjs.com/package/@deneb-ui/ui) | Production commerce components, state providers, and hooks | `latest` |
| [`@deneb-ui/core`](https://www.npmjs.com/package/@deneb-ui/core) | CSS token injection, variable resolver, theme presets, schemas | `latest` |
| [`@deneb-ui/cli`](https://www.npmjs.com/package/@deneb-ui/cli) | Local visual preview simulator (`lab`), preflight validator (`validate`), zip packaging | `latest` |

---

## Installation & Setup

### 1. Install Dependencies

Install the core packages and peer dependencies in your Next.js App Router project:

```bash
npm install @deneb-ui/ui @deneb-ui/core lucide-react
npm install -D @deneb-ui/cli tailwindcss postcss autoprefixer typescript
```

Or using Yarn / PNPM / Bun:

```bash
# Yarn
yarn add @deneb-ui/ui @deneb-ui/core lucide-react
yarn add -D @deneb-ui/cli tailwindcss postcss autoprefixer typescript

# PNPM
pnpm add @deneb-ui/ui @deneb-ui/core lucide-react
pnpm add -D @deneb-ui/cli tailwindcss postcss autoprefixer typescript

# Bun
bun add @deneb-ui/ui @deneb-ui/core lucide-react
bun add -d @deneb-ui/cli tailwindcss postcss autoprefixer typescript
```

### 2. Configure Tailwind CSS (`tailwind.config.ts`)

Ensure Tailwind scans both your application files and the `@deneb-ui/ui` package node_modules:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@deneb-ui/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #6366F1)",
        background: "var(--color-background, #090D1A)",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Core Architecture & Mandatory Files

Every Fivora storefront template requires four core configuration files in addition to standard Next.js files:

### 4.1 `package.json`
```json
{
  "name": "fivora-storefront-template",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lab": "deneb lab .",
    "validate": "deneb validate .",
    "validate-and-zip": "deneb validate-and-zip .",
    "zip": "deneb zip ."
  },
  "dependencies": {
    "@deneb-ui/ui": "latest",
    "@deneb-ui/core": "latest",
    "lucide-react": "^1.0.0",
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@deneb-ui/cli": "latest",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

### 4.2 `next.config.ts` (Static Export Configuration)
Fivora requires pure static export (`output: "export"`) with unoptimized images and trailing slashes:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
```

### 4.3 `fivora-template.json` (Template Manifest v2)
The manifest defines the template metadata, visual editing mode, and customizable theme tokens:
```json
{
  "manifestVersion": 2,
  "id": "template-artisan-boutique",
  "name": "Artisan Boutique Storefront",
  "version": "2.0.0",
  "category": "retail",
  "listingTier": "premium",
  "author": "Your Studio Name",
  "visualEditing": {
    "contractVersion": 1,
    "mode": "strict"
  },
  "themeSchema": {
    "tokens": [
      { "key": "primaryColor", "type": "color", "label": "Primary Accent", "default": "#6366F1" },
      { "key": "backgroundColor", "type": "color", "label": "Background", "default": "#090D1A" },
      { "key": "fontFamily", "type": "font", "label": "Heading Font", "default": "Inter" }
    ],
    "defaults": {
      "primaryColor": "#6366F1",
      "backgroundColor": "#090D1A"
    }
  },
  "pages": [
    { "key": "home", "title": "Storefront", "route": "/" },
    { "key": "catalog", "title": "Products", "route": "/#products" }
  ]
}
```

### 4.4 `src/data/site-data.json` (Single Source of Truth)
All dynamic business details, hero text, products, and contact info must be stored in `src/data/site-data.json`:
```json
{
  "project": { "id": "demo-store", "slug": "demo-store", "title": "Artisan Footwear" },
  "shop": {
    "name": "Artisan Footwear",
    "tagline": "Handcrafted Daily Distinction",
    "whatsapp": "+15550192834",
    "phone": "+15550192834",
    "email": "concierge@artisanfootwear.com",
    "address": "452 Broadway Avenue, New York, NY"
  },
  "content": {
    "hero": {
      "badge": "Spring 2026",
      "title": "Bespoke Footwear Engineered for Distinction",
      "subtitle": "Handcrafted micro-batch leather shoes with active cushioning.",
      "primaryCta": "Shop Collection",
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    "products": [
      {
        "id": "vanta-runner",
        "title": "Vanta Velocity Sneaker",
        "price": 149.99,
        "compareAtPrice": 189.99,
        "currency": "$",
        "category": "Running",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "rating": 4.9,
        "reviewsCount": 38,
        "inStock": true,
        "description": "Featherweight engineered mesh with adaptive dual-density foam."
      }
    ],
    "businessHours": [
      { "day": "Monday - Friday", "hours": "9:00 AM - 7:00 PM", "isOpen": true },
      { "day": "Saturday", "hours": "10:00 AM - 5:00 PM", "isOpen": true },
      { "day": "Sunday", "hours": "Closed", "isOpen": false }
    ]
  },
  "theme": {
    "primary": "#6366F1",
    "primaryGlow": "rgba(99, 102, 241, 0.4)",
    "background": "#090D1A",
    "cardBackground": "#0E1220",
    "border": "#1E2438",
    "text": "#F8FAFC",
    "textMuted": "#94A3B8"
  }
}
```

### 4.5 Root Layout Setup (`src/app/layout.tsx`)
Wrap the entire storefront inside `<SiteDataProvider>` and `<CartProvider>`:
```tsx
import "./globals.css";
import { SiteDataProvider, ThemeStyles, CartProvider, THEME_PRESETS } from "@deneb-ui/ui";
import initialSiteData from "@/data/site-data.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const activeTheme = initialSiteData.theme || THEME_PRESETS.luxury;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Injects CSS variables and responsive base rules before page paint */}
        <ThemeStyles theme={activeTheme} />
      </head>
      <body className="bg-[var(--page-background)] text-[var(--page-text)] antialiased min-h-screen">
        <SiteDataProvider initialData={initialSiteData}>
          <CartProvider>
            {children}
          </CartProvider>
        </SiteDataProvider>
      </body>
    </html>
  );
}
```

---

## Visual Editing Engine (`data-preview-*`)

The Fivora Merchant Studio automatically enables inline visual editing by inspecting elements tagged with `data-preview-*` attributes:

1. **Leaf Elements Only**:
   - `data-preview-field-path` and `data-preview-image-path` MUST only be attached to leaf visual tags: `<h1>-<h6>`, `<p>`, `<span>`, `<a>`, `<button>`, `<img>`.
   - **NEVER** place field markers on `<div>`, `<section>`, `<article>`, `<main>`, or `<ul>`.
2. **Never Beneath Static Ancestors**:
   - Elements marked with `data-preview-static` declare their entire subtree non-editable.
   - **NEVER** place `data-preview-field-path` inside a container marked with `data-preview-static`.
3. **Repeated Lists & Loops**:
   - List wrapper: `data-preview-list-path="home.products"`
   - Iterated item container: `data-preview-item-path={`home.products.${index}`}`
   - Leaf value inside item: `data-preview-field-path={`home.products.${index}.title`}`
4. **Defensive Defaults**:
   - Always use nullish coalescing (`??`) rather than `||` for text values: `content?.hero?.title ?? "Fallback"`
   - Always default arrays: `const products = content?.products ?? [];` so testing probes never trigger `Cannot read properties of undefined (reading 'map')`.

---

## Master Component Catalog (All 43 Components)

Every single component below is imported directly from `@deneb-ui/ui`:

### Core Primitives

#### 1. `Button`

**Import**: `import { Button } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: An interactive button primitive with celestial glows, glassmorphic variants, loading states, and visual editing support.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' | 'glow' | 'secondary' | 'outline' | 'ghost'` | `'default'` | The visual styling variant of the button. |
| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Controls button padding, font size, and height. |
| `disabled` | `boolean` | `false` | Whether the button is interactable. |
| `onClick` | `() => void` | `-` | Click event handler. |
| `className` | `string` | `''` | Additional Tailwind or CSS class names. |

##### Copy-Paste Usage Example
```tsx
import { Button } from "@deneb-ui/ui";
import { ArrowRight, ShoppingBag } from "lucide-react";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="glow" size="lg" onClick={() => console.log('Order initiated')}>
        <ShoppingBag className="w-5 h-5 mr-2" />
        Order Now
      </Button>
      <Button variant="outline" size="lg">
        Explore Catalog
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
```

#### 2. `Card`

**Import**: `import { Card } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: A versatile container card with obsidian glass styling, luminous borders, and structured content slots.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' | 'glass' | 'glow' | 'outline'` | `'default'` | Visual surface treatment with obsidian and luminous borders. |
| `padding` | `'sm' | 'md' | 'lg' | 'none'` | `'md'` | Internal padding of the card container. |
| `hoverEffect` | `boolean` | `true` | Enable celestial border illumination on hover. |
| `className` | `string` | `''` | Additional Tailwind utility classes. |

##### Copy-Paste Usage Example
```tsx
import { Card } from "@deneb-ui/ui";
import { Sparkles } from "lucide-react";

export function FeatureCard() {
  return (
    <Card variant="glass" padding="lg" hoverEffect className="space-y-4">
      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
        <Sparkles className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white">Mastercrafted Durability</h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        Full-grain Italian calfskin with Goodyear-welted construction engineered for decades of wear.
      </p>
    </Card>
  );
}
```

#### 3. `Badge`

**Import**: `import { Badge } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: Status indicator tags with celestial starlight glows, pulsing dots, and color tiers.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' | 'glow' | 'outline' | 'success' | 'warning'` | `'default'` | Color and glow palette of the tag. |
| `size` | `'sm' | 'md'` | `'md'` | Padding and typography size. |
| `pulse` | `boolean` | `false` | Renders an animated glowing pulse dot. |
| `children` | `React.ReactNode` | `required` | Tag text or element content. |

##### Copy-Paste Usage Example
```tsx
import { Badge } from "@deneb-ui/ui";

export function ProductBadges() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="glow" pulse>In Stock</Badge>
      <Badge variant="warning">-25% OFF</Badge>
      <Badge variant="outline">Handmade</Badge>
    </div>
  );
}
```

#### 4. `Typography`

**Import**: `import { Typography } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: Semantic text primitives (Heading, Paragraph, Text) connected directly to Fivora theme font tokens and visual click-to-edit markers.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `level` | `1 | 2 | 3 | 4 | 5 | 6` | `1` | Heading hierarchy level (h1-h6). |
| `data-preview-field-path` | `string` | `-` | Click-to-edit path binding (e.g. 'home.title'). |
| `className` | `string` | `''` | Tailwind styling classes. |

##### Copy-Paste Usage Example
```tsx
import { Heading, Paragraph, Text } from "@deneb-ui/ui";

export function SectionHeader({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <div className="text-center space-y-3">
      <Text className="text-xs uppercase font-bold tracking-widest text-indigo-400">
        Artisanal Heritage
      </Text>
      <Heading level={2} data-preview-field-path="home.catalogTitle" className="text-3xl font-extrabold text-white">
        {title ?? "Bespoke Collection"}
      </Heading>
      <Paragraph data-preview-field-path="home.catalogSubtitle" className="text-sm text-slate-400 max-w-xl mx-auto">
        {subtitle ?? "Each pair is individually numbered and conditioned before leaving our workshop."}
      </Paragraph>
    </div>
  );
}
```

#### 5. `Dialog`

**Import**: `import { Dialog } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: Accessible modal dialog with backdrop blur, keyboard ESC dismissal, sizing tiers, and live visual editing.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Controls dialog visibility. |
| `onClose` | `() => void` | `required` | Callback when user closes dialog or clicks backdrop. |
| `title` | `string` | `''` | Dialog header title. |
| `size` | `'sm' | 'md' | 'lg' | 'xl'` | `'md'` | Modal width tier. |

##### Copy-Paste Usage Example
```tsx
import { Dialog, Button } from "@deneb-ui/ui";
import { useState } from "react";

export function SizeGuideModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        View Size Chart
      </Button>
      <Dialog isOpen={open} onClose={() => setOpen(false)} title="Footwear Sizing Guide" size="md">
        <div className="space-y-4 text-sm text-slate-300">
          <p>Our shoes fit true to European standards. If between sizes, choose the smaller size.</p>
          <table className="w-full text-left text-xs border border-slate-800">
            <thead><tr className="bg-slate-900"><th className="p-2">EU</th><th className="p-2">US</th><th className="p-2">CM</th></tr></thead>
            <tbody>
              <tr className="border-t border-slate-800"><td className="p-2">41</td><td className="p-2">8.0</td><td className="p-2">26.5</td></tr>
              <tr className="border-t border-slate-800"><td className="p-2">42</td><td className="p-2">9.0</td><td className="p-2">27.0</td></tr>
              <tr className="border-t border-slate-800"><td className="p-2">43</td><td className="p-2">10.0</td><td className="p-2">28.0</td></tr>
            </tbody>
          </table>
        </div>
      </Dialog>
    </>
  );
}
```

#### 6. `Grid`

**Import**: `import { Grid } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: Layout containers featuring auto-balancing columns, responsive device breakpoints, and flex alignment.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cols` | `1 | 2 | 3 | 4` | `3` | Number of columns on desktop viewports. |
| `gap` | `'sm' | 'md' | 'lg'` | `'md'` | Spacing between grid cells. |
| `children` | `React.ReactNode` | `required` | Grid child elements. |

##### Copy-Paste Usage Example
```tsx
import { Grid, Card } from "@deneb-ui/ui";

export function FeaturesSection() {
  return (
    <Grid cols={3} gap="lg" className="max-w-7xl mx-auto px-4 py-12">
      <Card variant="glass" padding="md"><h4>Italian Leather</h4></Card>
      <Card variant="glass" padding="md"><h4>Goodyear Welt</h4></Card>
      <Card variant="glass" padding="md"><h4>Free Returns</h4></Card>
    </Grid>
  );
}
```

#### 7. `Image`

**Import**: `import { Image } from "@deneb-ui/ui";`  
**Category**: `Core Primitives`  
**Description**: Responsive storefront image component supporting preset aspect ratios, border radii, zoom hover, and visual editing upload triggers.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | `string` | `required` | Image source URL. |
| `alt` | `string` | `''` | Accessibility alternative text. |
| `aspectRatio` | `'square' | '16/9' | '4/3' | 'portrait'` | `'auto'` | Fixed aspect ratio container. |
| `radius` | `'sm' | 'md' | 'lg' | 'xl' | 'full'` | `'md'` | Border radius curvature. |
| `fieldPath` | `string` | `''` | Visual click-to-edit path for image replacement. |

##### Copy-Paste Usage Example
```tsx
import { Image } from "@deneb-ui/ui";

export function ShowcaseImage({ url, path }: { url: string; path?: string }) {
  return (
    <Image
      src={url ?? "https://images.unsplash.com/photo-1542291026-7eec264c27ff"}
      alt="Hero Sneaker"
      aspectRatio="16/9"
      radius="xl"
      fieldPath={path ?? "home.hero.image"}
      className="shadow-2xl border border-slate-800"
    />
  );
}
```

### Smart Commerce Actions

#### 8. `ContactActions`

**Import**: `import { ContactActions } from "@deneb-ui/ui";`  
**Category**: `Smart Commerce Actions`  
**Description**: Multi-channel instant commerce action bar providing 1-tap WhatsApp, phone call, email, and Google Maps routing.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `whatsapp` | `string` | `''` | Target international WhatsApp number (digits only). |
| `phone` | `string` | `''` | Telephone number for direct dialing. |
| `email` | `string` | `''` | Inquiry recipient email address. |
| `address` | `string` | `''` | Physical street address for map routing. |
| `variant` | `'compact' | 'expanded' | 'minimal'` | `'expanded'` | Action bar visual layout style. |
| `orientation` | `'horizontal' | 'vertical'` | `'horizontal'` | Arrangement axis. |

##### Copy-Paste Usage Example
```tsx
import { ContactActions, useSiteData } from "@deneb-ui/ui";

export function StoreContactBar() {
  const siteData = useSiteData();
  const shop = siteData?.shop;
  return (
    <div className="p-6 rounded-2xl bg-[#0E1220] border border-slate-800 space-y-3">
      <h3 className="text-lg font-bold text-white">Instant Concierge Support</h3>
      <ContactActions
        whatsapp={shop?.whatsapp}
        phone={shop?.phone}
        email={shop?.email}
        address={shop?.address?.street}
        variant="expanded"
        orientation="horizontal"
      />
    </div>
  );
}
```

#### 9. `WhatsAppButton`

**Import**: `import { WhatsAppButton } from "@deneb-ui/ui";`  
**Category**: `Smart Commerce Actions`  
**Description**: High-converting WhatsApp conversion launcher with pre-filled order or inquiry message templates.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phoneNumber` | `string` | `required` | E.164 formatted telephone number without plus. |
| `message` | `string` | `''` | Pre-filled WhatsApp message text. |
| `variant` | `'solid' | 'outline' | 'floating'` | `'solid'` | Button visual variant. |
| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Button sizing tier. |
| `label` | `string` | `'Chat on WhatsApp'` | Action text. |

##### Copy-Paste Usage Example
```tsx
import { WhatsAppButton, useSiteData } from "@deneb-ui/ui";

export function InstantProductOrder({ title, price }: { title: string; price: number }) {
  const siteData = useSiteData();
  return (
    <WhatsAppButton
      phoneNumber={siteData?.shop?.whatsapp ?? "94771234567"}
      message={`Hi! I would like to order the ${title} (Rs. ${price}). Is it currently available?`}
      variant="solid"
      size="lg"
      label="Order via WhatsApp"
    />
  );
}
```

#### 10. `PhoneButton`

**Import**: `import { PhoneButton } from "@deneb-ui/ui";`  
**Category**: `Smart Commerce Actions`  
**Description**: One-tap telephone dialer with international number formatting.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phoneNumber` | `string` | `required` | Telephone number to dial. |
| `label` | `string` | `'Call Now'` | Button label text. |
| `variant` | `'solid' | 'outline' | 'minimal'` | `'solid'` | Button style. |

##### Copy-Paste Usage Example
```tsx
import { PhoneButton } from "@deneb-ui/ui";

export function TelephoneSupport({ phone }: { phone: string }) {
  return <PhoneButton phoneNumber={phone} label="Call Atelier: +94 11 234 5678" variant="outline" size="md" />;
}
```

#### 11. `EmailButton`

**Import**: `import { EmailButton } from "@deneb-ui/ui";`  
**Category**: `Smart Commerce Actions`  
**Description**: Pre-filled mailto trigger with automatic subject and body encoding.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `email` | `string` | `required` | Inquiry recipient email address. |
| `subject` | `string` | `''` | Pre-filled email subject line. |
| `label` | `string` | `'Email Us'` | Button label text. |

##### Copy-Paste Usage Example
```tsx
import { EmailButton } from "@deneb-ui/ui";

export function EmailConcierge({ email }: { email: string }) {
  return (
    <EmailButton
      email={email}
      subject="Bespoke Order Inquiry - Artisan Store"
      label="Send Email Inquiry"
      variant="outline"
    />
  );
}
```

#### 12. `FloatingContactWidget`

**Import**: `import { FloatingContactWidget } from "@deneb-ui/ui";`  
**Category**: `Smart Commerce Actions`  
**Description**: Corner-docked interactive drawer presenting WhatsApp, Call, and Email triggers with zero layout shift.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `whatsapp` | `string` | `''` | WhatsApp contact number. |
| `phone` | `string` | `''` | Direct phone number. |
| `email` | `string` | `''` | Support email address. |
| `position` | `'bottom-right' | 'bottom-left'` | `'bottom-right'` | Screen docking corner. |
| `storeName` | `string` | `'Store Concierge'` | Title displayed on the widget popover. |

##### Copy-Paste Usage Example
```tsx
import { FloatingContactWidget, useSiteData } from "@deneb-ui/ui";

export function GlobalSupportWidget() {
  const siteData = useSiteData();
  return (
    <FloatingContactWidget
      whatsapp={siteData?.shop?.whatsapp}
      phone={siteData?.shop?.phone}
      email={siteData?.shop?.email}
      position="bottom-right"
      storeName={siteData?.shop?.name ?? "Artisan Footwear"}
    />
  );
}
```

### Location & Navigation

#### 13. `LocationCard`

**Import**: `import { LocationCard } from "@deneb-ui/ui";`  
**Category**: `Location & Navigation`  
**Description**: Flagship store address, city, hours, and direct directions button.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `'Flagship Store'` | Location name. |
| `address` | `string` | `required` | Street address. |
| `city` | `string` | `''` | City or province name. |
| `googleMapsUrl` | `string` | `''` | Direct Google Maps URL. |
| `hours` | `string` | `''` | Operating hours summary. |

##### Copy-Paste Usage Example
```tsx
import { LocationCard } from "@deneb-ui/ui";

export function StoreAddressCard() {
  return (
    <LocationCard
      title="Colombo Flagship Store"
      address="42 Heritage Boulevard, Ward Place"
      city="Colombo 07, Sri Lanka"
      hours="Mon - Sat: 9:00 AM - 7:00 PM"
      googleMapsUrl="https://maps.google.com/?q=Colombo"
    />
  );
}
```

#### 14. `LocationLink`

**Import**: `import { LocationLink } from "@deneb-ui/ui";`  
**Category**: `Location & Navigation`  
**Description**: Smart directions link opening Google Maps or Apple Maps.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `address` | `string` | `required` | Target destination address. |
| `provider` | `'google' | 'apple'` | `'google'` | Map provider. |
| `label` | `string` | `'Get Directions'` | Link text. |

##### Copy-Paste Usage Example
```tsx
import { LocationLink } from "@deneb-ui/ui";

export function MapDirectionsButton({ address }: { address: string }) {
  return <LocationLink address={address} provider="google" label="Open Google Maps ↗" />;
}
```

#### 15. `MapEmbed`

**Import**: `import { MapEmbed } from "@deneb-ui/ui";`  
**Category**: `Location & Navigation`  
**Description**: Responsive map iframe embed with rounded corners and zero layout shift.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `address` | `string` | `required` | Address string to center map. |
| `height` | `string | number` | `'350px'` | Height of map container. |
| `zoom` | `number` | `15` | Default map zoom level. |
| `aspectRatio` | `string` | `'16/9'` | Aspect ratio. |

##### Copy-Paste Usage Example
```tsx
import { MapEmbed } from "@deneb-ui/ui";

export function EmbeddedMapSection({ address }: { address: string }) {
  return <MapEmbed address={address} height={350} zoom={15} aspectRatio="16/9" />;
}
```

#### 16. `Address`

**Import**: `import { Address } from "@deneb-ui/ui";`  
**Category**: `Location & Navigation`  
**Description**: Local SEO Schema.org microdata address formatter.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `street` | `string` | `required` | Street name and number. |
| `city` | `string` | `required` | City or town. |
| `region` | `string` | `''` | State or province. |
| `postalCode` | `string` | `''` | Postal code. |
| `country` | `string` | `''` | Country name. |

##### Copy-Paste Usage Example
```tsx
import { Address, useSiteData } from "@deneb-ui/ui";

export function StructuredAddress() {
  const siteData = useSiteData();
  const a = siteData?.shop?.address;
  return (
    <Address
      street={a?.street ?? "42 Heritage Blvd"}
      city={a?.city ?? "Colombo"}
      region={a?.region ?? "Western Province"}
      postalCode={a?.postalCode ?? "00700"}
      country={a?.country ?? "Sri Lanka"}
    />
  );
}
```

### Social & Business

#### 17. `BusinessHours`

**Import**: `import { BusinessHours } from "@deneb-ui/ui";`  
**Category**: `Social & Business`  
**Description**: Live open/closed timetable with real-time open status indicators.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `schedule` | `Array<{ day: string; open: string; close: string }>` | `[]` | Weekly operating schedule. |
| `showStatus` | `boolean` | `true` | Show live 'Open Now' or 'Closed' tag. |
| `variant` | `'card' | 'list' | 'compact'` | `'card'` | Display format. |

##### Copy-Paste Usage Example
```tsx
import { BusinessHours, useSiteData } from "@deneb-ui/ui";

export function StoreHoursDisplay() {
  const siteData = useSiteData();
  return (
    <BusinessHours
      schedule={siteData?.content?.businessHours ?? [
        { day: "Monday - Friday", open: "09:00 AM", close: "07:00 PM" },
        { day: "Saturday", open: "10:00 AM", close: "05:00 PM" },
        { day: "Sunday", open: "Closed", close: "" }
      ]}
      showStatus={true}
      variant="card"
    />
  );
}
```

#### 18. `SocialLinks`

**Import**: `import { SocialLinks } from "@deneb-ui/ui";`  
**Category**: `Social & Business`  
**Description**: Branded social media network icons with customizable layouts.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `links` | `Record<string, string>` | `{}` | Object with platform URLs (instagram, facebook, etc.). |
| `variant` | `'icon' | 'pill' | 'colored'` | `'icon'` | Visual presentation. |
| `size` | `'sm' | 'md' | 'lg'` | `'md'` | Icon size. |

##### Copy-Paste Usage Example
```tsx
import { SocialLinks } from "@deneb-ui/ui";

export function SocialRow() {
  return (
    <SocialLinks
      links={{
        instagram: "https://instagram.com/artisan",
        facebook: "https://facebook.com/artisan",
        tiktok: "https://tiktok.com/@artisan"
      }}
      variant="pill"
      size="md"
    />
  );
}
```

#### 19. `SocialButton`

**Import**: `import { SocialButton } from "@deneb-ui/ui";`  
**Category**: `Social & Business`  
**Description**: Single branded social channel follower trigger.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `platform` | `'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'x'` | `'instagram'` | Target platform. |
| `url` | `string` | `required` | Profile destination URL. |
| `label` | `string` | `''` | Optional custom label. |

##### Copy-Paste Usage Example
```tsx
import { SocialButton } from "@deneb-ui/ui";

export function InstagramFollow() {
  return <SocialButton platform="instagram" url="https://instagram.com/artisan" label="Follow on Instagram" />;
}
```

### Storefront Sections

#### 20. `Hero`

**Import**: `import { Hero } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: High-conversion storefront hero showcase supporting Split, Centered, and Minimal layouts.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `layout` | `'split' | 'centered' | 'minimal'` | `'split'` | Hero visual composition. |
| `title` | `string` | `required` | Main headline text. |
| `description` | `string` | `''` | Sub-headline description text. |
| `image` | `string` | `''` | Featured image asset URL. |
| `badge` | `string` | `''` | Top announcement pill kicker. |
| `primaryCta` | `{ label: string; href: string }` | `-` | Primary action button. |
| `secondaryCta` | `{ label: string; href: string }` | `-` | Secondary action button. |

##### Copy-Paste Usage Example
```tsx
import { Hero, useSiteData } from "@deneb-ui/ui";

export function MainHero() {
  const siteData = useSiteData();
  const hero = siteData?.content?.hero;
  return (
    <Hero
      layout="split"
      title={hero?.title ?? "Bespoke Footwear Engineered for Distinction"}
      description={hero?.subtitle ?? "Micro-batch leather shoes crafted by fourth-generation artisans."}
      badge={hero?.badge ?? "New Season 2026"}
      image={hero?.image ?? "https://images.unsplash.com/photo-1542291026-7eec264c27ff"}
      primaryCta={{ label: hero?.primaryCta ?? "Shop Collection", href: "#products" }}
      secondaryCta={{ label: "Our Heritage", href: "#about" }}
    />
  );
}
```

#### 21. `ProductCard`

**Import**: `import { ProductCard } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: The primary commerce catalog card with pricing, compare-at discounts, star reviews, stock badges, and WhatsApp checkout.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `required` | Product name. |
| `price` | `number` | `required` | Current retail price. |
| `compareAtPrice` | `number` | `undefined` | Original price for strike-through discount. |
| `currency` | `string` | `'$'` | Currency symbol prefix. |
| `image` | `string` | `required` | Product photo URL. |
| `category` | `string` | `''` | Category badge tag. |
| `whatsappNumber` | `string` | `''` | WhatsApp merchant number for direct order. |
| `itemPath` | `string` | `''` | Fivora visual editing marker (e.g. 'home.products.0'). |

##### Copy-Paste Usage Example
```tsx
import { ProductCard, useSiteData } from "@deneb-ui/ui";

export function ProductItemView({ product, index }: { product: any; index: number }) {
  const siteData = useSiteData();
  return (
    <ProductCard
      itemPath={`home.products.${index}`}
      title={product.title}
      price={product.price}
      compareAtPrice={product.compareAtPrice}
      currency={product.currency ?? "Rs."}
      image={product.image}
      category={product.category}
      badge={product.badge}
      whatsappNumber={siteData?.shop?.whatsapp}
    />
  );
}
```

#### 22. `ProductDetail`

**Import**: `import { ProductDetail } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Elite single product showcase with multi-angle gallery, live size & color selectors, direct WhatsApp order CTA, and Fivora visual editing synchronization.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `product` | `ProductItem` | `required` | Comprehensive product record. |
| `sectionPath` | `string` | `'product'` | Visual editing path prefix. |
| `sizes` | `string[]` | footwear defaults | Fallback options when the product has no sizes/options. |
| `colors` | `Array<{ name: string; hex: string }>` | default swatches | Color choices shown by the detail UI. |
| `onAddToSelection` | `(product, size, color) => void` | `undefined` | Primary action callback. |
| `whatsappUrl` | `string` | generated from product data | Optional custom WhatsApp order URL. |

##### Copy-Paste Usage Example
```tsx
import { ProductDetail } from "@deneb-ui/ui";

export function SingleProductDetail({ product }: { product: any }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <ProductDetail
        product={product}
        sectionPath="product"
        onAddToSelection={(item, size, color) =>
          console.log("Selected", item, size, color)
        }
      />
    </main>
  );
}
```

#### `PlatformProductDetail` (recommended for product routes)

`ProductDetail` is the visual component. `PlatformProductDetail` is the route
controller: it reads the product ID, resolves current live data, retries the
catalog API, and handles loading, errors, and missing products.

```tsx
// src/app/products/detail/page.tsx
import { PlatformProductDetail } from "@deneb-ui/ui";

export default function ProductDetailPage() {
  return <PlatformProductDetail />;
}
```

For a custom template design, pass
`renderProduct={(product, context) => <MyDetail product={product} index={context.productIndex} />}`
or use the `usePlatformProductDetail()` hook directly. Build card links with
`platformProductDetailHref(product.id)`.

#### 23. `ProductQuickView`

**Import**: `import { ProductQuickView } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Instant lightbox inspection modal for products with thumbnail switcher, quantity counter, and 1-click purchase.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `product` | `ProductItem` | `required` | Product data object. |
| `isOpen` | `boolean` | `false` | Modal open state. |
| `onClose` | `() => void` | `required` | Close callback. |
| `whatsappNumber` | `string` | `''` | WhatsApp order number. |

##### Copy-Paste Usage Example
```tsx
import { ProductQuickView, useSiteData } from "@deneb-ui/ui";
import { useState } from "react";

export function QuickViewInspection({ product }: { product: any }) {
  const [open, setOpen] = useState(false);
  const siteData = useSiteData();
  return (
    <>
      <button onClick={() => setOpen(true)} className="text-xs text-indigo-400 underline">
        Quick View
      </button>
      <ProductQuickView
        product={product}
        isOpen={open}
        onClose={() => setOpen(false)}
        whatsappNumber={siteData?.shop?.whatsapp}
      />
    </>
  );
}
```

#### 24. `ProductGrid`

**Import**: `import { ProductGrid } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Responsive commerce catalog grid with category filter tabs and configurable columns per device.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cols` | `1 | 2 | 3 | 4` | `3` | Desktop column count. |
| `gap` | `'sm' | 'md' | 'lg'` | `'md'` | Grid cell spacing. |
| `children` | `React.ReactNode` | `required` | List of ProductCard components. |

##### Copy-Paste Usage Example
```tsx
import { ProductGrid, ProductCard, useProducts, useSiteData } from "@deneb-ui/ui";

export function StoreCatalog() {
  const products = useProducts();
  const siteData = useSiteData();

  return (
    <section id="products" data-preview-list-path="home.products">
      <ProductGrid cols={3} gap="lg">
        {products.map((p, idx) => (
          <ProductCard
            key={p.id || idx}
            itemPath={`home.products.${idx}`}
            title={p.title}
            price={p.price}
            compareAtPrice={p.compareAtPrice}
            currency={p.currency ?? "$"}
            image={p.image}
            whatsappNumber={siteData?.shop?.whatsapp}
          />
        ))}
      </ProductGrid>
    </section>
  );
}
```

#### 25. `ProductShowcase` (or `EditableProductShowcase`)

**Import**: `import { ProductShowcase, EditableProductShowcase } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Complete flagship product showcase section with live-editable category filter pills, glassmorphism cards, interactive color swatches (`data-preview-field-type="color"`), compare-at strikethrough pricing, quick-view detail modal linking (`/products/detail/?id=...`), and direct WhatsApp order button.

##### Fivora Backend & Routing Alignment
- **Backend Endpoints**: Fully compatible with `ShopOwnerController` & `ShopOwnerService` endpoints (`GET /shop-owner/shops/:shopId/products`, `POST`, `PUT`, `PATCH .../availability`, `POST .../reorder`).
- **Generated Site Routing**: Follows `backend/src/common/generated-site-product-route.ts` mapping (`/products/detail/?id=...` and `/products/:id`).

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sectionPath` | `string` | `'home'` | Field path prefix for Fivora visual editing synchronization. |
| `listPath` | `string` | `'featuredPhones'` | List property key within section (e.g., `'products'`). |
| `badge` | `string` | `''` | Section pill kicker / badge text. |
| `heading` | `string` | `''` | Section main heading text. |
| `description` | `string` | `''` | Section description copy. |
| `products` | `ProductShowcaseItem[]` | `undefined` | Array of products (falls back to `siteData.content[sectionPath][listPath]`). |
| `currency` | `string` | `'Rs'` | Currency prefix. |
| `shippingLabel` | `string` | `'Free Insured Courier'` | Free delivery or courier subtext badge. |
| `whatsappOrderLabel` | `string` | `'Order via WhatsApp'` | WhatsApp action button label. |
| `categories` | `string[]` | `['All', ...]` | Category filter options. |
| `onQuickView` | `(product, index) => void` | `undefined` | Callback invoked when user clicks quick view eye icon. |
| `productDetailRoutePrefix` | `string` | `'/products/detail'` | Product detail route prefix. |

##### Copy-Paste Usage Example
```tsx
import { ProductShowcase, useSiteData } from "@deneb-ui/ui";

export function FeaturedShowcase() {
  const siteData = useSiteData();
  const home = siteData?.content?.home;

  return (
    <ProductShowcase
      sectionPath="home"
      listPath="featuredPhones"
      badge={home?.badge ?? "Direct Showroom & Verified Refurbished"}
      heading={home?.heading ?? "Upgrade Your Everyday."}
      description={home?.description ?? "Brand new flagships and laboratory-certified refurbished devices."}
      currency="Rs"
      shippingLabel="Free Insured Courier"
      whatsappOrderLabel="Order via WhatsApp"
    />
  );
}
```

#### 26. `CartDrawer`

**Import**: `import { CartDrawer } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: High-converting slide-over shopping cart drawer with quantity steppers, free shipping progress bar, and 1-click WhatsApp order dispatch.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `whatsappNumber` | `string` | `required` | WhatsApp number to send completed order to. |
| `storeName` | `string` | `'Store'` | Store title included in order message. |
| `freeShippingThreshold` | `number` | `0` | Free shipping threshold amount. |

##### Copy-Paste Usage Example
```tsx
import { CartDrawer, useSiteData } from "@deneb-ui/ui";

export function StoreCartDrawer() {
  const siteData = useSiteData();
  return (
    <CartDrawer
      whatsappNumber={siteData?.shop?.whatsapp ?? "94771234567"}
      storeName={siteData?.shop?.name ?? "Artisan Boutique"}
      freeShippingThreshold={15000}
    />
  );
}
```

#### 26. `FilterSidebar`

**Import**: `import { FilterSidebar } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Faceted catalog filtering sidebar with category chips, price range slider, and size swatches.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `categories` | `string[]` | `[]` | Available category options. |
| `priceRange` | `[number, number]` | `[0, 1000]` | Min and max price boundaries. |
| `onFilterChange` | `(filters: any) => void` | `required` | Filter change event callback. |

##### Copy-Paste Usage Example
```tsx
import { FilterSidebar } from "@deneb-ui/ui";
import { useState } from "react";

export function CatalogFilters({ onUpdate }: { onUpdate: (f: any) => void }) {
  return (
    <FilterSidebar
      categories={["All", "Formal", "Lifestyle", "Sneakers", "Boots"]}
      priceRange={[0, 50000]}
      onFilterChange={onUpdate}
    />
  );
}
```

#### 27. `CustomerReviews`

**Import**: `import { CustomerReviews } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Social proof review showcase with aggregate star score, verified buyer tags, and rating filters.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `averageRating` | `number` | `5.0` | Overall star rating. |
| `totalReviews` | `number` | `0` | Total customer count. |
| `reviews` | `Array<ReviewItem>` | `[]` | List of review testimonials. |

##### Copy-Paste Usage Example
```tsx
import { CustomerReviews } from "@deneb-ui/ui";

export function ReviewsSection() {
  return (
    <CustomerReviews
      averageRating={4.9}
      totalReviews={84}
      reviews={[
        { id: "1", author: "Kamal D.", rating: 5, date: "3 days ago", comment: "The leather quality and packaging were incredible.", verified: true },
        { id: "2", author: "Nirosha F.", rating: 5, date: "1 week ago", comment: "Fast WhatsApp communication and perfect fit.", verified: true }
      ]}
    />
  );
}
```

#### 28. `TrustBadges`

**Import**: `import { TrustBadges } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Conversion-boosting security strip featuring Free Shipping, SSL Checkout, Warranty, and 30-Day Returns badges.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `layout` | `'row' | 'grid'` | `'row'` | Display arrangement. |
| `badges` | `Array<TrustBadgeItem>` | `defaultBadges` | Custom badge definitions. |

##### Copy-Paste Usage Example
```tsx
import { TrustBadges } from "@deneb-ui/ui";

export function TrustSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <TrustBadges layout="row" />
    </div>
  );
}
```

#### 29. `StickyMobileBar`

**Import**: `import { StickyMobileBar } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Sticky bottom checkout and WhatsApp action bar for mobile devices, boosting mobile conversion rates.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `whatsappNumber` | `string` | `required` | WhatsApp order telephone. |
| `phone` | `string` | `''` | Direct phone call option. |
| `primaryCtaText` | `string` | `'Order via WhatsApp'` | Action button label. |

##### Copy-Paste Usage Example
```tsx
import { StickyMobileBar, useSiteData } from "@deneb-ui/ui";

export function MobileActionBar() {
  const siteData = useSiteData();
  return (
    <StickyMobileBar
      whatsappNumber={siteData?.shop?.whatsapp}
      phone={siteData?.shop?.phone}
      primaryCtaText="Order on WhatsApp"
    />
  );
}
```

#### 30. `ServiceCard`

**Import**: `import { ServiceCard } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Service offering card with duration, pricing, and direct booking triggers.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `required` | Service title. |
| `price` | `number` | `required` | Starting price. |
| `duration` | `string` | `''` | Service time duration. |
| `description` | `string` | `''` | Service description. |

##### Copy-Paste Usage Example
```tsx
import { ServiceCard } from "@deneb-ui/ui";

export function RestorationService() {
  return (
    <ServiceCard
      title="Leather Conditioning & Resole"
      price={6500}
      duration="48 Hours"
      description="Deep hydration with Saphir Medaille d'Or creams and Goodyear heel replacement."
    />
  );
}
```

#### 31. `PricingCard`

**Import**: `import { PricingCard } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Tier comparison card with feature checklists and popular glow styling.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `tier` | `string` | `required` | Package name. |
| `price` | `number | string` | `required` | Price tag. |
| `features` | `string[]` | `[]` | Checklist items. |
| `isPopular` | `boolean` | `false` | Highlight card. |
| `ctaText` | `string` | `'Choose Plan'` | Button text. |

##### Copy-Paste Usage Example
```tsx
import { PricingCard } from "@deneb-ui/ui";

export function VipClubCard() {
  return (
    <PricingCard
      tier="Atelier Patron"
      price="Rs. 20,000 / yr"
      features={[
        "Unlimited annual leather re-polishing",
        "Priority access to bespoke releases",
        "Free cedar shoe trees with every order"
      ]}
      isPopular={true}
      ctaText="Join Atelier Club"
    />
  );
}
```

#### 32. `TestimonialCard`

**Import**: `import { TestimonialCard } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Customer review card with star ratings, quote body, and avatar.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `required` | Client name. |
| `role` | `string` | `''` | Job title or city. |
| `content` | `string` | `required` | Testimonial text. |
| `rating` | `number` | `5` | Star score. |
| `avatar` | `string` | `''` | Profile picture URL. |

##### Copy-Paste Usage Example
```tsx
import { TestimonialCard } from "@deneb-ui/ui";

export function ClientQuote() {
  return (
    <TestimonialCard
      name="Malik Perera"
      role="Architect, Colombo"
      content="The craftsmanship on these Oxfords rivals anything from Northampton at a fraction of the cost."
      rating={5}
      avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    />
  );
}
```

#### 33. `FAQAccordion`

**Import**: `import { FAQAccordion } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Expandable FAQ accordion with smooth animations and accessibility.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<{ question: string; answer: string }>` | `[]` | Questions and answers. |
| `allowMultiple` | `boolean` | `false` | Allow multiple open items. |

##### Copy-Paste Usage Example
```tsx
import { FAQAccordion } from "@deneb-ui/ui";

export function StoreFAQ() {
  return (
    <FAQAccordion
      items={[
        { question: "How do I care for full-grain leather?", answer: "Apply wax-based shoe cream monthly and store with cedar shoe trees." },
        { question: "What is your delivery timeframe?", answer: "Colombo orders deliver next business day; islandwide delivers in 2-3 days." }
      ]}
    />
  );
}
```

#### 34. `AnnouncementBar`

**Import**: `import { AnnouncementBar } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Dismissible header announcement ticker with CTA links.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `message` | `string` | `required` | Announcement text. |
| `linkText` | `string` | `''` | CTA link label. |
| `href` | `string` | `''` | CTA destination URL. |
| `dismissible` | `boolean` | `true` | Show close button. |

##### Copy-Paste Usage Example
```tsx
import { AnnouncementBar } from "@deneb-ui/ui";

export function HeaderAnnouncement() {
  return (
    <AnnouncementBar
      message="Free islandwide express delivery on orders over Rs. 15,000"
      linkText="Shop Collection"
      href="#products"
      dismissible={true}
    />
  );
}
```

#### 35. `CategoryPills`

**Import**: `import { CategoryPills } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Horizontal catalog filter pills for instant category switching.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `categories` | `string[]` | `[]` | Category names. |
| `activeCategory` | `string` | `'All'` | Selected category. |
| `onSelect` | `(category: string) => void` | `required` | Selection callback. |

##### Copy-Paste Usage Example
```tsx
import { CategoryPills } from "@deneb-ui/ui";
import { useState } from "react";

export function CategoryBar() {
  const [active, setActive] = useState("All");
  return (
    <CategoryPills
      categories={["All", "Formal", "Loafers", "Boots", "Sneakers"]}
      activeCategory={active}
      onSelect={setActive}
    />
  );
}
```

#### 36. `ContactForm`

**Import**: `import { ContactForm } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Direct customer inquiry form with input validation and zero SMTP config.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `recipientEmail` | `string` | `''` | Destination email. |
| `whatsappFallback` | `string` | `''` | WhatsApp fallback number. |
| `submitLabel` | `string` | `'Send Message'` | Submit button text. |

##### Copy-Paste Usage Example
```tsx
import { ContactForm, useSiteData } from "@deneb-ui/ui";

export function SupportForm() {
  const siteData = useSiteData();
  return (
    <ContactForm
      recipientEmail={siteData?.shop?.email}
      whatsappFallback={siteData?.shop?.whatsapp}
      submitLabel="Send Message to Artisan"
    />
  );
}
```

#### 37. `Navbar`

**Import**: `import { Navbar } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Top header navigation bar with brand name, navigation links, and mobile drawer menu.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `brandName` | `string` | `required` | Brand or store title. |
| `links` | `Array<{ label: string; href: string }>` | `[]` | Navigation menu items. |
| `logoUrl` | `string` | `''` | Brand logo asset URL. |

##### Copy-Paste Usage Example
```tsx
import { Navbar, useSiteData } from "@deneb-ui/ui";

export function HeaderNav() {
  const siteData = useSiteData();
  return (
    <Navbar
      brandName={siteData?.shop?.name ?? "Artisan Boutique"}
      links={[
        { label: "Home", href: "/" },
        { label: "Collection", href: "#products" },
        { label: "Reviews", href: "#reviews" },
        { label: "Contact", href: "#contact" }
      ]}
    />
  );
}
```

#### 38. `Footer`

**Import**: `import { Footer } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Multi-column footer with quick navigation links, store summary, and copyright notice.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `brandName` | `string` | `required` | Brand name. |
| `copyright` | `string` | `''` | Copyright notice text. |

##### Copy-Paste Usage Example
```tsx
import { Footer, useSiteData } from "@deneb-ui/ui";

export function SiteFooter() {
  const siteData = useSiteData();
  return (
    <Footer
      brandName={siteData?.shop?.name ?? "Artisan Boutique"}
      copyright={`(c) ${new Date().getFullYear()} ${siteData?.shop?.name ?? "Artisan Boutique"}. All rights reserved.`}
    />
  );
}
```

### Data & Theme Engine

#### 39. `SiteDataProvider`

**Import**: `import { SiteDataProvider } from "@deneb-ui/ui";`  
**Category**: `Data & Theme Engine`  
**Description**: Central headless state provider managing siteData, products, cart, and postMessage visual click-to-edit synchronization.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialSiteData` | `SiteData` | `required` | Initial JSON seed data loaded from src/data/site-data.json. |
| `children` | `React.ReactNode` | `required` | App component tree. |

##### Copy-Paste Usage Example
```tsx
import { SiteDataProvider, CartProvider } from "@deneb-ui/ui";
import initialSiteData from "@/data/site-data.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteDataProvider initialSiteData={initialSiteData}>
          <CartProvider>
            {children}
          </CartProvider>
        </SiteDataProvider>
      </body>
    </html>
  );
}
```

#### 40. `ThemeStyles`

**Import**: `import { ThemeStyles, THEME_PRESETS, getCategoryTheme } from "@deneb-ui/ui";`  
**Category**: `Data & Theme Engine`  
**Description**: Runtime CSS Custom Properties injector connecting Fivora Studio's Visual Editor and theme presets to storefronts. Generates semantic design tokens (`--color-primary`, `--button-bg`, `--card-bg`, `--page-text`), resolves WCAG-compliant high-contrast button typography, and automatically propagates real-time postMessage theme updates across components without page reloads.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `theme` | `TemplateTheme \| null` | `required` | Theme configuration object containing brand colors, typography, dimensions, buttons, and custom camelCase tokens. |
| `defaultPrimary` | `string` | `"#2563eb"` | Fallback primary brand color if undefined in theme. |
| `defaultSecondary` | `string` | `"#0f172a"` | Fallback secondary brand color if undefined in theme. |
| `defaultAccent` | `string` | `"#14b8a6"` | Fallback highlight color if undefined in theme. |
| `defaultBg` | `string` | `"#ffffff"` | Fallback page background color if undefined in theme. |
| `defaultText` | `string` | `"#0f172a"` | Fallback body text color if undefined in theme. |

##### Theme Schema Keys (`TemplateTheme`)
- **Colors**: `primaryColor`, `secondaryColor`, `accentColor`, `backgroundColor`, `textColor`, `headingColor`, `mutedTextColor`, `linkColor`
- **Buttons**: `buttonBackgroundColor`, `buttonTextColor` (automatically WCAG AA/AAA contrast tuned if omitted)
- **Typography**: `headingFont`, `bodyFont`, `baseSize`
- **Dimensions**: `borderRadius` (e.g. `"8px"`), `heroMinHeight`, `sectionPadding`, `align`
- **Custom Tokens**: Any custom `camelCase` property (e.g. `cardBg: "#111"`, `badgeRadius: "9999px"`) is automatically converted to a CSS variable (`--card-bg`, `--badge-radius`).

##### Pre-Configured Industry Presets (`THEME_PRESETS`)
DENEB UI ships with 10 built-in industry palettes:
`"luxury"` | `"emeraldGold"` | `"tech"` | `"retail"` | `"restaurant"` | `"cyberpunk"` | `"minimalDark"` | `"nordicPastel"` | `"medical"` | `"corporate"`

Extend any preset using `getCategoryTheme(presetName, overrides)`:
```tsx
import { getCategoryTheme } from "@deneb-ui/ui";

const customTheme = getCategoryTheme("restaurant", {
  primaryColor: "#d97706",
  borderRadius: "16px",
});
```

##### Copy-Paste Usage Example (Next.js App Router)
```tsx
// app/layout.tsx
import { ThemeStyles, SiteDataProvider, THEME_PRESETS } from "@deneb-ui/ui";
import initialSiteData from "@/data/site-data.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const activeTheme = initialSiteData.theme || THEME_PRESETS.luxury;

  return (
    <html lang="en">
      <head>
        {/* Injects CSS variables into :root before page paint */}
        <ThemeStyles theme={activeTheme} />
      </head>
      <body className="bg-[var(--page-background)] text-[var(--page-text)] antialiased">
        {/* Listens to live Fivora Visual Editor updates without page reloads */}
        <SiteDataProvider initialData={initialSiteData}>
          {children}
        </SiteDataProvider>
      </body>
    </html>
  );
}
```

---

### Data & Commerce Integration Hooks

DENEB UI provides headless reactive data hooks to cleanly access live storefront data, products, services, and backend endpoints without manual `fetch()` boilerplates.

#### `useProducts(fallback?: ProductItem[])`
**Import**: `import { useProducts } from "@deneb-ui/ui";`  
**Category**: `Data & Commerce Hooks`  
**Description**: React hook to retrieve products cleanly from `siteData`. Automatically resolves top-level `content.products`, nested `home.products`, live backend rehydration updates from `api.catalogUrl`, and instant parent editor `postMessage` updates.

##### Signature
```ts
function useProducts(fallback?: ProductItem[]): ProductItem[]
```

##### Copy-Paste Usage Example
```tsx
import { useProducts, ProductGrid } from "@deneb-ui/ui";

export function StoreCatalog() {
  const products = useProducts();

  return (
    <ProductGrid
      title="Featured Collection"
      subtitle="Handpicked Styles"
      products={products}
      categories={["All", "Shoes", "Apparel"]}
      cardVariant="modern-glass"
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
    />
  );
}
```

#### `useSiteApi()`
**Import**: `import { useSiteApi } from "@deneb-ui/ui";`  
**Category**: `Data & Commerce Hooks`  
**Description**: Hook to access official Fivora backend API endpoints configured in `site-data.json` (`baseUrl`, `catalogUrl`, `contactUrl`, `analyticsUrl`).

##### Signature
```ts
function useSiteApi(): SiteDataApiConfig | null
```

##### Copy-Paste Usage Example
```tsx
import { useSiteApi } from "@deneb-ui/ui";

export function ApiDemo() {
  const api = useSiteApi();

  // api?.baseUrl      -> "https://api.fivora.site"
  // api?.catalogUrl   -> "https://api.fivora.site/site-catalog/:slug/live-data"
  // api?.contactUrl   -> "https://api.fivora.site/site-contact"
  // api?.analyticsUrl -> "https://api.fivora.site/site-analytics/page-view"

  return null;
}
```

#### `useSiteCatalog()`
**Import**: `import { useSiteCatalog } from "@deneb-ui/ui";`  
**Category**: `Data & Commerce Hooks`  
**Description**: Comprehensive hook returning `{ products, services, project, siteInstance, api }` in a single call with live rehydration.

##### Signature
```ts
function useSiteCatalog(): {
  products: ProductItem[];
  services: ServiceItem[];
  project: SiteDataProject | null;
  siteInstance: SiteInstanceData | null;
  api: SiteDataApiConfig | null;
}
```

##### Copy-Paste Usage Example
```tsx
import { useSiteCatalog } from "@deneb-ui/ui";

export function StoreOverview() {
  const { products, services, project, siteInstance, api } = useSiteCatalog();

  return (
    <div>
      <h3>{project?.title}</h3>
      <p>Total Products: {products.length}</p>
      <p>Total Services: {services.length}</p>
    </div>
  );
}
```

#### `useServices(fallback?: ServiceItem[])`
**Import**: `import { useServices } from "@deneb-ui/ui";`  
**Category**: `Data & Commerce Hooks`  
**Description**: React hook to retrieve services from `content.services` or `content.home.services` with live rehydration support.

##### Signature
```ts
function useServices(fallback?: ServiceItem[]): ServiceItem[]
```

##### Copy-Paste Usage Example
```tsx
import { useServices, ServiceCard } from "@deneb-ui/ui";

export function ServicesList() {
  const services = useServices();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id || index}
          itemPath={`services[${index}]`}
          service={service}
        />
      ))}
    </div>
  );
}
```

#### `useSiteData()`
**Import**: `import { useSiteData } from "@deneb-ui/ui";`  
**Category**: `Data & Commerce Hooks`  
**Description**: Access the entire live `siteData` tree (content, common navigation, shop info, requirements, and media).

##### Signature
```ts
function useSiteData(): SiteData
```


---


#### 41. `GoogleFeedback`

**Import**: `import { GoogleFeedback } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Official Google Customer Review card section with verified platform badge, aggregate rating pill, live 1–5 star DOM synchronization, and responsive review cards.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `basePath` | `string` | `'feedback'` | JSON schema root key in site-data.json for Fivora visual editing. |
| `badgeIcon` | `string` | `Google "G" SVG` | URL or SVG data URI for the review platform badge. |
| `badgeTitle` | `string` | `'Google'` | Review platform name shown alongside the badge icon. |
| `badgeRating` | `string | number` | `'4.9'` | Aggregate rating number displayed in the section header. |
| `badgeReviewsCount` | `string | number` | `'128 reviews'` | Total review count label. |
| `heading` | `string` | `required` | Section primary headline. |
| `subheading` | `string` | `''` | Section introductory description paragraph. |
| `feedbacks` | `FeedbackItem[]` | `[]` | Array of customer review items with name, avatar, rating (1-5), and comment. |
| `maxStars` | `number` | `5` | Maximum rating star count. |
| `className` | `string` | `''` | Custom CSS / Tailwind classes for section container. |
| `cardClassName` | `string` | `''` | Custom CSS / Tailwind classes for individual review cards. |

##### Copy-Paste Usage Example
```tsx
import { GoogleFeedback, useSiteData } from "@deneb-ui/ui";

export function ReviewsSection() {
  const siteData = useSiteData();
  const feedback = siteData?.feedback ?? {};

  return (
    <GoogleFeedback
      basePath="feedback"
      badgeIcon={feedback.badgeIcon}
      badgeTitle={feedback.badgeTitle}
      badgeRating={feedback.badgeRating}
      badgeReviewsCount={feedback.badgeReviewsCount}
      heading={feedback.heading ?? "Loved by Coffee Lovers Worldwide"}
      subheading={feedback.subheading ?? "Real reviews verified on Google."}
      feedbacks={feedback.feedbacks ?? []}
    />
  );
}
```

#### 42. `TestimonialSection`

**Import**: `import { TestimonialSection } from "@deneb-ui/ui";`  
**Category**: `Storefront Sections`  
**Description**: Editorial critic and connoisseur review showcase featuring large quotation typography, author credentials, accreditation tags, and synchronized star ratings.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `basePath` | `string` | `'testimonials'` | Root key in site-data.json for Fivora visual editing. |
| `badge` | `string` | `'Critic Acclaim'` | Uppercase pill badge text displayed above heading. |
| `heading` | `string` | `required` | Main section title. |
| `subheading` | `string` | `''` | Subheading description text. |
| `testimonials` | `TestimonialSectionItem[]` | `[]` | Array of critic reviews containing quote, author, role, avatar, tag, and rating. |
| `maxStars` | `number` | `5` | Maximum star rating per testimonial. |
| `className` | `string` | `''` | CSS / Tailwind classes for section wrapper. |
| `cardClassName` | `string` | `''` | CSS / Tailwind classes for testimonial cards. |

##### Copy-Paste Usage Example
```tsx
import { TestimonialSection, useSiteData } from "@deneb-ui/ui";

export function ConnoisseurReviews() {
  const siteData = useSiteData();
  const testimonials = siteData?.testimonials ?? {};

  return (
    <TestimonialSection
      basePath="testimonials"
      badge={testimonials.badge ?? "Critic Acclaim"}
      heading={testimonials.heading ?? "What Connoisseurs Say"}
      subheading={testimonials.subheading ?? "Unfiltered sensory impressions and reviews."}
      testimonials={testimonials.testimonials ?? []}
    />
  );
}
```

#### 43. `Map`

**Import**: `import { Map } from "@deneb-ui/ui";`  
**Category**: `Location & Navigation`  
**Description**: Universal Google Maps responsive iframe embed with intelligent URL parsing for full iframe snippets, @lat,lng coordinates, place URLs, short links, and search queries.

##### Props Table
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `mapUrl` | `string` | `''` | Google Maps URL, share link, coordinate URL (@lat,lng), place URL, or full <iframe> embed tag. |
| `address` | `string` | `'Sri Lanka'` | Physical address fallback query string when mapUrl is empty or unparseable. |
| `defaultLocation` | `string` | `''` | Secondary location fallback query string. |
| `data-preview-field-path` | `string` | `''` | Fivora visual editing binding annotation. |
| `className` | `string` | `'w-full h-full border-0'` | CSS / Tailwind styling for iframe. |
| `title` | `string` | `'Google Map Location'` | Accessibility title attribute for the iframe. |

##### Copy-Paste Usage Example
```tsx
import { Map, useSiteData } from "@deneb-ui/ui";

export function StoreMap() {
  const siteData = useSiteData();
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <Map
        data-preview-field-path="contact.mapUrl"
        mapUrl={siteData?.contact?.mapUrl}
        address={siteData?.shop?.address}
      />
    </div>
  );
}
```

---

## Complete Storefront Implementation Examples

### 7.1 Main Storefront Page (`src/app/page.tsx`)
Here is a complete, production-ready storefront combining all essential DENEB UI commerce modules:
```tsx
"use client";

import {
  useSiteData,
  useProducts,
  Navbar,
  Footer,
  Hero,
  ProductGrid,
  ProductCard,
  CartDrawer,
  FilterSidebar,
  CustomerReviews,
  TrustBadges,
  StickyMobileBar,
  BusinessHours,
  ContactActions,
  AnnouncementBar
} from "@deneb-ui/ui";
import { useState } from "react";

export default function HomePage() {
  const siteData = useSiteData();
  const products = useProducts();
  const content = siteData?.content ?? {};
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Announcement */}
      <AnnouncementBar
        message="Free express delivery on all orders over $100"
        linkText="Shop Now"
        href="#products"
      />

      {/* Header Navigation */}
      <Navbar
        brandName={siteData?.shop?.name ?? "Artisan Store"}
        links={[
          { label: "Home", href: "/" },
          { label: "Products", href: "#products" },
          { label: "Reviews", href: "#reviews" },
          { label: "Contact", href: "#contact" }
        ]}
      />

      {/* Hero Showcase */}
      <Hero
        layout="split"
        title={content?.hero?.title ?? "Bespoke Footwear Engineered for Distinction"}
        description={content?.hero?.subtitle ?? "Handcrafted micro-batch leather shoes."}
        image={content?.hero?.image ?? "https://images.unsplash.com/photo-1542291026-7eec264c27ff"}
      />

      {/* Trust & Guarantee Strip */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <TrustBadges />
      </div>

      {/* Commerce Catalog with Filter Sidebar */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16 w-full space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white tracking-tight">Curated Collection</h2>
          <p className="text-sm text-slate-400">Discover handpicked styles designed to last.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <FilterSidebar
            categories={["All", "Running", "Lifestyle", "Formal"]}
            onFilterChange={(f) => setActiveCategory(f.selectedCategories[0] || "All")}
          />

          <div className="lg:col-span-3">
            <ProductGrid cols={3} gap="lg">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id || idx}
                  title={product.title}
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                  currency={product.currency ?? "$"}
                  image={product.image}
                  whatsappNumber={siteData?.shop?.whatsapp}
                />
              ))}
            </ProductGrid>
          </div>
        </div>
      </section>

      {/* Reviews & Social Proof */}
      <section id="reviews" className="bg-[#0C0F1A] py-16 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4">
          <CustomerReviews />
        </div>
      </section>

      {/* Business Hours & Support */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <BusinessHours schedule={content?.businessHours} />
        <div className="p-8 rounded-2xl border border-slate-800 bg-[#0E1220] flex flex-col justify-center space-y-4">
          <h3 className="text-xl font-bold text-white">Instant Concierge Support</h3>
          <p className="text-sm text-slate-400">Order directly with our personal shoppers via WhatsApp or phone.</p>
          <ContactActions
            whatsapp={siteData?.shop?.whatsapp}
            phone={siteData?.shop?.phone}
            email={siteData?.shop?.email}
          />
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer
        whatsappNumber={siteData?.shop?.whatsapp ?? "15550192834"}
        storeName={siteData?.shop?.name ?? "Artisan Store"}
      />

      {/* Sticky Mobile Bar */}
      <StickyMobileBar
        whatsappNumber={siteData?.shop?.whatsapp}
        phone={siteData?.shop?.phone}
      />

      {/* Footer */}
      <Footer
        brandName={siteData?.shop?.name ?? "Artisan Store"}
        copyright="(c) 2026 Artisan Store. All rights reserved."
      />
    </div>
  );
}
```

### 7.2 Stable Live Product Route (`src/app/products/detail/page.tsx`)
```tsx
import { PlatformProductDetail } from "@deneb-ui/ui";

export default function ProductDetailPage() {
  return <PlatformProductDetail />;
}
```

Link products with `platformProductDetailHref(product.id)`. Never use
`/products/${product.id}` in a static export because merchant-created products
do not have build-time HTML directories.

---

## CLI Tooling & Validation Workflow

The `@deneb-ui/cli` binary provides local testing and strict preflight certification:

### 1. Visual Lab (`deneb lab`)
Simulate the Fivora Merchant Studio iframe canvas in your browser on port 4300:
```bash
npx @deneb-ui/cli lab .
```

### 2. Preflight Validator (`deneb validate`)
Validates your template against the strict Fivora static and visual editing schema:
```bash
npx @deneb-ui/cli validate .
```
Checks performed:
- `fivora-template.json` structure, tokens, and page routes.
- `next.config.ts` static export configuration (`output: "export"`).
- `data-preview-*` annotations (no block-level placements, no markers under static ancestors).
- Zero prohibited server-only APIs (`cookies()`, `headers()`, dynamic API routes).

### 3. Package for Submission (`deneb validate-and-zip`)
Runs preflight validation and compiles a clean `fivora-template.zip` archive ready for upload:
```bash
npx @deneb-ui/cli validate-and-zip .
```

---

## Local Development

To run the DENEB UI documentation site locally:
```bash
npm install
npm run dev        # Starts local docs portal on http://localhost:3000
npm run sync:core  # Sync components from ../core/packages/deneb-ui
npm run build      # Production standalone build
```

---

## Authors & Contributors

- **[Chamika Gayashan](https://github.com/chamikathereal)**
- **[Induranga Kawishwara](https://github.com/Induranga-kawishwara)**

<p align="center">
  <sub>MIT License © DENEB UI & Fivora. Built for modern commerce.</sub>
</p>
