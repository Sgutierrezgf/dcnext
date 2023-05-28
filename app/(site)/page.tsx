"use client";
import Image from "next/image";
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [superheroes, setSuperheroes] = useState<any[]>([]);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await axios.get(
          "https://superheroapi.com/api/10159329076661881/search/all",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET",
              "Access-Control-Allow-Headers": "Content-Type",
            },
          }
        );
        setSuperheroes(response.data.results);
      } catch (error) {
        console.error("Error fetching superheroes:", error);
      }
    };

    fetchSuperheroes();
  }, []);

  if (superheroes.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(superheroes);
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

      {/* <div className="hero mt-8 p-260 h-260 w-48 border rounded">
        {superheroes.map((superhero) => (
          <div key={superhero.id}>
            <img
              src={superhero.image.url}
              alt={superhero.name}
              className="rounded-full w-48 h-48 mx-auto"
            />
            <div className="text-center mt-4">
              <h2>{superhero.publisher}</h2>
              <h2>{superhero.aligment}</h2>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
