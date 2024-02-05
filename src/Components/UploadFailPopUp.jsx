import React from "react";
import Fail from "../assets/fail.svg"

function UploadFailPopUp() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='leading-[3.5em] font-["Inter"] text-[#1E1E1E] bg-[#FEFEFE] w-1/3 drop-shadow-md p-6 flex flex-col justify-center items-center'>
                <p className="font-semibold text-[1.2em] my-8 text-center">
                    <span className="text-[#E20B0B]">Une erreur est survenue</span> 
                </p>
                <img src={Fail} alt="" className="w-1/4 mb-8" />
            </div>
        </div>
    );
}

export default UploadFailPopUp;
