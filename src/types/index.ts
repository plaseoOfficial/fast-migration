export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Blurb {
  title: string;
  description: string;
  icon: string; // path to image / svg
}

export interface TabPanel {
  title: string;
  background: string;
  cards: Blurb[];
}

export interface CounterStat {
  value: string;
  label: string;
  suffix?: string;
}

export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Testimonial {
  rating: number;
  quote: string;
  org: string;
  name: string;
  logo: string;
}

export interface GalleryCard {
  title: string;
  description?: string;
  image: string;
}
