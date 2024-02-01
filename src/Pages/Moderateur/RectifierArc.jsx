import React, { useState } from "react";
import './MdetailsAr.css' ;
import { useEffect } from 'react';

function RectifierArc() {
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDeleteClick = () => {
    setIsDeleteClicked(!isDeleteClicked);
  };

  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked);
  };





  const [rectifierArc, setRectifierArc] = useState([]);
  const [references, setReferences] = useState([]);
  const [auteurs, setAuteurs] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/articles/2/";
    console.log('testing');
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:",data.Article);
        console.log("refernces:",data.Article.references);
        

        setRectifierArc(data.Article);
        setReferences(data.Article.references);
        setAuteurs(data.Article.auteurs);
        
       
      });
  }, []); // Empty dependency array to run the effect only once on mount







  return (
    <div className="min-h-screen relative ">
      <h1 className="text-4xl font-bold text-black absolute md:top-40 text-center md:right-30 mt-20">
       Rectifier Article
      </h1>
      <div className="  relative">
        <a href={rectifierArc && rectifierArc.urlPdf} className="text-blue-500 absolute md:top-60 md:right-30 ml-80 ">
          [VIEW PDF]
        </a>
      </div>
      <span onClick={toggleFavorite} className="cursor-pointer ml-2 absolute top-0 right-0 mt-8 mr-8">
        {isFavorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        )}
      </span>
      <div className=" min-h-screen flex items-center ml-80 ">
        <div className=" font-semibold text-black text-left  ">
        


          <div className="input-container">
            <strong>Titre Article:</strong>
            <input className="input-large" type="text" value={rectifierArc && rectifierArc.titre}/>
          </div>

         
          <div className="input-container">
  <strong>Auteurs:</strong>
  {auteurs
    ? auteurs.map((auteur, index) => (
        <div key={index}>
          <input
            className="input-large"
            type="text"
            value={`${"\u2022"} ${auteur.full_name}, ${auteur.email}, ${auteur.institution.nom}, ${auteur.institution.adress}`}
            readOnly
          />
        </div>
      ))
    : null}
</div>




         <div className="input-container">
            <strong>Mots cle:</strong>
            <input className="input-large" type="text" value={rectifierArc && rectifierArc.motsCles} />
          </div>

          <div className="input-container">
            <strong>Resume:</strong>
            <input className="input-large" type="text" value={rectifierArc && rectifierArc.resume} />
          </div>


          <div className="input-container">
            <strong>Texte Integral:</strong>
            <input className="input-large" type="text" value={rectifierArc && rectifierArc.texteIntegral} />
          </div>


         





          <div className="input-container">
            <strong>Réference:</strong>



             {references
    ? references.map((reference, index) => (
        <div key={index}>
          <input
            className="input-large"
            type="text"
            value={`${"\u2022"} ${reference.titre}`}
            readOnly
          />
        </div>
      ))
    : null}
          </div>

        

          <div className="buttons">
            <button
               className={`red-button ${isDeleteClicked ? "gray-bg" : ""}`}
              onClick={handleDeleteClick}
            >
              Annuler changements
            </button>
            <button
              className={`blue-button ${isEditClicked ? "gray-bg" : ""}`}
              onClick={handleEditClick}
            >
              Valider changements
            </button>
          </div>

          




          {/* Ajoutez le reste du texte avec le formatage approprié */}
        </div>
      </div>
    </div>
  );
};

export default RectifierArc;
