import React from "react";
import { Link } from 'react-router-dom';
import MdetailsAr from '../Pages/Moderateur/MdetailsAr';
import { routers } from "../endpoints";



function Moderateur({ titre, id }) {
  
  console.log("inside article.jsx id =",id);
  return (
    <div className='font-["Inter"] text-[#1E1E1E] mb-4'>
      <div className="clear-both flex justify-between items-center mx-36 text-[0.9em] font-regular bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md">
        <p>{titre}</p>

        <Link 
          to={`${routers.MDETAILS}/${id}`} // Link to the details page with article ID
          className="text-[0.9em] bg-[#50B3C5] hover:bg-[#1E1E1E] text-[#FEFEFE] font-medium py-2 px-4 rounded-[0.15em]"
        >Détails
        </Link>

        

      </div>
    </div>
  );
}

export default Moderateur;