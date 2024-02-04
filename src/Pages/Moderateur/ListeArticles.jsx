import React, { useState } from "react";
import { useEffect } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import Article from "../../Components/Article";

function ListeArticles() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  const [listeArticles, setListeArticles] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/search/?traiter=false";
    console.log("testing");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListeArticles(data.results);
      });
  }, []); // Empty dependency array to run the effect only once on mount

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
          <span className="text-[#FFBE00]">S</span>
          <span>CI</span>
          <span className="text-[#50B3C5]">EN</span>
          <span className="text-[#C93227]">S</span>
          <span>PACE</span>
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

      {ListeArticles
        ? listeArticles.map((listeArticle) => {
            return (
              <Article
                key={listeArticle.id}
                titre={listeArticle.titre}
                id={listeArticle.id}
              />
            );
          })
        : null}
    </div>
  );
}

export default ListeArticles;
