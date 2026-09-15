'use client';

import React, { useState } from 'react';
import {
  ContactActions,
  WhatsAppButton,
  PhoneButton,
  EmailButton,
  LocationCard,
  LocationLink,
  Address,
  SocialLinks,
  SocialButton,
  BusinessHours,
  FloatingContactWidget,
  Button as DenebButton,
  Card as DenebCard,
  Badge as DenebBadge,
  Heading as DenebHeading,
  ProductCard,
  ProductDetail,
  ProductGrid,
  ProductQuickView,
  CustomerReviews,
  TrustBadges,
  StickyMobileBar,
  PricingCard,
  TestimonialCard,
  ServiceCard,
  Accordion as FAQAccordion,
  AnnouncementBar,
  CategoryPills,
  ContactForm,
  CartDrawer,
  FilterSidebar,
  CartProvider,
  useCart,
  GoogleFeedback,
  TestimonialSection,
  Map as DenebMap,
  THEME_PRESETS,
} from '@/components/deneb-ui';
import { ComponentDocPageProps } from './ComponentDocPage';
import {
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Star,
  ShoppingBag,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Maximize2,
  Mail,
  Database,
  Palette,
} from 'lucide-react';
import { DenebStarIcon } from '@/components/brand/DenebLogo';


// ==========================================
// Interactive Component Showcase Demos
// ==========================================

function InteractiveButtonDemo() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      <button
        onClick={() => setClicked(!clicked)}
        className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white shadow-[0_0_20px_rgba(129,140,248,0.4)] hover:shadow-[0_0_30px_rgba(129,140,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-0"
      >
        <DenebStarIcon className="w-4 h-4" />
        <span>{clicked ? 'Active Selected!' : 'Primary Celestial'}</span>
      </button>

      <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#121625] text-white border border-[#23283B] hover:border-[#818CF8]/50 hover:bg-[#818CF8]/10 transition-all cursor-pointer">
        Secondary Cosmic
      </button>

      <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-transparent text-[#A5B4FC] border border-[#818CF8]/30 hover:bg-[#818CF8]/15 transition-all cursor-pointer">
        Periwinkle Outline
      </button>
    </div>
  );
}

function InteractiveContactActionsDemo() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4">
      <button className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center gap-2 border-0 cursor-pointer">
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp (1-Click)</span>
      </button>
      <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#141829] hover:bg-[#1E233D] text-white border border-[#23283B] flex items-center gap-2 cursor-pointer">
        <Phone className="w-3.5 h-3.5 text-[#818CF8]" />
        <span>Call: +1 (555) 019-2834</span>
      </button>
      <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#141829] hover:bg-[#1E233D] text-white border border-[#23283B] flex items-center gap-2 cursor-pointer">
        <Mail className="w-3.5 h-3.5 text-[#818CF8]" />
        <span>Email Us</span>
      </button>
    </div>
  );
}

function InteractiveWhatsAppDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={() => alert('Opens https://wa.me/15550192834 with your template inquiry text!')}
        className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 border-0 cursor-pointer"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Order Directly on WhatsApp</span>
      </button>
    </div>
  );
}

function InteractiveLocationCardDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-5 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#818CF8]">
        <MapPin className="w-4 h-4 text-[#818CF8]" />
        <span>Flagship Storefront</span>
      </div>
      <p className="text-xs text-white/90">742 Evergreen Celestial Way, Suite 100, San Francisco, CA</p>
      <div className="pt-2 flex items-center justify-between border-t border-[#23283B] text-xs">
        <span className="text-emerald-400 font-medium">Open Today until 8 PM</span>
        <button
          onClick={() => alert('Opens Google Maps directions!')}
          className="text-[#818CF8] font-bold hover:underline bg-transparent border-0 cursor-pointer"
        >
          Get Directions ↗
        </button>
      </div>
    </div>
  );
}

function InteractiveBusinessHoursDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-5 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#818CF8]" />
          <span className="text-xs font-bold text-white">Business Hours</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          ● Open Now
        </span>
      </div>
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between text-white font-medium">
          <span>Monday – Friday</span>
          <span className="text-[#94A3B8]">09:00 AM – 08:00 PM</span>
        </div>
        <div className="flex justify-between text-white font-medium">
          <span>Saturday</span>
          <span className="text-[#94A3B8]">10:00 AM – 06:00 PM</span>
        </div>
        <div className="flex justify-between text-white font-medium">
          <span>Sunday</span>
          <span className="text-amber-400">Closed</span>
        </div>
      </div>
    </div>
  );
}

function InteractiveSocialDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4">
      {['Instagram', 'WhatsApp', 'Facebook', 'YouTube', 'TikTok', 'X'].map((plat) => (
        <button
          key={plat}
          className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#141829] text-white border border-[#23283B] hover:border-[#818CF8] hover:text-[#818CF8] transition-all cursor-pointer"
        >
          {plat}
        </button>
      ))}
    </div>
  );
}

function InteractivePricingCardDemo() {
  return (
    <div className="w-full max-w-xs mx-auto p-6 rounded-2xl bg-[#0F1424] border-2 border-[#818CF8] shadow-[0_0_30px_rgba(129,140,248,0.2)] space-y-4 text-left">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-white text-base">Storefront Pro</h4>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#818CF8] text-white">
          POPULAR
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-black text-white">$49</span>
        <span className="text-xs text-[#94A3B8]">/ month</span>
      </div>
      <ul className="text-xs text-[#CBD5E1] space-y-2">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full DENEB UI Primitives
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Live WhatsApp Checkout
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Instant Visual Editor Sync
        </li>
      </ul>
      <button className="w-full py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white border-0 cursor-pointer shadow-md">
        Get Started Today
      </button>
    </div>
  );
}

function InteractiveFAQDemo() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: 'How does WhatsApp checkout work?', a: 'Customers click the button, which automatically opens WhatsApp with product details, size, and pricing prefilled for personal concierge checkout.' },
    { q: 'Can I customize store themes dynamically?', a: 'Yes! ThemeStyles resolves your chosen color tokens and fonts instantly on runtime.' },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-2 text-left">
      {faqs.map((f, idx) => (
        <div key={idx} className="rounded-xl bg-[#0F1424] border border-[#23283B] overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full p-3.5 text-xs font-semibold text-white flex justify-between items-center bg-transparent border-0 cursor-pointer text-left"
          >
            <span>{f.q}</span>
            <span className="text-[#818CF8]">{openIdx === idx ? '−' : '+'}</span>
          </button>
          {openIdx === idx && (
            <div className="px-3.5 pb-3.5 text-xs text-[#94A3B8] leading-relaxed border-t border-[#23283B]/50 pt-2">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function InteractiveProductDetailDemo() {
  const sampleProduct = {
    id: 'vanta-aero-x',
    name: 'VANTA Aero X',
    price: 'LKR 32,500',
    originalPrice: 'LKR 38,000',
    description: 'Lightweight performance runner with responsive dual-density foam midsole and breathable engineered mesh.',
    badge: 'BESTSELLER',
    featuredImage: '/products/vanta-aero-x.jpg',
    addToSelectionLabel: 'Add to Selection',
    specsTitle: 'Specifications',
    shippingTitle: 'Shipping & Returns',
    shippingSummary: 'Free Islandwide Delivery within 2-3 business days. Cash on delivery available.',
    shippingReturns: '14-day hassle-free exchanges for unworn footwear in original condition.',
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden shadow-2xl">
      <ProductDetail
        product={sampleProduct}
        sectionPath="demo-product"
        onAddToSelection={(p, size, color) => alert(`Selected ${p.name} - Size: ${size}, Color: ${color}`)}
      />
    </div>
  );
}

function InteractiveProductQuickViewDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const sampleProduct = {
    id: 'quick-1',
    title: 'VANTA Flux 01',
    price: '28,900',
    originalPrice: '34,000',
    currency: 'LKR ',
    badge: 'TRENDING',
    description: 'Retro silhouette engineered with modern comfort stack and shock-absorbing midsole.',
    imageUrl: '/products/vanta-flux-01.jpg',
    inStock: true,
    rating: 4.9,
    reviewCount: 48,
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-xl font-bold text-sm bg-lime-400 text-slate-950 hover:bg-lime-300 shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>Open Product Quick View Modal</span>
      </button>
      <span className="text-xs text-[#94A3B8]">Click to trigger the instant lightbox modal with live visual editing</span>
      <ProductQuickView
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={sampleProduct}
        itemPath="home.product1"
        onAddToCart={(p, qty) => {
          alert(`Added ${qty}x ${p.title} to selection!`);
          setIsOpen(false);
        }}
      />
    </div>
  );
}

function InteractiveProductGridDemo() {
  const [selectedQuickView, setSelectedQuickView] = useState<any>(null);
  const sampleProducts = [
    {
      id: 1,
      name: 'VANTA Aero X',
      category: 'Performance',
      price: 'LKR 32,500',
      badge: 'NEW',
      imageUrl: '/products/vanta-aero-x.jpg',
    },
    {
      id: 2,
      name: 'VANTA Flux 01',
      category: 'Sneakers',
      price: 'LKR 28,900',
      badge: 'EXCLUSIVE',
      imageUrl: '/products/vanta-flux-01.jpg',
    },
    {
      id: 3,
      name: 'VANTA Stealth Pro',
      category: 'Performance',
      price: 'LKR 21,200',
      badge: 'SALE',
      imageUrl: '/products/vanta-stealth-pro.jpg',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden">
      <ProductGrid
        title="New Arrivals"
        subtitle="Just Dropped"
        products={sampleProducts}
        categories={['All', 'Performance', 'Sneakers']}
        sectionPath="demo-grid"
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        onQuickView={(p) => setSelectedQuickView(p)}
      />
      {selectedQuickView && (
        <ProductQuickView
          isOpen={Boolean(selectedQuickView)}
          onClose={() => setSelectedQuickView(null)}
          product={{
            id: String(selectedQuickView.id),
            title: selectedQuickView.name,
            price: selectedQuickView.price,
            imageUrl: selectedQuickView.imageUrl,
            badge: selectedQuickView.badge,
            description: 'Precision-engineered storefront product ready for high conversion.',
          }}
        />
      )}
    </div>
  );
}

function InteractiveCustomerReviewsDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden">
      <CustomerReviews
        title="Runner Verified Feedback"
        subtitle="Authentic Athlete Reviews"
        averageRating="4.9"
        totalReviews="1,420+"
        sectionPath="demo-reviews"
      />
    </div>
  );
}

function InteractiveTrustBadgesDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <TrustBadges />
    </div>
  );
}

function InteractiveStickyMobileBarDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 rounded-2xl border border-[#23283B] bg-[#0E111C]">
      <span className="text-[11px] text-[#94A3B8] block mb-3 text-center">Mobile bottom floating checkout & WhatsApp trigger:</span>
      <StickyMobileBar
        whatsapp="15550192834"
        primaryActionLabel="Order via WhatsApp"
        phone="+15550192834"
      />
    </div>
  );
}

function InteractiveAnnouncementBarDemo() {
  return (
    <div className="w-full p-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-[#818CF8] to-purple-600 text-white text-xs font-semibold flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Summer Flash Drop: Get 20% off all sneakers with code <strong>SOLE20</strong></span>
      </div>
      <button className="text-[10px] px-2 py-0.5 rounded bg-black/40 hover:bg-black/60 text-white border-0 cursor-pointer">
        Claim Now
      </button>
    </div>
  );
}

function InteractiveCategoryPillsDemo() {
  const [active, setActive] = useState('All');
  const cats = ['All', 'Running', 'Casual', 'Formal', 'Boots'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-3">
      {cats.map((c) => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer ${
            active === c
              ? 'bg-[#818CF8] text-white border-[#818CF8] shadow-md font-bold'
              : 'bg-[#121625] text-[#94A3B8] border-[#23283B] hover:text-white'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

function InteractiveContactFormDemo() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="w-full max-w-sm mx-auto p-5 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left"
    >
      <h4 className="font-bold text-white text-sm">Send us a Message</h4>
      <input
        placeholder="Your Full Name"
        required
        className="w-full px-3 py-2 rounded-xl bg-[#141829] border border-[#23283B] text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
      />
      <input
        type="email"
        placeholder="email@example.com"
        required
        className="w-full px-3 py-2 rounded-xl bg-[#141829] border border-[#23283B] text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
      />
      <textarea
        rows={2}
        placeholder="How can we assist your order?"
        required
        className="w-full px-3 py-2 rounded-xl bg-[#141829] border border-[#23283B] text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
      />
      <button
        type="submit"
        className="w-full py-2 rounded-xl text-xs font-bold bg-[#818CF8] hover:bg-[#6366F1] text-white border-0 cursor-pointer"
      >
        {sent ? 'Message Sent Successfully! ✓' : 'Send Message'}
      </button>
    </form>
  );
}

function InteractiveProductCardDemoInner() {
  const { openCart, totalCount } = useCart();
  const [lastWhatsAppQuery, setLastWhatsAppQuery] = useState<string | null>(null);

  const products = [
    {
      id: 'ceylon-spiced-chai',
      name: 'Royal Ceylon Spiced Chai Tea',
      brand: 'Ceylon Organics',
      price: 2450,
      originalPrice: 'LKR 2,900',
      currency: 'LKR',
      category: 'Artisan Tea',
      badge: 'Best Seller',
      description: 'Handcrafted single-origin black tea infused with organic Sri Lankan cardamom, cinnamon, and ginger.',
      imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      whatsappNumber: '94771234567',
      whatsappButtonText: 'Inquire on WhatsApp',
      addToCartButtonText: 'Add to Cart',
    },
    {
      id: 'nuwara-eliya-pekoe',
      name: 'Single Estate Silver Tips Pekoe',
      brand: 'Highland Estate',
      price: 3800,
      currency: 'LKR',
      category: 'High Grown',
      badge: 'Limited Reserve',
      description: 'Sun-dried high altitude silver tips harvested from 6,000ft peaks in Nuwara Eliya, Sri Lanka.',
      imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
      whatsappNumber: '94771234567',
      whatsappButtonText: 'Chat on WhatsApp',
      addToCartButtonText: 'Add to Cart',
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full p-2">
      <div className="flex items-center justify-between pb-3 border-b border-[#23283B]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-neutral-300">Live Dual-Action Demo (LKR + WhatsApp + Cart)</span>
        </div>
        <button
          type="button"
          onClick={openCart}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-600/30 transition-all cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Cart ({totalCount})</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {products.map((p, idx) => (
          <ProductCard
            key={p.id}
            itemPath={`featuredProducts[${idx}]`}
            product={p}
            cardVariant="modern-glass"
            currency="LKR"
            whatsappNumber="94771234567"
            storeName="Ceylon Tea Masters"
            onWhatsAppClick={(prod, url) => {
              setLastWhatsAppQuery(decodeURIComponent(url.split('text=')[1] || ''));
            }}
          />
        ))}
      </div>

      {lastWhatsAppQuery && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
          <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Last Single-Product WhatsApp Message Generated:</span>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[11px] text-neutral-300 bg-black/40 p-2.5 rounded-lg border border-neutral-800">
            {lastWhatsAppQuery}
          </pre>
        </div>
      )}

      <CartDrawer
        whatsappNumber="94771234567"
        storeName="Ceylon Tea Masters"
        currency="LKR"
        freeShippingThreshold={10000}
      />
    </div>
  );
}

function InteractiveProductCardDemo() {
  return (
    <CartProvider>
      <InteractiveProductCardDemoInner />
    </CartProvider>
  );
}

function InteractiveCartDrawerDemoInner() {
  const { openCart, addItem, totalCount, items, getWhatsAppOrderUrl, subtotal } = useCart();
  const [previewMsg, setPreviewMsg] = useState(false);

  const sampleProducts = [
    {
      id: 'lka-cin-1',
      name: 'Organic Ceylon True Cinnamon (100g)',
      brand: 'Ceylon Organics',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'lka-tea-2',
      name: 'Single Estate Artisan Pekoe (250g)',
      brand: 'Highland Tea Co.',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'lka-choc-3',
      name: 'Handcrafted Ceylon Cocoa 70% Dark',
      brand: 'Vanta Artisan',
      price: 2100,
      image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const generatedUrl = getWhatsAppOrderUrl('94771234567', { storeName: 'DENEB Lanka Store', currency: 'LKR' });
  const decodedMessage = decodeURIComponent(generatedUrl.split('text=')[1] || '');

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-5 w-full">
      <p className="text-xs text-neutral-400 text-center max-w-md">
        Add multiple products to test unified WhatsApp order generation. When clicking <strong>Purchase through WhatsApp</strong>, all items are combined into a single structured order chat!
      </p>

      <div className="flex flex-wrap gap-2.5 justify-center">
        {sampleProducts.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => addItem(p)}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#1E2337] text-white hover:bg-[#282F49] border border-[#2D3552] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span className="text-emerald-400 font-bold">+</span>
            <span>{p.name.split(' (')[0]}</span>
            <span className="text-neutral-400 text-[11px]">(LKR {p.price.toLocaleString()})</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={openCart}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>View Cart ({totalCount} items · LKR {subtotal.toLocaleString()})</span>
        </button>

        {items.length > 0 && (
          <button
            type="button"
            onClick={() => setPreviewMsg(!previewMsg)}
            className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#A5B4FC] bg-[#141829] border border-[#2D3552] hover:bg-[#1E233D] transition-colors cursor-pointer"
          >
            {previewMsg ? 'Hide Order Message' : 'Preview WhatsApp Text'}
          </button>
        )}
      </div>

      {previewMsg && items.length > 0 && (
        <div className="w-full max-w-lg mt-2 p-4 rounded-xl bg-black/60 border border-emerald-500/30 text-left">
          <div className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Generated Single-Chat WhatsApp Order:</span>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[11px] text-neutral-300 bg-black/50 p-3 rounded-lg border border-neutral-800 max-h-60 overflow-y-auto">
            {decodedMessage}
          </pre>
        </div>
      )}

      <CartDrawer
        whatsappNumber="94771234567"
        storeName="DENEB Lanka Store"
        currency="LKR"
        freeShippingThreshold={15000}
      />
    </div>
  );
}

function InteractiveCartDrawerDemo() {
  return (
    <CartProvider>
      <InteractiveCartDrawerDemoInner />
    </CartProvider>
  );
}

function InteractiveFilterSidebarDemo() {
  const [filters, setFilters] = useState({
    selectedCategories: ['Running'],
    priceRange: [0, 220] as [number, number],
    selectedSizes: ['US 10'],
    inStockOnly: true,
  });

  return (
    <div className="w-full max-w-sm mx-auto p-2">
      <FilterSidebar
        categories={['Running', 'Lifestyle', 'Basketball', 'Training']}
        sizes={['US 8', 'US 9', 'US 10', 'US 11']}
        maxPrice={250}
        initialFilters={filters}
        onFilterChange={(f) =>
          setFilters({
            selectedCategories: f.selectedCategories,
            priceRange: f.priceRange,
            selectedSizes: f.selectedSizes,
            inStockOnly: Boolean(f.inStockOnly),
          })
        }
      />
    </div>
  );
}

function InteractiveGoogleFeedbackDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden">
      <GoogleFeedback
        basePath="feedback"
        badgeTitle="Google"
        badgeRating="4.9"
        badgeReviewsCount="128 verified reviews"
        heading="Loved by Coffee Lovers Worldwide"
        subheading="Real stories and reviews from our global community of coffee purists and daily ritualists."
        cardClassName="!bg-[#121625] !border-[#23283B] !text-white"
      />
    </div>
  );
}

function InteractiveTestimonialSectionDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-[#23283B] bg-[#0A0D17] p-2 sm:p-4 overflow-hidden">
      <TestimonialSection
        basePath="testimonials"
        badge="Critic Acclaim"
        heading="What Connoisseurs Say"
        subheading="Unfiltered sensory impressions and reviews from sommeliers, culinary critics, and world sensory judges."
        cardClassName="!bg-[#121625] !border-[#23283B] !text-white"
      />
    </div>
  );
}

function InteractiveMapDemo() {
  return (
    <div className="w-full max-w-3xl mx-auto h-[360px] rounded-2xl border border-[#23283B] overflow-hidden shadow-2xl bg-[#0A0D17]">
      <DenebMap
        data-preview-field-path="contact.mapUrl"
        mapUrl="https://maps.google.com/maps?q=San+Francisco,+CA&output=embed"
        address="742 Evergreen Celestial Way, San Francisco, CA"
        className="w-full h-full border-0"
      />
    </div>
  );
}

// Registry database mapping slug -> ComponentDocPageProps

function InteractiveCardDemo() {
  return (
    <div className="w-full max-w-sm p-6 rounded-2xl bg-[#0D111F]/80 backdrop-blur-md border border-[#23283B] hover:border-[#818CF8]/50 shadow-xl transition-all space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#818CF8] bg-[#818CF8]/15 px-2.5 py-0.5 rounded-full border border-[#818CF8]/30">
          Pro Feature
        </span>
        <span className="text-xs text-[#94A3B8]">Deneb Nebula</span>
      </div>
      <h3 className="text-lg font-bold text-white">Smart Architecture Card</h3>
      <p className="text-xs text-[#94A3B8] leading-relaxed">
        Container card with built-in visual editing bindings, responsive hover elevations, and dynamic theme tokens.
      </p>
      <div className="pt-2 flex items-center justify-between border-t border-[#23283B]">
        <span className="text-sm font-semibold text-white">$89 / mo</span>
        <button className="text-xs font-semibold text-[#818CF8] hover:text-[#A5B4FC] flex items-center gap-1 bg-transparent border-0 cursor-pointer">
          Learn More <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function InteractiveBadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Celestial Glow</span>
      </span>
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Verified Store</span>
      </span>
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
        Sale -30%
      </span>
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
        Best Seller
      </span>
    </div>
  );
}

function InteractiveTypographyDemo() {
  return (
    <div className="w-full max-w-md space-y-4 p-4 text-left">
      <div>
        <span className="text-[10px] font-mono text-[#818CF8] uppercase tracking-wider">Heading 1</span>
        <h1 className="text-2xl font-black text-white tracking-tight">Luxury Artisan Footwear</h1>
      </div>
      <div>
        <span className="text-[10px] font-mono text-[#818CF8] uppercase tracking-wider">Heading 3</span>
        <h3 className="text-lg font-bold text-white/90">Engineered for Daily Elegance</h3>
      </div>
      <div>
        <span className="text-[10px] font-mono text-[#818CF8] uppercase tracking-wider">Paragraph / Lead</span>
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          Crafted from vegetable-tanned Italian leather with cloud-density memory foam insoles for unmatched all-day comfort.
        </p>
      </div>
      <blockquote className="border-l-2 border-[#818CF8] pl-3 py-1 text-xs italic text-[#CBD5E1]">
        “The finest sneakers I have ever owned. Exceptional attention to detail.”
      </blockquote>
    </div>
  );
}

function InteractiveDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#818CF8] text-white shadow-md hover:bg-[#6366F1] transition-all cursor-pointer border-0 flex items-center gap-2"
      >
        <Maximize2 className="w-4 h-4" />
        <span>Open Interactive Dialog</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0F1424] border border-[#23283B] rounded-2xl p-6 shadow-2xl space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-[#23283B] pb-3">
              <h3 className="font-bold text-white text-base">Quick Product Preview</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-[#94A3B8] hover:text-white bg-transparent border-0 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              DENEB Dialog primitives support keyboard Escape listeners, focus traps, backdrop blur, and visual editing paths.
            </p>
            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1F2538] text-white border-0 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#818CF8] text-white border-0 cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InteractiveGridDemo() {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
        <div className="p-4 rounded-xl bg-[#121625] border border-[#23283B] text-white font-semibold">
          Auto-Fit Card 1
        </div>
        <div className="p-4 rounded-xl bg-[#121625] border border-[#23283B] text-white font-semibold">
          Auto-Fit Card 2
        </div>
        <div className="p-4 rounded-xl bg-[#121625] border border-[#23283B] text-white font-semibold">
          Auto-Fit Card 3
        </div>
      </div>
    </div>
  );
}

function InteractiveImageDemo() {
  return (
    <div className="w-full max-w-xs p-4 mx-auto">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#23283B] shadow-lg group">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
          alt="Product sample"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
          Aspect 4:3 • Radius 2xl
        </span>
      </div>
    </div>
  );
}

function InteractivePhoneDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <a
        href="tel:+15550192834"
        className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#121625] text-white border border-[#23283B] hover:border-[#818CF8]/50 flex items-center gap-2 text-decoration-none"
      >
        <Phone className="w-3.5 h-3.5 text-[#818CF8]" />
        <span>Call +1 (555) 019-2834</span>
      </a>
    </div>
  );
}

function InteractiveEmailDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <a
        href="mailto:support@deneb-ui.dev?subject=Inquiry"
        className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#121625] text-white border border-[#23283B] hover:border-[#818CF8]/50 flex items-center gap-2 text-decoration-none"
      >
        <Mail className="w-3.5 h-3.5 text-[#818CF8]" />
        <span>support@deneb-ui.dev</span>
      </a>
    </div>
  );
}

function InteractiveFloatingWidgetDemo() {
  return (
    <div className="relative h-40 w-full max-w-sm mx-auto border border-dashed border-[#23283B] rounded-2xl p-4 flex flex-col justify-between bg-[#0A0D1A]/50">
      <span className="text-[11px] text-[#94A3B8]">Screen simulation area</span>
      <div className="self-end flex items-center gap-2 p-2 rounded-2xl bg-[#0F1424] border border-[#23283B] shadow-xl">
        <button className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center border-0">
          <MessageSquare className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-xl bg-[#818CF8] text-white flex items-center justify-center border-0">
          <Phone className="w-4 h-4" />
        </button>
        <span className="text-xs font-semibold text-white px-1">Need help?</span>
      </div>
    </div>
  );
}

function InteractiveLocationLinkDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-[#818CF8] hover:underline font-semibold"
      >
        <MapPin className="w-3.5 h-3.5" />
        <span>Visit Flagship Store in Colombo, LK ↗</span>
      </a>
    </div>
  );
}

function InteractiveMapEmbedDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-3 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-2">
      <div className="w-full h-40 rounded-xl bg-[#141829] border border-[#23283B] flex items-center justify-center text-xs text-[#94A3B8]">
        <div className="text-center space-y-1">
          <MapPin className="w-6 h-6 text-[#818CF8] mx-auto animate-bounce" />
          <p className="font-semibold text-white">Google Maps Interactive Embed</p>
          <p className="text-[10px]">Embedded responsive iframe with custom coordinates</p>
        </div>
      </div>
    </div>
  );
}

function InteractiveAddressDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 rounded-xl bg-[#0F1424] border border-[#23283B] text-left text-xs space-y-1">
      <p className="font-bold text-white">Deneb Celestial HQ</p>
      <p className="text-[#94A3B8]">No. 42 Lotus Tower Boulevard</p>
      <p className="text-[#94A3B8]">Colombo 01, Sri Lanka</p>
      <p className="text-[#818CF8] font-mono pt-1">Postal Code: 00100</p>
    </div>
  );
}

function InteractiveSocialButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-3 p-4">
      <button className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-600 text-white flex items-center gap-1.5 border-0 cursor-pointer">
        Follow on Instagram
      </button>
      <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#141829] text-white border border-[#23283B] flex items-center gap-1.5 cursor-pointer">
        Join on YouTube
      </button>
    </div>
  );
}

function InteractiveServiceCardDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-5 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left">
      <div className="flex items-center justify-between">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/30">
          24/7 Service
        </span>
        <span className="text-xs font-semibold text-emerald-400">From LKR 3,500 / hr</span>
      </div>
      <h4 className="font-bold text-white text-base">Custom Shoe Fitting & Conditioning</h4>
      <p className="text-xs text-[#94A3B8] leading-relaxed">
        Professional hand conditioning, leather softening, and precise anatomical insole adjustments.
      </p>
      <ul className="text-xs text-white/90 space-y-1 pl-4 list-disc">
        <li>Organic beeswax leather polish</li>
        <li>Custom arch support adjustment</li>
        <li>Same-day turnaround option</li>
      </ul>
      <button className="w-full py-2 rounded-xl text-xs font-bold bg-[#818CF8] hover:bg-[#6366F1] text-white border-0 cursor-pointer">
        Request Free Consultation
      </button>
    </div>
  );
}

function InteractiveTestimonialCardDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-5 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left">
      <div className="flex items-center gap-1 text-amber-400">
        {'★★★★★'.split('').map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
      <p className="text-xs text-white/90 italic leading-relaxed">
        “The fit is remarkable right out of the box. Ordered directly via WhatsApp and received delivery within 24 hours!”
      </p>
      <div className="flex items-center gap-2.5 pt-2 border-t border-[#23283B]">
        <div className="w-8 h-8 rounded-full bg-[#818CF8]/20 flex items-center justify-center text-xs font-bold text-[#A5B4FC]">
          JD
        </div>
        <div>
          <h5 className="font-bold text-white text-xs">Janith Dhanushka</h5>
          <p className="text-[10px] text-[#94A3B8]">Verified Buyer • Classic Oxford 42</p>
        </div>
      </div>
    </div>
  );
}

function InteractiveNavbarDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-3 rounded-2xl bg-[#0F1424]/90 border border-[#23283B] flex items-center justify-between text-xs">
      <div className="flex items-center gap-2 font-bold text-white">
        <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#818CF8] to-amber-500 flex items-center justify-center text-white text-[10px]">
          ✦
        </span>
        <span>SoleCharm</span>
      </div>
      <div className="hidden sm:flex items-center gap-3 text-[#94A3B8]">
        <span className="text-white font-semibold">Home</span>
        <span>Products</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <button className="px-3 py-1 rounded-xl bg-[#818CF8] text-white font-semibold text-[11px] border-0">
        Cart (2)
      </button>
    </div>
  );
}

function InteractiveFooterDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-5 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left text-xs">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="font-bold text-white text-sm">SoleCharm Footwear</p>
          <p className="text-[11px] text-[#94A3B8]">Artisan craftsmanship with modern ergonomics.</p>
        </div>
        <div className="text-right text-[#94A3B8] space-y-1 text-[11px]">
          <p className="hover:text-white cursor-pointer">Products</p>
          <p className="hover:text-white cursor-pointer">Support</p>
        </div>
      </div>
      <div className="pt-2 border-t border-[#23283B] flex justify-between text-[10px] text-[#64748B]">
        <span>© 2026 SoleCharm. Built with DENEB UI.</span>
        <span>Privacy • Terms</span>
      </div>
    </div>
  );
}

function InteractiveSiteDataDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-2 text-left text-xs">
      <div className="flex items-center gap-2 text-[#818CF8] font-bold">
        <Database className="w-4 h-4" />
        <span>SiteDataProvider Engine</span>
      </div>
      <p className="text-[#94A3B8] text-[11px]">
        Headless state layer receiving real-time window postMessage updates from Fivora visual editor without reloads.
      </p>
      <div className="p-2.5 rounded-xl bg-[#0A0D1A] font-mono text-[10px] text-emerald-400 border border-[#1E233D]">
        const products = useProducts(fallbackProducts);<br />
        const siteData = useSiteData();
      </div>
    </div>
  );
}

function InteractiveThemeStylesDemo() {
  const [activePreset, setActivePreset] = useState<'restaurant' | 'medical' | 'luxury'>('luxury');
  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#818CF8] font-bold">
          <Palette className="w-4 h-4" />
          <span>Dynamic ThemeStyles Presets</span>
        </div>
        <span className="font-mono text-[10px] text-[#A5B4FC] uppercase">{activePreset}</span>
      </div>
      <div className="flex gap-2">
        {(['restaurant', 'medical', 'luxury'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setActivePreset(p)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize border cursor-pointer ${
              activePreset === p
                ? 'bg-[#818CF8] text-white border-[#818CF8]'
                : 'bg-[#141829] text-[#94A3B8] border-[#23283B]'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-[#0A0D1A] border border-[#1E233D] flex items-center justify-between">
        <span className="text-[11px] text-white font-medium">Primary Accent Token:</span>
        <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/50 text-[#818CF8]">
          {THEME_PRESETS[activePreset]?.primaryColor}
        </span>
      </div>
    </div>
  );
}



function InteractiveUseProductsDemo() {
  const [activeCategory, setActiveCategory] = useState("All");
  const mockProducts = [
    { id: "1", title: "Minimalist Ceramic Cup", category: "Ceramics", price: "LKR 3,200" },
    { id: "2", title: "Artisan Linen Apron", category: "Kitchen", price: "LKR 5,400" },
    { id: "3", title: "Botanical Room Spray", category: "Aromatherapy", price: "LKR 2,800" },
  ];

  const filtered = activeCategory === "All"
    ? mockProducts
    : mockProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#818CF8] font-bold">
          <ShoppingBag className="w-4 h-4" />
          <span>useProducts() State Preview</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          ● Rehydrated
        </span>
      </div>
      <p className="text-[#94A3B8] text-[11px]">
        Simulated live catalog synchronization from <code>api.catalogUrl</code>.
      </p>
      <div className="flex gap-1.5 pt-1">
        {["All", "Ceramics", "Kitchen", "Aromatherapy"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-[#818CF8] text-white border-[#818CF8]"
                : "bg-[#141829] text-[#94A3B8] border-[#23283B] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="space-y-1.5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-2.5 rounded-xl bg-[#0A0D1A] border border-[#1E233D] flex items-center justify-between"
          >
            <div className="space-y-0.5">
              <p className="text-white font-medium text-[11px]">{item.title}</p>
              <span className="text-[10px] text-[#64748B]">{item.category}</span>
            </div>
            <span className="font-mono font-semibold text-[#A5B4FC] text-xs">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InteractiveUseSiteApiDemo() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const endpoints = [
    { label: "catalogUrl", url: "https://api.fivora.site/site-catalog/starter-demo/live-data" },
    { label: "contactUrl", url: "https://api.fivora.site/site-contact" },
    { label: "baseUrl", url: "https://api.fivora.site" },
  ];

  const handleCopy = (key: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#818CF8] font-bold">
          <Database className="w-4 h-4" />
          <span>useSiteApi() Endpoints Explorer</span>
        </div>
        <span className="text-[10px] text-[#A5B4FC] font-mono">api.*</span>
      </div>
      <p className="text-[#94A3B8] text-[11px]">
        Access official Fivora backend routes directly in components and custom forms.
      </p>
      <div className="space-y-2">
        {endpoints.map((ep) => (
          <div
            key={ep.label}
            onClick={() => handleCopy(ep.label, ep.url)}
            className="p-2.5 rounded-xl bg-[#0A0D1A] border border-[#1E233D] hover:border-[#818CF8]/40 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-[11px] text-emerald-400 font-semibold">{ep.label}</span>
              <span className="text-[10px] text-[#64748B] group-hover:text-[#A5B4FC]">
                {copiedKey === ep.label ? "✓ Copied" : "Click to copy"}
              </span>
            </div>
            <p className="font-mono text-[10px] text-[#94A3B8] truncate mt-1">{ep.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InteractiveUseSiteCatalogDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-2xl bg-[#0F1424] border border-[#23283B] space-y-3 text-left text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#818CF8] font-bold">
          <CheckCircle2 className="w-4 h-4" />
          <span>useSiteCatalog() Bundle</span>
        </div>
        <span className="text-[10px] text-[#A5B4FC] font-mono">Metadata & Items</span>
      </div>
      <p className="text-[#94A3B8] text-[11px]">
        Complete state snapshot combining products, services, site identity, and active API routes.
      </p>
      <div className="grid grid-cols-2 gap-2 pt-1">
        <div className="p-2.5 rounded-xl bg-[#0A0D1A] border border-[#1E233D] space-y-1">
          <span className="text-[10px] text-[#64748B]">Project Status</span>
          <p className="text-white font-semibold text-xs flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> APPROVED
          </p>
        </div>
        <div className="p-2.5 rounded-xl bg-[#0A0D1A] border border-[#1E233D] space-y-1">
          <span className="text-[10px] text-[#64748B]">Live Domain</span>
          <p className="text-white font-semibold text-xs truncate">starter-demo.fivora.site</p>
        </div>
        <div className="p-2.5 rounded-xl bg-[#0A0D1A] border border-[#1E233D] space-y-1">
          <span className="text-[10px] text-[#64748B]">Active Products</span>
          <p className="text-[#818CF8] font-bold text-sm">3 items</p>
        </div>
        <div className="p-2.5 rounded-xl bg-[#0A0D1A] border border-[#1E233D] space-y-1">
          <span className="text-[10px] text-[#64748B]">Active Services</span>
          <p className="text-[#818CF8] font-bold text-sm">2 items</p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Complete Component Documentation Registry (All 31 Components)
   ========================================================================== */

// ==========================================
// Registry database mapping slug -> ComponentDocPageProps
// ==========================================
export const COMPONENT_DOCS: Record<string, ComponentDocPageProps> = {
  button: {
    title: 'Button',
    description: 'An interactive button primitive with celestial glows, glassmorphic variants, and visual editing support.',
    category: 'Core Primitives',
    badge: 'Core',
    previewComponent: <InteractiveButtonDemo />,
    previewCode: `import { Button } from "@deneb-ui/ui";

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="glow">Celestial Glow</Button>
      <Button variant="secondary">Secondary Cosmic</Button>
      <Button variant="outline">Periwinkle Outline</Button>
    </div>
  );
}`,
    usageCode: `import { Button } from "@deneb-ui/ui";

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
}`,
    props: [
      { name: 'variant', type: '"default" | "glow" | "secondary" | "outline" | "ghost"', defaultValue: '"default"', description: 'The visual styling variant of the button.' },
      { name: 'size', type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: 'Controls button padding, font size, and height.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Whether the button is interactable.' },
      { name: 'className', type: 'string', defaultValue: '""', description: 'Additional Tailwind or CSS class names.' },
    ],
    nextPage: { title: 'Card', href: '/docs/components/card' },
  },

  card: {
    title: 'Card',
    description: 'A versatile container card with obsidian glass styling, luminous borders, and structured content slots.',
    category: 'Core Primitives',
    badge: 'Core',
    previewComponent: (
      <div className="max-w-sm w-full p-6 rounded-2xl border border-[#23283B] bg-[#0E111C] space-y-3 shadow-xl hover:border-[#818CF8]/40 transition-all">
        <div className="flex items-center gap-2 text-[#818CF8] font-bold text-xs uppercase tracking-wider">
          <DenebStarIcon className="w-3.5 h-3.5" />
          <span>Cosmic Card Container</span>
        </div>
        <h3 className="font-bold text-lg text-white">Starlight Glass Panel</h3>
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          Pre-styled container with subtle inner gradients and backdrop blur for clean storefront composition.
        </p>
      </div>
    ),
    previewCode: `import { Card } from "@deneb-ui/ui";

export default function CardDemo() {
  return (
    <Card className="p-6">
      <h3>Starlight Glass Panel</h3>
      <p>Pre-styled container with subtle inner gradients.</p>
    </Card>
  );
}`,
    usageCode: `import { Card } from "@deneb-ui/ui";\n\n<Card className="p-6">\n  <h2>Hello World</h2>\n</Card>`,
    props: [
      { name: 'variant', type: "'default' | 'glass' | 'glow' | 'outline'", defaultValue: "'default'", description: "Visual surface treatment with obsidian and luminous borders." },
      { name: 'padding', type: "'sm' | 'md' | 'lg' | 'none'", defaultValue: "'md'", description: "Internal padding of the card container." },
      { name: 'hoverEffect', type: "boolean", defaultValue: "true", description: "Enable celestial border illumination on hover." },
      { name: 'className', type: "string", defaultValue: "''", description: "Additional Tailwind utility classes." },
    ],

    prevPage: { title: 'Button', href: '/docs/components/button' },
    nextPage: { title: 'Badge', href: '/docs/components/badge' },
  },

  badge: {
    title: 'Badge',
    description: 'Status pills and indicator tags with celestial starlight glows.',
    category: 'Core Primitives',
    badge: 'Core',
    previewComponent: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#818CF8]/20 text-[#A5B4FC] border border-[#818CF8]/40 flex items-center gap-1.5 shadow-[0_0_12px_rgba(129,140,248,0.3)]">
          <DenebStarIcon className="w-3 h-3" />
          <span>Celestial Active</span>
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Open Now
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          Free Shipping
        </span>
      </div>
    ),
    previewCode: `import { Badge } from "@deneb-ui/ui";\n\n<Badge variant="glow">Celestial Active</Badge>`,
    usageCode: `import { Badge } from "@deneb-ui/ui";`,
    props: [
      { name: 'variant', type: "'default' | 'glow' | 'outline' | 'success' | 'warning'", defaultValue: "'default'", description: "Color and glow palette of the tag." },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: "Padding and typography size." },
      { name: 'pulse', type: "boolean", defaultValue: "false", description: "Renders an animated glowing pulse dot." },
      { name: 'children', type: "React.ReactNode", defaultValue: "-", description: "Text or element content." },
    ],

    prevPage: { title: 'Card', href: '/docs/components/card' },
    nextPage: { title: 'ContactActions', href: '/docs/components/contact-actions' },
  },

  typography: {
    title: 'Typography',
    description: 'Semantic text primitives (Heading, Paragraph, Text, Quote) linked directly to Fivora theme font tokens.',
    category: 'Core Primitives',
    badge: 'Typography',
    previewComponent: <InteractiveTypographyDemo />,
    previewCode: `import { Heading, Paragraph, Quote } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <div className="space-y-3">
      <Heading as="h1" size="3xl">Luxury Artisan Footwear</Heading>
      <Paragraph size="sm">Engineered for daily elegance and comfort.</Paragraph>
      <Quote>“The finest sneakers I have ever owned.”</Quote>
    </div>
  );
}`,
    usageCode: `import { Heading, Paragraph } from "@deneb-ui/ui";`,
    props: [
      { name: 'as', type: '"h1" | "h2" | "h3" | "h4" | "p" | "span"', defaultValue: '"p"', description: 'HTML tag.' },
      { name: 'size', type: '"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "hero"', defaultValue: '"base"', description: 'Font size.' },
      { name: 'color', type: 'string', description: 'Semantic color token or hex.' },
    ],
    prevPage: { title: 'Badge', href: '/docs/components/badge' },
    nextPage: { title: 'Dialog / Modal', href: '/docs/components/dialog' },
  },

  dialog: {
    title: 'Dialog',
    description: 'Accessible modal dialog with backdrop blur, keyboard ESC dismissal, sizing tiers, and live visual editing.',
    category: 'Core Primitives',
    badge: 'Interactive Modal',
    previewComponent: <InteractiveDialogDemo />,
    previewCode: `import { Dialog } from "@deneb-ui/ui";

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onClose={() => setOpen(false)} title="Product Preview" size="md">
      <p>Modal body content...</p>
    </Dialog>
  );
}`,
    usageCode: `import { Dialog } from "@deneb-ui/ui";`,
    props: [
      { name: 'open', type: 'boolean', defaultValue: 'false', description: 'Visibility state.' },
      { name: 'onClose', type: '() => void', description: 'Close callback.' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl" | "full"', defaultValue: '"md"', description: 'Modal max-width tier.' },
    ],
    prevPage: { title: 'Typography', href: '/docs/components/typography' },
    nextPage: { title: 'Grid & Box', href: '/docs/components/grid' },
  },

  grid: {
    title: 'Grid & Box',
    description: 'Layout containers featuring auto-balancing columns (minCardWidth), custom spacing tokens, and flex alignment.',
    category: 'Core Primitives',
    badge: 'Layout',
    previewComponent: <InteractiveGridDemo />,
    previewCode: `import { Grid, Box } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <Grid minCardWidth="280px" gap="md">
      <Box className="p-4 bg-card rounded-xl">Item 1</Box>
      <Box className="p-4 bg-card rounded-xl">Item 2</Box>
    </Grid>
  );
}`,
    usageCode: `import { Grid, Box } from "@deneb-ui/ui";`,
    props: [
      { name: 'minCardWidth', type: 'string', defaultValue: '"280px"', description: 'Auto-balancing minimum card width.' },
      { name: 'gap', type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"md"', description: 'Spacing between cards.' },
    ],
    prevPage: { title: 'Dialog / Modal', href: '/docs/components/dialog' },
    nextPage: { title: 'Image', href: '/docs/components/image' },
  },

  image: {
    title: 'Image',
    description: 'Responsive storefront image component supporting preset aspect ratios, border radii, and visual editing upload triggers.',
    category: 'Core Primitives',
    badge: 'Media',
    previewComponent: <InteractiveImageDemo />,
    previewCode: `import { Image } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <Image
      src="/product.jpg"
      alt="Shoe"
      aspectRatio="4/3"
      radius="xl"
      data-preview-field-path="home.bannerImageUrl"
    />
  );
}`,
    usageCode: `import { Image } from "@deneb-ui/ui";`,
    props: [
      { name: 'aspectRatio', type: '"square" | "16/9" | "4/3" | "portrait"', defaultValue: '"auto"', description: 'Aspect ratio.' },
      { name: 'radius', type: '"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"', defaultValue: '"md"', description: 'Border radius.' },
    ],
    prevPage: { title: 'Grid & Box', href: '/docs/components/grid' },
    nextPage: { title: 'ContactActions', href: '/docs/components/contact-actions' },
  },

  'contact-actions': {
    title: 'ContactActions',
    description: 'Smart multi-channel container that automatically inspects merchant phone, WhatsApp, and email, rendering active triggers with zero template changes.',
    category: 'Smart Commerce Actions',
    badge: 'Smart Action',
    previewComponent: <InteractiveContactActionsDemo />,
    previewCode: `import { ContactActions } from "@deneb-ui/ui";

export default function ContactDemo() {
  return (
    <ContactActions
      phone="+1 (555) 349-2810"
      whatsapp="15553492810"
      email="support@denebstore.com"
      layout="wrap"
      size="md"
    />
  );
}`,
    usageCode: `import { ContactActions } from "@deneb-ui/ui";

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
}`,
    props: [
      { name: 'phone', type: 'string | null', description: 'Store telephone number. Triggers direct tel: call.' },
      { name: 'whatsapp', type: 'string | null', description: 'WhatsApp number in E.164 format. Resolves to wa.me link.' },
      { name: 'email', type: 'string | null', description: 'Store contact email address. Triggers mailto: protocol.' },
      { name: 'layout', type: '"row" | "column" | "wrap"', defaultValue: '"row"', description: 'Flex layout presentation.' },
      { name: 'size', type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: 'Size of action buttons.' },
    ],
    prevPage: { title: 'Badge', href: '/docs/components/badge' },
    nextPage: { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
  },

  'whatsapp-button': {
    title: 'WhatsAppButton',
    description: 'One-click WhatsApp click-to-chat button with built-in official SVG icon and direct link resolution.',
    category: 'Smart Commerce Actions',
    badge: 'High Conversion',
    previewComponent: <InteractiveWhatsAppDemo />,
    previewCode: `import { WhatsAppButton } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <WhatsAppButton
      value="15550192834"
      label="Chat with a Specialist"
      size="lg"
    />
  );
}`,
    usageCode: `import { WhatsAppButton } from "@deneb-ui/ui";\n\n<WhatsAppButton value="15550192834" label="Chat on WhatsApp" />`,
    props: [
      { name: 'phoneNumber', type: "string", defaultValue: "''", description: "E.164 formatted telephone number without plus." },
      { name: 'message', type: "string", defaultValue: "''", description: "Pre-filled WhatsApp message draft." },
      { name: 'variant', type: "'solid' | 'outline' | 'floating'", defaultValue: "'solid'", description: "Button style variant." },
      { name: 'label', type: "string", defaultValue: "'Chat on WhatsApp'", description: "Accessible action label." },
    ],

    prevPage: { title: 'ContactActions', href: '/docs/components/contact-actions' },
    nextPage: { title: 'BusinessHours', href: '/docs/components/business-hours' },
  },

  'phone-button': {
    title: 'PhoneButton',
    description: 'Direct telephone dialing trigger (tel:) with formatted phone display and official telephone icon.',
    category: 'Smart Commerce Actions',
    badge: 'Direct Call',
    previewComponent: <InteractivePhoneDemo />,
    previewCode: `import { PhoneButton } from "@deneb-ui/ui";

export default function Demo() {
  return <PhoneButton value="+15550192834" label="Call Concierge" />;
}`,
    usageCode: `import { PhoneButton } from "@deneb-ui/ui";`,
    props: [
      { name: 'value', type: 'string', required: true, description: 'Telephone number string.' },
      { name: 'label', type: 'string', description: 'Custom button label.' },
    ],
    prevPage: { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
    nextPage: { title: 'EmailButton', href: '/docs/components/email-button' },
  },

  'email-button': {
    title: 'EmailButton',
    description: 'Direct mailto: action button with optional prefilled subject line and envelope icon.',
    category: 'Smart Commerce Actions',
    badge: 'Inquiry',
    previewComponent: <InteractiveEmailDemo />,
    previewCode: `import { EmailButton } from "@deneb-ui/ui";

export default function Demo() {
  return <EmailButton value="orders@store.com" subject="Product Inquiry" />;
}`,
    usageCode: `import { EmailButton } from "@deneb-ui/ui";`,
    props: [
      { name: 'value', type: 'string', required: true, description: 'Target email address.' },
      { name: 'subject', type: 'string', description: 'Default email subject.' },
    ],
    prevPage: { title: 'PhoneButton', href: '/docs/components/phone-button' },
    nextPage: { title: 'FloatingContactWidget', href: '/docs/components/floating-contact-widget' },
  },

  'floating-contact-widget': {
    title: 'FloatingContactWidget',
    description: 'Sticky corner floating action button that expands into a speed-dial menu for WhatsApp, phone, and email inquiries.',
    category: 'Smart Commerce Actions',
    badge: 'Smart Widget',
    previewComponent: <InteractiveFloatingWidgetDemo />,
    previewCode: `import { FloatingContactWidget } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <FloatingContactWidget
      position="bottom-right"
      defaultWhatsApp="15550192834"
      defaultPhone="+15550192834"
      defaultMessage="Hi! I have an order inquiry."
    />
  );
}`,
    usageCode: `import { FloatingContactWidget } from "@deneb-ui/ui";`,
    props: [
      { name: 'position', type: '"bottom-right" | "bottom-left"', defaultValue: '"bottom-right"', description: 'Corner anchor position.' },
      { name: 'defaultWhatsApp', type: 'string', description: 'WhatsApp number fallback.' },
      { name: 'defaultPhone', type: 'string', description: 'Phone number fallback.' },
    ],
    prevPage: { title: 'EmailButton', href: '/docs/components/email-button' },
    nextPage: { title: 'LocationCard', href: '/docs/components/location-card' },
  },

  'location-card': {
    title: 'LocationCard',
    description: 'Storefront location card with formatted address, map pin, and direct Google Maps directions trigger.',
    category: 'Location & Navigation',
    badge: 'Maps',
    previewComponent: <InteractiveLocationCardDemo />,
    previewCode: `import { LocationCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <LocationCard
      street="742 Evergreen Celestial Way"
      city="San Francisco"
      country="USA"
      mapQuery="San Francisco, CA"
      title="Deneb Flagship Experience"
    />
  );
}`,
    usageCode: `import { LocationCard } from "@deneb-ui/ui";`,
    props: [
      { name: 'title', type: "string", defaultValue: "'Flagship Store'", description: "Location heading title." },
      { name: 'address', type: "string", defaultValue: "''", description: "Street address and unit." },
      { name: 'city', type: "string", defaultValue: "''", description: "City or territory name." },
      { name: 'googleMapsUrl', type: "string", defaultValue: "''", description: "Direct URL for Google Maps navigation." },
      { name: 'hours', type: "string", defaultValue: "''", description: "Summary of operating hours." },
    ],

    prevPage: { title: 'BusinessHours', href: '/docs/components/business-hours' },
    nextPage: { title: 'SocialLinks', href: '/docs/components/social-links' },
  },

  'location-link': {
    title: 'LocationLink',
    description: 'Inline clickable text link opening the physical business address in Google Maps or Apple Maps.',
    category: 'Location & Navigation',
    badge: 'Directions',
    previewComponent: <InteractiveLocationLinkDemo />,
    previewCode: `import { LocationLink } from "@deneb-ui/ui";

export default function Demo() {
  return <LocationLink address="No. 42 Lotus Tower, Colombo" label="View on Google Maps" />;
}`,
    usageCode: `import { LocationLink } from "@deneb-ui/ui";`,
    props: [
      { name: 'address', type: 'string', required: true, description: 'Address query.' },
      { name: 'label', type: 'string', description: 'Link text.' },
    ],
    prevPage: { title: 'LocationCard', href: '/docs/components/location-card' },
    nextPage: { title: 'MapEmbed', href: '/docs/components/map-embed' },
  },

  'map-embed': {
    title: 'MapEmbed',
    description: 'Safe responsive Google Maps embed iframe with automatic fallback link when embed URL is not yet configured.',
    category: 'Location & Navigation',
    badge: 'Maps Embed',
    previewComponent: <InteractiveMapEmbedDemo />,
    previewCode: `import { MapEmbed } from "@deneb-ui/ui";

export default function Demo() {
  return <MapEmbed height={360} address="Colombo, Sri Lanka" />;
}`,
    usageCode: `import { MapEmbed } from "@deneb-ui/ui";`,
    props: [
      { name: 'height', type: 'number | string', defaultValue: '360', description: 'Container height in px.' },
      { name: 'embedUrl', type: 'string', description: 'Google Maps embed iframe URL.' },
    ],
    prevPage: { title: 'LocationLink', href: '/docs/components/location-link' },
    nextPage: { title: 'Address', href: '/docs/components/address' },
  },

  address: {
    title: 'Address',
    description: 'Semantic, formatted HTML address block with microdata schema readiness and visual editing attributes.',
    category: 'Location & Navigation',
    badge: 'Address Block',
    previewComponent: <InteractiveAddressDemo />,
    previewCode: `import { Address } from "@deneb-ui/ui";

export default function Demo() {
  return <Address street="No. 42 Lotus Tower" city="Colombo" country="Sri Lanka" />;
}`,
    usageCode: `import { Address } from "@deneb-ui/ui";`,
    props: [
      { name: 'street', type: 'string', description: 'Street name.' },
      { name: 'city', type: 'string', description: 'City.' },
      { name: 'country', type: 'string', description: 'Country.' },
    ],
    prevPage: { title: 'MapEmbed', href: '/docs/components/map-embed' },
    nextPage: { title: 'BusinessHours', href: '/docs/components/business-hours' },
  },

  'business-hours': {
    title: 'BusinessHours',
    description: 'Weekly schedule renderer featuring live dynamic calculation of Open Now and Closed status badges based on visitor local time.',
    category: 'Social & Business',
    badge: 'Live Status',
    previewComponent: <InteractiveBusinessHoursDemo />,
    previewCode: `import { BusinessHours } from "@deneb-ui/ui";

const schedule = {
  monday: '09:00 - 18:00',
  tuesday: '09:00 - 18:00',
  wednesday: '09:00 - 18:00',
  thursday: '09:00 - 20:00',
  friday: '09:00 - 20:00',
  saturday: '10:00 - 17:00',
  sunday: 'Closed',
};

export default function HoursDemo() {
  return <BusinessHours schedule={schedule} timezone="America/Los_Angeles" />;
}`,
    usageCode: `import { BusinessHours } from "@deneb-ui/ui";\n\n<BusinessHours schedule={schedule} />`,
    props: [
      { name: 'schedule', type: "Array<{ day: string; open: string; close: string }>", defaultValue: "[]", description: "Weekly business hours timetable." },
      { name: 'showStatus', type: "boolean", defaultValue: "true", description: "Display live 'Open Now' or 'Closed' badge." },
      { name: 'variant', type: "'card' | 'list' | 'compact'", defaultValue: "'card'", description: "Visual presentation layout." },
    ],

    prevPage: { title: 'WhatsAppButton', href: '/docs/components/whatsapp-button' },
    nextPage: { title: 'LocationCard', href: '/docs/components/location-card' },
  },

  'social-links': {
    title: 'SocialLinks',
    description: 'Smart social media channel container with branded icons (Instagram, Facebook, TikTok, YouTube, X, GitHub).',
    category: 'Social & Business',
    badge: 'Channels',
    previewComponent: <InteractiveSocialDemo />,
    previewCode: `import { SocialLinks } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <SocialLinks
      instagram="https://instagram.com"
      facebook="https://facebook.com"
      whatsapp="https://wa.me/15550192834"
      youtube="https://youtube.com"
      github="https://github.com"
      x="https://x.com"
      variant="pills"
    />
  );
}`,
    usageCode: `import { SocialLinks } from "@deneb-ui/ui";`,
    props: [
      { name: 'links', type: "Record<string, string>", defaultValue: "{}", description: "Object mapping platform keys (instagram, facebook, etc.) to URLs." },
      { name: 'variant', type: "'icon' | 'pill' | 'colored'", defaultValue: "'icon'", description: "Visual presentation of the social links." },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Icon and hit-target size." },
    ],

    prevPage: { title: 'LocationCard', href: '/docs/components/location-card' },
    nextPage: { title: 'ProductCard', href: '/docs/components/product-card' },
  },

  'social-button': {
    title: 'SocialButton',
    description: 'Individual branded social button with official network colors and icons.',
    category: 'Social & Business',
    badge: 'Branded Action',
    previewComponent: <InteractiveSocialButtonDemo />,
    previewCode: `import { SocialButton } from "@deneb-ui/ui";

export default function Demo() {
  return <SocialButton platform="instagram" href="https://instagram.com" label="Follow us on Instagram" />;
}`,
    usageCode: `import { SocialButton } from "@deneb-ui/ui";`,
    props: [
      { name: 'platform', type: '"instagram" | "facebook" | "whatsapp" | "youtube" | "tiktok" | "x"', required: true, description: 'Network ID.' },
      { name: 'href', type: 'string', required: true, description: 'Profile URL.' },
    ],
    prevPage: { title: 'SocialLinks', href: '/docs/components/social-links' },
    nextPage: { title: 'Hero', href: '/docs/components/hero' },
  },

  hero: {
    title: 'Hero',
    description: 'Centered and split hero banner sections with high-impact headline, glowing CTAs, and commerce actions.',
    category: 'Storefront Sections',
    badge: 'Layout',
    previewComponent: (
      <div className="p-8 text-center space-y-4 max-w-xl">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 inline-flex items-center gap-1.5">
          <DenebStarIcon className="w-3 h-3" />
          <span>The Next Gen Commerce Stack</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Supercharge Your Storefront with Celestial Speed
        </h2>
        <p className="text-xs text-[#94A3B8]">
          Pre-configured action primitives designed to turn visitors into buyers within seconds.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#818CF8] text-white shadow-md">
            Explore Demo
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#141829] text-white border border-[#23283B]">
            Documentation
          </button>
        </div>
      </div>
    ),
    previewCode: `import { Hero } from "@deneb-ui/ui";\n\n<Hero title="Supercharge Your Storefront" subtitle="..." />`,
    usageCode: `import { Hero } from "@deneb-ui/ui";`,
    props: [
      { name: 'layout', type: "'split' | 'centered' | 'minimal'", defaultValue: "'split'", description: "Hero section visual layout structure." },
      { name: 'title', type: "string", defaultValue: "''", description: "Primary value proposition headline." },
      { name: 'description', type: "string", defaultValue: "''", description: "Secondary explanatory subtitle text." },
      { name: 'image', type: "string", defaultValue: "''", description: "Hero photography or illustration asset URL." },
      { name: 'badge', type: "string", defaultValue: "''", description: "Optional announcement kicker pill." },
    ],

    prevPage: { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
    nextPage: { title: 'ProductDetail', href: '/docs/components/product-detail' },
  },


  'service-card': {
    title: 'ServiceCard',
    description: 'Service package card with rate label, feature checkmark list, image thumbnail, and quote action.',
    category: 'Storefront Sections',
    badge: 'Services',
    previewComponent: <InteractiveServiceCardDemo />,
    previewCode: `import { ServiceCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <ServiceCard
      service={{
        title: 'Custom Shoe Fitting',
        description: 'Professional hand conditioning.',
        features: ['Beeswax polish', 'Arch adjustment'],
      }}
      itemPath="services[0]"
    />
  );
}`,
    usageCode: `import { ServiceCard } from "@deneb-ui/ui";`,
    props: [
      { name: 'service', type: 'ServiceItem', required: true, description: 'Service data object.' },
      { name: 'itemPath', type: 'string', required: true, description: 'Array path (e.g. "services[0]").' },
    ],
    prevPage: { title: 'ProductCard', href: '/docs/components/product-card' },
    nextPage: { title: 'PricingCard', href: '/docs/components/pricing-card' },
  },

  'pricing-card': {
    title: 'PricingCard',
    description: 'Tiered subscription and pricing plan card with feature checkmarks and highlight badges.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractivePricingCardDemo />,
    previewCode: `import { PricingCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <PricingCard
      title="Storefront Pro"
      price="$49"
      interval="/ month"
      features={['Full Smart Components', '1-Click WhatsApp', 'Visual Editor Sync']}
      isPopular
    />
  );
}`,
    usageCode: `import { PricingCard } from "@deneb-ui/ui";`,
    props: [
      { name: 'tier', type: "string", defaultValue: "''", description: "Plan name (e.g. 'Starter', 'Pro')." },
      { name: 'price', type: "number | string", defaultValue: "0", description: "Subscription or package cost." },
      { name: 'features', type: "string[]", defaultValue: "[]", description: "Included checklist feature items." },
      { name: 'isPopular', type: "boolean", defaultValue: "false", description: "Highlights card with luminous glowing border." },
      { name: 'ctaText', type: "string", defaultValue: "'Get Started'", description: "Action button text." },
    ],

    prevPage: { title: 'ProductCard', href: '/docs/components/product-card' },
    nextPage: { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
  },

  'testimonial-card': {
    title: 'TestimonialCard',
    description: 'Customer review card with 5-star ratings, avatar, customer name, and purchased product note.',
    category: 'Storefront Sections',
    badge: 'Social Proof',
    previewComponent: <InteractiveTestimonialCardDemo />,
    previewCode: `import { TestimonialCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <TestimonialCard
      item={{
        quote: 'The fit is remarkable right out of the box!',
        author: 'Janith Dhanushka',
        role: 'Verified Buyer',
        rating: 5,
      }}
      itemPath="testimonials[0]"
    />
  );
}`,
    usageCode: `import { TestimonialCard } from "@deneb-ui/ui";`,
    props: [
      { name: 'item', type: 'TestimonialItem', required: true, description: 'Testimonial record.' },
      { name: 'itemPath', type: 'string', required: true, description: 'Visual edit path.' },
    ],
    prevPage: { title: 'PricingCard', href: '/docs/components/pricing-card' },
    nextPage: { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
  },

  'faq-accordion': {
    title: 'FAQAccordion',
    description: 'Smooth animated expandable accordion for FAQs, policies, and storefront documentation.',
    category: 'Storefront Sections',
    badge: 'Interactive',
    previewComponent: <InteractiveFAQDemo />,
    previewCode: `import { Accordion } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <Accordion
      items={[
        { q: 'What is DENEB UI?', a: 'A visual-first React ecosystem.' },
        { q: 'Is it free?', a: 'Yes, MIT Licensed.' },
      ]}
    />
  );
}`,
    usageCode: `import { Accordion } from "@deneb-ui/ui";`,
    props: [
      { name: 'items', type: "Array<{ question: string; answer: string }>", defaultValue: "[]", description: "List of FAQ questions and markdown answers." },
      { name: 'allowMultiple', type: "boolean", defaultValue: "false", description: "Allow multiple items to be expanded concurrently." },
    ],

    prevPage: { title: 'PricingCard', href: '/docs/components/pricing-card' },
    nextPage: { title: 'Hero', href: '/docs/components/hero' },
  },

  'announcement-bar': {
    title: 'AnnouncementBar',
    description: 'Top promotional ribbon for store announcements, flash sales, coupon codes, and free shipping thresholds.',
    category: 'Storefront Sections',
    badge: 'Marketing',
    previewComponent: <InteractiveAnnouncementBarDemo />,
    previewCode: `import { AnnouncementBar } from "@deneb-ui/ui";

export default function HeaderPromo() {
  return (
    <AnnouncementBar
      defaultText="Free Worldwide Shipping on all orders over $75"
      defaultBadge="SALE"
      defaultLinkText="Shop Drop"
      defaultLinkUrl="#shop"
    />
  );
}`,
    usageCode: `import { AnnouncementBar } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add announcement-bar`,
    props: [
      { name: 'defaultText', type: 'string', description: 'Announcement text message.' },
      { name: 'defaultBadge', type: 'string', defaultValue: '"PROMO"', description: 'Tag pill text.' },
      { name: 'defaultLinkText', type: 'string', description: 'Clickable callout link text.' },
      { name: 'defaultLinkUrl', type: 'string', description: 'Destination URL for callout link.' },
      { name: 'dismissible', type: 'boolean', defaultValue: 'true', description: 'Whether the user can dismiss the bar.' },
    ],
    prevPage: { title: 'StickyMobileBar', href: '/docs/components/sticky-mobile-bar' },
    nextPage: { title: 'CategoryPills', href: '/docs/components/category-pills' },
  },

  'category-pills': {
    title: 'CategoryPills',
    description: 'Horizontal scrollable category filter pills with active indicator states for e-commerce catalogs.',
    category: 'Storefront Sections',
    badge: 'Navigation',
    previewComponent: <InteractiveCategoryPillsDemo />,
    previewCode: `import { useState } from "react";
import { CategoryPills } from "@deneb-ui/ui";

export default function StoreCatalog() {
  const [category, setCategory] = useState("All");

  return (
    <CategoryPills
      categories={["All", "Sneakers", "Running", "Training"]}
      selected={category}
      onSelect={(c) => setCategory(c)}
    />
  );
}`,
    usageCode: `import { CategoryPills } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add category-pills`,
    props: [
      { name: 'categories', type: 'string[]', required: true, description: 'List of category names.' },
      { name: 'selected', type: 'string', description: 'Currently active category name.' },
      { name: 'onSelect', type: '(category: string) => void', description: 'Callback on selecting a category pill.' },
    ],
    prevPage: { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
    nextPage: { title: 'ContactForm', href: '/docs/components/contact-form' },
  },

  'contact-form': {
    title: 'ContactForm',
    description: 'Lead generation and customer inquiry form with validated fields, accessible inputs, and visual editing bindings.',
    category: 'Storefront Sections',
    badge: 'Forms',
    previewComponent: <InteractiveContactFormDemo />,
    previewCode: `import { ContactForm } from "@deneb-ui/ui";

export default function Contact() {
  return (
    <ContactForm
      title="Get in Touch"
      subtitle="We typically reply within a few hours."
      submitLabel="Send Message"
    />
  );
}`,
    usageCode: `import { ContactForm } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add contact-form`,
    props: [
      { name: 'title', type: 'string', defaultValue: '"Contact Us"', description: 'Heading for the form.' },
      { name: 'subtitle', type: 'string', description: 'Subheading or support note.' },
      { name: 'submitLabel', type: 'string', defaultValue: '"Submit"', description: 'Label on submit button.' },
    ],
    prevPage: { title: 'CategoryPills', href: '/docs/components/category-pills' },
    nextPage: { title: 'CartDrawer', href: '/docs/components/cart-drawer' },
  },

  navbar: {
    title: 'Navbar',
    description: 'Glassmorphism storefront header with logo, desktop links, mobile drawer sheet, search, and cart triggers.',
    category: 'Storefront Sections',
    badge: 'Navigation',
    previewComponent: <InteractiveNavbarDemo />,
    previewCode: `import { Navbar } from "@deneb-ui/ui";

export default function Demo() {
  return <Navbar sticky activeRoute="/" />;
}`,
    usageCode: `import { Navbar } from "@deneb-ui/ui";`,
    props: [
      { name: 'sticky', type: 'boolean', defaultValue: 'true', description: 'Stick to top on scroll.' },
      { name: 'defaultLinks', type: 'NavLinkItem[]', description: 'Navigation links array.' },
    ],
    prevPage: { title: 'ContactForm', href: '/docs/components/contact-form' },
    nextPage: { title: 'Footer', href: '/docs/components/footer' },
  },

  footer: {
    title: 'Footer',
    description: 'Multi-column storefront footer with brand description, navigation links, policy links, and trust badges.',
    category: 'Storefront Sections',
    badge: 'Footer',
    previewComponent: <InteractiveFooterDemo />,
    previewCode: `import { Footer } from "@deneb-ui/ui";

export default function Demo() {
  return <Footer brandName="SoleCharm" copyright="2026 SoleCharm" />;
}`,
    usageCode: `import { Footer } from "@deneb-ui/ui";`,
    props: [
      { name: 'brandName', type: 'string', description: 'Business title.' },
      { name: 'copyright', type: 'string', description: 'Copyright text.' },
    ],
    prevPage: { title: 'Navbar', href: '/docs/components/navbar' },
    nextPage: { title: 'SiteDataProvider', href: '/docs/components/site-data-provider' },
  },

  'site-data-provider': {
    title: 'SiteDataProvider',
    description: 'Headless state engine connecting Fivora API and live window postMessage updates to storefront components without page reloads.',
    category: 'Data & State Engine',
    badge: 'Engine Core',
    previewComponent: <InteractiveSiteDataDemo />,
    previewCode: `import { SiteDataProvider, useProducts, useSiteData } from "@deneb-ui/ui";

export default function RootLayout({ children }) {
  return (
    <SiteDataProvider initialData={initialSiteData}>
      {children}
    </SiteDataProvider>
  );
}`,
    usageCode: `import { SiteDataProvider, useProducts } from "@deneb-ui/ui";`,
    props: [
      { name: 'initialData', type: 'SiteData', description: 'Initial JSON content.' },
      { name: 'api', type: 'SiteDataApiConfig', description: 'Live backend API endpoints.' },
    ],
    prevPage: { title: 'Footer', href: '/docs/components/footer' },
    nextPage: { title: 'ThemeStyles', href: '/docs/components/theme-styles' },
  },

  'theme-styles': {
    title: 'ThemeStyles',
    description: 'Runtime CSS custom properties injector for dynamic color palettes, typography, and border radii with pre-configured industry presets.',
    category: 'Data & State Engine',
    badge: 'Design System',
    previewComponent: <InteractiveThemeStylesDemo />,
    previewCode: `import { ThemeStyles, THEME_PRESETS } from "@deneb-ui/ui";

export default function App() {
  return <ThemeStyles theme={THEME_PRESETS.luxury} />;
}`,
    usageCode: `import { ThemeStyles } from "@deneb-ui/ui";`,
    props: [
      { name: 'theme', type: 'TemplateTheme', description: 'Theme configuration object.' },
      { name: 'preset', type: '"restaurant" | "medical" | "luxury"', description: 'Pre-configured preset name.' },
    ],
    prevPage: { title: 'SiteDataProvider', href: '/docs/components/site-data-provider' },
    nextPage: { title: 'useProducts', href: '/docs/components/use-products' },
  },
  'use-products': {
    title: 'useProducts',
    description: 'React hook to cleanly retrieve products from siteData with automatic backend rehydration from api.catalogUrl and real-time visual editor synchronization.',
    category: 'Data & Theme Engine',
    badge: 'Data Hook',
    previewComponent: <InteractiveUseProductsDemo />,
    previewCode: `import { useProducts, ProductGrid } from "@deneb-ui/ui";

export default function StorefrontCatalog() {
  // Automatically synchronizes with live backend catalog & visual editor
  const products = useProducts();

  return (
    <ProductGrid
      title="Trending Collection"
      subtitle="Handpicked by Store Owner"
      products={products}
      categories={['All', 'Ceramics', 'Kitchen']}
      cardVariant="modern-glass"
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
    />
  );
}`,
    usageCode: `import { useProducts } from "@deneb-ui/ui";`,
    props: [
      { name: 'fallback', type: 'ProductItem[]', defaultValue: '[]', description: 'Fallback array returned if siteData.content.products is empty.' },
      { name: 'returns', type: 'ProductItem[]', description: 'Array of live product items with id, title, price, compareAtPrice, currency, and images.' },
    ],
    prevPage: { title: 'ThemeStyles', href: '/docs/components/theme-styles' },
    nextPage: { title: 'useSiteApi', href: '/docs/components/use-site-api' },
  },

  'use-site-api': {
    title: 'useSiteApi',
    description: 'Hook providing direct typed access to official Fivora backend endpoints configured in site-data.json for custom API requests and form submissions.',
    category: 'Data & Theme Engine',
    badge: 'API Endpoints',
    previewComponent: <InteractiveUseSiteApiDemo />,
    previewCode: `import { useSiteApi } from "@deneb-ui/ui";

export default function CustomContactSection() {
  const api = useSiteApi();

  // Direct backend endpoints from site-data.json:
  const catalogUrl = api?.catalogUrl;
  const contactUrl = api?.contactUrl;
  const baseUrl = api?.baseUrl;

  const handleSubmit = async (data: Record<string, unknown>) => {
    if (!contactUrl) return;
    await fetch(contactUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return null;
}`,
    usageCode: `import { useSiteApi } from "@deneb-ui/ui";`,
    props: [
      { name: 'returns.catalogUrl', type: 'string | null', description: 'Live catalog and product rehydration endpoint.' },
      { name: 'returns.contactUrl', type: 'string | null', description: 'Customer lead submission endpoint.' },
      { name: 'returns.analyticsUrl', type: 'string | null', description: 'Pageview and event analytics logging endpoint.' },
      { name: 'returns.baseUrl', type: 'string | null', description: 'Main Fivora API base URL.' },
    ],
    prevPage: { title: 'useProducts', href: '/docs/components/use-products' },
    nextPage: { title: 'useSiteCatalog', href: '/docs/components/use-site-catalog' },
  },

  'use-site-catalog': {
    title: 'useSiteCatalog',
    description: 'Consolidated hook returning products, services, project identity, site instance, and API configuration in a single reactive call.',
    category: 'Data & Theme Engine',
    badge: 'State Bundle',
    previewComponent: <InteractiveUseSiteCatalogDemo />,
    previewCode: `import { useSiteCatalog } from "@deneb-ui/ui";

export default function StoreOverview() {
  const { products, services, project, siteInstance, api } = useSiteCatalog();

  return (
    <div className="store-summary">
      <h2>{project?.title}</h2>
      <p>Live Domain: {siteInstance?.domain}</p>
      <p>Total Products: {products.length}</p>
      <p>Total Services: {services.length}</p>
    </div>
  );
}`,
    usageCode: `import { useSiteCatalog } from "@deneb-ui/ui";`,
    props: [
      { name: 'returns.products', type: 'ProductItem[]', description: 'Array of live synchronized store products.' },
      { name: 'returns.services', type: 'ServiceItem[]', description: 'Array of live synchronized store services.' },
      { name: 'returns.project', type: 'SiteDataProject | null', description: 'Project slug, title, and status.' },
      { name: 'returns.siteInstance', type: 'SiteInstanceData | null', description: 'Live domain, subdomain, and custom domain info.' },
      { name: 'returns.api', type: 'SiteDataApiConfig | null', description: 'Backend API endpoints configuration.' },
    ],
    prevPage: { title: 'useSiteApi', href: '/docs/components/use-site-api' },
  },


  'product-detail': {
    title: 'ProductDetail',
    description: 'An elite single product showcase with multi-angle gallery, live size & color selectors, direct WhatsApp order CTA, and Fivora visual editing synchronization.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractiveProductDetailDemo />,
    previewCode: `import { ProductDetail } from "@deneb-ui/ui";

export default function SingleProductPage() {
  const product = {
    name: "VANTA Aero X",
    price: "LKR 32,500",
    badge: "BESTSELLER",
    featuredImage: "/products/vanta-aero-x.jpg",
    description: "Lightweight performance runner with responsive dual-density foam.",
    specsTitle: "Specifications",
    shippingTitle: "Shipping & Returns",
    shippingSummary: "Free Islandwide Delivery within 2-3 business days.",
  };

  return (
    <ProductDetail
      product={product}
      sectionPath="product"
      onAddToSelection={(item, size, color) => console.log('Selected:', item, size, color)}
    />
  );
}`,
    usageCode: `import { ProductDetail } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-detail`,
    props: [
      { name: 'product', type: 'ProductDetailItem', required: true, description: 'Product data object with name, price, badge, gallery, description, and policy fields.' },
      { name: 'sectionPath', type: 'string', defaultValue: '"product"', description: 'Fivora page key or section path prefix for visual editing.' },
      { name: 'sizes', type: 'string[]', defaultValue: "['40', '41', '42', '43', '44', '45', '46']", description: 'Available shoe or apparel sizes.' },
      { name: 'colors', type: 'Array<{ name: string; hex: string }>', description: 'Color swatch options with names and hex codes.' },
      { name: 'onAddToSelection', type: '(product, size, color) => void', description: 'Callback triggered when clicking the primary action button.' },
      { name: 'whatsappUrl', type: 'string', description: 'Custom WhatsApp click-to-chat order URL.' },
      { name: 'className', type: 'string', defaultValue: '""', description: 'Additional CSS or Tailwind classes.' },
    ],
    prevPage: { title: 'Hero', href: '/docs/components/hero' },
    nextPage: { title: 'ProductQuickView', href: '/docs/components/product-quickview' },
  },

  'product-quickview': {
    title: 'ProductQuickView',
    description: 'Instant lightbox inspection modal for products with thumbnail switcher, bounds-protected quantity counter, and live visual editing.',
    category: 'Storefront Sections',
    badge: 'Interactive',
    previewComponent: <InteractiveProductQuickViewDemo />,
    previewCode: `import { useState } from "react";
import { ProductQuickView } from "@deneb-ui/ui";

export default function QuickViewDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Quick View</button>
      <ProductQuickView
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={{
          id: "1",
          title: "VANTA Flux 01",
          price: "28,900",
          currency: "LKR ",
          imageUrl: "/products/vanta-flux-01.jpg",
          description: "Retro silhouette with modern comfort stack.",
        }}
        itemPath="home.product1"
        onAddToCart={(p, qty) => alert(\`Added \${qty} items\`)}
      />
    </>
  );
}`,
    usageCode: `import { ProductQuickView } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-quickview`,
    props: [
      { name: 'product', type: 'ProductQuickViewItem | null', required: true, description: 'Product data object to inspect.' },
      { name: 'isOpen', type: 'boolean', required: true, description: 'Controls modal open/closed state.' },
      { name: 'onClose', type: '() => void', required: true, description: 'Callback invoked when dismissing or pressing Escape.' },
      { name: 'itemPath', type: 'string', description: 'Field path prefix for Fivora live visual editing in test lab.' },
      { name: 'onAddToCart', type: '(product, quantity) => void', description: 'Callback when buyer adds item to cart.' },
      { name: 'addToCartLabel', type: 'string', defaultValue: '"Add to Selection"', description: 'Label for the primary CTA button.' },
    ],
    prevPage: { title: 'ProductDetail', href: '/docs/components/product-detail' },
    nextPage: { title: 'ProductGrid', href: '/docs/components/product-grid' },
  },

  'product-grid': {
    title: 'ProductGrid',
    description: 'Responsive commerce catalog grid with category filter tabs and configurable columns per device (mobile / tablet / desktop). Includes quick-view hook.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractiveProductGridDemo />,
    previewCode: `import { ProductGrid } from "@deneb-ui/ui";

export default function Catalog() {
  // Zero-Config: Automatically fetches products via useProducts()
  // and auto-derives category filter pills!
  return (
    <ProductGrid
      title="Trending Collection"
      subtitle="Just Dropped"
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
      onQuickView={(p, itemPath) => console.log("Quick view:", p)}
    />
  );
}`,
    usageCode: `import { ProductGrid } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-grid`,
    props: [
      { name: 'products', type: 'ProductItem[]', required: false, defaultValue: 'useProducts()', description: 'Optional. If omitted, automatically fetches live products from site data and backend.' },
      { name: 'sectionPath', type: 'string', defaultValue: '"home"', description: 'Fivora section key for live editing.' },
      { name: 'title', type: 'string', defaultValue: '"Featured Collection"', description: 'Heading for the product grid.' },
      { name: 'subtitle', type: 'string', defaultValue: '"Just Dropped"', description: 'Badge or category subtitle above heading.' },
      { name: 'categories', type: 'string[]', defaultValue: "['All']", description: 'Filter pills rendered above the grid.' },
      { name: 'columns', type: '{ mobile?: number; tablet?: number; desktop?: number }', description: 'Responsive column counts.' },
      { name: 'onQuickView', type: '(product, itemPath) => void', description: 'Callback triggered when user hovers and clicks Quick View.' },
    ],
    prevPage: { title: 'ProductQuickView', href: '/docs/components/product-quickview' },
    nextPage: { title: 'CustomerReviews', href: '/docs/components/customer-reviews' },
  },

  'customer-reviews': {
    title: 'CustomerReviews',
    description: 'High-converting social proof showcase with aggregate star score, verified buyer authentication tags, and rating filters.',
    category: 'Storefront Sections',
    badge: 'Social Proof',
    previewComponent: <InteractiveCustomerReviewsDemo />,
    previewCode: `import { CustomerReviews } from "@deneb-ui/ui";

export default function ReviewsSection() {
  return (
    <CustomerReviews
      title="Loved by Athletes Worldwide"
      subtitle="Verified Customer Reviews"
      averageRating="4.9"
      totalReviews="1,420+"
    />
  );
}`,
    usageCode: `import { CustomerReviews } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add customer-reviews`,
    props: [
      { name: 'title', type: 'string', defaultValue: '"Loved by Athletes & Runners Worldwide"', description: 'Section title.' },
      { name: 'subtitle', type: 'string', defaultValue: '"Verified Customer Reviews"', description: 'Top subtitle tag.' },
      { name: 'averageRating', type: 'string | number', defaultValue: '"4.9"', description: 'Aggregate rating score.' },
      { name: 'totalReviews', type: 'string | number', defaultValue: '"1,420+"', description: 'Total review count display.' },
      { name: 'reviews', type: 'CustomerReviewItem[]', description: 'Array of custom reviews.' },
      { name: 'sectionPath', type: 'string', defaultValue: '"home"', description: 'Visual editing field path prefix.' },
    ],
    prevPage: { title: 'ProductGrid', href: '/docs/components/product-grid' },
    nextPage: { title: 'TrustBadges', href: '/docs/components/trust-badges' },
  },

  'trust-badges': {
    title: 'TrustBadges',
    description: 'Conversion-boosting security and guarantee strip featuring free shipping, SSL checkout, warranty, and returns badges.',
    category: 'Storefront Sections',
    badge: 'Conversion',
    previewComponent: <InteractiveTrustBadgesDemo />,
    previewCode: `import { TrustBadges } from "@deneb-ui/ui";

export default function CheckoutPage() {
  return <TrustBadges />;
}`,
    usageCode: `import { TrustBadges } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add trust-badges`,
    props: [
      { name: 'className', type: 'string', defaultValue: '""', description: 'Additional CSS or Tailwind class names.' },
    ],
    prevPage: { title: 'CustomerReviews', href: '/docs/components/customer-reviews' },
    nextPage: { title: 'StickyMobileBar', href: '/docs/components/sticky-mobile-bar' },
  },

  'sticky-mobile-bar': {
    title: 'StickyMobileBar',
    description: 'Sticky bottom checkout and WhatsApp action bar for mobile devices, boosting mobile conversion rates.',
    category: 'Storefront Sections',
    badge: 'Mobile',
    previewComponent: <InteractiveStickyMobileBarDemo />,
    previewCode: `import { StickyMobileBar } from "@deneb-ui/ui";

export default function MobileLayout() {
  return (
    <StickyMobileBar
      whatsappNumber="15550192834"
      ctaLabel="Order via WhatsApp"
      price="LKR 32,500"
    />
  );
}`,
    usageCode: `import { StickyMobileBar } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add sticky-mobile-bar`,
    props: [
      { name: 'whatsappNumber', type: 'string', description: 'Merchant WhatsApp phone number for 1-click ordering.' },
      { name: 'ctaLabel', type: 'string', defaultValue: '"Order via WhatsApp"', description: 'Action button text.' },
      { name: 'price', type: 'string', description: 'Price display shown on the left side of the bar.' },
    ],
    prevPage: { title: 'TrustBadges', href: '/docs/components/trust-badges' },
    nextPage: { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
  },

  'filter-sidebar': {
    title: 'FilterSidebar',
    description: 'Faceted catalog filtering sidebar with category chips, price slider, and size swatches. Collapses behind a mobile toggle below 768px; always visible on tablet and desktop.',
    category: 'E-Commerce',
    badge: 'Commerce',
    previewComponent: <InteractiveFilterSidebarDemo />,
    previewCode: `import { useState } from "react";
import { FilterSidebar } from "@deneb-ui/ui";

export default function Catalog() {
  const [filters, setFilters] = useState({
    selectedCategories: ["Running"],
    priceRange: [0, 200],
    selectedSizes: ["US 10"],
    inStockOnly: true,
  });

  return (
    <div className="flex gap-8">
      <FilterSidebar
        categories={["Running", "Lifestyle", "Training"]}
        sizes={["US 8", "US 9", "US 10", "US 11"]}
        maxPrice={300}
        onFilterChange={(f) => setFilters(f)}
      />
      <main>Catalog Products</main>
    </div>
  );
}`,
    usageCode: `import { FilterSidebar } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add filter-sidebar`,
    props: [
      { name: 'basePath', type: 'string', defaultValue: '"filters"', description: 'Visual editing schema path.' },
      { name: 'categories', type: 'string[]', description: 'List of product categories.' },
      { name: 'sizes', type: 'string[]', description: 'Available size filter options.' },
      { name: 'minPrice', type: 'number', defaultValue: '0', description: 'Minimum price filter bound.' },
      { name: 'maxPrice', type: 'number', defaultValue: '300', description: 'Maximum price filter bound.' },
      { name: 'onFilterChange', type: '(filters) => void', description: 'Callback fired on any filter adjustment.' },
    ],
    prevPage: { title: 'CartDrawer', href: '/docs/components/cart-drawer' },
    nextPage: { title: 'GoogleFeedback', href: '/docs/components/google-feedback' },
  },

  'google-feedback': {
    title: 'GoogleFeedback',
    description: 'Official Google Customer Review card section with verified platform badge, aggregate star pill, live 1–5 star DOM synchronization, and responsive review cards.',
    category: 'Storefront Sections',
    badge: 'Social / Google',
    previewComponent: <InteractiveGoogleFeedbackDemo />,
    previewCode: `import { GoogleFeedback, useSiteData } from "@deneb-ui/ui";

export default function ReviewsSection() {
  const { siteData } = useSiteData();
  const feedback = siteData?.content?.feedback || {};

  return (
    <GoogleFeedback
      basePath="feedback"
      badgeIcon={feedback.badgeIcon}
      badgeTitle={feedback.badgeTitle}
      badgeRating={feedback.badgeRating}
      badgeReviewsCount={feedback.badgeReviewsCount}
      heading={feedback.heading}
      subheading={feedback.subheading}
      feedbacks={feedback.feedbacks}
    />
  );
}`,
    usageCode: `import { GoogleFeedback } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add google-feedback`,
    props: [
      { name: 'basePath', type: 'string', defaultValue: '"feedback"', description: 'JSON schema root key in site-data.json for Fivora visual editing.' },
      { name: 'badgeIcon', type: 'string', defaultValue: 'Google "G" SVG', description: 'URL or SVG data URI for the review platform badge.' },
      { name: 'badgeTitle', type: 'string', defaultValue: '"Google"', description: 'Review platform name shown alongside the badge icon.' },
      { name: 'badgeRating', type: 'string | number', defaultValue: '"4.9"', description: 'Aggregate rating number displayed in the section header.' },
      { name: 'badgeReviewsCount', type: 'string | number', defaultValue: '"128 reviews"', description: 'Total review count label.' },
      { name: 'heading', type: 'string', defaultValue: '"Loved by Coffee Lovers..."', description: 'Section primary headline.' },
      { name: 'subheading', type: 'string', description: 'Section introductory description paragraph.' },
      { name: 'feedbacks', type: 'FeedbackItem[]', description: 'Array of customer review items with name, avatar, rating (1-5), and comment.' },
      { name: 'maxStars', type: 'number', defaultValue: '5', description: 'Maximum rating star count.' },
      { name: 'className', type: 'string', description: 'Custom CSS / Tailwind classes for section container.' },
      { name: 'cardClassName', type: 'string', description: 'Custom CSS / Tailwind classes for individual review cards.' },
    ],
    prevPage: { title: 'FilterSidebar', href: '/docs/components/filter-sidebar' },
    nextPage: { title: 'TestimonialSection', href: '/docs/components/testimonial-section' },
  },

  'testimonial-section': {
    title: 'TestimonialSection',
    description: 'Editorial critic and connoisseur review showcase featuring large quotation typography, author credentials, accreditation tags, and synchronized star ratings.',
    category: 'Storefront Sections',
    badge: 'Editorial',
    previewComponent: <InteractiveTestimonialSectionDemo />,
    previewCode: `import { TestimonialSection, useSiteData } from "@deneb-ui/ui";

export default function ConnoisseurReviews() {
  const { siteData } = useSiteData();
  const data = siteData?.content?.testimonials || {};

  return (
    <TestimonialSection
      basePath="testimonials"
      badge={data.badge}
      heading={data.heading}
      subheading={data.subheading}
      testimonials={data.testimonials}
    />
  );
}`,
    usageCode: `import { TestimonialSection } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add testimonial-section`,
    props: [
      { name: 'basePath', type: 'string', defaultValue: '"testimonials"', description: 'Root key in site-data.json for Fivora visual editing.' },
      { name: 'badge', type: 'string', defaultValue: '"Critic Acclaim"', description: 'Uppercase pill badge text displayed above heading.' },
      { name: 'heading', type: 'string', defaultValue: '"What Connoisseurs Say"', description: 'Main section title.' },
      { name: 'subheading', type: 'string', description: 'Subheading description text.' },
      { name: 'testimonials', type: 'TestimonialSectionItem[]', description: 'Array of critic reviews containing quote, author, role, avatar, tag, and rating.' },
      { name: 'maxStars', type: 'number', defaultValue: '5', description: 'Maximum star rating per testimonial.' },
      { name: 'className', type: 'string', description: 'CSS / Tailwind classes for section wrapper.' },
      { name: 'cardClassName', type: 'string', description: 'CSS / Tailwind classes for testimonial cards.' },
    ],
    prevPage: { title: 'GoogleFeedback', href: '/docs/components/google-feedback' },
    nextPage: { title: 'Map', href: '/docs/components/map' },
  },

  map: {
    title: 'Map',
    description: 'Universal Google Maps responsive iframe embed with intelligent URL parsing for full iframe snippets, @lat,lng coordinates, place URLs, short links, and search queries.',
    category: 'Location & Navigation',
    badge: 'Universal Embed',
    previewComponent: <InteractiveMapDemo />,
    previewCode: `import { Map } from "@deneb-ui/ui";

export default function LocationMap({ mapUrl, address }: { mapUrl?: string; address?: string }) {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
      <Map
        data-preview-field-path="contact.mapUrl"
        mapUrl={mapUrl}
        address={address}
        className="w-full h-full border-0"
      />
    </div>
  );
}`,
    usageCode: `import { Map } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add map`,
    props: [
      { name: 'mapUrl', type: 'string', description: 'Google Maps URL, share link, coordinate URL (@lat,lng), place URL, or full <iframe> embed tag.' },
      { name: 'address', type: 'string', defaultValue: '"Sri Lanka"', description: 'Physical address fallback query string when mapUrl is empty or unparseable.' },
      { name: 'defaultLocation', type: 'string', description: 'Secondary location fallback query string.' },
      { name: 'data-preview-field-path', type: 'string', description: 'Fivora visual editing binding annotation.' },
      { name: 'className', type: 'string', defaultValue: '"w-full h-full border-0"', description: 'CSS / Tailwind styling for iframe.' },
      { name: 'title', type: 'string', defaultValue: '"Google Map Location"', description: 'Accessibility title attribute for the iframe.' },
    ],
    prevPage: { title: 'TestimonialSection', href: '/docs/components/testimonial-section' },
    nextPage: { title: 'ProductCard', href: '/docs/components/product-card' },
  },

  'product-card': {
    title: 'ProductCard',
    description: 'High-converting e-commerce product card with Sri Lankan Rupee (LKR) pricing, brand attribution, dual WhatsApp inquiry & Add to Cart actions, and Fivora visual editing synchronization.',
    category: 'E-Commerce & Storefront',
    badge: 'LKR + WhatsApp',
    previewComponent: <InteractiveProductCardDemo />,
    previewCode: `import { ProductCard } from "@deneb-ui/ui";

export default function FeaturedProduct() {
  const product = {
    id: "spiced-chai",
    name: "Royal Ceylon Spiced Chai Tea",
    brand: "Ceylon Organics",
    price: "LKR 2,450.00",
    originalPrice: "LKR 2,900.00",
    description: "Single-origin Sri Lankan black tea with organic cinnamon and cardamom.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    whatsappNumber: "94771234567",
    whatsappButtonText: "Inquire on WhatsApp",
    addToCartButtonText: "Add to Cart"
  };

  return (
    <ProductCard
      itemPath="products[0]"
      product={product}
      cardVariant="modern-glass"
      currency="LKR"
      whatsappNumber="94771234567"
      storeName="Ceylon Tea Masters"
    />
  );
}`,
    usageCode: `import { ProductCard } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add product-card`,
    props: [
      { name: 'itemPath', type: 'string', required: true, description: 'Fivora visual editing item path (e.g. "products[0]").' },
      { name: 'product', type: 'ProductItem', required: true, description: 'Product data object containing name, brand, price, imageUrl, description, and WhatsApp settings.' },
      { name: 'cardVariant', type: "'modern-glass' | 'classic' | 'minimal' | 'horizontal'", defaultValue: "'modern-glass'", description: 'Visual style and layout variant.' },
      { name: 'currency', type: 'string', defaultValue: "'LKR'", description: 'Currency code or symbol for price formatting.' },
      { name: 'showBrand', type: 'boolean', defaultValue: 'true', description: 'Whether to display the editable brand tag.' },
      { name: 'showPrice', type: 'boolean', defaultValue: 'true', description: 'Whether to display the product price.' },
      { name: 'whatsappNumber', type: 'string', defaultValue: "'94770000000'", description: 'Default WhatsApp number for product inquiries.' },
      { name: 'whatsappActionLabel', type: 'string', defaultValue: "'Inquire on WhatsApp'", description: 'Default label for the WhatsApp button.' },
      { name: 'addToCartLabel', type: 'string', defaultValue: "'Add to Cart'", description: 'Default label for the Add to Cart button.' },
      { name: 'showWhatsAppButton', type: 'boolean', defaultValue: 'true', description: 'Whether to display the WhatsApp contact button.' },
      { name: 'showAddToCartButton', type: 'boolean', defaultValue: 'true', description: 'Whether to display the Add to Cart button.' },
      { name: 'storeName', type: 'string', description: 'Store name included in WhatsApp chat message template.' },
      { name: 'onAddToCart', type: '(product: ProductItem) => void', description: 'Callback triggered when Add to Cart is clicked.' },
      { name: 'onWhatsAppClick', type: '(product: ProductItem, url: string) => void', description: 'Callback triggered when WhatsApp button is clicked.' },
    ],
    prevPage: { title: 'Map', href: '/docs/components/map' },
    nextPage: { title: 'CartDrawer', href: '/docs/components/cart-drawer' },
  },

  'cart-drawer': {
    title: 'CartDrawer',
    description: 'Interactive slide-over cart drawer with real-time state persistence, LKR currency formatting, quantity controls, and one-click unified WhatsApp checkout compiling all cart products into a single order chat message.',
    category: 'E-Commerce & Storefront',
    badge: 'WhatsApp Checkout',
    previewComponent: <InteractiveCartDrawerDemo />,
    previewCode: `import { CartProvider, CartDrawer, useCart } from "@deneb-ui/ui";

function StoreHeader() {
  const { openCart, totalCount } = useCart();
  return (
    <button onClick={openCart} className="relative p-2">
      <span>Cart ({totalCount})</span>
    </button>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <StoreHeader />
      {children}
      <CartDrawer
        whatsappNumber="94771234567"
        storeName="DENEB Lanka Store"
        currency="LKR"
        freeShippingThreshold={15000}
      />
    </CartProvider>
  );
}`,
    usageCode: `import { CartDrawer, CartProvider, useCart } from "@deneb-ui/ui";`,
    cliCommand: `npx @deneb-ui/cli add cart-drawer`,
    props: [
      { name: 'basePath', type: 'string', defaultValue: "'cart'", description: 'Root key in site-data.json for Fivora visual editing.' },
      { name: 'whatsappNumber', type: 'string', defaultValue: "'94770000000'", description: 'WhatsApp business phone number for order chat.' },
      { name: 'storeName', type: 'string', description: 'Store name printed on the WhatsApp order summary.' },
      { name: 'currency', type: 'string', defaultValue: "'LKR'", description: 'Currency symbol or code used for item and total calculation.' },
      { name: 'freeShippingThreshold', type: 'number', description: 'Optional threshold in LKR to show free shipping progress bar.' },
      { name: 'checkoutUrl', type: 'string', description: 'Optional secondary checkout web URL.' },
      { name: 'onCheckout', type: '(items: CartItem[], total: number) => void', description: 'Optional checkout callback.' },
    ],
    prevPage: { title: 'ProductCard', href: '/docs/components/product-card' },
    nextPage: { title: 'Button', href: '/docs/components/button' },
  },
};

export const COMPONENT_SLUGS = Object.keys(COMPONENT_DOCS);
