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
