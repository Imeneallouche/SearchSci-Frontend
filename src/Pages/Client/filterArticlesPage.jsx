import React, { useState } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import logo from "../../assets/logo.png";

import { rawArticlesData } from "../../Data/rawArticles";
import { FilterArticlesData } from "../../Data/ArticleShowCase";

import DetailedArticle from "../../Components/detailedArticle";

function FilterArticlesPage() {
  const [input, setInput] = useState("");

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

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
        {rawArticlesData.map((article, index) => (
          <DetailedArticle
            stared={article.FAVORITE}
            title={article.TITLE}
            pdf_link={article.PDF_LINK}
            reference={article.REFERENCE}
            resume={article.RESUME}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterArticlesPage;
