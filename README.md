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
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-emerald?style=flat-square" alt="MIT" /></a>
</p>

<p align="center">
  <strong>Official documentation platform and interactive component showcase for DENEB UI.</strong><br />
  The visual-first React component framework for Next.js commerce, ARC Engine, and Fivora visual editing.
</p>

<p align="center">
  <a href="https://deneb.fivora.site/docs/introduction"><strong>Docs</strong></a> ·
  <a href="https://deneb.fivora.site/docs/components/button"><strong>Components</strong></a> ·
  <a href="https://github.com/deneb-ui/core"><strong>Core repo</strong></a> ·
  <a href="https://www.npmjs.com/org/deneb-ui"><strong>npm</strong></a>
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
6. [Master Component Catalog (All 40 Components)](#master-component-catalog-all-40-components)
   - [Core Primitives (7)](#core-primitives)
   - [Smart Commerce Actions (5)](#smart-commerce-actions)
   - [Location & Navigation (4)](#location--navigation)
   - [Social & Business (3)](#social--business)
   - [Storefront Sections & Catalog (19)](#storefront-sections--catalog)
   - [Data & Theme Engine (2)](#data--theme-engine)
7. [Complete Storefront Implementation Examples](#complete-storefront-implementation-examples)
   - [Main Storefront Page (`src/app/page.tsx`)](#71-main-storefront-page-srcapppagetsx)
   - [Static Dynamic Product Route (`src/app/products/[id]/page.tsx`)](#72-static-dynamic-product-route-srcappproductsidpagetsx)
8. [CLI Tooling & Validation Workflow](#cli-tooling--validation-workflow)
9. [Local Development](#local-development)
10. [Authors & License](#authors--license)

---

This repository powers **[deneb.fivora.site](https://deneb.fivora.site)** — the developer documentation portal and live component playground for:

- **[`@deneb-ui/ui`](https://www.npmjs.com/package/@deneb-ui/ui)** — React 18/19 visual-first component framework
- **[`@deneb-ui/cli`](https://www.npmjs.com/package/@deneb-ui/cli)** — Deneb ARC Engine, AST transformer, and local template lab
- **[`@deneb-ui/core`](https://www.npmjs.com/package/@deneb-ui/core)** — Shared design tokens, Google fonts registry, and contracts
- **[`@deneb-ui/create-template`](https://www.npmjs.com/package/@deneb-ui/create-template)** — Project scaffolding engine

The monorepo source lives in **[github.com/deneb-ui/core](https://github.com/deneb-ui/core)**.

---

## Local Development & Synchronization

### Prerequisites
- Node.js 18+ (Node.js 20+ or 22+ recommended)
- npm 9+ or pnpm

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Synchronize components from core package
npm run sync:core

# 3. Start local development server
npm run dev
# -> Opens http://localhost:3000

# 4. Production build validation
npm run build
```

The `sync:core` script automatically copies the latest component files from `../core/packages/deneb-ui/src` directly into `src/components/deneb-ui/` and verifies registry coherence.

---

## Component Catalog

DENEB UI organizes components into logical functional categories:

### 1. Core Primitives
| Component | Path | Description |
| :--- | :--- | :--- |
| **Button** | `/docs/components/button` | Celestial glow, glassmorphic, and secondary variants |
| **Card** | `/docs/components/card` | Structured container card with glowing borders |
| **Badge** | `/docs/components/badge` | Status pills, indicator tags, and glowing badges |
| **Typography** | `/docs/components/typography` | Responsive headings, body text, and inline tags |
| **Dialog / Modal** | `/docs/components/dialog` | Accessible lightbox dialog with smooth backdrop blur |
| **Grid & Box** | `/docs/components/grid` | Responsive grid layouts and spacing boxes |
| **Image** | `/docs/components/image` | Aspect-ratio preserving responsive image primitive |

### 2. Smart Commerce Actions
| Component | Path | Description |
| :--- | :--- | :--- |
| **ContactActions** | `/docs/components/contact-actions` | Unified WhatsApp, Phone, and Email contact bar |
| **WhatsAppButton** | `/docs/components/whatsapp-button` | Direct click-to-chat with automatic link resolution |
| **PhoneButton** | `/docs/components/phone-button` | Native `tel:` call action with merchant fallbacks |
| **EmailButton** | `/docs/components/email-button` | Pre-formatted `mailto:` action with subject templates |
| **FloatingContactWidget** | `/docs/components/floating-contact-widget` | Bottom-corner high-converting contact widget |

### 3. Location & Navigation
| Component | Path | Description |
| :--- | :--- | :--- |
| **Map** | `/docs/components/map` | Universal Google Maps parser (`@lat,lng`, share links, embed code) |
| **LocationCard** | `/docs/components/location-card` | Physical storefront card with directions trigger |
| **LocationLink** | `/docs/components/location-link` | Interactive address link with directions routing |
| **MapEmbed** | `/docs/components/map-embed` | Responsive iframe embed with address fallback |
| **Address** | `/docs/components/address` | Semantic physical store address markup |

### 4. Social & Business
| Component | Path | Description |
| :--- | :--- | :--- |
| **BusinessHours** | `/docs/components/business-hours` | Weekly schedule renderer with live "Open / Closed" badge |
| **SocialLinks** | `/docs/components/social-links` | Branded social channel strip with icons |
| **SocialButton** | `/docs/components/social-button` | Individual branded social media buttons |

### 5. Storefront Sections & Social Proof
| Component | Path | Description |
| :--- | :--- | :--- |
| **GoogleFeedback** | `/docs/components/google-feedback` | Official Google review badge, aggregate rating, & live 1–5 star DOM sync |
| **TestimonialSection** | `/docs/components/testimonial-section` | Editorial critic reviews, large quotation typography & star sync |
| **CartDrawer** | `/docs/components/cart-drawer` | Sliding commerce cart drawer with WhatsApp checkout |
| **FilterSidebar** | `/docs/components/filter-sidebar` | Faceted catalog filters (categories, price slider, sizes) |
| **ProductDetail** | `/docs/components/product-detail` | Complete product view with gallery & policy tabs |
| **ProductQuickView** | `/docs/components/product-quickview` | Lightbox modal product quick view with quantity counter |
| **ProductGrid** | `/docs/components/product-grid` | Responsive catalog grid with filter tabs & quick view |
| **ProductCard** | `/docs/components/product-card` | High-converting product display with badges & quick buy |
| **CustomerReviews** | `/docs/components/customer-reviews` | Customer review summary & rating breakdown |
| **TrustBadges** | `/docs/components/trust-badges` | Conversion guarantee strip (SSL, free delivery, returns) |
| **StickyMobileBar** | `/docs/components/sticky-mobile-bar` | Sticky mobile bottom bar for one-tap checkout |
| **Hero** | `/docs/components/hero` | Centered and split hero sections with action contracts |
| **PricingCard** | `/docs/components/pricing-card` | Tiered plan cards with feature checkmarks |
| **TestimonialCard** | `/docs/components/testimonial-card` | Individual customer quote card with rating stars |
| **ServiceCard** | `/docs/components/service-card` | Storefront value proposition card |
| **FAQAccordion** | `/docs/components/faq-accordion` | Expandable FAQ accordion with Fivora list markers |
| **ContactForm** | `/docs/components/contact-form` | Lead generation and inquiry form |
| **Navbar** | `/docs/components/navbar` | Responsive header with mobile drawer & cart trigger |
| **Footer** | `/docs/components/footer` | Multi-column commerce footer with legal links |

---

## Documentation Guides

| Guide | Path | Description |
| :--- | :--- | :--- |
| **Introduction** | `/docs/introduction` | DENEB UI design principles and architecture |
| **Installation** | `/docs/installation` | Package installation and Tailwind configuration |
| **Set Up Fivora** | `/docs/setup-fivora` | Visual editing contract and live inspection guide |
| **Theming & Tokens** | `/docs/theming` | Palette customization, dark mode, and fonts |
| **Responsive Design** | `/docs/responsive-design` | Breakpoint tokens and fluid layouts across devices |
| **CLI Reference** | `/docs/cli` | Complete guide to `@deneb-ui/cli` commands |
| **Storefront Scaffolding** | `/docs/templates` | Creating production-ready templates |

---

## Authors & Maintainers

Created and maintained by **[Chamika Gayashan](https://github.com/chamikathereal)** and **[Induranga Kawishwara](https://github.com/Induranga-kawishwara)**.

Part of the **DENEB UI** framework · Developed in collaboration with **[Fivora](https://fivora.site)**.

<p align="center">
  <sub>MIT © DENEB UI — The Visual-First React Framework</sub>
</p>
