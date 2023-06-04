import React, { useState, useEffect } from "react";
import Image from "next/image";
import YoutubeVideo from "./YoutubeVideo";
import Modal from "./Modal";

const images = [
  "https://cdn.marvel.com/content/1x/themarvels_lob_crd_03.jpg",
  "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg",
  "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg",
  "https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_03.jpg",
  "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_03.jpg",
];

function InfoMarvel() {
  const totalMovies = 20;
  const halfMovies = (totalMovies / 2) * 5;
  const halfMovies2 = totalMovies / 2;
  const videoId = "RoE5DCsCzf4";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLargeImage, setShowLargeImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [isSelectedHeroeVisible, setIsSelectedHeroeVisible] =
    React.useState<boolean>(false);

  const handleSelectPokemon = () => {
    setIsSelectedHeroeVisible(true);
  };

  return (
    <div className="info mt-8 mx-4 flex place-content-center flex-wrap gap-4">
      <div className="w-full md:w-1/2 h-48 bg-slate-950/80  rounded-md border border-amber-950 p-4 grid align-center">
        <h1 className="text-center">PROGRESO PELICULAS PRODUCIDAS</h1>
        <div>
          <div className="grid justify-end text-amber-600 text-xs">
            <p>{totalMovies} películas</p>
            <p>Meta de producción</p>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar">
              {[...Array(10)].map((_, index) => {
                const segmentWidth = (index + 1) * 10;
                const isFilled = segmentWidth <= halfMovies;

                return (
                  <div
                    className={`progress-segment ${isFilled ? "filled" : ""}`}
                    key={index}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="grid justify-center text-blue-500 text-xs">
            <p>{halfMovies2} películas</p>
            <p>Produccidas</p>
          </div>
        </div>
      </div>
      <YoutubeVideo videoId={videoId} />
      <div className="w-full md:w-1/5 h-48 bg-slate-950/80 rounded-md border border-amber-950 p-4">
        <div
          className="w-full h-full cursor-pointer"
          onClick={handleSelectPokemon}
        >
          <Image
            src={images[currentIndex]}
            alt="Imagen de Marvel"
            className="w-full h-full object-contain rounded-md"
            width={100}
            height={100}
          />
        </div>
        <Modal
          isOpen={isSelectedHeroeVisible}
          onClose={() => setIsSelectedHeroeVisible(false)}
        >
          <Image
            src={images[currentIndex]}
            alt="Imagen de Marvel"
            className="max-w-full max-h-full object-scale-down"
            width={800}
            height={800}
          />
        </Modal>
      </div>
    </div>
  );
}

export default InfoMarvel;
