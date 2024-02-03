import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";

import axios from "axios";

import { endpoints, routers, BACKEND_URL } from "../../endpoints";
import { SignInData } from "../../Data/Authentication";

import bgtp1 from "../../assets/bgtp1.jpg";
import logo from "../../assets/logo.png";

/*






*/

export default function SignInPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const history = useNavigate();
  const toast = useToast();

  /*









  */

  const handleRedirectionSignUp = () => {
    history(routers.SIGNUP);
  };

  /*









  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password) {
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
<<<<<<< HEAD
      history.push(routers.CHAT);
=======
>>>>>>> 477ed133d852385c09b5c5517082e7e774a5d5ac
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

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  /*











  */

  return (
    <div
      style={backgroundImageStyle}
      className="w-full h-screen flex flex-col bg-dark-blue w-fit rounded-xl justify-center items-center content-center"
    >
      <div className="flex items-center my-5 gap-5">
        <h1 className="font-bold text-5xl text-black">{SignInData.TITLE}</h1>
        <img className="h-10" src={logo} alt="logo" />
      </div>

      <p className="font-semi-bold text-black">{SignInData.TEXT} </p>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-10 py-10 px-80 justify-center items-center"
      >
        <input
          type="text"
          placeholder={`your ${SignInData.INPUT_ONE} ...`}
          className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
          value={email}
          onChange={(event) => setemail(event.target.value)}
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

        <div className="w-full flex justify-end gap-5">
          <p className="text-black">{SignInData.QUESTION}</p>
          <button
            className="text-black hover:underline"
            onClick={handleRedirectionSignUp}
          >
            {SignInData.LINK}
          </button>
        </div>
      </form>
    </div>
  );
}
