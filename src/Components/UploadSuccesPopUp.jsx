import React from "react";
import Succes from "../assets/succes.svg"

function UploadSuccesPopUp() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 drop-shadow-md p-6 flex flex-col justify-center items-center'>
                <p className="font-semibold text-[1.2em] my-8">
                    10 articles ont été rajoutés avec succes!
                </p>
                <img src={Succes} alt="" className="w-1/4 mb-8" />
            </div>
        </div>
    );
}

export default UploadSuccesPopUp;
