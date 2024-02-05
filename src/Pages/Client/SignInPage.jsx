import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { SignInData } from "../../Data/Authentication";
import bgtp1 from "../../assets/bgtp1.jpg";
import logo from "../../assets/logo.png";
import { endpoints, routers, BACKEND_URL } from "../../endpoints";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const history = useNavigate();

  const handleRedirectionSignUp = () => {
    history(routers.SIGNUP);
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = 'http://localhost:8000/api/token/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then((response) => {
      setLoading(false);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      console.log(data);
  
      // Fetch additional user information
      fetch('http://127.0.0.1:8000/api/redirect/',
       {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.access,
        },
      }
      )
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData.user);
        if (userData.user === 'administrateur') {
          navigate('/GererModerator');
        } else if (userData.user === 'Moderateur') {
          navigate('/ListeArticles');
        } else if (userData.user === 'utilisateur') {
          navigate('/Recherche');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
    .catch((error) => {
      setLoading(false);
      console.error('Error:', error);
    });
  };
  

  const buttonStyles = {
    backgroundColor: "#50B3C5",
    padding: "1.5rem",
    margin: "1rem 0",
    borderRadius: "0.75rem",
    width: "100%",
    color: "white",
    transition: "background-color 0.3s ease",
    _hover: {
      backgroundColor: "#1EADA5",
    },
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div style={backgroundImageStyle} className="text-[#1E1E1E] h-screen">
      <div className="py-12 px-20 flex w-full justify-between overflow-x-hidden">
        <img className="h-4" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center gap-5 pt-12">
        <img className="h-10" src={logo} alt="logo" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-10 py-10 px-80 justify-center items-center"
      >
        <input
          type="text"
          placeholder={`your ${SignInData.INPUT_ONE} ...`}
          className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder={`your ${SignInData.INPUT_TWO} ...`}
          className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <Button
          type="submit"
          isLoading={loading}
          className="bg-green p-5 my-4 rounded-xl w-full hover:bg-blue"
          style={buttonStyles} 
        >
          {SignInData.BUTTON}
        </Button>

        <div className="flex gap-2">
          <p>{SignInData.QUESTION}</p>
          <button className="hover:underline" onClick={handleRedirectionSignUp}>
            {SignInData.LINK}
          </button>
        </div>
      </form>
    </div>
  );
}

