"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}#products`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-[#28529C] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1e3d7a] transition-colors"
      >
        Prev
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              page === currentPage
                ? "bg-[#28529C] text-white"
                : "bg-[#727271] text-white hover:bg-[#5a5a59]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-[#28529C] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1e3d7a] transition-colors"
      >
        Next
      </button>
    </div>
  );
}
