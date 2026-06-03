// Content types for the /moebel-nach-mass/ page.

export interface ServiceCard {
  title: string;
  description: string;
  /** path under /public, e.g. /images/2024/03/interior-design-white-icons-15.svg */
  icon: string;
  href: string;
  /** the trailing "&" + paragraph card variant (light card, no icon) */
  variant?: "dark" | "ampersand";
  moreLabel?: string;
}

export interface CategoryItem {
  title: string;
  description: string;
}

export interface MnmTestimonial {
  name: string;
  quote: string;
  /** path under /public */
  avatar: string;
  rating: number;
  /** quote that is truncated on the live site with a "Read More" link */
  truncated?: boolean;
}

export interface MnmFaqItem {
  question: string;
  answer: string;
}

export interface FactItem {
  label: string;
}
