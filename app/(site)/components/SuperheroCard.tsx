import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import SelectedHeroe from "./SelectedHeroe";

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
          <div>
            <Image
              className="w-28 h-20 inline"
              src="https://s3-alpha-sig.figma.com/img/df5e/9868/2fcba984411c709b7c035040a9f2611f?Expires=1686528000&Signature=f63KxMOwewCvl6iTuDoAaBjSf53PTF~qqc2VeN9WaTbJaNAtQvsd3uStl7WpLSHW0OdiyoGiHVbo58jQnLyH62tUwevw0i1LidvsMRzu0zradxbyEmDti4XP~BMbdZFdooY~xwGgIWPytD-I7GZ8XUDVxc3D2KFZLJ18KBwzEbf6-8lWBthIQK9zy7daPOgjixhdoZxTdiGiRHQaY-0o-Ii9F427HALqXewFvqNKiY7gQjgWw0DYLaKWwDQp5n1bXepxc0IOB8O59T1dnL-dK~c2uq5-1G43xK0l3wM6KNHxv1pvG7cyoqO-XcwaL12-8bKQB4Qh0Mri~OUJxkTcAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="figure"
              width={112}
              height={80}
            />
          </div>
          <div>
            <Image
              src={`${superhero.thumbnail.path}.${superhero.thumbnail.extension}`}
              alt={superhero.name}
              className="rounded-full w-32 h-32 mx-auto"
              width={128}
              height={128}
              onClick={() => handleSelectPokemon(superhero)}
            />
          </div>
          <div>
            <Image
              className="w-28 h-20 inline"
              src="https://s3-alpha-sig.figma.com/img/df5e/9868/2fcba984411c709b7c035040a9f2611f?Expires=1686528000&Signature=f63KxMOwewCvl6iTuDoAaBjSf53PTF~qqc2VeN9WaTbJaNAtQvsd3uStl7WpLSHW0OdiyoGiHVbo58jQnLyH62tUwevw0i1LidvsMRzu0zradxbyEmDti4XP~BMbdZFdooY~xwGgIWPytD-I7GZ8XUDVxc3D2KFZLJ18KBwzEbf6-8lWBthIQK9zy7daPOgjixhdoZxTdiGiRHQaY-0o-Ii9F427HALqXewFvqNKiY7gQjgWw0DYLaKWwDQp5n1bXepxc0IOB8O59T1dnL-dK~c2uq5-1G43xK0l3wM6KNHxv1pvG7cyoqO-XcwaL12-8bKQB4Qh0Mri~OUJxkTcAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="figure"
              width={112}
              height={80}
            />
          </div>
        </div>
        <div className="text-center mt-4">
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
