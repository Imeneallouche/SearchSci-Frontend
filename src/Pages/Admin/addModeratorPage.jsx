import React, { useState } from "react";

import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";

import axios from "axios";

import { endpoints, BACKEND_URL } from "../../endpoints";

import { addModeratorData } from "../../Data/Admin";

import bgtp1 from "../../assets/bgtp1.jpg";
import previous from "../../assets/previous.png";
import logo from "../../assets/logo.png";

/*






*/

export default function AddModeratorPage() {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  /*









  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password || !username) {
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
      const { response } = await axios.post(BACKEND_URL + endpoints.SIGNIN, {
        username,
        email,
        password,
      });

      toast({
        title: "Successful Creation of Moderator",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
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
      className="w-full h-screen flex flex-col bg-dark-blue w-fit rounded-xl justify-between items-center content-center"
    >
      <div className="py-12 px-80 flex w-full justify-between">
        <img className="w-8 hover:cursor" src={previous} alt="previous" />
        <img className="h-5" src={logo} alt="logo" />
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="flex items-center my-5 gap-5">
          <h1 className="font-bold text-5xl text-black">
            {addModeratorData.TITLE}
          </h1>
          <img className="h-10" src={logo} alt="logo" />
        </div>

        <p className="font-semi-bold text-black">{addModeratorData.TEXT} </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-10 py-10 px-80 justify-center items-center"
        >
          <input
            type="text"
            placeholder={`your ${addModeratorData.INPUT_ONE} ...`}
            className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <input
            type="text"
            placeholder={`your ${addModeratorData.INPUT_TWO} ...`}
            className="w-full border-2 border-green rounded-xl my-4 p-4 w-full text-green bg-dark-blue"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder={`your ${addModeratorData.INPUT_THREE} ...`}
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
            {addModeratorData.BUTTON}
          </Button>
        </form>
      </div>
    </div>
  );
}
