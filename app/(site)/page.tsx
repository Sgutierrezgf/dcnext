"use client";
import React from "react";
import dynamic from "next/dynamic";
// import Header from "./components/Header";
// import InfoMarvel from "./components/InfoMarvel";
// import SearchForm from "./components/SearchBar";
// import Pagination from "./components/Pagination";
// import SuperheroList from "./components/SuperheroList";
import useSuperheroes from "../api";

const Header = dynamic(() => import("./components/Header"));
const InfoMarvel = dynamic(() => import("./components/InfoMarvel"));
const SearchForm = dynamic(() => import("./components/SearchBar"));
const Pagination = dynamic(() => import("./components/Pagination"));
const SuperheroList = dynamic(() => import("./components/SuperheroList"));

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
