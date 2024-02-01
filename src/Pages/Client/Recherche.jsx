import React from 'react';
import { useEffect } from 'react';
import './recherche.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




function Recherche() {
  useEffect(()=> {
    const url= "http://127.0.0.1:8000/api/search/?search=optimisation"
  console.log('testing');
  fetch(url)
  .then()
  .then()





  });
  



return(

  
<div className="flex justify-center items-center ">

  <div className="text-center">
   <h1 className="text-64 font-semibold">
      <span className="text-yellow-500">S</span>
      <span className="text-black">CI</span>
      <span className="text-blue-500">EN</span>
      <span className="text-red-500 font-semibold">S</span>
      <span className="text-black">PACE</span>
    </h1>
    {/* Autres contenus de votre page */}
  </div>



  <div className="text-center2">
   <h1 className="text-6 font-semibold">
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
    <span className="search-icon">
      {/* Icône de recherche (Remplacez le contenu avec votre propre icône) */}
      <FontAwesomeIcon icon={faSearch} />
      <i className="fas fa-search"></i>
    </span>
    
  </div>


</div>







);
}


export default Recherche;