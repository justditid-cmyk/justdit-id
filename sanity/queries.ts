import { client } from "./lib/client";

interface Promo {
  _id: string;
  title: string;
  subtitle: string;
  promoTitle: string;
  validUntil: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  bgColor: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
}

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  description?: string;
  features?: string[];
  image?: any;
  logo?: any;
  bgColor?: string;
  plans: {
    name: string;
    duration: string;
    price: number;
    originalPrice?: number;
    features?: string[];
    popular?: boolean;
  }[];
  isFeatured: boolean;
  order: number;
  isActive: boolean;
}

export interface Bundle {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  includedProducts?: string[];
  features?: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  duration?: string;
  image?: any;
  bgColor?: string;
  isPopular: boolean;
  order: number;
  isActive: boolean;
}

export interface Tip {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  content?: any[];
  category?: string;
  coverImage?: any;
  author?: string;
  publishedAt?: string;
  order: number;
  isActive: boolean;
}

export interface Homepage {
  heroHeading?: string;
  heroSubheading?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  whyUsHeading?: string;
  whyUsSubheading?: string;
  whyUsFeatures?: {
    icon: string;
    title: string;
    description: string;
  }[];
  productsHeading?: string;
  productsSubheading?: string;
  bundlingHeading?: string;
  bundlingSubheading?: string;
  tipsHeading?: string;
  tipsSubheading?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  contactHeading?: string;
  contactSubheading?: string;
  whatsappNumber?: string;
  telegramUsername?: string;
  email?: string;
}

export async function getPromos(): Promise<Promo[]> {
  const query = `*[_type == "promo" && isActive == true] | order(order asc) {
    _id,
    title,
    subtitle,
    promoTitle,
    validUntil,
    image,
    bgColor,
    buttonLink,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getHomepage(): Promise<Homepage | null> {
  const query = `*[_type == "homepage"][0] {
    heroHeading,
    heroSubheading,
    heroButtonText,
    heroButtonLink,
    whyUsHeading,
    whyUsSubheading,
    whyUsFeatures,
    productsHeading,
    productsSubheading,
    bundlingHeading,
    bundlingSubheading,
    tipsHeading,
    tipsSubheading,
    ctaHeading,
    ctaDescription,
    ctaButtonText,
    contactHeading,
    contactSubheading,
    whatsappNumber,
    telegramUsername,
    email
  }`;

  return client.fetch(query);
}

export async function getProducts(featured?: boolean): Promise<Product[]> {
  const filter = featured
    ? `_type == "product" && isActive == true && isFeatured == true`
    : `_type == "product" && isActive == true`;

  const query = `*[${filter}] | order(order asc) {
    _id,
    name,
    slug,
    category,
    description,
    features,
    image,
    logo,
    bgColor,
    plans,
    isFeatured,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getBundles(): Promise<Bundle[]> {
  const query = `*[_type == "bundle" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    description,
    includedProducts,
    features,
    price,
    originalPrice,
    discount,
    duration,
    image,
    bgColor,
    isPopular,
    order,
    isActive
  }`;

  return client.fetch(query);
}

export async function getTips(limit?: number): Promise<Tip[]> {
  const query = limit
    ? `*[_type == "tip" && isActive == true] | order(order asc) [0...${limit}] {
        _id,
        title,
        slug,
        excerpt,
        category,
        coverImage,
        author,
        publishedAt,
        order,
        isActive
      }`
    : `*[_type == "tip" && isActive == true] | order(order asc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        coverImage,
        author,
        publishedAt,
        order,
        isActive
      }`;

  return client.fetch(query);
}
