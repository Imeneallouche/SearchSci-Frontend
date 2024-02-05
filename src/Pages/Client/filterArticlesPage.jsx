import React, { useState } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import logo from "../../assets/logo.png";

import { rawArticlesData } from "../../Data/rawArticles";
import { FilterArticlesData } from "../../Data/ArticleShowCase";

import DetailedArticle from "../../Components/detailedArticle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function FilterArticlesPage() {
  const [input, setInput] = useState("");

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  const { mot } = useParams();

  const [listeArticles, setListeArticles] = useState([]);
  const [filteredArticlesIns, setfilteredArticlesIns] = useState([])
  const [filteredArticlesAuteur, setfilteredArticlesAuteur] = useState([])
  const [filteredArticlesMotsCles, setfilteredArticlesMotsCles] = useState([])
  const [filteredArticlesRef, setfilteredArticlesRef] = useState([])
  const [filterType, setFilterType] = useState(null);





  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/search/?search=${mot}/`;
    console.log("testing");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setListeArticles(data.results);
        console.log("data.results", data.results);
      });
  }, [mot]);


  const handleFilter = (type) => {
    setFilterType(type);

    try {
      let apiUrl;

      switch (type) {
        case "motsCles":
          apiUrl = `http://127.0.0.1:8000/api/search/?search=motsCles:${mot}`;
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setfilteredArticlesMotsCles(data.results);
              console.log(filteredArticlesMotsCles)
            });
          break;
        case "auteur":
          const encodedMotAuteur = encodeURIComponent(`auteur_Nom:${mot}`);
          apiUrl = `http://127.0.0.1:8000/api/search/?search=${encodedMotAuteur}`;
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setfilteredArticlesAuteur(data.results);
              console.log(filteredArticlesAuteur)
            });
          break;
        case "institution":
          apiUrl = `http://127.0.0.1:8000/api/search/?search=auteur_Institution:${mot}`;
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setfilteredArticlesIns(data.results);
              console.log(filteredArticlesIns)
            });
          break;
        case "references":
          apiUrl = `http://127.0.0.1:8000/api/search/?search=references:${mot}`;
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setfilteredArticlesRef(data.results);
              console.log(filteredArticlesRef)
            });
          break;
        default:
          break;
      }
    } catch (error) {
      console.log("error" + error);
    }
  };


  return (
    <div
      className='font-["Inter"] text-[#1E1E1E]'
      style={backgroundImageStyle}
    >
      <div className="flex items-center justify-between">
        <button>
          <img className="w-6 my-12 ml-12" src={traits} alt="" />
        </button>
        <img className="h-5 mr-12" src={logo} alt="logo" />
      </div>
      <h1 className="mx-16 mt-32 text-4xl font-bold">
        {FilterArticlesData.TITLE}
      </h1>
      <div className="mt-40 mx-12 flex flex-col">
        <p className="ml-4 text-xl font-medium">Filtrer vos résultats:</p>
        <div className="flex">
          <button onClick={() => handleFilter("motsCles")} className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">mots clés</button>
          <button onClick={() => handleFilter("auteur")} className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">Auteurs</button>
          <button onClick={() => handleFilter("institution")} className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">Institutions</button>
          <button onClick={() => handleFilter("references")} className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">Références</button>
        </div>
      </div>


      <div className="flex flex-col mx-10 gap-5">
        {filterType === "motsCles" && filteredArticlesMotsCles.length > 0 &&
          filteredArticlesMotsCles.map((article, index) => (
            <DetailedArticle
              key={index}
              title={article.titre}
              pdf_link={article.urlPdf}
              reference={article.references.titre}
              resume={article.resume}
            />
          ))}
        {filterType === "auteur" && filteredArticlesAuteur.length > 0 &&
          filteredArticlesAuteur.map((article, index) => (
            <DetailedArticle
              key={index}
              title={article.titre}
              pdf_link={article.urlPdf}
              reference={article.references.titre}
              resume={article.resume}
            />
          ))}
        {filterType === "institution" && filteredArticlesIns.length > 0 &&
          filteredArticlesIns.map((article, index) => (
            <DetailedArticle
              key={index}
              title={article.titre}
              pdf_link={article.urlPdf}
              reference={article.references.titre}
              resume={article.resume}
            />
          ))}
        {filterType === "references" && filteredArticlesRef.length > 0 &&
          filteredArticlesRef.map((article, index) => (
            <DetailedArticle
              key={index}
              title={article.titre}
              pdf_link={article.urlPdf}
              reference={article.references.titre}
              resume={article.resume}
            />
          ))}
        {(filterType === null || (listeArticles.length > 0 && filterType !== "motsCles" && filterType !== "auteur" && filterType !== "institution" && filterType !== "references")) &&
          listeArticles.map((article, index) => (
            <DetailedArticle
              key={index}
              title={article.titre}
              pdf_link={article.urlPdf}
              reference={article.references.titre}
              resume={article.resume}
            />
          ))}
        {listeArticles.length === 0 && filterType !== null && (
          <p>No articles found for the selected filter.</p>
        )}
      </div>
    </div>
  );
}

export default FilterArticlesPage;
