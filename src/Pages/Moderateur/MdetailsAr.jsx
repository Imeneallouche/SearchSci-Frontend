import React, { useState } from "react";
import './MdetailsAr.css' ;

function MdetailsAr() {
  
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

  return (
    <div className="min-h-screen relative ">
      <h1 className="text-4xl font-semibold text-black absolute md:top-20 text-center md:right-30">
        Double stimulations during the follicular and luteal phases of poor responders in IVF/ICSI programmes (Shanghai protocol)
      </h1>
      <div className="  relative">
        <a href="#" className="text-blue-500 absolute md:top-60 md:right-30 text-center ">
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
      <div className="max-w-3xl px-4 mx-auto">
        <div className="text-center mb-4 absolute  md:top-90 text-black  ">
        <p className="mb-6 mt-6">
            <strong>Auteurs:</strong> Yanping Kuang, Qiuju Chen, Qingqing Hong, Qifeng Lyu
          </p>
          <p className="mb-6 mt-6">
            <strong>Institutions:</strong> Departement of CSE, PublisherAI Now Institute at New York University
          </p>
          <p className="mb-6 mt-6">
            <strong>Résumé:</strong> building on the inaugural 2016 report, the AI Now 2017 Report addresses the most recent 
            scholarly literature in order to raise critical social questions that will shape our present and near future...
            building on the inaugural 2016 report, the AI Now 2017 Report addresses the most recent scholarly literature 
            in order to raise critical social questions that will shape our present and near future. This report 
            focuses on new developments in four areas: labor and automation, 
            bias and inclusion, rights and liberties, and ethics and governance. W
          </p>
          <p className="mb-6 mt-6">
            <strong>Mots cle:</strong> building on the inaugural 2016 report, the AI Now 2017 Report addresses the most recent 
            scholarly literature in order to raise critical social questions that will shape our present and near future...
            building on the inaugural 2016 report, the AI Now 2017 Report addresses the most recent scholarly literature 
            in order to raise critical social questions that will shape our present and near future. This report 
            
          </p>
          <p className="mb-6 mt-6">
            <strong>Texte integral:</strong> building on the inaugural 2016 report, the AI Now 2017 Report addresses the most recent 
            scholarly literature in order to raise critical social questions that will shape our present and near future...
            building on the inaugural 2016 report, the AI Now 2017 Report addresses the most recent scholarly literature 
            in order to raise critical social questions that will shape our present and near future. This report 
            focuses on new developments in four areas: labor and automation, 
            bias and inclusion, rights and liberties, and ethics and governance. W
          </p>
          <p className="mb-6 mt-6">
            <strong>Réference:</strong> XXX
          </p>
        

          <div className="buttons">
            <button
               className={`red-button ${isDeleteClicked ? "gray-bg" : ""}`}
              onClick={handleDeleteClick}
            >
              Supprimer l'article
            </button>
            <button
              className={`blue-button ${isEditClicked ? "gray-bg" : ""}`}
              onClick={handleEditClick}
            >
              Rectifier l'article
            </button>
          </div>

          




          {/* Ajoutez le reste du texte avec le formatage approprié */}
        </div>
      </div>
    </div>
  );
};

export default MdetailsAr;
