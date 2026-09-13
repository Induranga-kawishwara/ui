# DENEB UI — Complete Architecture & Component Master Guide

> **Official Documentation Portal**: [deneb.fivora.site](https://deneb.fivora.site)  
> **Source Repository**: `/mnt/GAMES/GitHub/deneb-ui/`  
> **Packages**: `@deneb-ui/core`, `@deneb-ui/ui`, `create-template`  
> **Ecosystem**: Fivora Cloud E-Commerce & Micro-Storefront Engine  

---

## Table of Contents

1. [System Overview & Architecture](#1-system-overview--architecture)
2. [Documentation Portal & Deployment (`deneb.fivora.site`)](#2-documentation-portal--deployment-denebfivorasite)
3. [The Three Architectural Pillars](#3-the-three-architectural-pillars)
   - [3.1 Visual Editing Engine (`data-deneb-*`)](#31-visual-editing-engine-data-deneb-)
   - [3.2 Dynamic Data & State Engine (`SiteDataProvider`)](#32-dynamic-data--state-engine-sitedataprovider)
   - [3.3 Design System & Token Resolver (`ThemeStyles`)](#33-design-system--token-resolver-themestyles)
4. [Comprehensive Component Catalog (All 31 Components)](#4-comprehensive-component-catalog-all-31-components)
   - [Core Primitives (7 Components)](#core-primitives)
     - `Button`, `Card`, `Badge`, `Typography`, `Dialog`, `Grid`, `Image`
   - [Smart Commerce Actions (5 Components)](#smart-commerce-actions)
     - `ContactActions`, `WhatsAppButton`, `PhoneButton`, `EmailButton`, `FloatingContactWidget`
   - [Location & Navigation (4 Components)](#location--navigation)
     - `LocationCard`, `LocationLink`, `MapEmbed`, `Address`
   - [Social & Business (3 Components)](#social--business)
     - `BusinessHours`, `SocialLinks`, `SocialButton`
   - [Storefront Sections (10 Components)](#storefront-sections)
     - `Hero`, `ProductCard`, `ServiceCard`, `PricingCard`, `TestimonialCard`, `FAQAccordion`, `AnnouncementBar`, `CategoryPills`, `ContactForm`, `Navbar`, `Footer`
   - [Data & Theme Engine (2 Components)](#data--theme-engine)
     - `SiteDataProvider`, `ThemeStyles`
5. [Building Custom Templates for Fivora](#5-building-custom-templates-for-fivora)
6. [Static Export Validation Rules for Fivora Workspaces](#6-static-export-validation-rules-for-fivora-workspaces)
7. [Troubleshooting & Best Practices](#7-troubleshooting--best-practices)

---

## 1. System Overview & Architecture

**DENEB UI** is an enterprise-grade, design-system and component library tailored for high-converting localized storefronts, merchant websites, and visual-first headless commerce on the **Fivora** platform.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Fivora Visual Builder / Studio                        │
│                   (Iframe container & PostMessage Bridge)                   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ postMessage ({ type: 'DENEB_UPDATE' })
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                 Merchant Storefront / Template (Next.js)                     │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                          <SiteDataProvider>                           │  │
│  │   - Holds state: siteData (identity, products, services, contact, etc.)│  │
│  │   - Syncs with Live API when online; falls back to static JSON        │  │
│  │   - In visual builder mode, listens to postMessage for live preview   │  │
│  └───────────────────────────────────┬───────────────────────────────────┘  │
│                                      │ Context Provider                     │
│                                      ▼                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                           <ThemeStyles>                               │  │
│  │   - Resolves TemplateTheme tokens into CSS variables (--deneb-*)      │  │
│  │   - Dynamically injects colors, font families, radius, gradients      │  │
│  └───────────────────────────────────┬───────────────────────────────────┘  │
│                                      │ Cascading CSS Variables              │
│                                      ▼                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                        DENEB UI Component Tree                        │  │
│  │                                                                       │  │
│  │  [Core Primitives]   [Smart Actions]   [Storefront Sections]         │  │
│  │  - Button            - WhatsAppButton  - Hero (Split & Centered)      │  │
│  │  - Card              - ContactActions  - ProductCard / ServiceCard    │  │
│  │  - Badge             - FloatingWidget  - Navbar & Footer              │  │
│  │  - Typography        - LocationCard    - FAQAccordion / Testimonials  │  │
│  │                                                                       │  │
│  │  Every element annotated with data-deneb-* attributes for 1-click     │  │
│  │  visual editing inside Fivora dashboard                               │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Documentation Portal & Deployment (`deneb.fivora.site`)

The official documentation website located in `/mnt/GAMES/GitHub/deneb-ui/` is a Next.js App Router application providing:
- Interactive live component showcases with runtime controls.
- Copy-paste ready TypeScript / JSX code snippets.
- Interactive props tables detailing all parameters, types, defaults, and descriptions.
- Responsive mobile / tablet preview toggles.

### Hosting & Deployment Architecture

```
Internet Request ──► CapRover Reverse Proxy (Nginx + SSL Certbot)
                                  │
                                  ▼ Host: deneb.fivora.site
                       ┌──────────────────────┐
                       │  CapRover Container  │
                       │   (Node.js 20/22)    │
                       │                      │
                       │   next start (3000)  │
                       │ (Standalone Server)  │
                       └──────────────────────┘
```

### Deployment Configuration

1. **`captain-definition`**:
```json
{
  "schemaVersion": 2,
  "dockerfilePath": "./Dockerfile"
}
```

2. **`Dockerfile`**:
```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

3. **Domain Assignment**:
- In CapRover Dashboard, attach domain `deneb.fivora.site`.
- Enable HTTPS with Let's Encrypt (1-click SSL).
- Set container port to `3000`.

---

## 3. The Three Architectural Pillars

### 3.1 Visual Editing Engine (`data-deneb-*`)

Every DENEB UI component renders deterministic `data-deneb-*` attributes into the DOM. When loaded inside the Fivora Visual Builder:
1. Hovering over a component renders an intuitive selection outline.
2. Clicking fires an event into the parent builder.
3. The merchant edits text, price, image URL, or hours in the sidebar modal.
4. The builder sends a `postMessage` with the new data:
   ```ts
   window.parent.postMessage({
     type: 'DENEB_FIELD_UPDATE',
     payload: { path: 'products.0.price', value: 89.99 }
   }, '*');
   ```

#### Recognized Attributes

| Attribute | Value Example | Description |
| :--- | :--- | :--- |
| `data-deneb-component` | `"product-card"` | Identifies the component type for component-level configuration. |
| `data-deneb-field` | `"product.title"` | Directly binds a text node to a keypath in `siteData`. |
| `data-deneb-image` | `"product.imageUrl"` | Triggers image picker / asset upload modal on click. |
| `data-deneb-action` | `"whatsapp" \| "call"` | Configures phone numbers, pre-filled messages, and links. |
| `data-deneb-section` | `"hero" \| "features"` | Designates draggable / re-orderable page sections. |

---

### 3.2 Dynamic Data & State Engine (`SiteDataProvider`)

DENEB UI features a fully decoupled state layer. Storefronts can run in two modes:
1. **Static Jamstack Mode**: Pulls from `site.json` or fallback props (0ms cold start, SSG).
2. **Dynamic Live Sync Mode**: `SiteDataProvider` polls or fetches from Fivora REST API (`api.productsUrl`, `api.servicesUrl`), keeping prices, inventory, and business hours live in real-time.

```tsx
import { SiteDataProvider, useProducts, useSiteData } from "@deneb-ui/ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDataProvider 
      initialData={siteJsonData}
      api={{
        baseUrl: "https://api.fivora.com/v1",
        projectId: "store-4921",
        productsUrl: "/catalog/shop-products"
      }}
    >
      {children}
    </SiteDataProvider>
  );
}
```

#### Available Headless Hooks

- `useSiteData()`: Returns `{ data, isLive, updateField, reload }`.
- `useProducts(fallback?: ProductItem[])`: Returns array of products, reactive to live additions and price edits.
- `useServices(fallback?: ServiceItem[])`: Returns array of services offered with durations and rates.
- `useBusinessStatus(schedule)`: Calculates whether the business is currently open or closed based on browser or merchant timezone.

---

### 3.3 Design System & Token Resolver (`ThemeStyles`)

Rather than locking merchants into rigid CSS or Tailwind classes, DENEB uses semantic CSS custom properties:
- `--deneb-color-primary`
- `--deneb-color-accent`
- `--deneb-color-bg`
- `--deneb-color-card`
- `--deneb-radius-base`
- `--deneb-font-heading`
- `--deneb-font-body`

```tsx
import { ThemeStyles, THEME_PRESETS } from "@deneb-ui/ui";

// Inside layout or page
<ThemeStyles 
  preset="luxury" 
  theme={{
    colors: {
      primary: '#0F172A',
      accent: '#E11D48',
    },
    radius: '1rem',
  }} 
/>
```

---

## 4. Comprehensive Component Catalog (All 31 Components)

---

### Core Primitives

#### 1. Button (`/docs/components/button`)
Highly customizable tactile button supporting primary, secondary, outline, ghost, danger, and luxury variants. Built with accessible keyboard navigation and loading state indicators.

```tsx
import { Button } from "@deneb-ui/ui";
import { ArrowRight, ShoppingBag } from "lucide-react";

export function ButtonShowcase() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="md">
        Explore Collection <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      <Button variant="outline" size="md">
        Secondary Action
      </Button>

      <Button variant="whatsapp" size="md">
        Chat with Us
      </Button>

      <Button variant="primary" size="lg" isLoading>
        Processing...
      </Button>
    </div>
  );
}
```
**Props Table**:
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'whatsapp' | 'subtle'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `isLoading`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)
- `href`: `string` (renders as accessible HTML anchor or Next.js Link)

---

#### 2. Card (`/docs/components/card`)
Modular surface container featuring customizable elevated borders, subtle hover lighting, glassmorphism, and padding options.

```tsx
import { Card } from "@deneb-ui/ui";

export function CardShowcase() {
  return (
    <Card 
      variant="interactive" 
      padding="lg" 
      className="max-w-md border-indigo-500/20 bg-slate-900/80"
    >
      <h3 className="text-xl font-bold text-white mb-2">Artisan Coffee Roasters</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Single-origin Ethiopian Yirgacheffe roasted weekly in micro batches.
      </p>
    </Card>
  );
}
```
**Props Table**:
- `variant`: `'default' | 'flat' | 'outline' | 'interactive' | 'glass'` (default: `'default'`)
- `padding`: `'none' | 'sm' | 'md' | 'lg' | 'xl'` (default: `'md'`)
- `hoverEffect`: `boolean` (adds micro-lift and shadow glow)

---

#### 3. Badge (`/docs/components/badge`)
Visual metadata tag with color variants, size choices, and optional pulse dot for live indicators.

```tsx
import { Badge } from "@deneb-ui/ui";

export function BadgeShowcase() {
  return (
    <div className="flex gap-3">
      <Badge variant="success" dot>Open Now</Badge>
      <Badge variant="warning">Best Seller</Badge>
      <Badge variant="indigo" size="sm">New Arrival</Badge>
      <Badge variant="danger">-35% Off</Badge>
    </div>
  );
}
```
**Props Table**:
- `variant`: `'default' | 'primary' | 'success' | 'warning' | 'danger' | 'indigo' | 'outline'`
- `size`: `'sm' | 'md'`
- `dot`: `boolean` (renders an animated pulsing dot)

---

#### 4. Typography (`/docs/components/typography`)
Semantic typography suite (`Heading`, `Text`, `Title`, `Lead`) with integrated font-scaling tokens.

```tsx
import { Heading, Text } from "@deneb-ui/ui";

export function TypographyShowcase() {
  return (
    <div>
      <Heading level={1} size="4xl" gradient="indigo-to-pink">
        Elevate Your Brand
      </Heading>
      <Text variant="lead" className="mt-3 text-slate-300">
        High-performance storefront components tailored for dynamic commerce.
      </Text>
    </div>
  );
}
```

---

#### 5. Dialog (`/docs/components/dialog`)
Accessible modal dialog and lightbox primitive with focus trap, backdrop blur, escape-to-close, and keyboard navigation.

```tsx
import { Dialog, Button } from "@deneb-ui/ui";
import { useState } from "react";

export function DialogShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Quick View</Button>
      <Dialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Product Details"
      >
        <p className="text-slate-300">Detailed product description and gallery.</p>
      </Dialog>
    </>
  );
}
```

---

#### 6. Grid (`/docs/components/grid`)
Adaptive CSS grid layout wrapper supporting standard column counts, dynamic auto-fit repeats, and responsive breakpoints.

```tsx
import { Grid } from "@deneb-ui/ui";

export function GridShowcase() {
  return (
    <Grid cols={3} gap="lg" className="w-full">
      <div className="p-4 bg-slate-800 rounded-lg">Column 1</div>
      <div className="p-4 bg-slate-800 rounded-lg">Column 2</div>
      <div className="p-4 bg-slate-800 rounded-lg">Column 3</div>
    </Grid>
  );
}
```

---

#### 7. Image (`/docs/components/image`)
Smart responsive image primitive with automatic WebP/AVIF fallback, skeleton shimmer placeholder, and zoom hover effects.

```tsx
import { Image } from "@deneb-ui/ui";

export function ImageShowcase() {
  return (
    <Image 
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
      alt="Nike Air Sneaker"
      width={400}
      height={300}
      aspectRatio="4/3"
      rounded="xl"
      hoverEffect="zoom"
    />
  );
}
```

---

### Smart Commerce Actions

#### 8. ContactActions (`/docs/components/contact-actions`)
Multi-channel customer contact bar uniting WhatsApp, Direct Phone Calling, Email, and Location directions into a unified conversion bar.

```tsx
import { ContactActions } from "@deneb-ui/ui";

export function ContactActionsShowcase() {
  return (
    <ContactActions 
      whatsapp="+1234567890"
      phone="+1234567890"
      email="hello@artisanstore.com"
      locationUrl="https://maps.google.com"
      variant="pills"
    />
  );
}
```

---

#### 9. WhatsAppButton (`/docs/components/whatsapp-button`)
Specialized high-conversion action button launching WhatsApp Web or mobile app with pre-filled message templates.

```tsx
import { WhatsAppButton } from "@deneb-ui/ui";

export function WhatsAppButtonShowcase() {
  return (
    <WhatsAppButton 
      phone="+94712345678"
      message="Hi! I am interested in purchasing the Classic Leather Shoes."
      label="Order via WhatsApp"
    />
  );
}
```

---

#### 10. PhoneButton (`/docs/components/phone-button`)
One-tap telephone launcher with formatted visual display and direct `tel:` URI execution.

```tsx
import { PhoneButton } from "@deneb-ui/ui";

export function PhoneButtonShowcase() {
  return (
    <PhoneButton phone="+1 (555) 019-2834" label="Call Concierge" />
  );
}
```

---

#### 11. EmailButton (`/docs/components/email-button`)
Mailto launcher with pre-configured recipient, subject line, and inquiry template.

```tsx
import { EmailButton } from "@deneb-ui/ui";

export function EmailButtonShowcase() {
  return (
    <EmailButton 
      email="concierge@luxurygoods.com" 
      subject="VIP Bespoke Order Request"
      label="Send Email Inquiry"
    />
  );
}
```

---

#### 12. FloatingContactWidget (`/docs/components/floating-contact-widget`)
Fixed floating bottom-corner contact badge expanding into a high-converting drawer with WhatsApp, phone, email, and business status.

```tsx
import { FloatingContactWidget } from "@deneb-ui/ui";

export function FloatingWidgetShowcase() {
  return (
    <FloatingContactWidget 
      whatsapp="+1234567890"
      phone="+1234567890"
      email="support@brand.com"
      position="bottom-right"
    />
  );
}
```

---

### Location & Navigation

#### 13. LocationCard (`/docs/components/location-card`)
Showcases merchant physical store address, city, directions launcher, and opening hours status.

```tsx
import { LocationCard } from "@deneb-ui/ui";

export function LocationCardShowcase() {
  return (
    <LocationCard 
      name="Downtown Flagship Boutique"
      address="452 Broadway Avenue, Suite 400"
      city="New York, NY 10013"
      mapsUrl="https://maps.google.com"
    />
  );
}
```

---

#### 14. LocationLink (`/docs/components/location-link`)
Inline hyperlinked directions badge opening Google Maps or Apple Maps with GPS coordinates.

```tsx
import { LocationLink } from "@deneb-ui/ui";

export function LocationLinkShowcase() {
  return (
    <LocationLink 
      destination="742 Evergreen Terrace, Springfield"
      label="Get Driving Directions"
    />
  );
}
```

---

#### 15. MapEmbed (`/docs/components/map-embed`)
Responsive iframe container rendering interactive Google Maps or OpenStreetMap pin with zero layout shift.

```tsx
import { MapEmbed } from "@deneb-ui/ui";

export function MapEmbedShowcase() {
  return (
    <MapEmbed 
      query="Central Park, New York, NY"
      height={320}
      aspectRatio="16/9"
      rounded="xl"
    />
  );
}
```

---

#### 16. Address (`/docs/components/address`)
Semantic `<address>` microdata element formatting street, postal code, and country for local SEO.

```tsx
import { Address } from "@deneb-ui/ui";

export function AddressShowcase() {
  return (
    <Address 
      street="1200 Grand Avenue"
      city="Los Angeles"
      state="CA"
      zip="90015"
      country="United States"
    />
  );
}
```

---

### Social & Business

#### 17. BusinessHours (`/docs/components/business-hours`)
Dynamic weekly timetable displaying open and closing hours with an automatic "Open Now" or "Closed" badge based on local time.

```tsx
import { BusinessHours } from "@deneb-ui/ui";

export function BusinessHoursShowcase() {
  return (
    <BusinessHours 
      schedule={[
        { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM', isOpen: true },
        { day: 'Saturday', hours: '10:00 AM - 5:00 PM', isOpen: true },
        { day: 'Sunday', hours: 'Closed', isOpen: false },
      ]}
    />
  );
}
```

---

#### 18. SocialLinks (`/docs/components/social-links`)
Row of branded SVG social network icons (Instagram, Facebook, TikTok, YouTube, X, WhatsApp).

```tsx
import { SocialLinks } from "@deneb-ui/ui";

export function SocialLinksShowcase() {
  return (
    <SocialLinks 
      instagram="https://instagram.com/fivora"
      facebook="https://facebook.com/fivora"
      tiktok="https://tiktok.com/@fivora"
      youtube="https://youtube.com/@fivora"
    />
  );
}
```

---

#### 19. SocialButton (`/docs/components/social-button`)
Single branded social channel button with follower counts or action labels.

```tsx
import { SocialButton } from "@deneb-ui/ui";

export function SocialButtonShowcase() {
  return (
    <SocialButton 
      platform="instagram" 
      href="https://instagram.com/mybrand" 
      label="Follow on Instagram" 
    />
  );
}
```

---

### Storefront Sections

#### 20. Hero (`/docs/components/hero`)
High-impact hero banner supporting centered or split layouts, background media, CTA buttons, and badge highlights.

```tsx
import { Hero, Button } from "@deneb-ui/ui";

export function HeroShowcase() {
  return (
    <Hero 
      layout="split"
      badge="Spring 2026 Collection"
      title="Precision Crafted Artisan Goods"
      description="Handmade everyday carry goods built to endure decades of exploration."
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      actions={
        <>
          <Button variant="primary" size="lg">Shop New Arrivals</Button>
          <Button variant="outline" size="lg">View Lookbook</Button>
        </>
      }
    />
  );
}
```

---

#### 21. ProductCard (`/docs/components/product-card`)
Commerce card with product imagery, discount badge, currency-formatted pricing, rating stars, and one-click WhatsApp order.

```tsx
import { ProductCard } from "@deneb-ui/ui";

export function ProductCardShowcase() {
  return (
    <ProductCard 
      title="Air Velocity Running Shoes"
      price={129.99}
      compareAtPrice={169.99}
      currency="$"
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      rating={4.9}
      whatsappNumber="+1234567890"
      category="Footwear"
    />
  );
}
```

---

#### 22. ServiceCard (`/docs/components/service-card`)
Showcases bookable service offerings, consultation durations, rates, and booking inquiry triggers.

```tsx
import { ServiceCard } from "@deneb-ui/ui";

export function ServiceCardShowcase() {
  return (
    <ServiceCard 
      title="Executive Haircut & Beard Trim"
      description="Full tailored haircut, straight-razor shave, hot towel treatment, and styling."
      price={65.00}
      duration="45 Mins"
      currency="$"
      image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
    />
  );
}
```

---

#### 23. PricingCard (`/docs/components/pricing-card`)
Plan tier card featuring feature checklists, highlight ribbons, and checkout triggers.

```tsx
import { PricingCard } from "@deneb-ui/ui";

export function PricingCardShowcase() {
  return (
    <PricingCard 
      name="Professional Storefront"
      price={49}
      period="month"
      currency="$"
      isPopular={true}
      features={[
        "Unlimited live products",
        "WhatsApp checkout integration",
        "Custom domain support",
        "Instant SEO indexing"
      ]}
      ctaText="Start 14-Day Trial"
    />
  );
}
```

---

#### 24. TestimonialCard (`/docs/components/testimonial-card`)
Customer trust card with quote text, star ratings, verified buyer tag, and customer portrait.

```tsx
import { TestimonialCard } from "@deneb-ui/ui";

export function TestimonialCardShowcase() {
  return (
    <TestimonialCard 
      quote="The checkout experience via WhatsApp increased our customer response rate by 300% in the first week."
      author="Sarah Jenkins"
      role="Founder, Botanica Organics"
      avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      rating={5}
    />
  );
}
```

---

#### 25. FAQAccordion (`/docs/components/faq-accordion`)
Accessible collapsible question & answer accordion with animated height transitions.

```tsx
import { FAQAccordion } from "@deneb-ui/ui";

export function FAQAccordionShowcase() {
  return (
    <FAQAccordion 
      items={[
        {
          question: "How does WhatsApp checkout work?",
          answer: "When a customer clicks Order on WhatsApp, a pre-formatted message containing the item name, SKU, price, and selected size is instantly sent to your business WhatsApp number."
        },
        {
          question: "Can I use my own custom domain?",
          answer: "Yes, you can easily connect any custom domain (e.g. www.yourshop.com) via standard CNAME or A-records."
        }
      ]}
    />
  );
}
```

---

#### 26. AnnouncementBar (`/docs/components/announcement-bar`)
Top header announcement strip for flash sales, free shipping notices, and store announcements.

```tsx
import { AnnouncementBar } from "@deneb-ui/ui";

export function AnnouncementBarShowcase() {
  return (
    <AnnouncementBar 
      message="Free express worldwide shipping on all orders over $75"
      linkText="Claim Now"
      href="#shop"
      dismissible
    />
  );
}
```

---

#### 27. CategoryPills (`/docs/components/category-pills`)
Scrollable horizontal filter pills for catalog categorization (e.g. "All", "Sneakers", "Apparel").

```tsx
import { CategoryPills } from "@deneb-ui/ui";
import { useState } from "react";

export function CategoryPillsShowcase() {
  const [selected, setSelected] = useState("All");

  return (
    <CategoryPills 
      categories={["All", "Footwear", "Apparel", "Accessories", "Sale"]}
      activeCategory={selected}
      onSelect={setSelected}
    />
  );
}
```

---

#### 28. ContactForm (`/docs/components/contact-form`)
Customer inquiry form with input validation, accessible form fields, and direct submission handler.

```tsx
import { ContactForm } from "@deneb-ui/ui";

export function ContactFormShowcase() {
  return (
    <ContactForm 
      onSubmit={async (values) => {
        console.log("Form Submitted:", values);
      }}
      title="Send an Inquiry"
      showPhoneField
    />
  );
}
```

---

#### 29. Navbar (`/docs/components/navbar`)
Navigation header with brand logo, desktop navigation links, social icons, mobile drawer menu, and call-to-action button.

```tsx
import { Navbar, Button } from "@deneb-ui/ui";

export function NavbarShowcase() {
  return (
    <Navbar 
      brandName="Lumina Studio"
      links={[
        { label: "Home", href: "/" },
        { label: "Products", href: "#products" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ]}
      action={<Button size="sm">Get Started</Button>}
    />
  );
}
```

---

#### 30. Footer (`/docs/components/footer`)
Multi-column footer including company biography, category navigation, contact information, social links, and copyright text.

```tsx
import { Footer } from "@deneb-ui/ui";

export function FooterShowcase() {
  return (
    <Footer 
      brandName="Fivora Storefronts"
      description="Next-generation headless commerce engine for modern local commerce."
      copyrightYear={2026}
      columns={[
        {
          title: "Explore",
          links: [
            { label: "New In", href: "/new" },
            { label: "Best Sellers", href: "/best-sellers" },
          ]
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]
        }
      ]}
    />
  );
}
```

---

### Data & Theme Engine

#### 31. SiteDataProvider & ThemeStyles (`/docs/components/site-data-provider` & `/docs/components/theme-styles`)
The foundational provider pair wrapping your Next.js application.

```tsx
import { SiteDataProvider, ThemeStyles } from "@deneb-ui/ui";
import initialData from "./data/site.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeStyles theme={initialData.theme} />
      </head>
      <body>
        <SiteDataProvider initialData={initialData}>
          {children}
        </SiteDataProvider>
      </body>
    </html>
  );
}
```

---

## 5. Building Custom Templates for Fivora

When creating a new merchant template using DENEB UI:
1. Initialize using `@deneb-ui/create-template` or Next.js 14+:
   ```bash
   npx @deneb-ui/create-template my-shoes-template
   ```
2. Required Folder Structure:
   ```
   my-shoes-template/
   ├── site.json             # Default mock content & theme schema
   ├── template.json         # Metadata (name, category, preview image)
   ├── next.config.ts        # Next.js configuration
   └── src/
       ├── app/
       │   ├── layout.tsx    # SiteDataProvider + ThemeStyles
       │   ├── page.tsx      # Main storefront
       │   └── products/
       │       └── [id]/
       │           └── page.tsx # Product detail page
       └── components/
   ```

3. Ensure Visual Editing Tags:
   Every editable heading, image, or price must include:
   ```tsx
   <h1 data-deneb-field="hero.title">{hero.title}</h1>
   <img data-deneb-image="hero.image" src={hero.image} alt={hero.title} />
   ```

---

## 6. Static Export Validation Rules for Fivora Workspaces

When publishing or exporting templates into Fivora static hosting:
- Configure `next.config.ts`:
  ```ts
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
- Dynamic routes (like `products/[id]/page.tsx`) must implement `generateStaticParams()` returning all mock product IDs from `site.json`, preventing missing chunk 404s during static site asset validation.

---

## 7. Troubleshooting & Best Practices

| Symptom | Cause | Solution |
| :--- | :--- | :--- |
| Dynamic route returns 404 in static export | Missing `generateStaticParams` | Add `export function generateStaticParams()` returning mock IDs from `site.json`. |
| CSS variables not applying | `<ThemeStyles>` omitted | Place `<ThemeStyles />` in `app/layout.tsx` inside `<head>`. |
| Click in builder does not open sidebar | Missing `data-deneb-*` attribute | Add `data-deneb-field="item.name"` to the element. |
| Live products not showing in preview | `SiteDataProvider` missing `initialData` or `api` | Provide fallback `ProductItem[]` or check API network response. |

---

*Authored by the Fivora Core Engineering Team & DENEB UI Authors.*
