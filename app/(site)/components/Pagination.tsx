import React from "react";
import { PaginationProps } from "@/app/types";

const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: PaginationProps) => {
  return (
    <div className="pagination flex items-center justify-center mt-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="mr-2"
      >
        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
          <span className="text-black font-bold text-lg">{"<"}</span>
        </div>
      </button>
      <span className="text-amber-500">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="ml-2"
      >
        <div className="w-10 h-10  rounded-full bg-amber-500 flex items-center justify-center">
          <span className="text-black font-bold text-lg">{">"}</span>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
