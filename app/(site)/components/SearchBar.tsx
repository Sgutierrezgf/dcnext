import React from "react";
import { SearchFormProps } from "@/app/types";

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
}: SearchFormProps) => {
  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Spider-man, Iron man, Thor, Black widow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-l-lg px-4 py-2 border-t border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-950 text-white rounded-r-lg"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
