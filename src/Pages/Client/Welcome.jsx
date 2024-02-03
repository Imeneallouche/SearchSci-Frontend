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
      className="w-full h-screen flex flex-col bg-dark-blue w-fit rounded-xl justify-center items-center content-center gap-16"
    >
      <div className="flex justify-center items-center my-5 gap-3">
        <h1 className="font-bold text-5xl text-black">{SingUpData.TITLE}</h1>
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="w-[80%] flex justify-center items-center ">
        <p className="text-black text-xl leading-10">
          Welcome to science space, a collaborative project that empowers users
          to delve into the world of scientific literature with ease. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
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
