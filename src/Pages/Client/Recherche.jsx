import React from 'react';
import './recherche.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { routers } from "../../endpoints";
import logo from "../../assets/logo.png";
import bgtp1 from "../../assets/bgtp1.jpg";




function Recherche() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };
  return (


    <div
      style={backgroundImageStyle}
      className="flex justify-center items-center ">

      <div className="text-center">
        <img className="h-10" src={logo} alt="logo" />
      </div>



      <div className="text-center2">
        <img className="h-4" src={logo} alt="logo" />
      </div>



      <div className="text-center mt-8">
        <p className="text-lg">
          Stand on the shoulders of giants
        </p>
      </div>

      <div className="search-container text-[#1E1E1E]">
        <input
          type="text"
          className="search-bar"
          placeholder="Recherche un article"
        />
        <button>
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
            <i className="fas fa-search"></i>
          </span>
        </button>

      </div>


    </div >







  );
}


export default Recherche;