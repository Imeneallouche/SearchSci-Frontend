import React, { useState } from "react";
import { useEffect } from "react";
import "./detailsArticle.css";

function DetailsArticle() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [detailsArticle, setDetailsArticle] = useState([]);
  const [references, setReferences] = useState([]);
  const [auteurs, setAuteurs] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/articles/2/";
    console.log("testing");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data.Article);
        console.log("refernces:", data.Article.references);

        setDetailsArticle(data.Article);
        setReferences(data.Article.references);
        setAuteurs(data.Article.auteurs);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="min-h-screen relative ">
      <h1 className="text-4xl font-semibold text-black absolute md:top-20 text-center md:right-30 mt-20">
        {detailsArticle && detailsArticle.titre}
      </h1>
      <div className="  relative">
        <a
          href={detailsArticle && detailsArticle.urlPdf}
          className="text-blue-500 absolute md:top-60 md:right-30 text-center  "
        >
          [VIEW PDF]
        </a>
      </div>
      <span
        onClick={(e) => {
          const url =
            "http://127.0.0.1:8000/api/addToFavorites" + detailsArticle.id;
          fetch(url, { method: "DELETE" })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Something went wrong");
              }
              // Additional logic after successful deletion, if needed
            })
            .catch((e) => {
              console.log(e);
            });
        }}
        className="cursor-pointer ml-2 absolute md:top-40 md:right-35 ml-80 "
      >
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
            className="h-6 w-6 text-black"
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
      ;
      <div className="max-w-3xl px-4 mx-auto">
        <div className="text-center mb-4 font-semibold text-black absolute  md:top-90 text-black  ">
          <div className="author-info">
            <strong>Auteurs:</strong>
            {auteurs
              ? auteurs.map((auteur) => {
                  return (
                    <p className="mb-6 mt-6">
                      {auteur.full_name}, {auteur.email},{" "}
                      {auteur.institution.nom}, {auteur.institution.adress}
                    </p>
                  );
                })
              : null}
          </div>

          <p className="mb-6 mt-6">
            <strong>Résumé:</strong> {detailsArticle && detailsArticle.resume}
          </p>

          <p className="mb-6 mt-6">
            <strong>Mots cle:</strong>{" "}
            {detailsArticle && detailsArticle.motsCles}
          </p>

          <p className="mb-6 mt-6">
            <strong>Texte integral:</strong>{" "}
            {detailsArticle && detailsArticle.texteIntegral}
          </p>

          <div className="author-info">
            <strong>Réferences:</strong>
            {references
              ? references.map((reference) => {
                  return <p className="mb-6 mt-6">{reference.titre}</p>;
                })
              : null}
          </div>

          {/* Ajoutez le reste du texte avec le formatage approprié */}
        </div>
      </div>
    </div>
  );
}

export default DetailsArticle;
