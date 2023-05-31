import React, { useState, useEffect } from "react";
import Image from "next/image";
import SuperheroCard from "./SuperheroCard";
import Loading from "./Loading";

const SuperheroList = ({ superheroes }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (superheroes.length === 0) {
    return (
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <div className="hero mt-8 p-260 h-full w-64 border-solid rounded grid justify-center">
          <h2 className="text-base text-white">Personaje no encontrado</h2>
          <Image
            className="mb-2"
            src="https://i.pinimg.com/564x/e4/86/f4/e486f41120447d60670fa339328242a0.jpg"
            alt="Not Found"
            width={160}
            height={160}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      {superheroes.map((superhero: { id: any }) => (
        <SuperheroCard key={superhero.id} superhero={superhero} />
      ))}
    </div>
  );
};

export default SuperheroList;
