/**
 * Core i18n configuration and types.
 *
 * Add a new language by:
 * 1. Adding its code to the `Language` union below.
 * 2. Adding an entry to `LANGUAGES`.
 * 3. Creating `src/lib/translations/<code>.ts` that satisfies `Translations`.
 * 4. Registering it in the `translations` map at the bottom of this file.
 * TypeScript will error on any missing key, so the translation is guaranteed complete.
 */

import { en } from "./translations/en";
import { de } from "./translations/de";

export type Language = "en" | "de";

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_STORAGE_KEY = "relax-villa-language";

export interface LanguageOption {
  code: Language;
  /** Label shown in the switcher, in the language's own name */
  nativeLabel: string;
  /** Short code shown in the compact switcher pill */
  short: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", nativeLabel: "English", short: "EN" },
  { code: "de", nativeLabel: "Deutsch", short: "DE" },
];

/** Stable IDs for feature cards — keyed lookup instead of array position, so content order can never desync from translations. */
export type FeatureId = "bedrooms" | "breakfast" | "pool" | "surroundings";

/** Stable IDs for facility/amenity chips */
export type FacilityId =
  | "pool"
  | "wifi"
  | "parking"
  | "breakfast"
  | "ac"
  | "hotWater"
  | "tv"
  | "security";

/** Stable IDs for breakfast menu items */
export type BreakfastItemId = "pastries" | "fruit" | "eggs" | "coffee" | "local";

/** Stable IDs for gallery photos */
export type GalleryImageId =
  | "villaDay"
  | "villaDusk"
  | "pool"
  | "bedroom"
  | "breakfast"
  | "bathroom"
  | "poolside"
  | "twilight";

/** Stable IDs for testimonials */
export type TestimonialId = 1 | 2 | 3;

/** Stable IDs for the nav links, shared between the navbar and the footer */
export type NavLinkId = "home" | "about" | "facilities" | "gallery" | "contact";

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  nav: Record<NavLinkId, string> & {
    bookNow: string;
    bookNowWhatsapp: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleSecond: string;
    subtitleLine1: string;
    subtitleLine2: string;
    cta: string;
    stats: {
      bedroomsValue: string;
      bedroomsLabel: string;
      includedValue: string;
      includedLabel: string;
      poolValue: string;
      poolLabel: string;
    };
    scroll: string;
  };
  about: {
    tagline: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    highlights: string[];
    statNumber: string;
    statLabelLine1: string;
    statLabelLine2: string;
    mainImageAlt: string;
    accentImageAlt: string;
    quote: string;
    quoteAuthor: string;
  };
  features: {
    tagline: string;
    title: string;
    subtitle: string;
    items: Record<FeatureId, { title: string; description: string }>;
  };
  facilities: {
    tagline: string;
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    poolImageAlt: string;
    poolBadgeTitle: string;
    poolBadgeSubtitle: string;
    freeAccess: string;
    items: Record<FacilityId, string>;
  };
  breakfast: {
    tagline: string;
    title: string;
    paragraph: string;
    imageAlt: string;
    items: Record<BreakfastItemId, { name: string; description: string }>;
    note: string;
    badgeTitle: string;
    badgeLine1: string;
    badgeLine2: string;
  };
  gallery: {
    tagline: string;
    title: string;
    subtitle: string;
    alt: Record<GalleryImageId, string>;
    closeLabel: string;
    previousLabel: string;
    nextLabel: string;
  };
  testimonials: {
    tagline: string;
    title: string;
    subtitle: string;
    items: Record<TestimonialId, { role: string; text: string }>;
  };
  location: {
    tagline: string;
    title: string;
    subtitle: string;
    mapTitle: string;
    addressLabel: string;
    phoneLabel: string;
    nearbyLabel: string;
    nearbyPlaces: { name: string; distance: string }[];
    directions: string;
  };
  contact: {
    tagline: string;
    title: string;
    subtitle: string;
    whatsappLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    quote: string;
    formTitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    phoneNumber: string;
    phonePlaceholder: string;
    guestsLabel: string;
    guestSingular: string;
    guestPlural: string;
    checkIn: string;
    checkOut: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    whatsapp: string;
    formNote: string;
  };
  footer: {
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    description: string;
    quote: string;
    quickLinks: string;
    contactUs: string;
    rightsReserved: string;
    designedWith: string;
  };
  whatsapp: {
    bookingMessage: string;
  };
}

export const translations: Record<Language, Translations> = { en, de };
