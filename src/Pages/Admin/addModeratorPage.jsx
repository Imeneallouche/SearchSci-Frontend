import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgtp1 from "../../assets/bgtp1.jpg";
import previous from "../../assets/previous.png";
import logo from "../../assets/logo.png";

export default function AddModeratorPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("http://127.0.0.1:8000/api/ajouter_moderateur/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem('access'),
        },
        body: JSON.stringify(user),
      });
      navigate("/GererModerator");
    } catch (error) {
      console.log("error" + error);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div
      style={backgroundImageStyle}
      className="text-[#1E1E1E] w-full h-screen"
    >
      <div className="py-12 px-20 flex w-full justify-between">
        <Link to="/GererModerator">
          <img className="w-8 hover:cursor" src={previous} alt="previous" />
        </Link>
        <img className="h-4" src={logo} alt="logo" />
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="flex items-center my-5 gap-5">
          <h1 className="font-semibold text-5xl">Ajouter un modérateur</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-10 py-10 px-80 justify-center items-center"
        >
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="email"
            className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />

          <button className="text-white text-[1.2em] font-medium flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em]">
            Creer modérateur
          </button>
        </form>
      </div>
    </div>
  );
}
