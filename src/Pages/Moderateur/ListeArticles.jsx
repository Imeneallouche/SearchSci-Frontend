import React from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import Article from "../../Components/Article";

function ListeArticles() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div
      className='font-["Inter"] text-[#1E1E1E] object-cover w-full h-full'
      style={backgroundImageStyle}
    >
      <div className="flex justify-between items-center mt-6 mb-12 mx-10">
        <button>
          <img className="w-6" src={traits} alt="" />
        </button>
        <p className="font-semibold">
          <span className="text-[#FFBE00]">S</span>CI
          <span className="text-[#50B3C5]">EN</span>
          <span className="text-[#C93227]">S</span>PACE
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-[2em] ml-36 mb-12 text-[#1E1E1E] ">
          Liste des articles (non validés)
        </h1>
      </div>
      <div className="clear-both flex justify-between items-center mx-36 text-[0.9em] font-semibold bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] mb-4 drop-shadow-md">
        <p>Titre article</p>
        <p>Details</p>
      </div>

      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
      <Article titre="Artificial intelligence in a modern approach" />
    </div>
  );
}

export default ListeArticles;
