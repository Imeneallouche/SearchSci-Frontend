import React from "react";
import deletebtn from "../assets/delete.svg";
import editbtn from "../assets/edit.svg";
import { useNavigate } from "react-router-dom";

function Moderateur({ Nom, Prenom, compteEmail, onButtonClick }) {
  const navigate = useNavigate()
  return (
    <div className='font-["Inter"] text-[#1E1E1E] mb-4'>
      <div className="clear-both flex justify-between items-center mx-36 font-regular bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md">
        <p>{Nom}</p>
        <p>{Prenom}</p>
        <p>{compteEmail}</p>
        <div className="flex space-x-4">
          <button onClick={onButtonClick}>
            <img src={deletebtn} alt="" />
          </button>
          <button onClick={() => navigate(`/UpdateModerator/${compteEmail}`)}>
            <img src={editbtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moderateur;
