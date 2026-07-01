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

export const breakfastItems: { id: BreakfastItemId }[] = [
  { id: "pastries" },
  { id: "fruit" },
  { id: "eggs" },
  { id: "coffee" },
  { id: "local" },
];

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

// Placeholder contact details — replace with the real phone number, WhatsApp
// number, email, address, and Google Maps embed URL before launch.
export const CONTACT = {
  phone: "+94 77 123 4567",
  whatsapp: "94771234567",
  email: "info@relaxvilla.com",
  address: "123 Serenity Lane, Coastal Paradise, Sri Lanka",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.52!2d79.7775!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};
