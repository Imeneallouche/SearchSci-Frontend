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
      className='flex flex-col font-["Inter"] text-[#1E1E1E] object-cover w-full h-full'
      style={backgroundImageStyle}
    >
      <div className="flex justify-between items-center mt-6 mb-12 mx-10">
        <button>
          <img className="w-6" src={traits} alt="" />
        </button>
        <input
          type="text"
          placeholder={FilterArticlesData.SEARCH_INPUT}
          className="border-2 border-green my-4 p-4 w-[50%] text-green bg-dark-blue"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <img className="h-5" src={logo} alt="logo" />
      </div>

      <div className="gap-24 flex justify-between mx-10">
        {FilterArticlesData.FILTERS.map((filter, index) => (
          <input
            key={index}
            type="text"
            placeholder={filter}
            className="flex-1 border-2 border-green my-4 p-4 w-[50%] text-green bg-dark-blue"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        ))}

        <button className="flex-1">{FilterArticlesData.FILTER_BUTTON}</button>
      </div>

      <h1 className="text-black font-bold text-3xl m-10">
        {FilterArticlesData.TITLE}
      </h1>

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
