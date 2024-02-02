
import React, { useState } from "react";
import { useEffect } from 'react';
import './recherche.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




function Recherche() {



  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked);
  };




  useEffect(()=> {
    const url= "http://127.0.0.1:8000/api/search/?search=optimisation"
  console.log('testing');
  fetch(url)
  .then()
  .then()





  });
  



return(

  
<div className="flex justify-center items-center ">

 



    <div className="title text-center">
  <span className="yellow">S</span>
  <span className="black">CI</span>
  <span className="blue">EN</span>
  <span className="red">S</span>
  <span className="black">PACE</span>
</div>

    {/* Autres contenus de votre page */}
 



  <div className="text-center2">
   <h1 className="text-6 font-semibold ">
      <span className="text-yellow-500">S</span>
      <span className="text-black">CI</span>
      <span className="text-blue-500">EN</span>
      <span className="text-red-500 font-semibold">S</span>
      <span className="text-black">PACE</span>
    </h1>
    {/* Autres contenus de votre page */}
  </div>
 


  <div className="text-center mt-8">
    <p className="text-lg">
      Stand on the shoulders of giants
    </p>
  </div>

  <div className="search-container">
    <input
      type="text"
      className="search-bar"
      placeholder="Recherche un article"
    />
   

  


    
  </div>

   


  <button
              className={`blue-button ${isEditClicked ? "gray-bg" : ""}`}
              onClick={handleEditClick}
            >
              suivant
            </button>

 </div>







);
}


export default Recherche;