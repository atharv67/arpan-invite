// ═════════════════════════════════════════════════════════════════════════════
//  ARPAN & SHIVANI WEDDING — MASTER CONFIG
//  This is the ONLY file you need to edit to update the entire website.
//  After saving, push to GitHub and Vercel auto-deploys in ~90 seconds.
// ═════════════════════════════════════════════════════════════════════════════

import type { WeddingConfig } from "@/types/wedding";

export const weddingConfig: WeddingConfig = {

  // ─── COUPLE ──────────────────────────────────────────────────────────────
  couple: {
    arpan: {
      name: "Arpan",                                          // Groom's first name
      parents: "Son of Ghansham & Deepali Tapdiya",           // Groom's parents
      hometown: "Jaipur, Rajasthan",                         // Groom's hometown
      bio: "A heart full of warmth, a spirit rooted in tradition, and eyes that light up for family, food, and adventures alike.",
      photoPath: "/images/couple/arpan.jpg",                 // Drop photo in public/images/couple/
    },
    shivani: {
      name: "Shivani",                                       // Bride's first name
      parents: "Daughter of Padamkar & Suman Sutrave",       // Bride's parents
      hometown: "Pune, Maharashtra",                         // Bride's hometown
      bio: "Grace woven into every gesture, laughter that fills any room, and a love for culture, music, and all things beautiful.",
      photoPath: "/images/couple/shivani.jpg",              // Drop photo in public/images/couple/
    },

    // ISO date for the countdown timer (YYYY-MM-DD format) ← UPDATE THIS to your real date
    weddingDate: "2026-11-14",

    // Displayed on the hero and throughout the site ← UPDATE THIS to match
    weddingDateDisplay: "14 November 2026",

    // Your wedding hashtag
    hashtag: "#ArpanWedsSShivani",
  },

  // ─── EVENTS ──────────────────────────────────────────────────────────────
  // Set visible: false to hide an event without deleting it.
  // The culturalTag controls the accent color:
  //   "marwari"       → saffron/orange
  //   "maharashtrian" → purple
  //   "both"          → gold
  events: [
    {
      visible: true,                                          // ← change to false to hide
      name: "Ganpati Puja & Welcome",
      date: "Thursday, 12 February 2026",
      time: "5:00 PM – 8:00 PM",
      venue: "Pandit Family Residence",
      address: "123 Shanti Nagar, Jaipur, Rajasthan",
      dresscode: "Traditional — Dhoti/Kurta & Saree",
      description: "An intimate puja to seek Lord Ganesha's blessings before the wedding festivities begin. Family and close friends welcome.",
      icon: "ganpati",
      culturalTag: "both",
    },
    {
      visible: true,
      name: "Mehendi Ceremony",
      date: "Friday, 13 February 2026",
      time: "11:00 AM – 4:00 PM",
      venue: "The Rosewater Garden, Jaipur",
      address: "Opposite City Palace, M.I. Road, Jaipur",
      dresscode: "Yellow & Green — Light Ethnic Wear",
      description: "Beautiful henna designs, folk music, and the joy of togetherness. A celebration of colour and tradition for the ladies.",
      icon: "mehendi",
      culturalTag: "marwari",
    },
    {
      visible: true,
      name: "Haldi & Pithi",
      date: "Friday, 13 February 2026",
      time: "6:00 PM – 9:00 PM",
      venue: "Kulkarni Family Residence",
      address: "45 Parvati Hills, Pune, Maharashtra",
      dresscode: "Yellow — Easily Washable Clothes!",
      description: "A vibrant ritual of turmeric and blessings. Come ready to celebrate, laugh, and get a little yellow.",
      icon: "haldi",
      culturalTag: "maharashtrian",
    },
    {
      visible: true,
      name: "Sangeet Night",
      date: "Friday, 13 February 2026",
      time: "8:00 PM – Midnight",
      venue: "The Rosewater Garden, Jaipur",
      address: "Opposite City Palace, M.I. Road, Jaipur",
      dresscode: "Cocktail Ethnic — Bold & Bright",
      description: "A night of music, dance, and love as both families come together to celebrate the union. Expect surprises, laughter, and non-stop dancing.",
      icon: "sangeet",
      culturalTag: "both",
    },
    {
      visible: true,
      name: "Baraat & Varmala",
      date: "Saturday, 14 February 2026",
      time: "5:30 PM – 7:30 PM",
      venue: "The Grand Rajputana Palace",
      address: "Link Road, Bani Park, Jaipur, Rajasthan 302016",
      dresscode: "Formal Indian — Sherwani / Lehenga / Saree",
      description: "The groom arrives in grand style! Join the baraat procession and witness the beautiful varmala exchange.",
      icon: "baraat",
      culturalTag: "marwari",
    },
    {
      visible: true,
      name: "Wedding Ceremony",
      date: "Saturday, 14 February 2026",
      time: "7:30 PM – 10:30 PM",
      venue: "The Grand Rajputana Palace",
      address: "Link Road, Bani Park, Jaipur, Rajasthan 302016",
      dresscode: "Formal Indian — Sherwani / Lehenga / Saree",
      description: "The sacred union of Arpan and Shivani, blessed by family, friends, and the divine. Pheras, mantras, and a lifetime of togetherness.",
      icon: "wedding",
      culturalTag: "both",
    },
    {
      visible: true,
      name: "Reception",
      date: "Sunday, 15 February 2026",
      time: "7:00 PM – 11:30 PM",
      venue: "The Grand Rajputana Palace",
      address: "Link Road, Bani Park, Jaipur, Rajasthan 302016",
      dresscode: "Cocktail / Semi-Formal",
      description: "Celebrate the newlyweds with dinner, dancing, and joy! An evening to cherish as we welcome Shivani into the family.",
      icon: "reception",
      culturalTag: "both",
    },
  ],

  // ─── GALLERY ─────────────────────────────────────────────────────────────
  // Drop photo files into public/images/gallery/ and list them here.
  // If a file is missing, a decorative placeholder is shown automatically.
  gallery: {
    photos: [
      { filename: "01-proposal.jpg",   caption: "The moment it all began" },
      { filename: "02-family.jpg",     caption: "Together, always" },
      { filename: "03-travel.jpg",     caption: "Adventures before forever" },
      { filename: "04-candid.jpg",     caption: "Unscripted joy" },
      { filename: "05-portraits.jpg",  caption: "Us" },
      { filename: "06-family2.jpg",    caption: "Two families, one heart" },
    ],
  },

  // ─── CONTENT (all UI copy) ────────────────────────────────────────────────
  content: {
    heroTagline: "Two hearts, two traditions, one beautiful forever.",

    ganpatiBlessingText: "As we begin this sacred journey, we seek the blessings of Lord Ganesha — the remover of obstacles, the god of new beginnings. May his grace guide Arpan and Shivani through every step of their life together.",

    marwariDescription: "Arpan carries the warmth and vibrancy of Marwari culture — a heritage of bold colours, heartfelt hospitality, and timeless traditions from the golden sands of Rajasthan.",

    marwariTraditions: [
      "Tilak Ceremony",
      "Safa Binding",
      "Ghoomar Dance",
      "Pheras by Fire",
      "Vidaai",
      "Joota Chupai",
    ],

    maharashtranDescription: "Shivani brings the grace and richness of Maharashtrian culture — a tradition steeped in devotion, classical arts, and the deep-rooted values of Maharashtra.",

    maharashtranTraditions: [
      "Kelvan",
      "Antarpat",
      "Mangalsutra",
      "Saptapadi",
      "Mangalashtake",
      "Aukshan",
    ],

    footerClosingMessage: "With love, laughter, and a lifetime of togetherness — we can't wait to celebrate with you.",
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────
  // Names and numbers shown in the footer for any queries.
  contact: [
    { name: "Ghansham Tapdiya", relation: "Groom's Father", phone: "+91 98000 00001" },
    { name: "Padamkar Sutrave", relation: "Bride's Father", phone: "+91 98000 00002" },
  ],

  // ─── MUSIC ────────────────────────────────────────────────────────────────
  // Drop your MP3 into public/music/ and update the src path below.
  // The player is a small floating button — guests click to play/pause.
  music: {
    src: "/music/01 Saathiya (Flute Version).m4a",   // ← replace with your actual filename
    label: "Saathiya Instrumental",    // ← shown in the tooltip on hover
  },

  // ─── META ─────────────────────────────────────────────────────────────────
  meta: {
    siteTitle: "Arpan & Shivani — 14 Feb 2026",
    ogImage: "/images/og-image.jpg", // 1200×630px image for WhatsApp/social previews
  },
};
