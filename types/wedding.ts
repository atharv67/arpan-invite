// ─────────────────────────────────────────────────────────────────────────────
// TypeScript interfaces for the wedding config
// You don't need to edit this file — it just keeps the config type-safe.
// ─────────────────────────────────────────────────────────────────────────────

export type EventIcon =
  | "mehendi"
  | "haldi"
  | "sangeet"
  | "wedding"
  | "reception"
  | "puja"
  | "baraat"
  | "ganpati";

export type CulturalTag = "marwari" | "maharashtrian" | "both";

export interface Person {
  name: string;
  parents: string;
  hometown: string;
  bio: string;
  photoPath: string; // path relative to /public, e.g. "/images/couple/arpan.jpg"
}

export interface WeddingEvent {
  visible: boolean; // set false to hide the event without deleting it
  name: string;
  date: string; // e.g. "Saturday, 14 February 2026"
  time: string; // e.g. "7:00 PM – 11:00 PM"
  venue: string;
  address: string;
  dresscode: string;
  description: string;
  icon: EventIcon;
  culturalTag: CulturalTag;
}

export interface GalleryPhoto {
  filename: string; // just the filename, e.g. "01-beach.jpg" → put file in public/images/gallery/
  caption: string;
}

export interface WeddingConfig {
  couple: {
    arpan: Person;
    shivani: Person;
    weddingDate: string;       // ISO date string, e.g. "2026-02-14" (used for countdown)
    weddingDateDisplay: string; // Human-friendly, e.g. "14 February 2026"
    hashtag: string;
  };
  events: WeddingEvent[];
  gallery: {
    photos: GalleryPhoto[];
  };
  content: {
    heroTagline: string;
    ganpatiBlessingText: string;
    marwariDescription: string;
    marwariTraditions: string[];
    maharashtranDescription: string;
    maharashtranTraditions: string[];
    footerClosingMessage: string;
  };
  contact: {
    name: string;
    relation: string;
    phone: string;
  }[];
  meta: {
    siteTitle: string;
    ogImage: string; // path relative to /public
  };
}
