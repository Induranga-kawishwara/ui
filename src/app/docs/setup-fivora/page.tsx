'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Terminal,
  Layers,
  Zap,
  ShieldCheck,
  PackageCheck,
  RefreshCw,
  Cpu,
  HelpCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';
import { COMPONENT_DOCS } from '@/components/docs/component-registry';

export default function SetupFivoraPage() {
  const [activePathway, setActivePathway] = useState<'convert' | 'scratch'>('convert');
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const AI_MASTER_PROMPT = "# SYSTEM PROMPT FOR AI TEMPLATE CONVERTER & DEVELOPER MASTER SPECIFICATION\n# FIVORA DENEB v2.0 COMPLETE STOREFRONT ENGINE\n\nThis is the complete, definitive technical specification for authoring and converting e-commerce templates for the **Fivora** platform using **DENEB UI** (`@deneb-ui/ui` & `@deneb-ui/cli`).\n\n---\n\n## 1. System Architecture & Fundamental Rules\n\nFivora templates are modern Next.js static storefronts hosted inside an interactive visual preview iframe. When merchants customize their site, Fivora's visual builder coordinates bi-directional synchronization via `window.postMessage`.\n\n### 1.1 Fundamental Template Principles\n1. **Single Source of Truth**: ALL customizable text, images, products, contact information, social links, and business hours must be sourced from `src/data/site-data.json`.\n2. **Defensive Nullish Reads**: Always access nested fields using nullish coalescing (`??`) rather than logical OR (`||`):\n   ```tsx\n   const title = content?.hero?.title ?? \"Handcrafted Footwear\";\n   const products = content?.products ?? [];\n   ```\n   *Never access `.map()` directly on an undefined property.*\n3. **Visual Editing Marker Attributes**:\n   - Single values: `data-preview-field-path=\"content.hero.title\"`\n   - Array / list containers: `data-preview-list-path=\"content.products\"`\n   - Array loop items: `data-preview-item-path={`content.products.${index}`}`\n   - Item leaf fields: `data-preview-field-path={`content.products.${index}.title`}`\n4. **Static Export Requirement**: The template must build statically via `next build` with `output: 'export'` in `next.config.ts`.\n5. **No External Fetching**: Do not call `fetch()` to external URLs during render or build. Dynamic data is provided by `SiteDataProvider` at runtime.\n\n---\n\n## 2. Project Setup & Configuration\n\n### 2.1 Installation\nInstall DENEB UI core and CLI packages:\n```bash\nnpm install @deneb-ui/ui @deneb-ui/cli lucide-react clsx tailwind-merge\nnpm install -D tailwindcss @tailwindcss/postcss postcss\n```\n\n### 2.2 `next.config.ts` (Static Export Configuration)\n```typescript\nimport type { NextConfig } from \"next\";\n\nconst nextConfig: NextConfig = {\n  output: \"export\",\n  trailingSlash: true,\n  images: {\n    unoptimized: true,\n  },\n};\n\nexport default nextConfig;\n```\n\n### 2.3 `fivora-template.json` (Template Manifest v2)\nEvery template must include this file in the root directory:\n```json\n{\n  \"id\": \"bespoke-artisan-store\",\n  \"name\": \"Bespoke Artisan Store\",\n  \"version\": \"2.0.0\",\n  \"description\": \"High-converting artisanal commerce template with responsive catalog and WhatsApp checkout.\",\n  \"engine\": \"deneb-v2\",\n  \"category\": \"fashion\",\n  \"tags\": [\"shoes\", \"leather\", \"craft\", \"commerce\"],\n  \"author\": \"Fivora Verified Developer\",\n  \"previewUrl\": \"https://artisan-demo.fivora.site\",\n  \"supportedCurrencies\": [\"LKR\", \"USD\", \"EUR\", \"GBP\"],\n  \"features\": [\n    \"cart-drawer\",\n    \"whatsapp-checkout\",\n    \"faceted-filters\",\n    \"live-hours\",\n    \"visual-click-to-edit\"\n  ]\n}\n```\n\n### 2.4 `src/data/site-data.json` (Standard Seed Data Structure)\n```json\n{\n  \"shop\": {\n    \"name\": \"Artisan Footwear & Leather\",\n    \"tagline\": \"Handcrafted micro-batch leather goods\",\n    \"whatsapp\": \"94771234567\",\n    \"phone\": \"+94 11 234 5678\",\n    \"email\": \"concierge@artisan.fivora.site\",\n    \"address\": {\n      \"street\": \"42 Heritage Boulevard\",\n      \"city\": \"Colombo\",\n      \"region\": \"Western Province\",\n      \"postalCode\": \"00700\",\n      \"country\": \"Sri Lanka\"\n    },\n    \"currency\": \"LKR\",\n    \"logo\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"\n  },\n  \"theme\": {\n    \"primary\": \"#6366F1\",\n    \"primaryGlow\": \"rgba(99, 102, 241, 0.4)\",\n    \"background\": \"#090D1A\",\n    \"cardBackground\": \"#0E1220\",\n    \"border\": \"#1E2438\",\n    \"text\": \"#F8FAFC\",\n    \"textMuted\": \"#94A3B8\"\n  },\n  \"content\": {\n    \"hero\": {\n      \"title\": \"Bespoke Footwear Engineered for Distinction\",\n      \"subtitle\": \"Micro-batch leather shoes crafted by fourth-generation artisans.\",\n      \"primaryCtaText\": \"Shop Collection\",\n      \"primaryCtaLink\": \"#products\",\n      \"image\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"\n    },\n    \"products\": [\n      {\n        \"id\": \"shoe-vanta-1\",\n        \"title\": \"Vanta Obsidian Oxford\",\n        \"price\": 28500,\n        \"compareAtPrice\": 34000,\n        \"currency\": \"Rs.\",\n        \"category\": \"Formal\",\n        \"rating\": 4.9,\n        \"reviewCount\": 38,\n        \"image\": \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\",\n        \"badge\": \"Bestseller\"\n      }\n    ],\n    \"businessHours\": [\n      { \"day\": \"Monday - Friday\", \"open\": \"09:00 AM\", \"close\": \"07:00 PM\" },\n      { \"day\": \"Saturday - Sunday\", \"open\": \"10:00 AM\", \"close\": \"05:00 PM\" }\n    ]\n  }\n}\n```\n\n---\n\n## 3. Visual Editing Engine & Attribute Rules\n\nThe Fivora parent dashboard attaches visual selection boxes and enables in-line content editing using three simple DOM attributes:\n\n1. **Leaf Field Attribute (`data-preview-field-path`)**:\n   Attaches to any editable text, link, or image URL.\n   ```tsx\n   <h1 data-preview-field-path=\"content.hero.title\">\n     {content?.hero?.title ?? \"Default Title\"}\n   </h1>\n   ```\n2. **List Container Attribute (`data-preview-list-path`)**:\n   Attaches to the outer `<div>` or grid containing dynamic list items.\n   ```tsx\n   <div data-preview-list-path=\"content.products\" className=\"grid grid-cols-3 gap-6\">\n     ...\n   </div>\n   ```\n3. **Item Container Attribute (`data-preview-item-path`)**:\n   Attaches to the root card or item wrapper inside a `.map()` loop.\n   ```tsx\n   {products.map((product, idx) => (\n     <div key={product.id || idx} data-preview-item-path={`content.products.${idx}`}>\n       <h3 data-preview-field-path={`content.products.${idx}.title`}>{product.title}</h3>\n     </div>\n   ))}\n   ```\n\n---\n\n## 4. Master DENEB UI Component Catalog (All 40 Components)\n\nImport all components directly from `@deneb-ui/ui`:\n\n\n### Core Primitives (7 Components)\n\n#### 1. Button (`@deneb-ui/ui`)\n\nAn interactive button primitive with celestial glows, glassmorphic variants, and visual editing support.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `variant` | `any` | `` | The visual styling variant of the button. |\n| `size` | `any` | `` | Controls button padding, font size, and height. |\n| `disabled` | `boolean` | `false` | Whether the button is interactable. |\n| `className` | `string` | `` | Additional Tailwind or CSS class names. |\n\n```tsx\nimport { Button } from \"@deneb-ui/ui\";\n\nexport default function Page() {\n  return (\n    <Button \n      variant=\"glow\" \n      size=\"md\" \n      onClick={() => console.log('Clicked!')}\n    >\n      Launch Storefront\n    </Button>\n  );\n}\n```\n\n#### 2. Card (`@deneb-ui/ui`)\n\nA versatile container card with obsidian glass styling, luminous borders, and structured content slots.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `variant` | `default' | 'glass' | 'glow' | 'outline` | `` | Visual surface treatment with obsidian and luminous borders. |\n| `padding` | `sm' | 'md' | 'lg' | 'none` | `` | Internal padding of the card container. |\n| `hoverEffect` | `boolean` | `true` | Enable celestial border illumination on hover. |\n| `className` | `string` | `` | Additional Tailwind utility classes. |\n\n```tsx\nimport { Card } from \"@deneb-ui/ui\";\\n\\n<Card className=\"p-6\">\\n  <h2>Hello World</h2>\\n</Card>\n```\n\n#### 3. Badge (`@deneb-ui/ui`)\n\nStatus pills and indicator tags with celestial starlight glows.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `variant` | `default' | 'glow' | 'outline' | 'success' | 'warning` | `` | Color and glow palette of the tag. |\n| `size` | `sm' | 'md` | `` | Padding and typography size. |\n| `pulse` | `boolean` | `false` | Renders an animated glowing pulse dot. |\n| `children` | `React.ReactNode` | `-` | Text or element content. |\n\n```tsx\nimport { Badge } from \"@deneb-ui/ui\";\n```\n\n#### 4. Typography (`@deneb-ui/ui`)\n\nSemantic text primitives (Heading, Paragraph, Text, Quote) linked directly to Fivora theme font tokens.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `as` | `any` | `` | HTML tag. |\n| `size` | `any` | `` | Font size. |\n| `color` | `string` | `-` | Semantic color token or hex. |\n\n```tsx\nimport { Heading, Paragraph } from \"@deneb-ui/ui\";\n```\n\n#### 5. Dialog (`@deneb-ui/ui`)\n\nAccessible modal dialog with backdrop blur, keyboard ESC dismissal, sizing tiers, and live visual editing.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `open` | `boolean` | `false` | Visibility state. |\n| `onClose` | `() => void` | `-` | Close callback. |\n| `size` | `any` | `` | Modal max-width tier. |\n\n```tsx\nimport { Dialog } from \"@deneb-ui/ui\";\n```\n\n#### 6. Grid & Box (`@deneb-ui/ui`)\n\nLayout containers featuring auto-balancing columns (minCardWidth), custom spacing tokens, and flex alignment.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `minCardWidth` | `string` | `` | Auto-balancing minimum card width. |\n| `gap` | `any` | `` | Spacing between cards. |\n\n```tsx\nimport { Grid, Box } from \"@deneb-ui/ui\";\n```\n\n#### 7. Image (`@deneb-ui/ui`)\n\nResponsive storefront image component supporting preset aspect ratios, border radii, and visual editing upload triggers.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `aspectRatio` | `any` | `` | Aspect ratio. |\n| `radius` | `any` | `` | Border radius. |\n\n```tsx\nimport { Image } from \"@deneb-ui/ui\";\n```\n\n\n### Smart Commerce Actions (5 Components)\n\n#### 8. ContactActions (`@deneb-ui/ui`)\n\nSmart multi-channel container that automatically inspects merchant phone, WhatsApp, and email, rendering active triggers with zero template changes.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `phone` | `string | null` | `-` | Store telephone number. Triggers direct tel: call. |\n| `whatsapp` | `string | null` | `-` | WhatsApp number in E.164 format. Resolves to wa.me link. |\n| `email` | `string | null` | `-` | Store contact email address. Triggers mailto: protocol. |\n| `layout` | `any` | `` | Flex layout presentation. |\n| `size` | `any` | `` | Size of action buttons. |\n\n```tsx\nimport { ContactActions } from \"@deneb-ui/ui\";\n\nexport default function Page() {\n  return (\n    <ContactActions\n      phone=\"+1 (555) 349-2810\"\n      whatsapp=\"15553492810\"\n      email=\"support@denebstore.com\"\n      labels={{ phone: 'Call Support', whatsapp: 'WhatsApp Inquiry' }}\n      layout=\"row\"\n    />\n  );\n}\n```\n\n#### 9. WhatsAppButton (`@deneb-ui/ui`)\n\nOne-click WhatsApp click-to-chat button with built-in official SVG icon and direct link resolution.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `phoneNumber` | `string` | `` | E.164 formatted telephone number without plus. |\n| `message` | `string` | `` | Pre-filled WhatsApp message draft. |\n| `variant` | `solid' | 'outline' | 'floating` | `` | Button style variant. |\n| `label` | `string` | `` | Accessible action label. |\n\n```tsx\nimport { WhatsAppButton } from \"@deneb-ui/ui\";\\n\\n<WhatsAppButton value=\"15550192834\" label=\"Chat on WhatsApp\" />\n```\n\n#### 10. PhoneButton (`@deneb-ui/ui`)\n\nDirect telephone dialing trigger (tel:) with formatted phone display and official telephone icon.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `value` | `string` | `-` | Telephone number string. |\n| `label` | `string` | `-` | Custom button label. |\n\n```tsx\nimport { PhoneButton } from \"@deneb-ui/ui\";\n```\n\n#### 11. EmailButton (`@deneb-ui/ui`)\n\nDirect mailto: action button with optional prefilled subject line and envelope icon.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `value` | `string` | `-` | Target email address. |\n| `subject` | `string` | `-` | Default email subject. |\n\n```tsx\nimport { EmailButton } from \"@deneb-ui/ui\";\n```\n\n#### 12. FloatingContactWidget (`@deneb-ui/ui`)\n\nSticky corner floating action button that expands into a speed-dial menu for WhatsApp, phone, and email inquiries.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `position` | `any` | `` | Corner anchor position. |\n| `defaultWhatsApp` | `string` | `-` | WhatsApp number fallback. |\n| `defaultPhone` | `string` | `-` | Phone number fallback. |\n\n```tsx\nimport { FloatingContactWidget } from \"@deneb-ui/ui\";\n```\n\n\n### Location & Navigation (4 Components)\n\n#### 13. LocationCard (`@deneb-ui/ui`)\n\nStorefront location card with formatted address, map pin, and direct Google Maps directions trigger.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `` | Location heading title. |\n| `address` | `string` | `` | Street address and unit. |\n| `city` | `string` | `` | City or territory name. |\n| `googleMapsUrl` | `string` | `` | Direct URL for Google Maps navigation. |\n| `hours` | `string` | `` | Summary of operating hours. |\n\n```tsx\nimport { LocationCard } from \"@deneb-ui/ui\";\n```\n\n#### 14. LocationLink (`@deneb-ui/ui`)\n\nInline clickable text link opening the physical business address in Google Maps or Apple Maps.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `address` | `string` | `-` | Address query. |\n| `label` | `string` | `-` | Link text. |\n\n```tsx\nimport { LocationLink } from \"@deneb-ui/ui\";\n```\n\n#### 15. MapEmbed (`@deneb-ui/ui`)\n\nSafe responsive Google Maps embed iframe with automatic fallback link when embed URL is not yet configured.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `height` | `number | string` | `360` | Container height in px. |\n| `embedUrl` | `string` | `-` | Google Maps embed iframe URL. |\n\n```tsx\nimport { MapEmbed } from \"@deneb-ui/ui\";\n```\n\n#### 16. Address (`@deneb-ui/ui`)\n\nSemantic, formatted HTML address block with microdata schema readiness and visual editing attributes.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `street` | `string` | `-` | Street name. |\n| `city` | `string` | `-` | City. |\n| `country` | `string` | `-` | Country. |\n\n```tsx\nimport { Address } from \"@deneb-ui/ui\";\n```\n\n\n### Social & Business (3 Components)\n\n#### 17. BusinessHours (`@deneb-ui/ui`)\n\nWeekly schedule renderer featuring live dynamic calculation of Open Now and Closed status badges based on visitor local time.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `schedule` | `Array<{ day: string; open: string; close: string }>` | `[]` | Weekly business hours timetable. |\n| `showStatus` | `boolean` | `true` | Display live  |\n| `variant` | `card' | 'list' | 'compact` | `` | Visual presentation layout. |\n\n```tsx\nimport { BusinessHours } from \"@deneb-ui/ui\";\\n\\n<BusinessHours schedule={schedule} />\n```\n\n#### 18. SocialLinks (`@deneb-ui/ui`)\n\nSmart social media channel container with branded icons (Instagram, Facebook, TikTok, YouTube, X, GitHub).\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `links` | `Record<string, string>` | `{}` | Object mapping platform keys (instagram, facebook, etc.) to URLs. |\n| `variant` | `icon' | 'pill' | 'colored` | `` | Visual presentation of the social links. |\n| `size` | `sm' | 'md' | 'lg` | `` | Icon and hit-target size. |\n\n```tsx\nimport { SocialLinks } from \"@deneb-ui/ui\";\n```\n\n#### 19. SocialButton (`@deneb-ui/ui`)\n\nIndividual branded social button with official network colors and icons.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `platform` | `any` | `-` | Network ID. |\n| `href` | `string` | `-` | Profile URL. |\n\n```tsx\nimport { SocialButton } from \"@deneb-ui/ui\";\n```\n\n\n### Storefront Sections (17 Components)\n\n#### 20. Hero (`@deneb-ui/ui`)\n\nCentered and split hero banner sections with high-impact headline, glowing CTAs, and commerce actions.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `layout` | `split' | 'centered' | 'minimal` | `` | Hero section visual layout structure. |\n| `title` | `string` | `` | Primary value proposition headline. |\n| `description` | `string` | `` | Secondary explanatory subtitle text. |\n| `image` | `string` | `` | Hero photography or illustration asset URL. |\n| `badge` | `string` | `` | Optional announcement kicker pill. |\n\n```tsx\nimport { Hero } from \"@deneb-ui/ui\";\n```\n\n#### 21. ProductCard (`@deneb-ui/ui`)\n\nHigh-converting commerce product card with responsive image, pricing, badge, and quick add-to-cart action.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `` | Product name headline. |\n| `price` | `number` | `0` | Selling retail price in active currency. |\n| `compareAtPrice` | `number` | `undefined` | Original strike-through MSRP price for discount calculation. |\n| `currency` | `string` | `` | Currency symbol or prefix. |\n| `image` | `string` | `` | Product photograph URL. |\n| `category` | `string` | `` | Category classification badge. |\n| `whatsappNumber` | `string` | `` | Direct WhatsApp one-click order phone number. |\n| `itemPath` | `string` | `` | Visual editing data binding path (e.g.  |\n\n```tsx\nimport { ProductCard } from \"@deneb-ui/ui\";\n```\n\n#### 22. ProductDetail (`@deneb-ui/ui`)\n\nAn elite single product showcase with multi-angle gallery, live size & color selectors, direct WhatsApp order CTA, and Fivora visual editing synchronization.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `product` | `ProductDetailItem` | `-` | Product data object with name, price, badge, gallery, description, and policy fields. |\n| `sectionPath` | `string` | `` | Fivora page key or section path prefix for visual editing. |\n| `sizes` | `string[]` | `[` | Available shoe or apparel sizes. |\n| `colors` | `Array<{ name: string; hex: string }>` | `-` | Color swatch options with names and hex codes. |\n| `onAddToSelection` | `(product, size, color) => void` | `-` | Callback triggered when clicking the primary action button. |\n| `whatsappUrl` | `string` | `-` | Custom WhatsApp click-to-chat order URL. |\n| `className` | `string` | `` | Additional CSS or Tailwind classes. |\n\n```tsx\nimport { ProductDetail } from \"@deneb-ui/ui\";\n```\n\n#### 23. ProductQuickView (`@deneb-ui/ui`)\n\nInstant lightbox inspection modal for products with thumbnail switcher, bounds-protected quantity counter, and live visual editing.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `product` | `ProductQuickViewItem | null` | `-` | Product data object to inspect. |\n| `isOpen` | `boolean` | `-` | Controls modal open/closed state. |\n| `onClose` | `() => void` | `-` | Callback invoked when dismissing or pressing Escape. |\n| `itemPath` | `string` | `-` | Field path prefix for Fivora live visual editing in test lab. |\n| `onAddToCart` | `(product, quantity) => void` | `-` | Callback when buyer adds item to cart. |\n| `addToCartLabel` | `string` | `` | Label for the primary CTA button. |\n\n```tsx\nimport { ProductQuickView } from \"@deneb-ui/ui\";\n```\n\n#### 24. ProductGrid (`@deneb-ui/ui`)\n\nResponsive commerce catalog grid with category filter tabs and configurable columns per device (mobile / tablet / desktop). Includes quick-view hook.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `products` | `ProductItem[]` | `-` | Array of products to display. |\n| `sectionPath` | `string` | `` | Fivora section key for live editing. |\n| `title` | `string` | `` | Heading for the product grid. |\n| `subtitle` | `string` | `` | Badge or category subtitle above heading. |\n| `categories` | `string[]` | `[` | Filter pills rendered above the grid. |\n| `columns` | `{ mobile?: number; tablet?: number; desktop?: number }` | `-` | Responsive column counts. |\n| `onQuickView` | `(product, itemPath) => void` | `-` | Callback triggered when user hovers and clicks Quick View. |\n\n```tsx\nimport { ProductGrid } from \"@deneb-ui/ui\";\n```\n\n#### 25. CustomerReviews (`@deneb-ui/ui`)\n\nHigh-converting social proof showcase with aggregate star score, verified buyer authentication tags, and rating filters.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `` | Section title. |\n| `subtitle` | `string` | `` | Top subtitle tag. |\n| `averageRating` | `string | number` | `` | Aggregate rating score. |\n| `totalReviews` | `string | number` | `` | Total review count display. |\n| `reviews` | `CustomerReviewItem[]` | `-` | Array of custom reviews. |\n| `sectionPath` | `string` | `` | Visual editing field path prefix. |\n\n```tsx\nimport { CustomerReviews } from \"@deneb-ui/ui\";\n```\n\n#### 26. TrustBadges (`@deneb-ui/ui`)\n\nConversion-boosting security and guarantee strip featuring free shipping, SSL checkout, warranty, and returns badges.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `className` | `string` | `` | Additional CSS or Tailwind class names. |\n\n```tsx\nimport { TrustBadges } from \"@deneb-ui/ui\";\n```\n\n#### 27. StickyMobileBar (`@deneb-ui/ui`)\n\nSticky bottom checkout and WhatsApp action bar for mobile devices, boosting mobile conversion rates.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `whatsappNumber` | `string` | `-` | Merchant WhatsApp phone number for 1-click ordering. |\n| `ctaLabel` | `string` | `` | Action button text. |\n| `price` | `string` | `-` | Price display shown on the left side of the bar. |\n\n```tsx\nimport { StickyMobileBar } from \"@deneb-ui/ui\";\n```\n\n#### 28. ServiceCard (`@deneb-ui/ui`)\n\nService package card with rate label, feature checkmark list, image thumbnail, and quote action.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `service` | `ServiceItem` | `-` | Service data object. |\n| `itemPath` | `string` | `-` | Array path (e.g.  |\n\n```tsx\nimport { ServiceCard } from \"@deneb-ui/ui\";\n```\n\n#### 29. PricingCard (`@deneb-ui/ui`)\n\nTiered subscription and pricing plan card with feature checkmarks and highlight badges.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `tier` | `string` | `` | Plan name (e.g.  |\n| `price` | `number | string` | `0` | Subscription or package cost. |\n| `features` | `string[]` | `[]` | Included checklist feature items. |\n| `isPopular` | `boolean` | `false` | Highlights card with luminous glowing border. |\n| `ctaText` | `string` | `` | Action button text. |\n\n```tsx\nimport { PricingCard } from \"@deneb-ui/ui\";\n```\n\n#### 30. TestimonialCard (`@deneb-ui/ui`)\n\nCustomer review card with 5-star ratings, avatar, customer name, and purchased product note.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `item` | `TestimonialItem` | `-` | Testimonial record. |\n| `itemPath` | `string` | `-` | Visual edit path. |\n\n```tsx\nimport { TestimonialCard } from \"@deneb-ui/ui\";\n```\n\n#### 31. FAQAccordion (`@deneb-ui/ui`)\n\nSmooth animated expandable accordion for FAQs, policies, and storefront documentation.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `items` | `Array<{ question: string; answer: string }>` | `[]` | List of FAQ questions and markdown answers. |\n| `allowMultiple` | `boolean` | `false` | Allow multiple items to be expanded concurrently. |\n\n```tsx\nimport { Accordion } from \"@deneb-ui/ui\";\n```\n\n#### 32. AnnouncementBar (`@deneb-ui/ui`)\n\nTop promotional ribbon for store announcements, flash sales, coupon codes, and free shipping thresholds.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `defaultText` | `string` | `-` | Announcement text message. |\n| `defaultBadge` | `string` | `` | Tag pill text. |\n| `defaultLinkText` | `string` | `-` | Clickable callout link text. |\n| `defaultLinkUrl` | `string` | `-` | Destination URL for callout link. |\n| `dismissible` | `boolean` | `true` | Whether the user can dismiss the bar. |\n\n```tsx\nimport { AnnouncementBar } from \"@deneb-ui/ui\";\n```\n\n#### 33. CategoryPills (`@deneb-ui/ui`)\n\nHorizontal scrollable category filter pills with active indicator states for e-commerce catalogs.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `categories` | `string[]` | `-` | List of category names. |\n| `selected` | `string` | `-` | Currently active category name. |\n| `onSelect` | `(category: string) => void` | `-` | Callback on selecting a category pill. |\n\n```tsx\nimport { CategoryPills } from \"@deneb-ui/ui\";\n```\n\n#### 34. ContactForm (`@deneb-ui/ui`)\n\nLead generation and customer inquiry form with validated fields, accessible inputs, and visual editing bindings.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `` | Heading for the form. |\n| `subtitle` | `string` | `-` | Subheading or support note. |\n| `submitLabel` | `string` | `` | Label on submit button. |\n\n```tsx\nimport { ContactForm } from \"@deneb-ui/ui\";\n```\n\n#### 35. Navbar (`@deneb-ui/ui`)\n\nGlassmorphism storefront header with logo, desktop links, mobile drawer sheet, search, and cart triggers.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `sticky` | `boolean` | `true` | Stick to top on scroll. |\n| `defaultLinks` | `NavLinkItem[]` | `-` | Navigation links array. |\n\n```tsx\nimport { Navbar } from \"@deneb-ui/ui\";\n```\n\n#### 36. Footer (`@deneb-ui/ui`)\n\nMulti-column storefront footer with brand description, navigation links, policy links, and trust badges.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `brandName` | `string` | `-` | Business title. |\n| `copyright` | `string` | `-` | Copyright text. |\n\n```tsx\nimport { Footer } from \"@deneb-ui/ui\";\n```\n\n\n### E-Commerce (2 Components)\n\n#### 37. CartDrawer (`@deneb-ui/ui`)\n\nHigh-converting slide-over shopping cart drawer with quantity steppers, free shipping progress bar, direct WhatsApp checkout, and visual editing bindings.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `basePath` | `string` | `` | JSON schema path for visual editing annotations. |\n| `whatsappNumber` | `string` | `-` | Business WhatsApp phone number with country code. |\n| `storeName` | `string` | `-` | Store name for order greeting. |\n| `currency` | `string` | `` | Currency symbol. |\n| `freeShippingThreshold` | `number` | `-` | Amount required to unlock free shipping banner. |\n| `checkoutUrl` | `string` | `-` | Optional secondary direct checkout URL. |\n| `onCheckout` | `(items, total) => void` | `-` | Callback when checkout button is clicked. |\n\n```tsx\nimport { CartProvider, useCart, CartDrawer } from \"@deneb-ui/ui\";\n```\n\n#### 38. FilterSidebar (`@deneb-ui/ui`)\n\nFaceted catalog filtering sidebar with category chips, price slider, and size swatches. Collapses behind a mobile toggle below 768px; always visible on tablet and desktop.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `basePath` | `string` | `` | Visual editing schema path. |\n| `categories` | `string[]` | `-` | List of product categories. |\n| `sizes` | `string[]` | `-` | Available size filter options. |\n| `minPrice` | `number` | `0` | Minimum price filter bound. |\n| `maxPrice` | `number` | `300` | Maximum price filter bound. |\n| `onFilterChange` | `(filters) => void` | `-` | Callback fired on any filter adjustment. |\n\n```tsx\nimport { FilterSidebar } from \"@deneb-ui/ui\";\n```\n\n\n### Data & State Engine (2 Components)\n\n#### 39. SiteDataProvider (`@deneb-ui/ui`)\n\nHeadless state engine connecting Fivora API and live window postMessage updates to storefront components without page reloads.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `initialData` | `SiteData` | `-` | Initial JSON content. |\n| `api` | `SiteDataApiConfig` | `-` | Live backend API endpoints. |\n\n```tsx\nimport { SiteDataProvider, useProducts } from \"@deneb-ui/ui\";\n```\n\n#### 40. ThemeStyles (`@deneb-ui/ui`)\n\nRuntime CSS custom properties injector for dynamic color palettes, typography, and border radii with pre-configured industry presets.\n\n| Prop | Type | Default | Description |\n| :--- | :--- | :--- | :--- |\n| `theme` | `TemplateTheme` | `-` | Theme configuration object. |\n| `preset` | `any` | `-` | Pre-configured preset name. |\n\n```tsx\nimport { ThemeStyles } from \"@deneb-ui/ui\";\n```\n\n---\n\n## 5. Complete Storefront Architecture Examples\n\n### 5.1 Root Layout Setup (`src/app/layout.tsx`)\n```tsx\nimport \"./globals.css\";\nimport { SiteDataProvider, ThemeStyles, ResponsiveBaseStyles, CartProvider } from \"@deneb-ui/ui\";\nimport initialSiteData from \"@/data/site-data.json\";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\" className=\"scroll-smooth\">\n      <head>\n        <ThemeStyles theme={initialSiteData.theme} />\n        <ResponsiveBaseStyles />\n      </head>\n      <body className=\"bg-[#090D1A] text-slate-100 antialiased min-h-screen\">\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          <CartProvider>\n            {children}\n          </CartProvider>\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}\n```\n\n### 5.2 Main Storefront Page (`src/app/page.tsx`)\n```tsx\n\"use client\";\n\nimport {\n  useSiteData,\n  useProducts,\n  Navbar,\n  Footer,\n  Hero,\n  ProductGrid,\n  ProductCard,\n  CartDrawer,\n  FilterSidebar,\n  CustomerReviews,\n  TrustBadges,\n  StickyMobileBar,\n  BusinessHours,\n  ContactActions,\n  FAQAccordion,\n  AnnouncementBar\n} from \"@deneb-ui/ui\";\nimport { useState } from \"react\";\n\nexport default function HomePage() {\n  const siteData = useSiteData();\n  const products = useProducts();\n  const content = siteData?.content ?? {};\n  const [activeCategory, setActiveCategory] = useState(\"All\");\n\n  const filteredProducts = activeCategory === \"All\"\n    ? products\n    : products.filter(p => p.category === activeCategory);\n\n  return (\n    <div className=\"flex flex-col min-h-screen\">\n      {/* Top Announcement */}\n      <AnnouncementBar\n        message=\"Free express delivery on all orders over $100\"\n        linkText=\"Shop Now\"\n        href=\"#products\"\n      />\n\n      {/* Header Navigation */}\n      <Navbar\n        brandName={siteData?.shop?.name ?? \"Artisan Store\"}\n        links={[\n          { label: \"Home\", href: \"/\" },\n          { label: \"Products\", href: \"#products\" },\n          { label: \"Reviews\", href: \"#reviews\" },\n          { label: \"Contact\", href: \"#contact\" }\n        ]}\n      />\n\n      {/* Hero Showcase */}\n      <Hero\n        layout=\"split\"\n        title={content?.hero?.title ?? \"Bespoke Footwear Engineered for Distinction\"}\n        description={content?.hero?.subtitle ?? \"Handcrafted micro-batch leather shoes.\"}\n        image={content?.hero?.image ?? \"https://images.unsplash.com/photo-1542291026-7eec264c27ff\"}\n      />\n\n      {/* Trust & Guarantee Strip */}\n      <div className=\"max-w-7xl mx-auto px-4 py-8 w-full\">\n        <TrustBadges />\n      </div>\n\n      {/* Commerce Catalog with Filter Sidebar */}\n      <section id=\"products\" className=\"max-w-7xl mx-auto px-4 py-16 w-full space-y-8\">\n        <div className=\"text-center space-y-3\">\n          <h2 className=\"text-3xl font-bold text-white tracking-tight\">Curated Collection</h2>\n          <p className=\"text-sm text-slate-400\">Discover handpicked styles designed to last.</p>\n        </div>\n\n        <div className=\"grid grid-cols-1 lg:grid-cols-4 gap-8 items-start\">\n          <FilterSidebar\n            categories={[\"All\", \"Running\", \"Lifestyle\", \"Formal\"]}\n            onFilterChange={(f) => setActiveCategory(f.selectedCategories[0] || \"All\")}\n          />\n\n          <div className=\"lg:col-span-3\">\n            <ProductGrid cols={3} gap=\"lg\">\n              {filteredProducts.map((product, idx) => (\n                <ProductCard\n                  key={product.id || idx}\n                  title={product.title}\n                  price={product.price}\n                  compareAtPrice={product.compareAtPrice}\n                  currency={product.currency ?? \"$\"}\n                  image={product.image}\n                  whatsappNumber={siteData?.shop?.whatsapp}\n                />\n              ))}\n            </ProductGrid>\n          </div>\n        </div>\n      </section>\n\n      {/* Reviews & Social Proof */}\n      <section id=\"reviews\" className=\"bg-[#0C0F1A] py-16 border-y border-slate-800/60\">\n        <div className=\"max-w-7xl mx-auto px-4\">\n          <CustomerReviews />\n        </div>\n      </section>\n\n      {/* Business Hours & Support */}\n      <section id=\"contact\" className=\"max-w-7xl mx-auto px-4 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8\">\n        <BusinessHours schedule={content?.businessHours} />\n        <div className=\"p-8 rounded-2xl border border-slate-800 bg-[#0E1220] flex flex-col justify-center space-y-4\">\n          <h3 className=\"text-xl font-bold text-white\">Instant Concierge Support</h3>\n          <p className=\"text-sm text-slate-400\">Order directly with our personal shoppers via WhatsApp or phone.</p>\n          <ContactActions\n            whatsapp={siteData?.shop?.whatsapp}\n            phone={siteData?.shop?.phone}\n            email={siteData?.shop?.email}\n          />\n        </div>\n      </section>\n\n      {/* Cart Drawer */}\n      <CartDrawer\n        whatsappNumber={siteData?.shop?.whatsapp ?? \"15550192834\"}\n        storeName={siteData?.shop?.name ?? \"Artisan Store\"}\n      />\n\n      {/* Sticky Mobile Bar */}\n      <StickyMobileBar\n        whatsappNumber={siteData?.shop?.whatsapp}\n        phone={siteData?.shop?.phone}\n      />\n\n      {/* Footer */}\n      <Footer\n        brandName={siteData?.shop?.name ?? \"Artisan Store\"}\n        copyright={`\u00a9 ${new Date().getFullYear()} ${siteData?.shop?.name ?? \"Artisan Store\"}. All rights reserved.`}\n      />\n    </div>\n  );\n}\n```\n\n### 5.3 Static Route for Dynamic Product Pages (`src/app/products/[id]/page.tsx`)\n```tsx\nimport initialSiteData from \"@/data/site-data.json\";\nimport { ProductDetail } from \"@deneb-ui/ui\";\n\n// REQUIRED FOR STATIC EXPORT:\nexport function generateStaticParams() {\n  const products = initialSiteData.content?.products || [];\n  return products.map((p) => ({ id: p.id }));\n}\n\nexport default async function ProductPage({\n  params,\n}: {\n  params: Promise<{ id: string }>;\n}) {\n  const { id } = await params;\n  const products = initialSiteData.content?.products || [];\n  const product = products.find((p) => p.id === id) || products[0];\n\n  return (\n    <main className=\"max-w-6xl mx-auto px-4 py-12\">\n      <ProductDetail product={product} />\n    </main>\n  );\n}\n```\n\n---\n\n## 6. Step-by-Step AI Conversion Workflow\n\nWhen using an AI assistant (ChatGPT, Claude, Cursor, Antigravity) to convert an existing storefront into a Fivora template:\n\n1. **Step 1: Content Extraction**:\n   Extract all static store text, photos, categories, and products into `src/data/site-data.json`.\n2. **Step 2: Component Replacement**:\n   Replace custom buttons, cards, headers, grids, drawers, reviews, and filters with the corresponding `@deneb-ui/ui` components from the Master Catalog above.\n3. **Step 3: Attach Visual Markers**:\n   Add `data-preview-field-path`, `data-preview-list-path`, and `data-preview-item-path` to all editable text and lists.\n4. **Step 4: Dynamic State Binding**:\n   Replace static hardcoded data with `useProducts()`, `useSiteData()`, or `siteData.content.*`.\n5. **Step 5: Static Export Validation**:\n   Ensure `output: 'export'` in `next.config.ts`, `generateStaticParams()` on all dynamic `[id]` pages, and no server-side secrets.\n6. **Step 6: Preflight & Package**:\n   ```bash\n   npx @deneb-ui/cli validate\n   npx @deneb-ui/cli package\n   ```\n";

  const handleCopyPage = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(AI_MASTER_PROMPT);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = AI_MASTER_PROMPT;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy AI prompt:', err);
    }
  };

  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Architecture & Stack' },
    { id: 'pathways', title: 'Choose Setup Pathway' },
    { id: 'conversion-steps', title: 'Convert Existing Frontend' },
    { id: 'visual-markers', title: 'Visual Marker Rules' },
    { id: 'component-catalog', title: 'All 40 Components & Props' },
    { id: 'full-templates', title: 'Complete Storefront Example' },
    { id: 'standard-vs-premium', title: 'Standard vs. Premium' },
    { id: 'testing-lab', title: 'Local Visual Lab & Validation' },
    { id: 'packaging', title: 'Packaging & Upload' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  return (
    <div suppressHydrationWarning className="flex w-full gap-8 lg:gap-10">
      <div ref={contentRef} className="flex-1 min-w-0 py-6 space-y-12">
        {/* Breadcrumb & Copy Action */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Link href="/docs/introduction" className="hover:text-white transition-colors">
              Docs
            </Link>
            <span>/</span>
            <span className="text-[#818CF8] font-semibold">Set Up Fivora</span>
          </div>

          <div data-no-copy className="shrink-0">
            <button
              onClick={handleCopyPage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#23283B] bg-[#0E1220]/80 hover:bg-[#161B2E] text-[#94A3B8] hover:text-white hover:border-[#818CF8]/40 transition-all text-xs font-medium shadow-sm hover:shadow-md active:scale-95 group cursor-pointer"
              title="Copy entire page content"
              aria-label="Copy entire page content"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span className="text-[#4ADE80] font-medium">Copied AI Guide!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#818CF8] group-hover:text-white transition-colors" />
                  <span>Copy Master Prompt (All 40 Components)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Set Up Fivora Templates
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1 shadow-[0_0_12px_rgba(129,140,248,0.2)]">
              <DenebStarIcon className="w-2.5 h-2.5" />
              v2.0 Spec
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The definitive developer guide to authoring storefront templates for <strong className="text-white">Fivora</strong> using the <strong className="text-white">DENEB UI</strong> ecosystem. Learn how to build new templates or convert an existing Next.js frontend into a fully editable visual storefront.
          </p>
        </div>

        {/* Quick AI Prompt Copy Hero Box */}
        <div data-no-copy className="p-4 sm:p-5 rounded-2xl border border-[#6366F1]/30 bg-gradient-to-r from-[#6366F1]/10 via-[#0A0D17] to-[#818CF8]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>Convert Existing Template with AI in Seconds</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl">
              Copy the exhaustive DENEB UI v2.0 specification—including installation, architecture, visual editing rules, and complete code examples & props for all 40 components—directly into <strong className="text-white">ChatGPT, Claude, Cursor, or Antigravity</strong> to convert or generate your storefront template instantly.
            </p>
          </div>
          <button
            onClick={handleCopyPage}
            className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] hover:from-[#4F46E5] hover:to-[#6366F1] text-white text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Master Prompt Copied!' : 'Copy Master AI Prompt (All 40 Components)'}</span>
          </button>
        </div>

        {/* Architecture & Stack Overview */}
        <section id="overview" className="space-y-5">
          <div className="p-5 sm:p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/25">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">The Fivora Developer Stack</h2>
                <p className="text-xs text-[#94A3B8]">Understanding the relationship between Fivora, DENEB UI, and your Next.js storefront.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              A <strong className="text-white">Fivora Template</strong> is a modern Next.js static storefront. When a merchant purchases your template in Fivora, they can click directly on any headline, description, product card, or photo in a live iframe preview to customize it in real time, or use Fivora&apos;s AI assistant to restyle the site.
            </p>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0E1220] font-mono text-xs text-[#94A3B8] overflow-x-auto space-y-1">
              <div className="text-[#818CF8] font-bold">┌── Fivora Merchant Application / Website Agent</div>
              <div>│   └── Visual click-to-edit canvas (Iframe Parent)</div>
              <div>▼   (Bidirectional postMessage handshake: FIVORA_PREVIEW_READY)</div>
              <div className="text-emerald-400 font-bold">├── Your Next.js Storefront (Iframe Child)</div>
              <div>│   ├── @deneb-ui/ui (SiteDataProvider + Click-to-Edit Primitives)</div>
              <div>│   ├── src/data/site-data.json (Single source of truth)</div>
              <div>│   └── fivora-template.json (Manifest v2 specification)</div>
              <div className="text-indigo-400 font-bold">└── @deneb-ui/cli (deneb lab, deneb validate, deneb package)</div>
            </div>

            {/* Official Package Warning Callout */}
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-amber-200/90 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Why You Must Use the Official DENEB Packages</span>
              </div>
              <p className="leading-relaxed">
                Do <strong>NOT</strong> attempt to handwrite custom <code className="bg-black/40 px-1 py-0.5 rounded text-amber-100 font-mono">window.addEventListener(&apos;message&apos;)</code> listeners or custom DOM marker attributes. Handcrafted protocols fail Fivora origin verification, drop rapid keystrokes during live editing, and will be automatically rejected by the preflight ingest validator.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Pathway Selector */}
        <section id="pathways" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Choose Your Setup Pathway
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Select whether you are converting an existing running React/Next.js frontend or scaffolding a new project from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActivePathway('convert')}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                activePathway === 'convert'
                  ? 'border-[#818CF8] bg-[#121625] shadow-[0_0_24px_rgba(129,140,248,0.2)]'
                  : 'border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/40'
              }`}
            >
              {activePathway === 'convert' && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                  Active View
                </span>
              )}
              <div className="space-y-2">
                <div className="p-2 w-fit rounded-xl bg-[#818CF8]/15 text-[#818CF8]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Convert Existing Frontend</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  You already have a running Next.js / Tailwind storefront and want to integrate DENEB UI and wire it for Fivora live visual editing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B] text-xs font-semibold text-[#818CF8] flex items-center gap-1">
                <span>View Step-by-Step Conversion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => setActivePathway('scratch')}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                activePathway === 'scratch'
                  ? 'border-[#818CF8] bg-[#121625] shadow-[0_0_24px_rgba(129,140,248,0.2)]'
                  : 'border-[#23283B] bg-[#0A0D17] hover:border-[#818CF8]/40'
              }`}
            >
              {activePathway === 'scratch' && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
                  Active View
                </span>
              )}
              <div className="space-y-2">
                <div className="p-2 w-fit rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Start Fresh (Greenfield)</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Scaffold a complete, pre-configured Next.js template in seconds using the official DENEB scaffolding CLI.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#23283B] text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span>View Scaffolding Command</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </section>

        {/* Greenfield Quick Section (Shown when scratch selected) */}
        {activePathway === 'scratch' && (
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-[#0A0D17] to-emerald-950/20 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Scaffolding a New Fivora Template</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              Run this single command in your terminal. It creates a Next.js App Router project with pre-configured <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">fivora-template.json</code>, <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">site-data.json</code>, and DENEB smart action components:
            </p>
            <CodeBlock code="npx @deneb-ui/create-template my-store" language="bash" />
            <p className="text-xs text-[#94A3B8]">
              Once scaffolded, run <code className="text-[#818CF8] font-mono">cd my-store && npm install && npm run dev</code> to launch your storefront.
            </p>
          </div>
        )}

        {/* Step-by-Step Conversion Guide (Core Focus) */}
        <section id="conversion-steps" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Converting an Existing Running Frontend
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Follow these sequential steps to convert your existing React / Next.js frontend into a fully compliant Fivora template, or use the 1-command automated converter.
            </p>
          </div>

          {/* Automated Conversion Quick Callout */}
          <div className="p-5 rounded-2xl border border-[#818CF8]/30 bg-gradient-to-r from-[#818CF8]/10 via-[#0A0D17] to-[#818CF8]/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles className="w-4 h-4 text-[#818CF8]" />
              <span>Instant 1-Command Auto-Conversion with <code className="text-[#A5B4FC] font-mono">deneb init</code> (Recommended)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              If your storefront is already built with <strong className="text-white">shadcn/ui</strong>, <strong className="text-white">HeroUI</strong>, or <strong className="text-white">Tailwind CSS</strong>, you do not have to write markers manually. Simply run <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">npx @deneb-ui/cli init</code>. The DENEB converter engine automatically detects your UI framework, mounts <code className="text-white font-mono">SiteDataProvider</code> in your root layout, extracts all hardcoded text, images, and search placeholders into <code className="text-white font-mono">site-data.json</code>, and instruments your JSX elements with <code className="text-white font-mono">data-preview-field-path</code> markers in seconds!
            </p>
            <CodeBlock code="npx @deneb-ui/cli init" language="bash" />
          </div>

          {/* STEP 1 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                1
              </span>
              <h3 className="text-base font-bold text-white">Install Official Packages</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Install the runtime visual editing framework in <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">dependencies</code> and the CLI tools in <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">devDependencies</code>:
            </p>
            <CodeBlock
              code={`# Runtime framework:\nnpm install @deneb-ui/ui\n\n# CLI validator & packaging tools:\nnpm install -D @deneb-ui/cli`}
              language="bash"
            />
            <p className="text-xs text-[#94A3B8]">
              Next, add the authoring and validation scripts to your <code className="text-[#818CF8] font-mono">package.json</code>:
            </p>
            <CodeBlock
              filename="package.json"
              code={`"scripts": {\n  "dev": "next dev",\n  "build": "next build",\n  "lab": "deneb lab .",\n  "validate": "deneb validate .",\n  "zip": "deneb zip .",\n  "package:template": "deneb package .",\n  "update:deneb": "deneb update"\n}`}
              language="json"
            />
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                2
              </span>
              <h3 className="text-base font-bold text-white">Create Template Manifest (<code className="text-[#818CF8] font-mono">fivora-template.json</code>)</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Place <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">fivora-template.json</code> at the root of your repository. This is the contract Fivora reads to know your framework version, declared pages, and editing rules:
            </p>
            <CodeBlock
              filename="fivora-template.json"
              code={`{\n  "framework": "nextjs-static-export",\n  "version": 2,\n  "visualEditing": {\n    "contractVersion": 1,\n    "mode": "strict"\n  },\n  "siteDataFile": "src/data/site-data.json",\n  "outputDirectory": "out",\n  "installCommand": "npm install",\n  "buildCommand": "npm run build",\n  "basePathEnvVar": "NEXT_PUBLIC_SITE_BASE_PATH",\n  "pages": [\n    { "id": "home", "label": "Home", "route": "/", "required": true },\n    { "id": "products", "label": "Products", "route": "/products" },\n    { "id": "about", "label": "About Us", "route": "/about" },\n    { "id": "contact", "label": "Contact", "route": "/contact", "required": true }\n  ]\n}`}
              language="json"
            />
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                3
              </span>
              <h3 className="text-base font-bold text-white">Configure Static Export & Base Path</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Fivora storefronts are hosted as static exports with dynamic base paths in merchant subdomains. Configure <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">next.config.ts</code>:
            </p>
            <CodeBlock
              filename="next.config.ts"
              code={`import type { NextConfig } from "next";\n\nconst basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || '';\n\nconst nextConfig: NextConfig = {\n  output: 'export',\n  basePath: basePath ? basePath : undefined,\n  assetPrefix: basePath ? \`\${basePath}/\` : undefined,\n  images: {\n    unoptimized: true,\n  },\n};\n\nexport default nextConfig;`}
              language="typescript"
            />
          </div>

          {/* STEP 4 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                4
              </span>
              <h3 className="text-base font-bold text-white">Centralize Content in <code className="text-[#818CF8] font-mono">src/data/site-data.json</code></h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Extract all hardcoded text, demo products, business contact details, and images into <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">src/data/site-data.json</code>. This file represents the merchant&apos;s initial data:
            </p>
            <CodeBlock
              filename="src/data/site-data.json"
              code={`{\n  "project": {\n    "id": "demo-store",\n    "name": "Nova Storefront",\n    "businessEmail": "merchant@example.com"\n  },\n  "requirements": {\n    "requiredPages": ["home", "products", "about", "contact"]\n  },\n  "content": {\n    "common": {\n      "websiteTitle": "Nova Store",\n      "shortDescription": "Engineered for modern living.",\n      "business": {\n        "phone": "+1 (555) 482-9012",\n        "whatsapp": "15554829012",\n        "email": "hello@novastore.com",\n        "location": {\n          "address": "742 Evergreen Celestial Way",\n          "city": "San Francisco",\n          "country": "USA"\n        }\n      }\n    },\n    "home": {\n      "heroBadge": "New Arrivals",\n      "heroTitle": "Engineered for Modern Web Commerce",\n      "heroSubtitle": "Everything you need to craft high-converting storefronts.",\n      "heroCtaText": "Explore Products"\n    }\n  }\n}`}
              language="json"
            />
          </div>

          {/* STEP 5 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                5
              </span>
              <h3 className="text-base font-bold text-white">Mount the Live Preview Bridge (<code className="text-[#818CF8] font-mono">SiteDataProvider</code>)</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Wrap your root layout with <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">SiteDataProvider</code> from <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">@deneb-ui/ui</code>. This automatically establishes the bidirectional handshake with the Fivora live editor:
            </p>
            <CodeBlock
              filename="src/app/layout.tsx"
              code={`import { SiteDataProvider } from '@deneb-ui/ui';\nimport initialSiteData from '@/data/site-data.json';\nimport '@/app/globals.css';\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en" suppressHydrationWarning>\n      <body suppressHydrationWarning>\n        <SiteDataProvider initialSiteData={initialSiteData}>\n          {children}\n        </SiteDataProvider>\n      </body>\n    </html>\n  );\n}`}
              language="tsx"
            />
          </div>

          {/* STEP 6 */}
          <div className="p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#818CF8]/20 text-[#818CF8] font-bold text-xs flex items-center justify-center border border-[#818CF8]/30">
                6
              </span>
              <h3 className="text-base font-bold text-white">Wire Visual Markers & Commerce Primitives</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Connect your existing components to live data using <code className="text-white font-mono bg-black/40 px-1.5 py-0.5 rounded">useSiteData()</code> and visual editing markers:
            </p>

            {/* Before vs After Tab */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#CBD5E1]">
                Before vs. After Conversion:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/10 space-y-2">
                  <div className="text-xs font-bold text-rose-400">❌ Before: Static Hardcoded JSX</div>
                  <pre className="text-[11px] font-mono text-rose-200/80 leading-relaxed overflow-x-auto">
{`<section className="hero">
  <h1>Engineered for Living</h1>
  <p>Minimalist collection.</p>
  <a href="tel:+15554829012">Call Us</a>
</section>`}
                  </pre>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 space-y-2">
                  <div className="text-xs font-bold text-emerald-400">✔️ After: Fivora-Enabled DENEB UI</div>
                  <pre className="text-[11px] font-mono text-emerald-200/80 leading-relaxed overflow-x-auto">
{`<section className="hero">
  <h1 data-preview-field-path="home.heroTitle">
    {home.heroTitle}
  </h1>
  <p data-preview-field-path="home.heroSubtitle">
    {home.heroSubtitle}
  </p>
  <ContactActions
    phone={business.phone}
    whatsapp={business.whatsapp}
    email={business.email}
  />
</section>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Marker Rules */}
        <section id="visual-markers" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#818CF8]" />
              <span>Visual Marker Rules for the Live Editor</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Fivora&apos;s live editor highlights elements and focuses sidebar controls based on these DOM data attributes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">1. Route Marker</h4>
              <p className="text-xs text-[#94A3B8]">
                Place <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-page-key=&quot;&lt;id&gt;&quot;</code> on the root <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">&lt;main&gt;</code> of each page:
              </p>
              <CodeBlock code={`<main data-preview-page-key="home">...</main>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">2. Leaf Text / Media</h4>
              <p className="text-xs text-[#94A3B8]">
                Place <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-field-path</code> on the leaf element (<code className="text-white font-mono">h1</code>, <code className="text-white font-mono">p</code>, <code className="text-white font-mono">img</code>), never on a broad <code className="text-white font-mono">div</code>:
              </p>
              <CodeBlock code={`<h2 data-preview-field-path="home.title">{home.title}</h2>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">3. Repeatable Lists</h4>
              <p className="text-xs text-[#94A3B8]">
                Wrap collections with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-list-path</code>. <strong>Must stay mounted even if array is empty</strong>:
              </p>
              <CodeBlock code={`<div data-preview-list-path="home.products">\n  {products.map((p, i) => (\n    <div key={i} data-preview-item-path={\`home.products[\${i}]\`}>\n      <span data-preview-field-path={\`home.products[\${i}].name\`}>{p.name}</span>\n    </div>\n  ))}\n</div>`} language="tsx" />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <h4 className="text-xs font-bold text-[#818CF8] font-mono uppercase">4. Decorative Elements</h4>
              <p className="text-xs text-[#94A3B8]">
                Mark non-editable background icons or dividers with <code className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">data-preview-static</code>. Never put editable children inside static ancestors:
              </p>
              <CodeBlock code={`<span data-preview-static="footer-divider" className="border-t" />`} language="tsx" />
            </div>
          </div>
        </section>


        {/* Master Component Catalog & Usage Guide (All 40 Components) */}
        <section id="component-catalog" className="space-y-8 pt-8 border-t border-[#23283B]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Exhaustive Component Reference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Master Component Catalog (All 40 Components)
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
              Complete reference for every component in <code className="text-white font-mono">@deneb-ui/ui</code>. Each component is fully instrumented for Fivora visual click-to-edit synchronization, includes full props definitions, and copy-pasteable JSX usage code.
            </p>
          </div>

          <div className="space-y-12">
            {[
              'Core Primitives',
              'Smart Commerce Actions',
              'Location & Navigation',
              'Social & Business',
              'Storefront Sections',
              'Data & Theme Engine',
            ].map((catName) => {
              const catComponents = Object.entries(COMPONENT_DOCS).filter(
                ([_, doc]) => doc.category === catName
              );
              if (catComponents.length === 0) return null;

              return (
                <div key={catName} className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#23283B]">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {catName}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20 font-semibold">
                      {catComponents.length} components
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {catComponents.map(([slug, comp]) => (
                      <div
                        key={slug}
                        id={`comp-${slug}`}
                        className="p-5 sm:p-6 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4 shadow-xl hover:border-[#818CF8]/40 transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/docs/components/${slug}`}
                              className="text-lg font-bold text-white hover:text-[#818CF8] transition-colors flex items-center gap-2 group"
                            >
                              <span>{comp.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#818CF8] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                            {comp.badge && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#6366F1]/15 text-[#A5B4FC] border border-[#6366F1]/30">
                                {comp.badge}
                              </span>
                            )}
                          </div>
                          <code className="text-xs font-mono text-[#818CF8] bg-[#818CF8]/10 px-2 py-1 rounded border border-[#818CF8]/20">
                            import &#123; {comp.title} &#125; from &quot;@deneb-ui/ui&quot;
                          </code>
                        </div>

                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                          {comp.description}
                        </p>

                        {/* Props Reference Table */}
                        {comp.props && comp.props.length > 0 && (
                          <div className="space-y-2 pt-2">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                              <span>Props Reference</span>
                            </div>
                            <div className="overflow-x-auto rounded-xl border border-[#23283B] bg-[#0E1220]/60">
                              <table className="w-full text-left text-xs">
                                <thead className="border-b border-[#23283B] bg-[#0E1220] text-[#CBD5E1] uppercase font-mono tracking-wider text-[11px]">
                                  <tr>
                                    <th className="px-3.5 py-2.5">Prop</th>
                                    <th className="px-3.5 py-2.5">Type</th>
                                    <th className="px-3.5 py-2.5">Default</th>
                                    <th className="px-3.5 py-2.5">Description</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-[#94A3B8]">
                                  {comp.props.map((p) => (
                                    <tr key={p.name} className="hover:bg-white/[0.02] transition-colors">
                                      <td className="px-3.5 py-2 font-mono font-semibold text-[#818CF8]">
                                        {p.name}
                                      </td>
                                      <td className="px-3.5 py-2 font-mono text-[#CBD5E1]">{p.type}</td>
                                      <td className="px-3.5 py-2 font-mono text-[#64748B]">
                                        {p.defaultValue || '—'}
                                      </td>
                                      <td className="px-3.5 py-2 leading-relaxed">{p.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Copyable Usage Code */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Copy-Paste Usage Example</span>
                          </div>
                          <CodeBlock code={comp.usageCode} language="tsx" filename={`${slug}.tsx`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Complete Storefront Architecture Examples */}
        <section id="full-templates" className="space-y-8 pt-8 border-t border-[#23283B]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Full Production Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Complete Storefront Code Examples
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
              Copy-pasteable full page code integrating all components with Fivora visual markers, static export routes, and live state.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">1. Root Layout (src/app/layout.tsx)</h3>
              <CodeBlock
                language="tsx"
                filename="src/app/layout.tsx"
                code={`import "./globals.css";
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
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">2. Main Storefront Page (src/app/page.tsx)</h3>
              <CodeBlock
                language="tsx"
                filename="src/app/page.tsx"
                code={`"use client";

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
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">3. Static Product Route (src/app/products/[id]/page.tsx)</h3>
              <CodeBlock
                language="tsx"
                filename="src/app/products/[id]/page.tsx"
                code={`import initialSiteData from "@/data/site-data.json";
import { ProductDetail } from "@deneb-ui/ui";

// REQUIRED FOR NEXT.JS STATIC EXPORT:
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
}`}
              />
            </div>
          </div>
        </section>

        {/* Standard vs Premium */}
        <section id="standard-vs-premium" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Standard vs. Premium Tier: How to Decide
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Both tiers share the <strong>exact same codebase and manifest v2 contract</strong>. You decide whether to list as Standard or Premium based on design tokenization:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Feature</th>
                  <th className="p-3 sm:p-4">Standard Template</th>
                  <th className="p-3 sm:p-4 text-[#818CF8]">Premium Template</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Aesthetic Goal</td>
                  <td className="p-3 sm:p-4">Fixed, opinionated composition</td>
                  <td className="p-3 sm:p-4 text-white">Dynamic, versatile design system</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Merchant Customization</td>
                  <td className="p-3 sm:p-4">Manual design panel (accent colors)</td>
                  <td className="p-3 sm:p-4 text-white">AI-Assisted Design Restyling + Controls</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Design Tokens (<code className="text-[#818CF8] font-mono">themeSchema</code>)</td>
                  <td className="p-3 sm:p-4">Optional</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">Required in fivora-template.json</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-white">Section Targeting</td>
                  <td className="p-3 sm:p-4">Page-level</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">data-design-section on every major section</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Local Visual Lab & Preflight Validation */}
        <section id="testing-lab" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#818CF8]" />
              <span>Local Visual Lab & Validation</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Test and certify your template locally before uploading to the Developer Portal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3">
              <div className="flex items-center gap-2 text-[#818CF8] font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>1. Launch Visual Lab</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Opens a local simulation of the Fivora Merchant Editor at <code className="text-white font-mono">http://localhost:3001</code> with an interactive field inspector:
              </p>
              <CodeBlock code="npm run lab\n# Or: deneb lab ." language="bash" />
            </div>

            <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>2. Run Preflight Validator</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Verifies manifest integrity, tests probe data injection, audits static markers, and ensures zero broken links:
              </p>
              <CodeBlock code="npm run validate\n# Or: deneb validate ." language="bash" />
            </div>
          </div>
        </section>

        {/* Packaging & Upload */}
        <section id="packaging" className="space-y-6 pt-6 border-t border-[#23283B]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-[#818CF8]" />
              <span>Packaging & Submitting</span>
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Do not use manual OS zip tools. Always package using the DENEB CLI:
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#23283B] bg-[#0A0D17] space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-white">1-Step Preflight Validation & Clean Packaging (Recommended)</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Runs preflight verification and packages a clean <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">fivora-template.zip</code> only when all platform checks pass:
              </p>
              <CodeBlock code="npm run validate-and-zip\n# Or: deneb validate-and-zip .\n# Or: deneb validate and zip" language="bash" />
            </div>

            <div className="pt-3 border-t border-[#23283B] space-y-2">
              <div className="text-sm font-bold text-white">Quick Clean ZIP (Fast packaging without sandbox)</div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Quickly strips <code className="text-white font-mono">node_modules</code>, <code className="text-white font-mono">.next</code>, <code className="text-white font-mono">.git</code>, and <code className="text-white font-mono">.env*</code> to generate <code className="text-white font-mono">fivora-template.zip</code>:
              </p>
              <CodeBlock code="npm run zip\n# Or: deneb zip ." language="bash" />
            </div>

            <div className="pt-3 border-t border-[#23283B] space-y-2">
              <div className="text-sm font-bold text-white">Developer Portal Submission Steps:</div>
              <ol className="list-decimal list-inside text-xs text-[#94A3B8] space-y-1.5 leading-relaxed">
                <li>Log in to the <strong className="text-white">Fivora Developer Portal</strong>.</li>
                <li>Click <strong className="text-white">Create Template</strong>.</li>
                <li>Upload your verified <code className="text-[#818CF8] font-mono">fivora-template.zip</code>.</li>
                <li>Upload a WebP thumbnail preview (16:9 ratio).</li>
                <li>Select your listing tier (<strong className="text-white">Standard</strong> or <strong className="text-white">Premium</strong>).</li>
                <li>Click <strong className="text-white">Submit for Review</strong>.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="space-y-4 pt-6 border-t border-[#23283B]">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#818CF8]" />
            <span>Troubleshooting Common Preflight Errors</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3">Error Message</th>
                  <th className="p-3">Cause</th>
                  <th className="p-3">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 font-mono text-rose-300">Editable marker has static ancestor</td>
                  <td className="p-3">An editable field is inside an element marked <code className="text-white font-mono">data-preview-static</code>.</td>
                  <td className="p-3 text-white">Move static markers exclusively to decorative borders/icons.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">Marker cannot be placed on broad container</td>
                  <td className="p-3">Field marker placed on <code className="text-white font-mono">div</code>, <code className="text-white font-mono">section</code>, or <code className="text-white font-mono">footer</code>.</td>
                  <td className="p-3 text-white">Place <code className="text-white font-mono">data-preview-field-path</code> on leaf <code className="text-white font-mono">h1-h6</code>, <code className="text-white font-mono">p</code>, <code className="text-white font-mono">span</code>, or <code className="text-white font-mono">img</code>.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-rose-300">Cannot read properties of undefined (reading &apos;map&apos;)</td>
                  <td className="p-3">Component crashes when list is empty during probe testing.</td>
                  <td className="p-3 text-white">Add defensive fallbacks: <code className="text-[#818CF8] font-mono">const items = content?.products || [];</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-[#23283B] flex items-center justify-between">
          <Link
            href="/docs/installation"
            className="text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Installation
          </Link>
          <Link
            href="/docs/theming"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Theming & Tokens</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right Sidebar Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
