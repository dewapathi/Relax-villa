import type {
  BreakfastItemId,
  FacilityId,
  FeatureId,
  GalleryImageId,
  NavLinkId,
  TestimonialId,
} from "./i18n";

// Structural / non-translatable data only. Display text for every id below
// lives in src/lib/translations/en.ts and de.ts, keyed by the same id.

export const navLinks: { key: NavLinkId; href: string }[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "facilities", href: "#facilities" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
];

export const features: { id: FeatureId; icon: string }[] = [
  { id: "bedrooms", icon: "BedDouble" },
  { id: "breakfast", icon: "Coffee" },
  { id: "pool", icon: "Waves" },
  { id: "surroundings", icon: "Leaf" },
];

export const galleryImages: { id: GalleryImageId; src: string }[] = [
  { id: "villaDay", src: "/images/ranuli_2.jpeg" },
  { id: "villaDusk", src: "/images/ranuli_3.jpeg" },
  { id: "pool", src: "/images/ranuli_7.jpeg" },
  { id: "bedroom", src: "/images/ranuli_6.jpeg" },
  {
    id: "breakfast",
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
  },
  { id: "bathroom", src: "/images/ranuli_1.jpeg" },
  { id: "poolside", src: "/images/ranuli_5.jpeg" },
  { id: "twilight", src: "/images/ranuli_4.jpeg" },
];

export const testimonials: { id: TestimonialId; name: string; rating: number; date: string; initials: string }[] = [
  { id: 1, name: "Sarah & James", rating: 5, date: "March 2024", initials: "SJ" },
  { id: 2, name: "The Anderson Family", rating: 5, date: "July 2024", initials: "AF" },
  { id: 3, name: "Michael Chen", rating: 5, date: "October 2024", initials: "MC" },
];

// Only Eggs Any Style is offered for now — add pastries/fruit/coffee/local back
// here once the villa's breakfast menu expands (their translations already exist).
export const breakfastItems: { id: BreakfastItemId }[] = [{ id: "eggs" }];

export const facilities: { id: FacilityId; icon: string }[] = [
  { id: "pool", icon: "Waves" },
  { id: "wifi", icon: "Wifi" },
  { id: "parking", icon: "Car" },
  { id: "breakfast", icon: "Coffee" },
  { id: "ac", icon: "Wind" },
  { id: "hotWater", icon: "ShowerHead" },
  { id: "tv", icon: "Tv" },
  { id: "security", icon: "Shield" },
];

// WhatsApp number and email are still placeholders — replace before launch.
export const CONTACT = {
  phone: "+94 71 686 4065",
  whatsapp: "94771234567",
  email: "info@relaxvilla.com",
  address: "93/1 Kattuwa Station Rd, Palangathurai, Kochchikade, Negombo 11500, Sri Lanka",
  googleMapsUrl: "https://www.google.com/maps?cid=15840117038341323906&output=embed",
  facebookUrl: "https://www.facebook.com/share/1J5PU7VLzr/?mibextid=wwXIfr",
};
