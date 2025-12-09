import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tim kami siap membantu Anda 24/7. Pilih cara yang paling nyaman
            untuk Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            className="bg-[#28529C] hover:bg-[#1e3d7a] rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-200 mb-4">Chat langsung dengan CS kami</p>
            <div className="text-white font-semibold">+62 812-3456-7890</div>
            <div className="mt-4 text-sm text-gray-300">
              Response: &lt; 5 menit
            </div>
          </Link>

          <Link
            href="https://t.me/justditid"
            target="_blank"
            className="bg-[#28529C] hover:bg-[#1e3d7a] rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <div className="text-5xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold text-white mb-2">Telegram</h3>
            <p className="text-gray-200 mb-4">Join channel untuk info promo</p>
            <div className="text-white font-semibold">@justditid</div>
            <div className="mt-4 text-sm text-gray-300">1000+ Members</div>
          </Link>

          <Link
            href="mailto:hello@justdit.id"
            className="bg-[#28529C] hover:bg-[#1e3d7a] rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-200 mb-4">Untuk pertanyaan detail</p>
            <div className="text-white font-semibold">hello@justdit.id</div>
            <div className="mt-4 text-sm text-gray-300">
              Response: &lt; 24 jam
            </div>
          </Link>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#727271] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              <details className="bg-white/10 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-white">
                  Bagaimana cara pemesanan?
                </summary>
                <p className="text-gray-300 mt-2 pl-4">
                  Hubungi CS kami via WhatsApp, pilih produk yang diinginkan,
                  lakukan pembayaran, dan akun akan dikirim langsung ke Anda.
                </p>
              </details>

              <details className="bg-white/10 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-white">
                  Apakah ada garansi?
                </summary>
                <p className="text-gray-300 mt-2 pl-4">
                  Ya, semua produk memiliki garansi. Jika ada masalah, kami akan
                  langsung mengganti atau refund sesuai kesepakatan.
                </p>
              </details>

              <details className="bg-white/10 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-white">
                  Berapa lama proses pengiriman?
                </summary>
                <p className="text-gray-300 mt-2 pl-4">
                  Setelah pembayaran dikonfirmasi, akun akan dikirim maksimal
                  5-10 menit. Biasanya instant!
                </p>
              </details>

              <details className="bg-white/10 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-white">
                  Metode pembayaran apa saja?
                </summary>
                <p className="text-gray-300 mt-2 pl-4">
                  Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet
                  (GoPay, OVO, Dana), dan QRIS.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
