import React, { useState } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import logo from "../../assets/logo.png";
import upload from "../../assets/upload.svg";
import SideBarAdmin from "../../Components/SideBarAdmin";
import { Link } from "react-router-dom";
import { routers } from "../../endpoints";
import UploadArticlePopUp from "../../Components/UploadArticlePopUp";

function UploadArticle() {
  const [sideBar, setSideBar] = useState(true);
  const [btnPopup, setBtnPopup] = useState(false);

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div
      style={backgroundImageStyle}
      className='flex flex-col font-["Inter"] text-[#1E1E1E] object-cover w-full h-full'
    >
      <SideBarAdmin trigger={sideBar} setTrigger={setSideBar}></SideBarAdmin>

      <div className="flex justify-between items-center mt-6 mb-12 mx-10">
        <button>
          <img className="w-6" src={traits} alt="" />
        </button>
        <img className="h-5" src={logo} alt="logo" />
      </div>

      <div className="mt-60">
        <h1
          className={`
                ${sideBar ? "mx-60" : "mx-28"}
                text-bold font-bold text-4xl mx-28 mt-60`}
        >
          Upload Articles
        </h1>
        <p
          className={`
                ${sideBar ? "mx-60" : "mx-28"}
                leading-10 mx-28 mb-12`}
        >
          A travers cette page, l’administrateur peut lancer une opération
          d’Upload des articles scientifiques à partir d’une adresse URL
          contenant un ensemble d’articles en format PDF, ces articles peuvent
          être en une colonne ou deux colonnes maximum.
        </p>
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => {
              setBtnPopup(true);
            }}
            className="flex items-center justify-content gap-4 bg-[#50B3C5] hover:bg-[#1E1E1E] text-[#FEFEFE] font-medium py-4 px-6 rounded-[0.15em]"
          >
            Opération Upload
          </button>
        </div>
      </div>
      <UploadArticlePopUp
        trigger={btnPopup}
        setTrigger={setBtnPopup}
      ></UploadArticlePopUp>
    </div>
  );
}

export default UploadArticle;
