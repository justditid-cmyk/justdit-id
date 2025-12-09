import Link from "next/link";

export default function Bundling() {
  const bundles = [
    {
      name: "Paket Streaming",
      description: "Perfect untuk pecinta film dan series",
      products: ["Netflix Premium", "Disney+ Hotstar", "Prime Video"],
      originalPrice: 67000,
      bundlePrice: 55000,
      discount: "18%",
      badge: "Hemat Rp 12.000",
    },
    {
      name: "Paket Entertainment",
      description: "Lengkap untuk hiburan sehari-hari",
      products: ["Netflix Premium", "Spotify Premium", "YouTube Premium"],
      originalPrice: 58000,
      bundlePrice: 48000,
      discount: "17%",
      badge: "Hemat Rp 10.000",
    },
    {
      name: "Paket Produktif",
      description: "Solusi untuk pekerjaan dan kreativitas",
      products: ["Canva Pro", "Grammarly Premium", "Notion Plus"],
      originalPrice: 75000,
      bundlePrice: 62000,
      discount: "17%",
      badge: "Hemat Rp 13.000",
    },
  ];

  return (
    <section id="bundling" className="py-20 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Paket Bundling Hemat
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Kombinasi produk pilihan dengan harga lebih hemat hingga 20%
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#28529C] to-[#1e3d7a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {bundle.badge}
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{bundle.discount}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {bundle.name}
                </h3>
                <p className="text-gray-200 mb-6">{bundle.description}</p>

                <div className="space-y-2 mb-6">
                  {bundle.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-white"
                    >
                      <span className="text-green-400">✓</span>
                      <span>{product}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-end gap-3 mb-6">
                    <div>
                      <div className="text-sm text-gray-300 mb-1">
                        Harga Normal
                      </div>
                      <div className="text-lg text-gray-400 line-through">
                        Rp {bundle.originalPrice.toLocaleString("id-ID")}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">
                        Harga Paket
                      </div>
                      <div className="text-3xl font-bold text-white">
                        Rp {bundle.bundlePrice.toLocaleString("id-ID")}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="block w-full bg-white hover:bg-gray-200 text-[#041A2F] text-center py-3 rounded-full font-bold transition-colors"
                  >
                    Ambil Paket Ini
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Butuh paket custom? Hubungi kami!
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#727271] hover:bg-[#5a5a59] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Request Paket Custom
          </Link>
        </div>
      </div>
    </section>
  );
}
