import React from "react";
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
      className="text-[#1E1E1E] h-screen w-full flex items-center justify-center flex-col"
    >
      <div className="flex justify-center items-center gap-2 mb-8">
        <h1 className="font-bold text-[3.5em]">{SingUpData.TITLE} </h1>
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="w-[80%] flex mb-8 mx-auto">
        <p className="text-[1.2em]">
          Welcome to science space, a collaborative project that empowers users
          to delve into the world of scientific literature with ease. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis, unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt,
          explicabo inventore veritatis et quasi architecto beatae vitae dicta sunt,
          explicabo veritatis et quasi architecto beatae vitae dicta.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4 text-[1.2em] text-[#FEFEFE] w-full my-4 w-[70%]">
        <button
          onClick={handleRedirectionSignIn}
          className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] w-[50%]"
        >
          Login
        </button>
        <button
          onClick={handleRedirectionSignUp}
          className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em] w-[50%]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Welcome;
