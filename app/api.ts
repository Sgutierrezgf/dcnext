import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";

interface Superhero {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  series: {
    available: number;
  };
}

const useSuperheroes = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
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

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (searchQuery === "") {
        fetchSuperheroes();
        return;
      }
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

  return {
    superheroes,
    currentPage,
    totalPages,
    searchQuery,
    setSearchQuery,
    handleSearch,
    handlePreviousPage,
    handleNextPage,
    currentSuperheroes,
  };
};

export default useSuperheroes;