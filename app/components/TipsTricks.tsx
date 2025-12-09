import Link from "next/link";

export default function TipsTricks() {
  const articles = [
    {
      title: "Cara Memilih Layanan Streaming yang Tepat",
      excerpt:
        "Panduan lengkap memilih platform streaming sesuai kebutuhan dan budget Anda",
      category: "Guide",
      readTime: "5 min",
      date: "5 Des 2025",
    },
    {
      title: "10 Film Terbaik di Netflix Bulan Ini",
      excerpt:
        "Rekomendasi film dan series yang wajib ditonton di Netflix bulan Desember",
      category: "Recommendation",
      readTime: "3 min",
      date: "3 Des 2025",
    },
    {
      title: "Tips Hemat dengan Paket Bundling",
      excerpt:
        "Cara menghemat pengeluaran hiburan dengan memilih paket bundling yang tepat",
      category: "Tips",
      readTime: "4 min",
      date: "1 Des 2025",
    },
    {
      title: "Perbedaan Akun Premium vs Standar",
      excerpt:
        "Penjelasan detail fitur dan perbedaan antara akun premium dan standar",
      category: "Info",
      readTime: "6 min",
      date: "28 Nov 2025",
    },
  ];

  return (
    <section
      id="tips"
      className="py-20 bg-linear-to-b from-[#041A2F] to-[#062340]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seputar Tips & Tricks
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Artikel, panduan, dan tips menarik seputar layanan streaming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Link
              href="#tips"
              key={index}
              className="bg-[#727271] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="h-40 bg-linear-to-br from-[#28529C] to-[#1e3d7a] flex items-center justify-center">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  📝
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-[#28529C] text-white px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{article.date}</span>
                  <span className="text-blue-300 group-hover:translate-x-1 transition-transform inline-block">
                    Baca →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#tips"
            className="inline-block bg-[#28529C] hover:bg-[#1e3d7a] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}
