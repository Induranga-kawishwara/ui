import { ImageResponse } from 'next/og';

export const alt = 'DENEB UI — Visual-First React Framework';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#08090E',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.35), transparent)',
          color: '#ffffff',
          padding: '48px 64px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.8,
          }}
        />

        {/* Brand Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '28px',
            zIndex: 10,
          }}
        >
          {/* Glowing 8-point celestial star */}
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(129, 140, 248, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#818CF8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#star-grad)" />
              <defs>
                <linearGradient id="star-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#A5B4FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            style={{
              fontSize: '36px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(to right, #ffffff, #CBD5E1)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            DENEB UI
          </div>

          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              color: '#A5B4FC',
              letterSpacing: '0.05em',
            }}
          >
            v2.0 • FIVORA READY
          </div>
        </div>

        {/* Main Headline */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '1000px',
            marginBottom: '20px',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            zIndex: 10,
          }}
        >
          Visual-First React Framework & Storefront Suite
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#94A3B8',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: 1.4,
            marginBottom: '36px',
            zIndex: 10,
          }}
        >
          shadcn-style unopinionated primitives with smart commerce actions, WhatsApp direct checkout, live business hours & instant CLI scaffolding.
        </div>

        {/* Feature Badges Bar */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            zIndex: 10,
          }}
        >
          {[
            '49+ Primitives',
            'Zero Extra Bloat',
            'Fivora Native',
            'Tailwind CSS v4',
            'Next.js 16 Ready',
          ].map((tag, i) => (
            <div
              key={i}
              style={{
                fontSize: '15px',
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
