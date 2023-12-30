import React, { useState } from "react";
import './welcome.css'; 


function Welcome() {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  
  const handleDeleteClick = () => {
    setIsDeleteClicked(!isDeleteClicked);
  };

  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked);
  };


    return (

    
<div className="container">
<div className="title">
  <span className="black">WELCOME TO </span>
  <span className="yellow">S</span>
  <span className="black">CI</span>
  <span className="blue">EN</span>
  <span className="red">S</span>
  <span className="black">PACE</span>
</div>
<div className="main-text">
  <div className="center-text">
   <p>
    Welcome to science space, a collaborative project that empowers users to delve into the world of scientific literature with ease.
    Welcome to science space, collaborative project that empowers users to delve into the world of scientific literature with ease.
   </p>
  </div>




  <div className="buttons">
            <button
               className={`blue-button ${isDeleteClicked ? "gray-bg" : ""}`}
              onClick={handleDeleteClick}
            >
             Login
            </button>
            <button
              className={`blue-button ${isEditClicked ? "gray-bg" : ""}`}
              onClick={handleEditClick}
            >
              Create Account
            </button>
          </div>








</div>
</div>







    
    );
  }

  
  export default Welcome;
  