import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MdetailsAr.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { routers } from "../../endpoints";
import bgtp1 from "../../assets/bgtp1.jpg";

function MdetailsAr() {
  const navigate = useNavigate();
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

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/articles/${id}/`; // Use the article ID in the URL
    console.log("id Mdetails =", id);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMdetailsAr(data.Article);
        setReferences(data.Article.references);
        setAuteurs(data.Article.auteurs);
      });
  }, [id]);
  return (
    <div style={backgroundImageStyle} className="text-[#1E1E1E] h-screen w-full">
      <div className="mx-32">
        <h1 className="font-bold text-[2em] pt-16">
          Titre de l'article: {mdetailsAr && mdetailsAr.titre}
        </h1>
        <div className="mt-8">
          <a
            href={mdetailsAr && mdetailsAr.urlPdf}
            className="text-blue-500"
          >
            [VIEW PDF]
          </a>
        </div>
        <span
          onClick={toggleFavorite}
          className=""
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
        <div className="">
          <div className="">
            <div className="mb-8">
              <strong className="text-[1.2em]">Auteurs:</strong>
              {auteurs
                ? auteurs.map((auteur) => {
                  return (
                    <p className="">
                      {auteur.full_name}, {auteur.email},{" "}
                      {auteur.institution.nom}, {auteur.institution.adress}
                    </p>
                  );
                })
                : null}
            </div>

            <p className="mb-8 leading-8">
              <strong className="text-[1.2em]">Résumé:</strong> {mdetailsAr && mdetailsAr.resume}
            </p>
            <p className="mb-8 leading-8">
              <strong className="text-[1.2em]">Mots cle:</strong> {mdetailsAr && mdetailsAr.motsCles}
            </p>
            <p className="mb-8 leading-8">
              <strong className="text-[1.2em]">Texte integral:</strong>{" "}
              {mdetailsAr && mdetailsAr.texteIntegral}
            </p>

            <div className="">
              <strong className="text-[1.2em]">Réferences:</strong>
              {references
                ? references.map((reference) => {
                  return <p className="">{reference.titre}</p>;
                })
                : null}
            </div>

            <div className="flex w-full items-center justify-center">
              <button
                className={`red-button ${isDeleteClicked ? "gray-bg" : ""} my-16`}
                onClick={(e) => {
                  const url = `http://127.0.0.1:8000/api/supprimer_article/${id}/`;
                  fetch(url, { method: "DELETE" })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("spmething wrong");
                      }

                      // return response.json()
                      navigate("/ListeArticles/");
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }}
              >
                Supprimer l'article
              </button>

              <Link
                to={`${routers.RECTIFY}/${id}`}
                className={`blue-button flex items-center justify-center my-16`}
              >
                Rectifier l'article
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MdetailsAr;
