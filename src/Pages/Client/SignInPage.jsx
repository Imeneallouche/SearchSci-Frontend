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
      history.push(routers.CHAT);
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

        <div className="flex gap-2">
          <p>{SignInData.QUESTION}</p>
          <button className="hover:underline" onClick={handleRedirectionSignUp}>{SignInData.LINK}</button>
        </div>
      </form>
    </div>
  );
}
//onClick={handleRedirectionSignUp}