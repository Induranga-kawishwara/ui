'use client';

import React from 'react';
import { SocialButton, SocialPlatform } from './SocialButton';
import { useSocial } from '../SiteDataProvider';

export interface SocialLinksProps {
  /** Social links map, e.g. { instagram: "https://...", facebook: "https://..." }.
   *  When omitted, auto-hydrates from the live merchant Fivora Portal profile via useSocial(). */
  social?: Record<string, string | null | undefined>;
  fieldPathPrefix?: string;
  variant?: 'icon' | 'pill' | 'button';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const SUPPORTED_PLATFORMS: SocialPlatform[] = [
  'instagram',
  'facebook',
  'tiktok',
  'youtube',
  'linkedin',
  'twitter',
  'x',
  'pinterest',
  'github',
];

/**
 * Renders social media icon links for all configured platforms.
 *
 * **Auto-hydration**: When the `social` prop is omitted, this component
 * automatically self-populates from the shop owner's live Fivora Portal
 * social links (Facebook, Instagram, TikTok, YouTube, LinkedIn) via `useSocial()`.
 * Updates instantly when the merchant changes their social links — no code rebuild needed.
 *
 * Always-mounted social buttons so empty-state preview keeps field markers.
 */
export function SocialLinks({
  social: socialProp,
  fieldPathPrefix = 'common.business.social',
  variant = 'icon',
  size = 'md',
  className = '',
  style,
}: SocialLinksProps) {
  // Auto-hydrate from live merchant profile when prop is omitted
  const liveSocial = useSocial();
  const social = socialProp ?? (Object.keys(liveSocial).length > 0 ? liveSocial : {});

  const platforms = SUPPORTED_PLATFORMS.filter((platform) =>
    Object.prototype.hasOwnProperty.call(social, platform) || Object.keys(social).length === 0
  );
  const rendered = platforms.length ? platforms : SUPPORTED_PLATFORMS;

  const containerStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.625rem',
    ...style,
  };

  return (
    <div className={`deneb-social-links ${className}`.trim()} style={containerStyles}>
      {rendered.map((platform) => (
        <SocialButton
          key={platform}
          platform={platform}
          url={social[platform] ?? ''}
          fieldPath={`${fieldPathPrefix}.${platform}`}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  );
}
