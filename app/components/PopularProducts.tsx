import Link from "next/link";

export default function PopularProducts() {
  const products = [
    {
      name: "Netflix Premium",
      description: "4K Ultra HD + Download",
      price: "Rp 25.000",
      duration: "30 Hari",
      image: "/placeholder-netflix.jpg",
      badge: "Best Seller",
    },
    {
      name: "Spotify Premium",
      description: "No Ads + Offline Mode",
      price: "Rp 15.000",
      duration: "30 Hari",
      image: "/placeholder-spotify.jpg",
      badge: "Popular",
    },
    {
      name: "Disney+ Hotstar",
      description: "Premium Content",
      price: "Rp 20.000",
      duration: "30 Hari",
      image: "/placeholder-disney.jpg",
      badge: "New",
    },
    {
      name: "YouTube Premium",
      description: "Ad-free + Music",
      price: "Rp 18.000",
      duration: "30 Hari",
      image: "/placeholder-youtube.jpg",
      badge: "Trending",
    },
  ];

  return (
    <section className="py-20 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Produk Paling Populer
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Pilihan favorit pelanggan dengan rating tertinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#28529C] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="relative h-48 bg-linear-to-br from-[#28529C] to-[#1e3d7a]">
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </span>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-6xl">🎬</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      {product.duration}
                    </div>
                  </div>
                  <div className="text-yellow-400 text-sm">⭐ 4.9</div>
                </div>

                <Link
                  href="#contact"
                  className="block w-full bg-white hover:bg-gray-200 text-[#041A2F] text-center py-3 rounded-full font-semibold transition-colors"
                >
                  Pesan Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
