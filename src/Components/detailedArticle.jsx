import React from "react";

import favorite from "../assets/favorite.png";
import star from "../assets/star.svg";


function DetailedArticle({ stared, title, pdf_link, reference, resume }) {
  return (
    <div className="mx-8 my-4 bg-white rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md p-4">

      <h1 className="font-bold text-[#1E1E1E] text-xl mb-4">{title}</h1>
      <a href={pdf_link} className="text-blue hover:underline mb-4">[View PDF]</a>
      <img className="mt-4" src={stared ? favorite : star} alt="favorite" />
      <p className="mt-4"><span className="font-medium">References</span> : {reference}</p>
      <p><span className="font-medium">Resume</span> : {resume}</p>

      {/* <p className="text-black">Resume : {resume}</p> */}

    </div>
  );
}

export default DetailedArticle;
