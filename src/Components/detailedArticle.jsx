import React from "react";

import favorite from "../assets/favorite.png";
import star from "../assets/star.png";

<<<<<<< HEAD
function DetailedArticle({ stared, title, pdf_link, reference, resume }) {
  return (
    <div className="gap-2 p-8 flex flex-col items-start bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md">
      <h1 className="text-xl text-black font-bold">{title}</h1>
      <a className="text-blue hover:underline" href={pdf_link}>
        [View PDF]
      </a>

      <img src={stared ? favorite : star} alt="favorite" />
      <p className="text-black">{reference}</p>
      <p className="text-black">{resume}</p>
=======
function DetailedArticle({stared,title, pdf_link, reference, resume }) {
  return (
    <div className="gap-2 p-8 flex flex-col items-start bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md">
      
      <h1 className="text-xl text-black font-bold">{title}</h1>
      
      <a className="text-blue hover:underline" href={pdf_link}>
        [View PDF]
      </a>
     
      <img src={stared ? favorite : star} alt="favorite" />
      
      <p className="text-black">References : {reference}</p>
  
      <p className="text-black">Resume : {resume}</p>
      
>>>>>>> 477ed133d852385c09b5c5517082e7e774a5d5ac
    </div>
  );
}

export default DetailedArticle;
