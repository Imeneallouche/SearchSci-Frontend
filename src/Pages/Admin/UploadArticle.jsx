import React, { useState } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import logo from "../../assets/logo.png";
import upload from "../../assets/upload.svg"


function UploadArticle() {

    const backgroundImageStyle = {
        backgroundImage: `url(${bgtp1})`,
    };

    return (
        <div
            className='flex flex-col font-["Inter"] text-[#1E1E1E] object-cover w-full h-full'
            style={backgroundImageStyle}
        >
            <div className="flex justify-between items-center mt-6 mb-12 mx-10">
                <button>
                    <img className="w-6" src={traits} alt="" />
                </button>
                <img className="h-5" src={logo} alt="logo" />
            </div>

            <div className="mt-16">
                <h1 className="text-bold font-bold text-4xl mx-28 my-12">
                    Upload Articles
                </h1>
                <p className="leading-10 mx-28 mb-12">
                    A travers cette page, l’administrateur peut lancer une opération d’Upload des articles scientifiques à partir d’une adresse
                    URL contenant un ensemble d’articles en format PDF, ces articles peuvent être en une colonne ou deux colonnes maximum.
                </p>
                <div className="w-full flex items-center justify-center">
                    <button className="flex items-center justify-content gap-4 bg-[#50B3C5] hover:bg-[#1E1E1E] text-[#FEFEFE] font-medium py-4 px-6 rounded-[0.15em]" >
                        Opération Upload
                        <img src={upload} alt="" className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadArticle;