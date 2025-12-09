import Link from "next/link";
import PaginationControls from "./PaginationControls";

// This would connect to your database in production
async function getProducts(page: number = 1, limit: number = 12) {
  // Simulated database query - replace with actual database call
  const allProducts = [
    {
      id: 1,
      name: "Netflix Premium",
      category: "Streaming",
      price: 25000,
      duration: "30 Hari",
    },
    {
      id: 2,
      name: "Spotify Premium",
      category: "Music",
      price: 15000,
      duration: "30 Hari",
    },
    {
      id: 3,
      name: "Disney+ Hotstar",
      category: "Streaming",
      price: 20000,
      duration: "30 Hari",
    },
    {
      id: 4,
      name: "YouTube Premium",
      category: "Video",
      price: 18000,
      duration: "30 Hari",
    },
    {
      id: 5,
      name: "Canva Pro",
      category: "Design",
      price: 30000,
      duration: "30 Hari",
    },
    {
      id: 6,
      name: "Grammarly Premium",
      category: "Productivity",
      price: 25000,
      duration: "30 Hari",
    },
    {
      id: 7,
      name: "Prime Video",
      category: "Streaming",
      price: 22000,
      duration: "30 Hari",
    },
    {
      id: 8,
      name: "Apple Music",
      category: "Music",
      price: 16000,
      duration: "30 Hari",
    },
    {
      id: 9,
      name: "Viu Premium",
      category: "Streaming",
      price: 15000,
      duration: "30 Hari",
    },
    {
      id: 10,
      name: "WeTV Premium",
      category: "Streaming",
      price: 18000,
      duration: "30 Hari",
    },
    {
      id: 11,
      name: "iQIYI Premium",
      category: "Streaming",
      price: 19000,
      duration: "30 Hari",
    },
    {
      id: 12,
      name: "Vidio Premier",
      category: "Streaming",
      price: 20000,
      duration: "30 Hari",
    },
    {
      id: 13,
      name: "JOOX VIP",
      category: "Music",
      price: 12000,
      duration: "30 Hari",
    },
    {
      id: 14,
      name: "Paramount+",
      category: "Streaming",
      price: 23000,
      duration: "30 Hari",
    },
    {
      id: 15,
      name: "HBO GO",
      category: "Streaming",
      price: 24000,
      duration: "30 Hari",
    },
    {
      id: 16,
      name: "Apple TV+",
      category: "Streaming",
      price: 21000,
      duration: "30 Hari",
    },
  ];

  const start = (page - 1) * limit;
  const end = start + limit;
  const products = allProducts.slice(start, end);
  const total = allProducts.length;

  return { products, total, page, limit };
}

interface ProductsListProps {
  searchParams: { page?: string };
}

export default async function ProductsList({
  searchParams,
}: ProductsListProps) {
  const page = Number(searchParams?.page) || 1;
  const { products, total, limit } = await getProducts(page, 12);
  const totalPages = Math.ceil(total / limit);

  return (
    <section
      id="products"
      className="py-20 bg-linear-to-b from-[#062340] to-[#041A2F]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Semua Produk Kami
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Pilih dari berbagai layanan premium yang tersedia
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#727271] rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-[#28529C] text-white px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-yellow-400 text-sm">⭐ 4.8</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{product.duration}</p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-white">
                  Rp {product.price.toLocaleString("id-ID")}
                </div>
              </div>

              <Link
                href="#contact"
                className="mt-4 block w-full bg-[#28529C] hover:bg-[#1e3d7a] text-white text-center py-2 rounded-full font-semibold transition-colors"
              >
                Pesan
              </Link>
            </div>
          ))}
        </div>

        <PaginationControls currentPage={page} totalPages={totalPages} />
      </div>
    </section>
  );
}
