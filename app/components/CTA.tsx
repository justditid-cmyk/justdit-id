import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-linear-to-r from-[#28529C] to-[#1e3d7a]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Menikmati Layanan Premium?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Daftar sekarang dan dapatkan diskon 10% untuk pembelian pertama Anda
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="#contact"
              className="bg-white hover:bg-gray-200 text-[#28529C] px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="#products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#28529C] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Lihat Katalog
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">💳</div>
              <div className="text-white font-semibold">Pembayaran Mudah</div>
              <div className="text-gray-200 text-sm">
                Transfer, E-wallet, QRIS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">🔄</div>
              <div className="text-white font-semibold">
                Garansi Uang Kembali
              </div>
              <div className="text-gray-200 text-sm">100% Money Back</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">⚡</div>
              <div className="text-white font-semibold">Instant Delivery</div>
              <div className="text-gray-200 text-sm">Langsung Aktif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
