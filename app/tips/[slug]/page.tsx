import { notFound } from "next/navigation";
import Link from "next/link";
import { getTipBySlug, getAllTipSlugs } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface TipPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllTipSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TipPage({ params }: TipPageProps) {
  const { slug } = await params;
  const tip = await getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  const formattedDate = tip.publishedAt
    ? new Date(tip.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-[#041A2F]">
      <Navbar />
      <main className="py-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link
            href="/#tips"
            className="inline-flex items-center text-[#42A6D7] hover:text-[#28529C] mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Tips & Tricks
          </Link>

          {/* Header */}
          <header className="mb-12">
            {tip.category && (
              <span className="inline-block bg-[#28529C] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {tip.category}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {tip.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              {tip.author && (
                <div className="flex items-center">
                  <span className="text-lg">👤</span>
                  <span className="ml-2">{tip.author}</span>
                </div>
              )}
              {formattedDate && (
                <div className="flex items-center">
                  <span className="text-lg">📅</span>
                  <span className="ml-2">{formattedDate}</span>
                </div>
              )}
            </div>
            {tip.excerpt && (
              <p className="text-xl text-gray-300 mt-6 leading-relaxed">
                {tip.excerpt}
              </p>
            )}
          </header>

          {/* Cover Image */}
          {tip.coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden bg-[#102D55]">
              <div className="aspect-video flex items-center justify-center text-8xl">
                📖
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-200 leading-relaxed space-y-6">
              {tip.content ? (
                <PortableText
                  value={tip.content}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-lg mb-6 leading-relaxed">
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold text-white mt-12 mb-6">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-bold text-white mt-10 mb-5">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-xl font-bold text-white mt-6 mb-3">
                          {children}
                        </h4>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-[#28529C] pl-6 py-2 my-6 bg-[#102D55]/50 rounded-r-lg">
                          <div className="text-gray-300 italic">{children}</div>
                        </blockquote>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 my-6 text-gray-200">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 my-6 text-gray-200">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="ml-4">{children}</li>
                      ),
                      number: ({ children }) => (
                        <li className="ml-4">{children}</li>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-bold text-white">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic">{children}</em>
                      ),
                      code: ({ children }) => (
                        <code className="bg-[#102D55] px-2 py-1 rounded text-[#42A6D7] text-sm">
                          {children}
                        </code>
                      ),
                      link: ({ children, value }) => (
                        <a
                          href={value?.href}
                          className="text-[#42A6D7] hover:text-[#28529C] underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              ) : (
                <p className="text-lg">
                  {tip.excerpt || "Konten tidak tersedia."}
                </p>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-[#28529C] to-[#1e3d7a] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Butuh Bantuan Lebih Lanjut?
            </h3>
            <p className="text-gray-200 mb-6">
              Tim kami siap membantu Anda dengan pertanyaan atau kebutuhan akun
              premium Anda
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white hover:bg-gray-200 text-[#28529C] px-8 py-3 rounded-full font-bold transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
