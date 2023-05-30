import React from "react";

interface SuperheroesProps {
  superheroes: any[];
}

const Superheroes: React.FC<SuperheroesProps> = ({ superheroes }) => {
  return (
    <>
      {superheroes?.map((superhero) => (
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
      ))}
    </>
  );
};

export default Superheroes;
