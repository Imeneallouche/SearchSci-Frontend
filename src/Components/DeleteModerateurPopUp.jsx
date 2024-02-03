import React from "react";


function DeleteModerateurPopUp(props) {
  return (props.trigger) ? (
    <div className="flex items-center justify-center h-screen absolute w-full">
      <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 drop-shadow-md p-6'>
        <p className="font-semibold">
          Voulez-vous vraiment supprimer cet utilisateur ?
        </p>
        <div className="flex items-center justify-center space-x-4 text-[0.8em] text-[#FEFEFE] font-medium w-full my-4">
          <button onClick={() => props.setTrigger(false)} className="flex items-center justify-center bg-[#50B3C5] w-24 h-8 p-4 rounded-[0.15em]">
            Annuler
          </button>
          <button onClick={props.onButtonClick} className="flex items-center justify-center bg-[#C93227] w-24 h-8 p-4 rounded-[0.15em]">
            Supprimer
          </button>
        </div>
      </div>
      {props.children}
    </div>
  ) : "";
}

export default DeleteModerateurPopUp;
