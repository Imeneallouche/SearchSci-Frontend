import React from "react";

function Moderateur({ titre }) {
  return (
    <div className='font-["Inter"] text-[#1E1E1E] mb-4'>
      <div className="clear-both flex justify-between items-center mx-36 font-regular bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md">
        <p>{titre}</p>
        <button className="text-[0.9em] bg-[#50B3C5] hover:bg-[#1E1E1E] text-[#FEFEFE] font-medium py-2 px-4 rounded-[0.15em]">
          Détails
        </button>
      </div>
    </div>
  );
}

export default Moderateur;
