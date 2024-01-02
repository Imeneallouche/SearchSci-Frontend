import React from "react";

function UploadArticlePopUp() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 drop-shadow-md p-6'>
                <p className="font-semibold text-[1.2em]">
                    Entrer le URL des articles
                </p>
                <input
                    type="text"
                    placeholder="Saisir votre URL..."
                    className="w-full border-2 border-green rounded-[0.5em] my-4 px-4 w-full text-green bg-dark-blue"
                    required
                />
                <div className="flex items-center justify-center space-x-4 text-[#FEFEFE] font-regular w-full my-4">
                    <button className="flex items-center justify-center bg-[#6C757D] rounded-[0.15em] px-4 w-auto">
                        Annuler
                    </button>
                    <button className="flex items-center justify-center bg-[#50B3C5] rounded-[0.15em] px-4 w-auto">
                        Lancer Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadArticlePopUp;
