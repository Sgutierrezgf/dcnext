"use client";
import Image from "next/image";
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [superheroes, setSuperheroes] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(`/api/10159329076661881/search/all`);
      const results = response.data.results;
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

    try {
      const response = await axios.get(
        `/api/10159329076661881/search/${searchQuery}`
      );
      const results = response.data.results;
      setSuperheroes(results);
      setTotalPages(Math.ceil(results.length / 5));
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="header flex items-center justify-between py-4">
        <div className="flex items-center">
          <img
            id="Image"
            className="block h-12 w-auto"
            src="https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png"
            alt="marvel logo"
            width={100}
            height={100}
          />
          <button className="ml-2">HOME</button>
          <button className="ml-2">PERSONAJES</button>
        </div>
        <div className="icons flex">
          <div className="mr-2">
            <button>
              <AiOutlineBell className="w-8 h-8" />
            </button>
          </div>
          <div>
            <button>
              <AiOutlineSetting className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="info mt-8 flex flex-wrap gap-4">
        <div className="w-full md:w-1/2">
          <h1 className="text-center">PROGRESO PELICULAS PRODUCIDAS</h1>
          <div className="flex items-center">
            <div className="h-2 bg-blue-500" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="w-full md:w-1/5">
          <div>AQUI VA UN VIDEO</div>
        </div>
        <div className="w-full md:w-1/5">
          <div>AQUI VA UNA IMAGEN</div>
        </div>
      </div>
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
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {currentSuperheroes.map((superhero) => (
          <div
            className="hero mt-8 p-260 h-260 w-48 border rounded"
            key={superhero.id}
          >
            <div>
              <img
                src={superhero.image.url}
                alt={superhero.name}
                className="rounded-full w-48 h-48 mx-auto"
              />
              <div className="text-center mt-4">
                <h2>{superhero.name}</h2>
                <h2>{superhero.biography.publisher}</h2>
                <h2>{superhero.biography.alignment}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination flex items-center justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mr-2"
        >
          {"<"}
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="ml-2"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
