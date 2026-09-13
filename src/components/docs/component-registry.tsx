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
} from '@/components/deneb-ui';
import {
  Button as DenebButton,
  Card as DenebCard,
  Badge as DenebBadge,
  Heading as DenebHeading,
  ProductCard,
  PricingCard,
  TestimonialCard,
  ServiceCard,
  Accordion as FAQAccordion,
  AnnouncementBar,
  CategoryPills,
  ContactForm,
  EditableDialog,
  EditableGrid,
  EditableBox,
  EditableImage,
  EditableText,
  EditableNavbar,
  EditableFooter,
  EditableHeroCentered,
  EditableHeroSplit,
  SiteDataProvider,
  ThemeStyles,
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
  Mail,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
  Layers,
  LayoutGrid,
  Maximize2,
  CheckCircle2,
  Heart,
  Palette,
  Database,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

/* ==========================================================================
   Interactive Showcase Demo Components
   ========================================================================== */

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

function InteractiveProductCardDemo() {
  return (
    <div className="w-full max-w-xs mx-auto p-4 rounded-2xl bg-[#0F1424] border border-[#23283B] hover:border-[#818CF8]/50 shadow-xl space-y-3 text-left">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-[#141829]">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#818CF8] text-white">
          BESTSELLER
        </span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#818CF8] font-bold uppercase tracking-wider text-[10px]">Footwear</span>
        <div className="flex items-center gap-1 text-amber-400 font-semibold text-[11px]">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>4.9 (128)</span>
        </div>
      </div>
      <h4 className="font-bold text-white text-sm">Classic Oxford Runner</h4>
      <div className="flex items-baseline gap-2">
        <span className="text-base font-extrabold text-white">LKR 4,500</span>
        <span className="text-xs line-through text-[#94A3B8]">LKR 5,900</span>
      </div>
      <button className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 border-0 cursor-pointer shadow-md">
        <MessageSquare className="w-3.5 h-3.5" /> Order via WhatsApp
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


/* ==========================================================================
   Complete Component Documentation Registry (All 31 Components)
   ========================================================================== */

export const COMPONENT_DOCS: Record<string, ComponentDocPageProps> = {
  // 1. Core Primitives
  button: {
    title: 'Button',
    description: 'High-conversion button primitive supporting glowing gradients, loading spinners, icons, and visual editing paths.',
    category: 'Core Primitives',
    badge: 'Core Primitive',
    previewComponent: <InteractiveButtonDemo />,
    previewCode: `import { Button } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" size="md">Primary Celestial</Button>
      <Button variant="outline" size="md">Secondary Cosmic</Button>
    </div>
  );
}`,
    usageCode: `import { Button } from "@deneb-ui/ui";\n\n<Button variant="primary">Shop Collection</Button>`,
    props: [
      { name: 'variant', type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"', defaultValue: '"primary"', description: 'Visual style variant.' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', defaultValue: '"md"', description: 'Button size tokens.' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Shows animated loading spinner.' },
      { name: 'contentField', type: 'string', description: 'Fivora visual editing path (e.g. "home.heroCta").' },
    ],
    nextPage: { title: 'Card', href: '/docs/components/card' },
  },

  card: {
    title: 'Card',
    description: 'Adaptive container card with rounded corners, responsive elevation, border glow, and glassmorphism styling.',
    category: 'Core Primitives',
    badge: 'Core Primitive',
    previewComponent: <InteractiveCardDemo />,
    previewCode: `import { Card } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <Card hoverEffect className="p-6">
      <h3 className="text-lg font-bold">Smart Architecture Card</h3>
      <p className="text-xs text-muted">Clean container with elevation tokens.</p>
    </Card>
  );
}`,
    usageCode: `import { Card } from "@deneb-ui/ui";\n\n<Card hoverEffect>...</Card>`,
    props: [
      { name: 'hoverEffect', type: 'boolean', defaultValue: 'false', description: 'Enables 3D elevation and border highlight on hover.' },
      { name: 'as', type: 'React.ElementType', defaultValue: '"div"', description: 'Rendered HTML element tag.' },
    ],
    prevPage: { title: 'Button', href: '/docs/components/button' },
    nextPage: { title: 'Badge', href: '/docs/components/badge' },
  },

  badge: {
    title: 'Badge',
    description: 'Pill-shaped highlight badge for promotional flags (Sale, New, Best Seller) with live color tokens.',
    category: 'Core Primitives',
    badge: 'Core Primitive',
    previewComponent: <InteractiveBadgeDemo />,
    previewCode: `import { Badge } from "@deneb-ui/ui";

export default function Demo() {
  return <Badge variant="primary">Celestial Glow</Badge>;
}`,
    usageCode: `import { Badge } from "@deneb-ui/ui";\n\n<Badge variant="primary">New Drop</Badge>`,
    props: [
      { name: 'variant', type: '"primary" | "secondary" | "outline" | "success" | "warning"', defaultValue: '"primary"', description: 'Color scheme.' },
      { name: 'size', type: '"sm" | "md"', defaultValue: '"md"', description: 'Badge dimensions.' },
    ],
    prevPage: { title: 'Card', href: '/docs/components/card' },
    nextPage: { title: 'Typography', href: '/docs/components/typography' },
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

  // 2. Smart Commerce Actions
  'contact-actions': {
    title: 'ContactActions',
    description: 'Unified multi-channel contact bar presenting WhatsApp, direct telephone dialing, and email inquiries in a compact pill or column layout.',
    category: 'Smart Commerce Actions',
    badge: 'High Conversion',
    previewComponent: <InteractiveContactActionsDemo />,
    previewCode: `import { ContactActions } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <ContactActions
      channels={['whatsapp', 'phone', 'email']}
      layout="row"
      size="md"
    />
  );
}`,
    usageCode: `import { ContactActions } from "@deneb-ui/ui";\n\n<ContactActions channels={['whatsapp', 'phone', 'email']} />`,
    props: [
      { name: 'channels', type: '("whatsapp" | "phone" | "email")[]', defaultValue: '["whatsapp", "phone"]', description: 'Enabled contact options.' },
      { name: 'layout', type: '"row" | "column" | "wrap"', defaultValue: '"row"', description: 'Flex presentation.' },
      { name: 'size', type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: 'Button sizes.' },
    ],
    prevPage: { title: 'Image', href: '/docs/components/image' },
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
      { name: 'value', type: 'string', required: true, description: 'Phone number in international format.' },
      { name: 'label', type: 'string', defaultValue: '"WhatsApp"', description: 'Button label text.' },
      { name: 'message', type: 'string', description: 'Pre-filled message template.' },
    ],
    prevPage: { title: 'ContactActions', href: '/docs/components/contact-actions' },
    nextPage: { title: 'PhoneButton', href: '/docs/components/phone-button' },
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

  // 3. Location & Navigation
  'location-card': {
    title: 'LocationCard',
    description: 'Storefront location card with formatted address, map pin, and direct Google Maps directions trigger.',
    category: 'Location & Navigation',
    badge: 'Maps & Location',
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
      { name: 'street', type: 'string', description: 'Street address line.' },
      { name: 'city', type: 'string', description: 'City name.' },
      { name: 'country', type: 'string', description: 'Country name.' },
      { name: 'mapQuery', type: 'string', description: 'Google Maps search query.' },
    ],
    prevPage: { title: 'FloatingContactWidget', href: '/docs/components/floating-contact-widget' },
    nextPage: { title: 'LocationLink', href: '/docs/components/location-link' },
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

  // 4. Social & Business Hours
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
  return <BusinessHours schedule={schedule} timezone="Asia/Colombo" />;
}`,
    usageCode: `import { BusinessHours } from "@deneb-ui/ui";\n\n<BusinessHours schedule={schedule} />`,
    props: [
      { name: 'schedule', type: 'Record<string, string>', required: true, description: 'Day-to-time map.' },
      { name: 'timezone', type: 'string', description: 'Timezone for calculations (e.g. "Asia/Colombo").' },
    ],
    prevPage: { title: 'Address', href: '/docs/components/address' },
    nextPage: { title: 'SocialLinks', href: '/docs/components/social-links' },
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
      x="https://x.com"
      variant="pills"
    />
  );
}`,
    usageCode: `import { SocialLinks } from "@deneb-ui/ui";`,
    props: [
      { name: 'variant', type: '"pills" | "icons" | "minimal"', defaultValue: '"pills"', description: 'Icon container presentation.' },
    ],
    prevPage: { title: 'BusinessHours', href: '/docs/components/business-hours' },
    nextPage: { title: 'SocialButton', href: '/docs/components/social-button' },
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

  // 5. Storefront Sections
  hero: {
    title: 'Hero',
    description: 'Centered and split hero banner sections with high-impact headline, glowing CTAs, and commerce actions.',
    category: 'Storefront Sections',
    badge: 'Layout',
    previewComponent: (
      <div className="p-8 text-center space-y-4 max-w-xl mx-auto">
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
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#818CF8] text-white shadow-md border-0 cursor-pointer">
            Explore Demo
          </button>
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#141829] text-white border border-[#23283B] cursor-pointer">
            Documentation
          </button>
        </div>
      </div>
    ),
    previewCode: `import { Hero } from "@deneb-ui/ui";\n\n<Hero title="Supercharge Your Storefront" subtitle="..." />`,
    usageCode: `import { Hero } from "@deneb-ui/ui";`,
    props: [
      { name: 'title', type: 'string', description: 'Hero headline.' },
      { name: 'subtitle', type: 'string', description: 'Supporting intro text.' },
      { name: 'primaryCta', type: 'string', description: 'Primary action button text.' },
    ],
    prevPage: { title: 'SocialButton', href: '/docs/components/social-button' },
    nextPage: { title: 'ProductCard', href: '/docs/components/product-card' },
  },

  'product-card': {
    title: 'ProductCard',
    description: 'High-converting commerce product card with responsive image, pricing, badge, and quick WhatsApp order trigger.',
    category: 'Storefront Sections',
    badge: 'Commerce',
    previewComponent: <InteractiveProductCardDemo />,
    previewCode: `import { ProductCard } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <ProductCard
      title="Classic Oxford Runner"
      price="LKR 4,500"
      originalPrice="LKR 5,900"
      badge="BESTSELLER"
      rating={4.9}
      onAddToCart={() => alert('Order triggered!')}
    />
  );
}`,
    usageCode: `import { ProductCard } from "@deneb-ui/ui";`,
    props: [
      { name: 'product', type: 'ProductItem', description: 'Product data record.' },
      { name: 'itemPath', type: 'string', description: 'Path in site content (e.g. "products[0]").' },
      { name: 'currency', type: 'string', defaultValue: '"LKR"', description: 'Price currency symbol.' },
    ],
    prevPage: { title: 'Hero', href: '/docs/components/hero' },
    nextPage: { title: 'ServiceCard', href: '/docs/components/service-card' },
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
      { name: 'title', type: 'string', required: true, description: 'Tier title.' },
      { name: 'price', type: 'string', required: true, description: 'Price amount.' },
      { name: 'features', type: 'string[]', description: 'Feature checkmarks list.' },
      { name: 'isPopular', type: 'boolean', defaultValue: 'false', description: 'Displays highlight badge.' },
    ],
    prevPage: { title: 'ServiceCard', href: '/docs/components/service-card' },
    nextPage: { title: 'TestimonialCard', href: '/docs/components/testimonial-card' },
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
        { q: 'How does WhatsApp checkout work?', a: 'Customers click the button to order via WhatsApp.' },
        { q: 'Is it free?', a: 'Yes, MIT Licensed.' },
      ]}
    />
  );
}`,
    usageCode: `import { Accordion } from "@deneb-ui/ui";`,
    props: [
      { name: 'items', type: '{ q: string; a: string }[]', required: true, description: 'Questions and answers.' },
    ],
    prevPage: { title: 'TestimonialCard', href: '/docs/components/testimonial-card' },
    nextPage: { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
  },

  'announcement-bar': {
    title: 'AnnouncementBar',
    description: 'Top sticky announcement ribbon with countdown, promo code, and dismissal action.',
    category: 'Storefront Sections',
    badge: 'Marketing',
    previewComponent: <InteractiveAnnouncementBarDemo />,
    previewCode: `import { AnnouncementBar } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <AnnouncementBar
      message="Summer Flash Drop: Get 20% off all sneakers!"
      ctaLabel="Claim Now"
    />
  );
}`,
    usageCode: `import { AnnouncementBar } from "@deneb-ui/ui";`,
    props: [
      { name: 'message', type: 'string', required: true, description: 'Banner announcement text.' },
      { name: 'ctaLabel', type: 'string', description: 'Action button text.' },
    ],
    prevPage: { title: 'FAQAccordion', href: '/docs/components/faq-accordion' },
    nextPage: { title: 'CategoryPills', href: '/docs/components/category-pills' },
  },

  'category-pills': {
    title: 'CategoryPills',
    description: 'Filterable category chips with active states and product counts for high-converting catalog filtering.',
    category: 'Storefront Sections',
    badge: 'Catalog Filter',
    previewComponent: <InteractiveCategoryPillsDemo />,
    previewCode: `import { CategoryPills } from "@deneb-ui/ui";

export default function Demo() {
  return (
    <CategoryPills
      categories={['All', 'Running', 'Casual', 'Formal']}
      activeCategory="All"
      onSelectCategory={(cat) => console.log(cat)}
    />
  );
}`,
    usageCode: `import { CategoryPills } from "@deneb-ui/ui";`,
    props: [
      { name: 'categories', type: 'string[]', required: true, description: 'Category list.' },
      { name: 'activeCategory', type: 'string', description: 'Currently active category.' },
    ],
    prevPage: { title: 'AnnouncementBar', href: '/docs/components/announcement-bar' },
    nextPage: { title: 'ContactForm', href: '/docs/components/contact-form' },
  },

  'contact-form': {
    title: 'ContactForm',
    description: 'Storefront inquiry form with input validation, toast notifications, and direct submission handling.',
    category: 'Storefront Sections',
    badge: 'Lead Capture',
    previewComponent: <InteractiveContactFormDemo />,
    previewCode: `import { ContactForm } from "@deneb-ui/ui";

export default function Demo() {
  return <ContactForm onSubmit={(data) => console.log(data)} />;
}`,
    usageCode: `import { ContactForm } from "@deneb-ui/ui";`,
    props: [
      { name: 'onSubmit', type: '(data: any) => Promise<void> | void', description: 'Form submission handler.' },
    ],
    prevPage: { title: 'CategoryPills', href: '/docs/components/category-pills' },
    nextPage: { title: 'Navbar', href: '/docs/components/navbar' },
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

  // 6. Data & Theme Engine
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
  },
};

export const COMPONENT_SLUGS = Object.keys(COMPONENT_DOCS);
