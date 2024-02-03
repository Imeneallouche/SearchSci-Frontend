import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgtp1 from "../../assets/bgtp1.jpg";
import logo from "../../assets/logo.png";





export default function AddModeratorPage() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      fetch('http://127.0.0.1:8000/api/register_utilisateur/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      navigate("/SignIn")
    } catch (error) {
      console.log("error" + error)
    }
  }


  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };



  return (
    <div
      style={backgroundImageStyle}
      className="text-[#1E1E1E] h-screen"
    >
      <div className="py-12 px-20 flex w-full justify-between overflow-x-hidden">
        <img className="h-4" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center gap-5 pt-12">
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}
        className="w-full flex flex-col gap-10 py-10 px-80 justify-center items-center"
      >
        <input
          type="text"
          placeholder='First Name'
          className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={user.first_name}
          onChange={e => setUser({ ...user, first_name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder='Last Name'
          className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={user.last_name}
          onChange={e => setUser({ ...user, last_name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder='email'
          className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
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
          Creer mon compte
        </button>
        <div className="flex gap-2">
          <p>Avez vous deja un compte ?</p>
          <button className="hover:underline" onClick={() => navigate("/SignIn")}>se connecter</button>
        </div>
      </form>
    </div>
  );
}
