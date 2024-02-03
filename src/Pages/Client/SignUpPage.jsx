import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD

import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";

import axios from "axios";

import { endpoints, routers, BACKEND_URL } from "../../endpoints";
import { SingUpData } from "../../Data/Authentication";

import bgtp1 from "../../assets/bgtp1.jpg";
import logo from "../../assets/logo.png";

/*
=======
import bgtp1 from "../../assets/bgtp1.jpg";
import logo from "../../assets/logo.png";

>>>>>>> 477ed133d852385c09b5c5517082e7e774a5d5ac




<<<<<<< HEAD


*/

export default function SignUpPage() {
  const [fullNmae, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const history = useNavigate();
  const toast = useToast();

  /*









  */

  const handleRedirectionSignIn = () => {
    history(routers.SIGNIN);
  };

  /*









  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password || !fullNmae) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { response } = await axios.post(
        BACKEND_URL + endpoints.SIGNIN,
        {
          fullNmae,
          email,
          password,
        },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      /*


      
      
      DATA OF THE USER IN LOCAL STORAGE*/
      localStorage.setItem("userInfo", JSON.stringify(response));
      setLoading(false);
      history.push(routers.HOME);
    } catch (err) {
      toast({
        title: "Error Occured!",
        description: err.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  /*





  */
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
=======
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

>>>>>>> 477ed133d852385c09b5c5517082e7e774a5d5ac

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

<<<<<<< HEAD
  /*











  */

  return (
    <div
      style={backgroundImageStyle}
      className="w-full h-screen flex flex-col bg-dark-blue w-fit rounded-xl justify-center items-center content-center"
    >
      <div className="flex items-center my-5 gap-5">
        <h1 className="font-bold text-5xl text-black">{SingUpData.TITLE}</h1>
        <img className="h-10" src={logo} alt="logo" />
      </div>

      <p className="font-semi-bold text-black">{SingUpData.TEXT} </p>

      <form
        onSubmit={handleSubmit}
        className="gap-10 w-full flex flex-col py-10 px-80 justify-center items-center"
      >
        <input
          type="text"
          placeholder={`your ${SingUpData.INPUT_ONE} ...`}
          className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={fullNmae}
          onChange={(event) => setFullName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder={`your ${SingUpData.INPUT_TWO} ...`}
          className="border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={email}
          onChange={(event) => setemail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder={`your ${SingUpData.INPUT_THREE} ...`}
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
          {SingUpData.BUTTON}
        </Button>

        <div className="w-full flex justify-end gap-5">
          <p className="text-black">{SingUpData.QUESTION}</p>
          <button
            className="text-black hover:underline"
            onClick={handleRedirectionSignIn}
          >
            {SingUpData.LINK}
          </button>
        </div>
      </form>
=======


  return (
    <div
      style={backgroundImageStyle}
      className="text-[#1E1E1E] w-full h-screen flex flex-col bg-dark-blue w-fit rounded-xl justify-between items-center content-center"
    >
      <div className="py-12 px-20 flex w-full justify-between">
        <img className="h-4" src={logo} alt="logo" />
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="flex items-center my-5 gap-5">
          <h1 className="font-bold text-5xl text-black">
            BIENVENUE A SCIENSPACE
          </h1>
        </div>

        <p className="font-semi-bold text-black">Créez un compte pour plonger dans le monde de la littérature scientifique

        </p>

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
          <div className="w-full flex justify-end gap-2">
            <p className="text-black">Avez vous deja un compte?</p>
            <button
              className="text-black hover:underline"
              onClick={() => navigate("/SignIn")}
            >se connecter
            </button>
          </div>
        </form>
      </div>
>>>>>>> 477ed133d852385c09b5c5517082e7e774a5d5ac
    </div>
  );
}
