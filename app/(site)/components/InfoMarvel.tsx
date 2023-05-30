import React from "react";

function InfoMarvel() {
  return (
    <div className="info mt-8 mx-4 flex place-content-center flex-wrap gap-4">
      <div className="w-full md:w-1/2 h-48 bg-slate-950/80  rounded-md border border-amber-950 p-4 grid align-center">
        <h1 className="text-center">PROGRESO PELICULAS PRODUCIDAS</h1>
        <div className="w-full h-8 bg-gray-200 border border-gray-400 relative">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 w-1/2"></div>
          <div
            className="h-full w-1/10 bg-gray-400 absolute"
            style={{ left: "10%" }}
          ></div>
          <div
            className="h-full w-1/10 bg-gray-400 absolute"
            style={{ left: "20%" }}
          ></div>
          <div
            className="h-full w-1/10 bg-gray-400 absolute"
            style={{ left: "30%" }}
          ></div>
          <div
            className="h-full w-1/10 bg-gray-400 absolute"
            style={{ left: "40%" }}
          ></div>
          <div
            className="h-full w-1/10 bg-gray-400 absolute"
            style={{ left: "50%" }}
          ></div>
        </div>
      </div>
      <div className="w-full md:w-1/5 h-48 bg-slate-950/80 rounded-md border border-amber-950 p-4">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/watch?v=RoE5DCsCzf4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-1/5 h-48 bg-slate-950/80 rounded-md border border-amber-950 p-4">
        <img
          src="https://cdn.marvel.com/content/1x/themarvels_lob_crd_03.jpg"
          alt="Imagen de Marvel"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default InfoMarvel;
