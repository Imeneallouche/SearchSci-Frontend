import React, { useState } from "react";
import { useEffect } from 'react';
//import {useNavigate} from 'react-router-dom'
import './MdetailsAr.css' ;
import { useParams } from 'react-router-dom';

function MdetailsAr() {
 // const navigate =useNavigate();
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


  const { id } = useParams();
  const [mdetailsAr, setMdetailsAr] = useState([]);
  const [references, setReferences] = useState([]);
  const [auteurs, setAuteurs] = useState([]);




  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/articles/${id}/`; // Use the article ID in the URL
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMdetailsAr(data.Article);
        setReferences(data.Article.references);
        setAuteurs(data.Article.auteurs);
      });
  }, [id]);
















  return (
    <div className="min-h-screen relative ">

      <h1 className="text-4xl font-semibold text-black absolute md:top-40 text-center md:right-30">
      {mdetailsAr && mdetailsAr.titre}
      </h1>
      <div className="  relative">
        <a href={mdetailsAr && mdetailsAr.urlPdf} className="text-blue-500 absolute md:top-60 md:right-30 ml-80 ">
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




        <div className="author-info">
        <strong>Auteurs:</strong> 
        {auteurs
      ?auteurs.map((auteur) => {
      return <p className="mb-6 mt-6">
       {auteur.full_name}, {auteur.email}, {auteur.institution.nom}, {auteur.institution.adress}  
    </p>

}): null
       }
      
      </div>









        
          <p className="mb-6 mt-6">
            <strong>Résumé:</strong> {mdetailsAr && mdetailsAr.resume}
           
          </p>
          <p className="mb-6 mt-6">
            <strong>Mots cle:</strong>  {mdetailsAr && mdetailsAr.motsCles}
            
          </p>
          <p className="mb-6 mt-6">
            <strong>Texte integral:</strong>  {mdetailsAr && mdetailsAr.texteIntegral}
          </p>

        
         
          <div className="author-info">
          <strong>Réferences:</strong>
          {references
      ?references.map((reference ) => {
      return <p className="mb-6 mt-6">
        {reference.titre}
    </p>

}): null
       }

       </div>
        









          <div className="buttons">






            <button
               className={`red-button ${isDeleteClicked ? "gray-bg" : ""}`}
              onClick={(e) => {
             const url = 'http://127.0.0.1:8000/api/supprimer_article'+ id 
             fetch(url,{method: 'DELETE'})
             .then((response )=> {
              if (!response.ok){ throw new Error ('spmething wrong') }

            // return response.json()
           // navigate (' /ListeArticles')
            })
          
            




             .catch((e)   =>  {
              console.log(e);
             })
              


              }}>





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
