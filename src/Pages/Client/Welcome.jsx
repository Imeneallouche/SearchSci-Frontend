import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routers } from "../../endpoints";

import "./welcome.css";
import { SingUpData } from "../../Data/Authentication";
import bgtp1 from "../../assets/bgtp1.jpg";

import logo from "../../assets/logo.png";

function Welcome() {
  const history = useNavigate();

  const handleRedirectionSignIn = () => {
    history(routers.SIGNIN);
  };

  const handleRedirectionSignUp = () => {
    history(routers.SIGNUP);
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div
      style={backgroundImageStyle}
      className="w-full h-screen flex flex-col bg-dark-blue w-fit rounded-xl justify-center items-center content-center gap-20"
    >
      <div className="flex items-center my-5 gap-5">
        <h1 className="font-bold text-5xl text-black">{SingUpData.TITLE}</h1>
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="w-[40%]">
        <p className="text-black text-xl text-center">
          Welcome to science space, a collaborative project that empowers users
          to delve into the world of scientific literature with ease. Welcome to
          science space, collaborative project that empowers users to delve into
          the world of scientific literature with ease.
        </p>
      </div>

      <div className="flex gap-20">
        <button
          className={`w-48 blue-button`}
          onClick={handleRedirectionSignIn}
        >
          Login
        </button>
        <button
          className={`w-48 blue-button`}
          onClick={handleRedirectionSignUp}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Welcome;
