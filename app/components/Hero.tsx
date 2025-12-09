import Link from "next/link";
import Image from "next/image";
import PromoCarousel from "./PromoCarousel";

export default function Hero() {
  return (
    <section className="relative py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Promo Carousel */}
        <PromoCarousel />

        {/* Original Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12"></div>
      </div>
    </section>
  );
}
