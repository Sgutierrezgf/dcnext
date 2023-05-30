import React from "react";
import SuperheroCard from "./SuperheroCard";

const SuperheroList = ({ superheroes }: any) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      {superheroes.length === 0 ? (
        <div>No se encontraron personajes</div>
      ) : (
        superheroes.map((superhero: { id: any }) => (
          <SuperheroCard key={superhero.id} superhero={superhero} />
        ))
      )}
    </div>
  );
};

export default SuperheroList;
