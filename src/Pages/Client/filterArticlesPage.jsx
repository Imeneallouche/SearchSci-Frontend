import React, { useState } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import logo from "../../assets/logo.png";

import { rawArticlesData } from "../../Data/rawArticles";
import { FilterArticlesData } from "../../Data/ArticleShowCase";

import DetailedArticle from "../../Components/detailedArticle";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function FilterArticlesPage() {
  const [input, setInput] = useState("");

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  const { mot } = useParams();

  const [listeArticles, setListeArticles] = useState([]);

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/search/?search=${mot}/`;
    console.log('testing');
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setListeArticles(data.results);
        console.log('data.results', data.results);
      });
  }, [mot]);



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
          <button className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">mots clés</button>
          <button className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">Auteurs</button>
          <button className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">Institutions</button>
          <button className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] text-white m-4 font-medium">Date de publication</button>
        </div>
      </div>


      <div className="flex flex-col mx-10 gap-5">
        {listeArticles.map((article, index) => (
          <DetailedArticle
            title={article.titre}
            pdf_link={article.urlPdf}
            reference={article.references.titre}
            resume={article.resume}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterArticlesPage;
