export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const features = [
  {
    icon: "BedDouble",
    title: "4 Elegant Bedrooms",
    description:
      "Four beautifully appointed bedrooms designed for maximum comfort and privacy, each with premium linens and thoughtful touches.",
  },
  {
    icon: "Coffee",
    title: "Bed & Breakfast",
    description:
      "Begin each morning with a freshly prepared, delicious breakfast served in a warm, welcoming atmosphere to start your day beautifully.",
  },
  {
    icon: "Waves",
    title: "Private Swimming Pool",
    description:
      "Enjoy exclusive access to our pristine private pool — perfect for a refreshing swim or a peaceful afternoon basking in the sun.",
  },
  {
    icon: "Leaf",
    title: "Peaceful Surroundings",
    description:
      "Nestled in tranquil surroundings, Relax Villa offers a serene retreat where you can truly unwind, recharge, and feel at home.",
  },
];

export const rooms = [
  {
    id: 1,
    name: "Garden Suite",
    type: "Standard Room",
    description:
      "A cozy, beautifully decorated room overlooking the lush garden. Features a king-size bed, en-suite bathroom, and private veranda.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    amenities: ["King Bed", "Garden View", "En-Suite Bathroom", "Air Conditioning", "Free WiFi"],
    size: "32 m²",
  },
  {
    id: 2,
    name: "Pool View Room",
    type: "Deluxe Room",
    description:
      "Wake up to the glittering pool view from this elegant room. Features premium linens, modern décor, and a private balcony.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    amenities: ["King Bed", "Pool View", "Private Balcony", "En-Suite Bathroom", "Minibar"],
    size: "38 m²",
  },
  {
    id: 3,
    name: "Family Suite",
    type: "Suite",
    description:
      "Spacious and thoughtfully designed for families. Includes a separate living area, two bathrooms, and all the comforts of home.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    amenities: ["2 Bedrooms", "Living Area", "2 Bathrooms", "Family-Friendly", "Extra Amenities"],
    size: "65 m²",
  },
  {
    id: 4,
    name: "Master Suite",
    type: "Premium Suite",
    description:
      "The pinnacle of luxury at Relax Villa. An expansive suite with a canopy bed, rain shower, and panoramic views of the estate.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    amenities: ["Canopy Bed", "Rain Shower", "Panoramic View", "Lounge Area", "Premium Amenities"],
    size: "72 m²",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury villa aerial view",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "Infinity pool at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    alt: "Master suite",
  },
  {
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    alt: "Breakfast spread",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Private swimming pool",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    alt: "Deluxe room",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    alt: "Family suite",
  },
  {
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    alt: "Villa garden and exterior",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah & James",
    role: "Honeymoon Couple",
    rating: 5,
    text: "Relax Villa was absolutely perfect for our honeymoon. The attention to detail, the stunning pool, and the incredible breakfast every morning made it an unforgettable experience. We'll definitely be back!",
    date: "March 2024",
    initials: "SJ",
  },
  {
    id: 2,
    name: "The Anderson Family",
    role: "Family Holiday",
    rating: 5,
    text: "We stayed for a week with our two kids and it was everything we hoped for. The villa is beautiful, the rooms are spacious, and the pool was a hit with the children. Exceptional hospitality throughout!",
    date: "July 2024",
    initials: "AF",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Business Traveller",
    rating: 5,
    text: "After a busy conference, Relax Villa was exactly what I needed. The peaceful atmosphere, comfortable rooms, and delicious breakfast helped me recharge completely. The hospitality was second to none.",
    date: "October 2024",
    initials: "MC",
  },
];

export const breakfastItems = [
  { name: "Freshly Baked Pastries", description: "Croissants, muffins, and local breads baked each morning" },
  { name: "Seasonal Fruit Platter", description: "Fresh tropical fruits sourced from local markets" },
  { name: "Eggs Any Style", description: "Omelettes, poached, scrambled, or fried to your preference" },
  { name: "Artisan Coffee & Teas", description: "Premium selection of coffee, herbal teas, and fresh juices" },
  { name: "Local Specialties", description: "A rotating selection of traditional dishes and regional flavours" },
];

export const facilities = [
  { icon: "Waves", label: "Private Swimming Pool" },
  { icon: "Wifi", label: "High-Speed WiFi" },
  { icon: "Car", label: "Free Parking" },
  { icon: "Coffee", label: "Daily Breakfast" },
  { icon: "Wind", label: "Air Conditioning" },
  { icon: "ShowerHead", label: "Hot Water Showers" },
  { icon: "Tv", label: "Smart TV" },
  { icon: "Shield", label: "24/7 Security" },
];

export const CONTACT = {
  phone: "+94 77 123 4567",
  whatsapp: "94771234567",
  whatsappMessage: "Hello! I'm interested in booking a stay at Relax Villa. Could you please provide availability and pricing?",
  email: "info@relaxvilla.com",
  address: "123 Serenity Lane, Coastal Paradise, Sri Lanka",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.52!2d79.7775!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};
