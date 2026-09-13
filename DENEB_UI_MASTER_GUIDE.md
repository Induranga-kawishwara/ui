# SYSTEM PROMPT FOR AI TEMPLATE CONVERTER & DEVELOPER MASTER SPECIFICATION
# FIVORA DENEB v2.0 COMPLETE STOREFRONT ENGINE

This is the complete, definitive technical specification for authoring and converting e-commerce templates for the **Fivora** platform using **DENEB UI** (`@deneb-ui/ui` & `@deneb-ui/cli`).

---

## 1. System Architecture & Fundamental Rules

Fivora templates are modern Next.js static storefronts hosted inside an interactive visual preview iframe. When merchants customize their site, Fivora's visual builder coordinates bi-directional synchronization via `window.postMessage`.

### 1.1 Fundamental Template Principles
1. **Single Source of Truth**: ALL customizable text, images, products, contact information, social links, and business hours must be sourced from `src/data/site-data.json`.
2. **Defensive Nullish Reads**: Always access nested fields using nullish coalescing (`??`) rather than logical OR (`||`):
   ```tsx
   const title = content?.hero?.title ?? "Handcrafted Footwear";
   const products = content?.products ?? [];
   ```
   *Never access `.map()` directly on an undefined property.*
3. **Visual Editing Marker Attributes**:
   - Single values: `data-preview-field-path="content.hero.title"`
   - Array / list containers: `data-preview-list-path="content.products"`
   - Array loop items: `data-preview-item-path={`content.products.${index}`}`
   - Item leaf fields: `data-preview-field-path={`content.products.${index}.title`}`
4. **Static Export Requirement**: The template must build statically via `next build` with `output: 'export'` in `next.config.ts`.
5. **No External Fetching**: Do not call `fetch()` to external URLs during render or build. Dynamic data is provided by `SiteDataProvider` at runtime.

---

## 2. Project Setup & Configuration

### 2.1 Installation
Install DENEB UI core and CLI packages:
```bash
npm install @deneb-ui/ui @deneb-ui/cli lucide-react clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/postcss postcss
```

### 2.2 `next.config.ts` (Static Export Configuration)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 2.3 `fivora-template.json` (Template Manifest v2)
Every template must include this file in the root directory:
```json
{
  "id": "bespoke-artisan-store",
  "name": "Bespoke Artisan Store",
  "version": "2.0.0",
  "description": "High-converting artisanal commerce template with responsive catalog and WhatsApp checkout.",
  "engine": "deneb-v2",
  "category": "fashion",
  "tags": ["shoes", "leather", "craft", "commerce"],
  "author": "Fivora Verified Developer",
  "previewUrl": "https://artisan-demo.fivora.site",
  "supportedCurrencies": ["LKR", "USD", "EUR", "GBP"],
  "features": [
    "cart-drawer",
    "whatsapp-checkout",
    "faceted-filters",
    "live-hours",
    "visual-click-to-edit"
  ]
}
```

### 2.4 `src/data/site-data.json` (Standard Seed Data Structure)
```json
{
  "shop": {
    "name": "Artisan Footwear & Leather",
    "tagline": "Handcrafted micro-batch leather goods",
    "whatsapp": "94771234567",
    "phone": "+94 11 234 5678",
    "email": "concierge@artisan.fivora.site",
    "address": {
      "street": "42 Heritage Boulevard",
      "city": "Colombo",
      "region": "Western Province",
      "postalCode": "00700",
      "country": "Sri Lanka"
    },
    "currency": "LKR",
    "logo": "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  "theme": {
    "primary": "#6366F1",
    "primaryGlow": "rgba(99, 102, 241, 0.4)",
    "background": "#090D1A",
    "cardBackground": "#0E1220",
    "border": "#1E2438",
    "text": "#F8FAFC",
    "textMuted": "#94A3B8"
  },
  "content": {
    "hero": {
      "title": "Bespoke Footwear Engineered for Distinction",
      "subtitle": "Micro-batch leather shoes crafted by fourth-generation artisans.",
      "primaryCtaText": "Shop Collection",
      "primaryCtaLink": "#products",
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    "products": [
      {
        "id": "shoe-vanta-1",
        "title": "Vanta Obsidian Oxford",
        "price": 28500,
        "compareAtPrice": 34000,
        "currency": "Rs.",
        "category": "Formal",
        "rating": 4.9,
        "reviewCount": 38,
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "badge": "Bestseller"
      }
    ],
    "businessHours": [
      { "day": "Monday - Friday", "open": "09:00 AM", "close": "07:00 PM" },
      { "day": "Saturday - Sunday", "open": "10:00 AM", "close": "05:00 PM" }
    ]
  }
}
```

---

## 3. Visual Editing Engine & Attribute Rules

The Fivora parent dashboard attaches visual selection boxes and enables in-line content editing using three simple DOM attributes:

1. **Leaf Field Attribute (`data-preview-field-path`)**:
   Attaches to any editable text, link, or image URL.
   ```tsx
   <h1 data-preview-field-path="content.hero.title">
     {content?.hero?.title ?? "Default Title"}
   </h1>
   ```
2. **List Container Attribute (`data-preview-list-path`)**:
   Attaches to the outer `<div>` or grid containing dynamic list items.
   ```tsx
   <div data-preview-list-path="content.products" className="grid grid-cols-3 gap-6">
     ...
   </div>
   ```
3. **Item Container Attribute (`data-preview-item-path`)**:
   Attaches to the root card or item wrapper inside a `.map()` loop.
   ```tsx
   {products.map((product, idx) => (
     <div key={product.id || idx} data-preview-item-path={`content.products.${idx}`}>
       <h3 data-preview-field-path={`content.products.${idx}.title`}>{product.title}</h3>
     </div>
   ))}
   ```

---

## 4. Master DENEB UI Component Catalog (All 40 Components)

Import all components directly from `@deneb-ui/ui`:


### Core Primitives (7 Components)

#### 1. Button (`@deneb-ui/ui`)

An interactive button primitive with celestial glows, glassmorphic variants, and visual editing support.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `any` | `` | The visual styling variant of the button. |
| `size` | `any` | `` | Controls button padding, font size, and height. |
| `disabled` | `boolean` | `false` | Whether the button is interactable. |
| `className` | `string` | `` | Additional Tailwind or CSS class names. |

```tsx
import { Button } from "@deneb-ui/ui";

export default function Page() {
  return (
    <Button 
      variant="glow" 
      size="md" 
      onClick={() => console.log('Clicked!')}
    >
      Launch Storefront
    </Button>
  );
}
```

#### 2. Card (`@deneb-ui/ui`)

A versatile container card with obsidian glass styling, luminous borders, and structured content slots.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `default' | 'glass' | 'glow' | 'outline` | `` | Visual surface treatment with obsidian and luminous borders. |
| `padding` | `sm' | 'md' | 'lg' | 'none` | `` | Internal padding of the card container. |
| `hoverEffect` | `boolean` | `true` | Enable celestial border illumination on hover. |
| `className` | `string` | `` | Additional Tailwind utility classes. |

```tsx
import { Card } from "@deneb-ui/ui";\n\n<Card className="p-6">\n  <h2>Hello World</h2>\n</Card>
```

#### 3. Badge (`@deneb-ui/ui`)

Status pills and indicator tags with celestial starlight glows.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `default' | 'glow' | 'outline' | 'success' | 'warning` | `` | Color and glow palette of the tag. |
| `size` | `sm' | 'md` | `` | Padding and typography size. |
| `pulse` | `boolean` | `false` | Renders an animated glowing pulse dot. |
| `children` | `React.ReactNode` | `-` | Text or element content. |

```tsx
import { Badge } from "@deneb-ui/ui";
```

#### 4. Typography (`@deneb-ui/ui`)

Semantic text primitives (Heading, Paragraph, Text, Quote) linked directly to Fivora theme font tokens.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `as` | `any` | `` | HTML tag. |
| `size` | `any` | `` | Font size. |
| `color` | `string` | `-` | Semantic color token or hex. |

```tsx
import { Heading, Paragraph } from "@deneb-ui/ui";
```

#### 5. Dialog (`@deneb-ui/ui`)

Accessible modal dialog with backdrop blur, keyboard ESC dismissal, sizing tiers, and live visual editing.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | `false` | Visibility state. |
| `onClose` | `() => void` | `-` | Close callback. |
| `size` | `any` | `` | Modal max-width tier. |

```tsx
import { Dialog } from "@deneb-ui/ui";
```

#### 6. Grid & Box (`@deneb-ui/ui`)

Layout containers featuring auto-balancing columns (minCardWidth), custom spacing tokens, and flex alignment.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `minCardWidth` | `string` | `` | Auto-balancing minimum card width. |
| `gap` | `any` | `` | Spacing between cards. |

```tsx
import { Grid, Box } from "@deneb-ui/ui";
```

#### 7. Image (`@deneb-ui/ui`)

Responsive storefront image component supporting preset aspect ratios, border radii, and visual editing upload triggers.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `aspectRatio` | `any` | `` | Aspect ratio. |
| `radius` | `any` | `` | Border radius. |

```tsx
import { Image } from "@deneb-ui/ui";
```


### Smart Commerce Actions (5 Components)

#### 8. ContactActions (`@deneb-ui/ui`)

Smart multi-channel container that automatically inspects merchant phone, WhatsApp, and email, rendering active triggers with zero template changes.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phone` | `string | null` | `-` | Store telephone number. Triggers direct tel: call. |
| `whatsapp` | `string | null` | `-` | WhatsApp number in E.164 format. Resolves to wa.me link. |
| `email` | `string | null` | `-` | Store contact email address. Triggers mailto: protocol. |
| `layout` | `any` | `` | Flex layout presentation. |
| `size` | `any` | `` | Size of action buttons. |

```tsx
import { ContactActions } from "@deneb-ui/ui";

export default function Page() {
  return (
    <ContactActions
      phone="+1 (555) 349-2810"
      whatsapp="15553492810"
      email="support@denebstore.com"
      labels={{ phone: 'Call Support', whatsapp: 'WhatsApp Inquiry' }}
      layout="row"
    />
  );
}
```

#### 9. WhatsAppButton (`@deneb-ui/ui`)

One-click WhatsApp click-to-chat button with built-in official SVG icon and direct link resolution.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phoneNumber` | `string` | `` | E.164 formatted telephone number without plus. |
| `message` | `string` | `` | Pre-filled WhatsApp message draft. |
| `variant` | `solid' | 'outline' | 'floating` | `` | Button style variant. |
| `label` | `string` | `` | Accessible action label. |

```tsx
import { WhatsAppButton } from "@deneb-ui/ui";\n\n<WhatsAppButton value="15550192834" label="Chat on WhatsApp" />
```

#### 10. PhoneButton (`@deneb-ui/ui`)

Direct telephone dialing trigger (tel:) with formatted phone display and official telephone icon.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `-` | Telephone number string. |
| `label` | `string` | `-` | Custom button label. |

```tsx
import { PhoneButton } from "@deneb-ui/ui";
```

#### 11. EmailButton (`@deneb-ui/ui`)

Direct mailto: action button with optional prefilled subject line and envelope icon.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `-` | Target email address. |
| `subject` | `string` | `-` | Default email subject. |

```tsx
import { EmailButton } from "@deneb-ui/ui";
```

#### 12. FloatingContactWidget (`@deneb-ui/ui`)

Sticky corner floating action button that expands into a speed-dial menu for WhatsApp, phone, and email inquiries.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `position` | `any` | `` | Corner anchor position. |
| `defaultWhatsApp` | `string` | `-` | WhatsApp number fallback. |
| `defaultPhone` | `string` | `-` | Phone number fallback. |

```tsx
import { FloatingContactWidget } from "@deneb-ui/ui";
```


### Location & Navigation (4 Components)

#### 13. LocationCard (`@deneb-ui/ui`)

Storefront location card with formatted address, map pin, and direct Google Maps directions trigger.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `` | Location heading title. |
| `address` | `string` | `` | Street address and unit. |
| `city` | `string` | `` | City or territory name. |
| `googleMapsUrl` | `string` | `` | Direct URL for Google Maps navigation. |
| `hours` | `string` | `` | Summary of operating hours. |

```tsx
import { LocationCard } from "@deneb-ui/ui";
```

#### 14. LocationLink (`@deneb-ui/ui`)

Inline clickable text link opening the physical business address in Google Maps or Apple Maps.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `address` | `string` | `-` | Address query. |
| `label` | `string` | `-` | Link text. |

```tsx
import { LocationLink } from "@deneb-ui/ui";
```

#### 15. MapEmbed (`@deneb-ui/ui`)

Safe responsive Google Maps embed iframe with automatic fallback link when embed URL is not yet configured.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `height` | `number | string` | `360` | Container height in px. |
| `embedUrl` | `string` | `-` | Google Maps embed iframe URL. |

```tsx
import { MapEmbed } from "@deneb-ui/ui";
```

#### 16. Address (`@deneb-ui/ui`)

Semantic, formatted HTML address block with microdata schema readiness and visual editing attributes.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `street` | `string` | `-` | Street name. |
| `city` | `string` | `-` | City. |
| `country` | `string` | `-` | Country. |

```tsx
import { Address } from "@deneb-ui/ui";
```


### Social & Business (3 Components)

#### 17. BusinessHours (`@deneb-ui/ui`)

Weekly schedule renderer featuring live dynamic calculation of Open Now and Closed status badges based on visitor local time.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `schedule` | `Array<{ day: string; open: string; close: string }>` | `[]` | Weekly business hours timetable. |
| `showStatus` | `boolean` | `true` | Display live  |
| `variant` | `card' | 'list' | 'compact` | `` | Visual presentation layout. |

```tsx
import { BusinessHours } from "@deneb-ui/ui";\n\n<BusinessHours schedule={schedule} />
```

#### 18. SocialLinks (`@deneb-ui/ui`)

Smart social media channel container with branded icons (Instagram, Facebook, TikTok, YouTube, X, GitHub).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `links` | `Record<string, string>` | `{}` | Object mapping platform keys (instagram, facebook, etc.) to URLs. |
| `variant` | `icon' | 'pill' | 'colored` | `` | Visual presentation of the social links. |
| `size` | `sm' | 'md' | 'lg` | `` | Icon and hit-target size. |

```tsx
import { SocialLinks } from "@deneb-ui/ui";
```

#### 19. SocialButton (`@deneb-ui/ui`)

Individual branded social button with official network colors and icons.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `platform` | `any` | `-` | Network ID. |
| `href` | `string` | `-` | Profile URL. |

```tsx
import { SocialButton } from "@deneb-ui/ui";
```


### Storefront Sections (17 Components)

#### 20. Hero (`@deneb-ui/ui`)

Centered and split hero banner sections with high-impact headline, glowing CTAs, and commerce actions.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `layout` | `split' | 'centered' | 'minimal` | `` | Hero section visual layout structure. |
| `title` | `string` | `` | Primary value proposition headline. |
| `description` | `string` | `` | Secondary explanatory subtitle text. |
| `image` | `string` | `` | Hero photography or illustration asset URL. |
| `badge` | `string` | `` | Optional announcement kicker pill. |

```tsx
import { Hero } from "@deneb-ui/ui";
```

#### 21. ProductCard (`@deneb-ui/ui`)

High-converting commerce product card with responsive image, pricing, badge, and quick add-to-cart action.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `` | Product name headline. |
| `price` | `number` | `0` | Selling retail price in active currency. |
| `compareAtPrice` | `number` | `undefined` | Original strike-through MSRP price for discount calculation. |
| `currency` | `string` | `` | Currency symbol or prefix. |
| `image` | `string` | `` | Product photograph URL. |
| `category` | `string` | `` | Category classification badge. |
| `whatsappNumber` | `string` | `` | Direct WhatsApp one-click order phone number. |
| `itemPath` | `string` | `` | Visual editing data binding path (e.g.  |

```tsx
import { ProductCard } from "@deneb-ui/ui";
```

#### 22. ProductDetail (`@deneb-ui/ui`)

An elite single product showcase with multi-angle gallery, live size & color selectors, direct WhatsApp order CTA, and Fivora visual editing synchronization.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `product` | `ProductDetailItem` | `-` | Product data object with name, price, badge, gallery, description, and policy fields. |
| `sectionPath` | `string` | `` | Fivora page key or section path prefix for visual editing. |
| `sizes` | `string[]` | `[` | Available shoe or apparel sizes. |
| `colors` | `Array<{ name: string; hex: string }>` | `-` | Color swatch options with names and hex codes. |
| `onAddToSelection` | `(product, size, color) => void` | `-` | Callback triggered when clicking the primary action button. |
| `whatsappUrl` | `string` | `-` | Custom WhatsApp click-to-chat order URL. |
| `className` | `string` | `` | Additional CSS or Tailwind classes. |

```tsx
import { ProductDetail } from "@deneb-ui/ui";
```

#### 23. ProductQuickView (`@deneb-ui/ui`)

Instant lightbox inspection modal for products with thumbnail switcher, bounds-protected quantity counter, and live visual editing.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `product` | `ProductQuickViewItem | null` | `-` | Product data object to inspect. |
| `isOpen` | `boolean` | `-` | Controls modal open/closed state. |
| `onClose` | `() => void` | `-` | Callback invoked when dismissing or pressing Escape. |
| `itemPath` | `string` | `-` | Field path prefix for Fivora live visual editing in test lab. |
| `onAddToCart` | `(product, quantity) => void` | `-` | Callback when buyer adds item to cart. |
| `addToCartLabel` | `string` | `` | Label for the primary CTA button. |

```tsx
import { ProductQuickView } from "@deneb-ui/ui";
```

#### 24. ProductGrid (`@deneb-ui/ui`)

Responsive commerce catalog grid with category filter tabs and configurable columns per device (mobile / tablet / desktop). Includes quick-view hook.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `products` | `ProductItem[]` | `-` | Array of products to display. |
| `sectionPath` | `string` | `` | Fivora section key for live editing. |
| `title` | `string` | `` | Heading for the product grid. |
| `subtitle` | `string` | `` | Badge or category subtitle above heading. |
| `categories` | `string[]` | `[` | Filter pills rendered above the grid. |
| `columns` | `{ mobile?: number; tablet?: number; desktop?: number }` | `-` | Responsive column counts. |
| `onQuickView` | `(product, itemPath) => void` | `-` | Callback triggered when user hovers and clicks Quick View. |

```tsx
import { ProductGrid } from "@deneb-ui/ui";
```

#### 25. CustomerReviews (`@deneb-ui/ui`)

High-converting social proof showcase with aggregate star score, verified buyer authentication tags, and rating filters.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `` | Section title. |
| `subtitle` | `string` | `` | Top subtitle tag. |
| `averageRating` | `string | number` | `` | Aggregate rating score. |
| `totalReviews` | `string | number` | `` | Total review count display. |
| `reviews` | `CustomerReviewItem[]` | `-` | Array of custom reviews. |
| `sectionPath` | `string` | `` | Visual editing field path prefix. |

```tsx
import { CustomerReviews } from "@deneb-ui/ui";
```

#### 26. TrustBadges (`@deneb-ui/ui`)

Conversion-boosting security and guarantee strip featuring free shipping, SSL checkout, warranty, and returns badges.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `className` | `string` | `` | Additional CSS or Tailwind class names. |

```tsx
import { TrustBadges } from "@deneb-ui/ui";
```

#### 27. StickyMobileBar (`@deneb-ui/ui`)

Sticky bottom checkout and WhatsApp action bar for mobile devices, boosting mobile conversion rates.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `whatsappNumber` | `string` | `-` | Merchant WhatsApp phone number for 1-click ordering. |
| `ctaLabel` | `string` | `` | Action button text. |
| `price` | `string` | `-` | Price display shown on the left side of the bar. |

```tsx
import { StickyMobileBar } from "@deneb-ui/ui";
```

#### 28. ServiceCard (`@deneb-ui/ui`)

Service package card with rate label, feature checkmark list, image thumbnail, and quote action.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `service` | `ServiceItem` | `-` | Service data object. |
| `itemPath` | `string` | `-` | Array path (e.g.  |

```tsx
import { ServiceCard } from "@deneb-ui/ui";
```

#### 29. PricingCard (`@deneb-ui/ui`)

Tiered subscription and pricing plan card with feature checkmarks and highlight badges.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `tier` | `string` | `` | Plan name (e.g.  |
| `price` | `number | string` | `0` | Subscription or package cost. |
| `features` | `string[]` | `[]` | Included checklist feature items. |
| `isPopular` | `boolean` | `false` | Highlights card with luminous glowing border. |
| `ctaText` | `string` | `` | Action button text. |

```tsx
import { PricingCard } from "@deneb-ui/ui";
```

#### 30. TestimonialCard (`@deneb-ui/ui`)

Customer review card with 5-star ratings, avatar, customer name, and purchased product note.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `item` | `TestimonialItem` | `-` | Testimonial record. |
| `itemPath` | `string` | `-` | Visual edit path. |

```tsx
import { TestimonialCard } from "@deneb-ui/ui";
```

#### 31. FAQAccordion (`@deneb-ui/ui`)

Smooth animated expandable accordion for FAQs, policies, and storefront documentation.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<{ question: string; answer: string }>` | `[]` | List of FAQ questions and markdown answers. |
| `allowMultiple` | `boolean` | `false` | Allow multiple items to be expanded concurrently. |

```tsx
import { Accordion } from "@deneb-ui/ui";
```

#### 32. AnnouncementBar (`@deneb-ui/ui`)

Top promotional ribbon for store announcements, flash sales, coupon codes, and free shipping thresholds.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultText` | `string` | `-` | Announcement text message. |
| `defaultBadge` | `string` | `` | Tag pill text. |
| `defaultLinkText` | `string` | `-` | Clickable callout link text. |
| `defaultLinkUrl` | `string` | `-` | Destination URL for callout link. |
| `dismissible` | `boolean` | `true` | Whether the user can dismiss the bar. |

```tsx
import { AnnouncementBar } from "@deneb-ui/ui";
```

#### 33. CategoryPills (`@deneb-ui/ui`)

Horizontal scrollable category filter pills with active indicator states for e-commerce catalogs.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `categories` | `string[]` | `-` | List of category names. |
| `selected` | `string` | `-` | Currently active category name. |
| `onSelect` | `(category: string) => void` | `-` | Callback on selecting a category pill. |

```tsx
import { CategoryPills } from "@deneb-ui/ui";
```

#### 34. ContactForm (`@deneb-ui/ui`)

Lead generation and customer inquiry form with validated fields, accessible inputs, and visual editing bindings.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `` | Heading for the form. |
| `subtitle` | `string` | `-` | Subheading or support note. |
| `submitLabel` | `string` | `` | Label on submit button. |

```tsx
import { ContactForm } from "@deneb-ui/ui";
```

#### 35. Navbar (`@deneb-ui/ui`)

Glassmorphism storefront header with logo, desktop links, mobile drawer sheet, search, and cart triggers.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sticky` | `boolean` | `true` | Stick to top on scroll. |
| `defaultLinks` | `NavLinkItem[]` | `-` | Navigation links array. |

```tsx
import { Navbar } from "@deneb-ui/ui";
```

#### 36. Footer (`@deneb-ui/ui`)

Multi-column storefront footer with brand description, navigation links, policy links, and trust badges.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `brandName` | `string` | `-` | Business title. |
| `copyright` | `string` | `-` | Copyright text. |

```tsx
import { Footer } from "@deneb-ui/ui";
```


### E-Commerce (2 Components)

#### 37. CartDrawer (`@deneb-ui/ui`)

High-converting slide-over shopping cart drawer with quantity steppers, free shipping progress bar, direct WhatsApp checkout, and visual editing bindings.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `basePath` | `string` | `` | JSON schema path for visual editing annotations. |
| `whatsappNumber` | `string` | `-` | Business WhatsApp phone number with country code. |
| `storeName` | `string` | `-` | Store name for order greeting. |
| `currency` | `string` | `` | Currency symbol. |
| `freeShippingThreshold` | `number` | `-` | Amount required to unlock free shipping banner. |
| `checkoutUrl` | `string` | `-` | Optional secondary direct checkout URL. |
| `onCheckout` | `(items, total) => void` | `-` | Callback when checkout button is clicked. |

```tsx
import { CartProvider, useCart, CartDrawer } from "@deneb-ui/ui";
```

#### 38. FilterSidebar (`@deneb-ui/ui`)

Faceted catalog filtering sidebar with category chips, price slider, and size swatches. Collapses behind a mobile toggle below 768px; always visible on tablet and desktop.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `basePath` | `string` | `` | Visual editing schema path. |
| `categories` | `string[]` | `-` | List of product categories. |
| `sizes` | `string[]` | `-` | Available size filter options. |
| `minPrice` | `number` | `0` | Minimum price filter bound. |
| `maxPrice` | `number` | `300` | Maximum price filter bound. |
| `onFilterChange` | `(filters) => void` | `-` | Callback fired on any filter adjustment. |

```tsx
import { FilterSidebar } from "@deneb-ui/ui";
```


### Data & State Engine (2 Components)

#### 39. SiteDataProvider (`@deneb-ui/ui`)

Headless state engine connecting Fivora API and live window postMessage updates to storefront components without page reloads.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialData` | `SiteData` | `-` | Initial JSON content. |
| `api` | `SiteDataApiConfig` | `-` | Live backend API endpoints. |

```tsx
import { SiteDataProvider, useProducts } from "@deneb-ui/ui";
```

#### 40. ThemeStyles (`@deneb-ui/ui`)

Runtime CSS custom properties injector for dynamic color palettes, typography, and border radii with pre-configured industry presets.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `theme` | `TemplateTheme` | `-` | Theme configuration object. |
| `preset` | `any` | `-` | Pre-configured preset name. |

```tsx
import { ThemeStyles } from "@deneb-ui/ui";
```

---

## 5. Complete Storefront Architecture Examples

### 5.1 Root Layout Setup (`src/app/layout.tsx`)
```tsx
import "./globals.css";
import { SiteDataProvider, ThemeStyles, ResponsiveBaseStyles, CartProvider } from "@deneb-ui/ui";
import initialSiteData from "@/data/site-data.json";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeStyles theme={initialSiteData.theme} />
        <ResponsiveBaseStyles />
      </head>
      <body className="bg-[#090D1A] text-slate-100 antialiased min-h-screen">
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

### 5.2 Main Storefront Page (`src/app/page.tsx`)
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
  FAQAccordion,
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
        copyright={`© ${new Date().getFullYear()} ${siteData?.shop?.name ?? "Artisan Store"}. All rights reserved.`}
      />
    </div>
  );
}
```

### 5.3 Static Route for Dynamic Product Pages (`src/app/products/[id]/page.tsx`)
```tsx
import initialSiteData from "@/data/site-data.json";
import { ProductDetail } from "@deneb-ui/ui";

// REQUIRED FOR STATIC EXPORT:
export function generateStaticParams() {
  const products = initialSiteData.content?.products || [];
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = initialSiteData.content?.products || [];
  const product = products.find((p) => p.id === id) || products[0];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <ProductDetail product={product} />
    </main>
  );
}
```

---

## 6. Step-by-Step AI Conversion Workflow

When using an AI assistant (ChatGPT, Claude, Cursor, Antigravity) to convert an existing storefront into a Fivora template:

1. **Step 1: Content Extraction**:
   Extract all static store text, photos, categories, and products into `src/data/site-data.json`.
2. **Step 2: Component Replacement**:
   Replace custom buttons, cards, headers, grids, drawers, reviews, and filters with the corresponding `@deneb-ui/ui` components from the Master Catalog above.
3. **Step 3: Attach Visual Markers**:
   Add `data-preview-field-path`, `data-preview-list-path`, and `data-preview-item-path` to all editable text and lists.
4. **Step 4: Dynamic State Binding**:
   Replace static hardcoded data with `useProducts()`, `useSiteData()`, or `siteData.content.*`.
5. **Step 5: Static Export Validation**:
   Ensure `output: 'export'` in `next.config.ts`, `generateStaticParams()` on all dynamic `[id]` pages, and no server-side secrets.
6. **Step 6: Preflight & Package**:
   ```bash
   npx @deneb-ui/cli validate
   npx @deneb-ui/cli package
   ```
