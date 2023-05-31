"use client";
import React from "react";
import Image from "next/image";

const selectedHeroe = ({ superhero }: any) => {
  return (
    <article className="grid m-2 gap-4">
      <div>
        <Image
          src={`${superhero.thumbnail.path}.${superhero.thumbnail.extension}`}
          alt={superhero.name}
          className="rounded-full w-32 h-32 mx-auto"
          width={128}
          height={128}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-gray-800 text-lg mb-2">
            Descripción
          </h3>
          <div className="text-center text-sm font-semibold text-gray-700 py-1.5">
            {superhero.description ? (
              <p>{superhero.description}</p>
            ) : (
              <p className="italic">
                No hay descripción acerca de este personaje
              </p>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">
            Primeros cómics
          </h3>
          <div className="flex gap-4">
            {superhero.comics.items.length > 0 ? (
              <div className="flex gap-4">
                {superhero.comics.items.slice(0, 3).map((comic: any) => (
                  <div key={comic.id}>
                    <p className="text-center text-sm font-semibold text-gray-700 py-1.5">
                      {comic.name}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay cómics disponibles para este personaje</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default selectedHeroe;
