import React from 'react'
// import bgtp from "../assets/bgtp2.jpg"


function DeleteModerateurPopUp() {

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 h-72 drop-shadow-md p-6'>
                <p className='font-semibold'>Voulez-vous vraiment supprimer cet utilisateur ?</p>
                <p className='text-[0.9em] px-8'>Nom Utilisateur: Imene Louni</p>
                <p className='text-[0.9em] px-8'>Email: li_louni@esi.dz</p>
                <div className='flex items-center justify-center space-x-4 text-[0.8em] text-[#FEFEFE] font-medium w-full my-4'>
                    <button className='flex items-center justify-center bg-[#50B3C5] w-24 h-8 p-4 rounded-[0.15em]'>Annuler</button>
                    <button className='flex items-center justify-center bg-[#C93227] w-24 h-8 p-4 rounded-[0.15em]'>Supprimer</button>
                </div>

            </div>
        </div>

    );
}

export default DeleteModerateurPopUp;