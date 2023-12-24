import React from 'react'
import deletebtn from "../assets/delete.svg"
import editbtn from "../assets/edit.svg"


function Moderateur({ nomUtilisateur, compteEmail, Action }) {
    return (

        <div className='font-["Inter"] text-[#1E1E1E] mb-4'>
            <div className='clear-both flex justify-between items-center mx-36 text-[0.9em] font-regular bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] drop-shadow-md'>
                <p>{nomUtilisateur}</p>
                <p>{compteEmail}</p>
                <div className='flex space-x-4'>
                    <button><img src={deletebtn} alt="" /></button>
                    <button><img src={editbtn} alt="" /></button>
                </div>
            </div>
        </div>
    );
}

export default Moderateur;