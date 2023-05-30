import React from "react";
import Image from "next/image";
import YoutubeVideo from "./YoutubeVideo";

function InfoMarvel({ superheroes }: any) {
  const totalMovies = 20;
  const halfMovies = totalMovies / 2;
  const videoId = "RoE5DCsCzf4";

  return (
    <div className="info mt-8 mx-4 flex place-content-center flex-wrap gap-4">
      <div className="w-full md:w-1/2 h-48 bg-slate-950/80  rounded-md border border-amber-950 p-4 grid align-center">
        <h1 className="text-center">PROGRESO PELICULAS PRODUCIDAS</h1>
        <div>
          <div className="grid justify-end text-amber-600 text-xs">
            <p>{totalMovies} películas</p>
            <p>Meta de producción</p>
          </div>
          <div className="w-full h-8 bg-gray-200 border border-gray-400 relative w-5/6 justify-center">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-t from-cyan-500 to-blue-500 w-1/2"></div>
            <div
              className="h-full w-5 bg-gradient-to-t from-cyan-500 to-blue-500 absolute"
              style={{
                width: `${(halfMovies / totalMovies) * 0.1}%`,
                left: "50%",
              }}
            ></div>
          </div>
          <div className="grid justify-center text-blue-500 text-xs">
            <p>{halfMovies} películas</p>
            <p>Produccidas</p>
          </div>
        </div>
      </div>
      <YoutubeVideo videoId={videoId} />
      <div className="w-full md:w-1/5 h-48 bg-slate-950/80 rounded-md border border-amber-950 p-4">
        <Image
          src="https://cdn.marvel.com/content/1x/themarvels_lob_crd_03.jpg"
          alt="Imagen de Marvel"
          className="w-full h-full object-cover rounded-md"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default InfoMarvel;
