import React, { useState, useEffect } from "react";
import bgtp1 from "../../assets/bgtp1.jpg";
import previous from "../../assets/previous.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateModeratorPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/afficher_moderateur/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("http://127.0.0.1:8000/api/modifier_moderateur/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
    <div style={backgroundImageStyle} className="text-[#1E1E1E]">
      <div className="py-12 px-20 flex w-full justify-between">
        <Link to="/GererModerator">
          <img className="w-8 hover:cursor" src={previous} alt="previous" />
        </Link>
        <img className="h-4" src={logo} alt="logo" />
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-5xl font-semibold">Modifier mon modérateur</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 py-10 px-80 justify-center items-center"
        >
          <input
            type="text"
            className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            required
            placeholder="First Name"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />

          <input
            type="text"
            className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            required
            placeholder="Last Name"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          />
          <input
            type="email"
            className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            required
            placeholder="email"
            value={user.email}
            readonly
          />
          <div className="flex items-center justify-center space-x-4 text-[1.2em] text-[#FEFEFE] w-full my-4">
            <button className="flex items-center justify-center bg-[#50B3C5] w-full h-8 p-8 rounded-[0.15em]">
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateModeratorPage;
