import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import SelectedHeroe from "./SelectedHeroe";
import Diamon from "./Diamon";

const MAX_NAME_LENGTH = 20;

const SuperheroCard = ({ superhero }: any) => {
  const [isSelectedHeroeVisible, setIsSelectedHeroeVisible] =
    React.useState<boolean>(false);
  const [selectedHeroe, setSelectedHeroe] = React.useState<any>();

  const handleSelectPokemon = (superhero?: any) => {
    setSelectedHeroe(superhero);
    setIsSelectedHeroeVisible(true);
  };

  return (
    <div
      className="hero mt-8 p-260 h-full w-64 border-gray-600 border-solid rounded bg-slate-950 flex justify-center"
      key={superhero.id}
    >
      <div>
        <div className="text-center mt-4">
          <h2 className="text-base">
            {" "}
            {superhero.name.length > MAX_NAME_LENGTH
              ? `${superhero.name.slice(0, MAX_NAME_LENGTH)}...`
              : superhero.name}
          </h2>

          <div className="rounded-full grid place-items-center w-40 h-40 mx-auto hover:bg-sky-700/50 flex items-center">
            <div className="mb-1 mt-3">
              <Diamon />
            </div>
            <Image
              src={`${superhero.thumbnail.path}.${superhero.thumbnail.extension}`}
              alt={superhero.name}
              className="rounded-full w-36 h-36 mx-auto cursor-pointer"
              width={128}
              height={128}
              onClick={() => handleSelectPokemon(superhero)}
            />
            <div className="mb-3 mt-2 rotate-180">
              <Diamon />
            </div>
          </div>
        </div>
        <div className="text-center mt-24">
          <div className="rounded-md border-solid border-slate-300 bg-gray-800 w-44 h-12 mb-2 grid">
            <h2 className="self-center">
              Comics: {superhero.comics.available}
            </h2>
          </div>
          <div className="rounded-md border-solid border-slate-300 bg-gray-800 w-44 h-12 mb-9 grid">
            <h2 className="self-center">
              Movies: {superhero.series.available}
            </h2>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isSelectedHeroeVisible}
        onClose={() => setIsSelectedHeroeVisible(false)}
      >
        <SelectedHeroe superhero={selectedHeroe} />
      </Modal>
    </div>
  );
};

export default SuperheroCard;
