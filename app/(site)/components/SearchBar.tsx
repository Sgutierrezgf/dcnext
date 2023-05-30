import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Buscar personaje..."
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

export default SearchBar;
