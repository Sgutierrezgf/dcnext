"use client";
import React from "react";
import Header from "./components/Header";
import InfoMarvel from "./components/InfoMarvel";
import SearchForm from "./components/SearchBar";
import Pagination from "./components/Pagination";
import SuperheroList from "./components/SuperheroList";
import useSuperheroes from "../api";

export default function Home() {
  const {
    superheroes,
    currentPage,
    totalPages,
    searchQuery,
    setSearchQuery,
    handleSearch,
    handlePreviousPage,
    handleNextPage,
    currentSuperheroes,
  } = useSuperheroes();

  if (superheroes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Header />
      <InfoMarvel superheroes={superheroes} />
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <SuperheroList superheroes={currentSuperheroes} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}
