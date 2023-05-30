"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";
import Header from "./components/Header";
import InfoMarvel from "./components/InfoMarvel";

export default function Home() {
  const [superheroes, setSuperheroes] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const publicKey = "91593d27f1303f679e420bf3fabf0420";
  const privateKey = "b0d4485fd2e154011dc79fa89d8e491fc04e0d36";
  const timestamp = Date.now().toString();
  const hash = md5(timestamp + privateKey + publicKey);

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
      );
      const results = response.data.data.results;
      setSuperheroes(results);
      setTotalPages(Math.ceil(results.length / 5));
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  if (superheroes.length === 0) {
    return <div>Loading...</div>;
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const currentSuperheroes = superheroes.slice(startIndex, endIndex);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery === "") {
      fetchSuperheroes();
      return;
    }
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&nameStartsWith=${searchQuery}`
      );
      const results = response.data.data.results;
      setSuperheroes(results);
      setTotalPages(Math.ceil(results.length / 5));
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  return (
    <div className="container contents w-full colors beaufort">
      <Header />
      <InfoMarvel />
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSearch} className="flex items-center">
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
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {currentSuperheroes.length === 0 ? (
          <div>No se encontraron personajes</div>
        ) : (
          currentSuperheroes.map((superhero) => (
            <div
              className="hero mt-8 p-260 h-96 w-64 border-gray-600 border-solid rounded bg-slate-950 flex justify-center"
              key={superhero.id}
            >
              <div>
                <div className="text-center mt-4">
                  <h2>{superhero.name}</h2>
                  <img
                    src={`${superhero.thumbnail.path}.${superhero.thumbnail.extension}`}
                    alt={superhero.name}
                    className="rounded-full w-44 h-44 mx-auto"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="rounded-md border-solid border-slate-300 bg-gray-800 w-44 h-12 mb-2 grid">
                    <h2 className="self-center">
                      Comics: {superhero.comics.available}
                    </h2>
                  </div>
                  <div className="rounded-md border-solid border-slate-300 bg-gray-800 w-44 h-12">
                    <h2 className="self-center">
                      Movies: {superhero.series.available}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

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
    </div>
  );
}
