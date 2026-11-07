/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Angelica Jones Funelas',
  firstName: 'Angelica',
  handle: '@angelicajonesf',
  role: 'Executive VA | Real Estate VA | Social Media Support',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Virtual Assistant Portfolio',
  email: 'angelicajonesf@gmail.com',
  location: 'Philippines',

  stats: [
    { value: '3+', label: 'Years of Experience', Icon: Briefcase },
    { value: '63+', label: 'Agreements Managed', Icon: SealCheck },
    { value: 'PHT', label: 'Flexible US Hours', Icon: Clock },
  ],

  displayName: {
    line1: 'Organized support.',
    line2: 'Real results.',
  },

  hero: {
    body: 'Executive assistance, real estate support, and social media help to keep your business moving.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Angelica Jones Funelas profile portrait',
  },

  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://linkedin.com/in/angelicafunelas/',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
