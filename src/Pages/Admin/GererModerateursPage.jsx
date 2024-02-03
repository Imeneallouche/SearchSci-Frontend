import React, { useState, useEffect } from "react";
import axios from "axios";
import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import Moderateur from "../../Components/Moderateur";
import DeleteModerateurPopUp from "../../Components/DeleteModerateurPopUp";
import { useNavigate } from "react-router-dom";



function GererModerateursPage() {
  const navigate = useNavigate()

  const [selectedUserEmail, setSelectedUserEmail] = useState();
  const [btnPopup, setBtnPopup] = useState(false);


  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/afficher_moderateurs/')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);




  const handleDelete = async (mail) => {
    try {
      fetch(`http://127.0.0.1:8000/api/supprimer_moderateur/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: mail,
        }),
      });
      setBtnPopup(false);
      setData((prevData) => prevData.filter(user => user.email !== mail));
    } catch (error) {
      console.log("error" + error)
    }
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div
      className='flex flex-col font-["Inter"] text-[#1E1E1E] object-cover w-full h-full overflow-x-hidden'
      style={backgroundImageStyle}
    >
      <div className="flex justify-between items-center mt-6 mb-12 mx-10">
        <button>
          <img className="w-6" src={traits} alt="" />
        </button>
        <p className="font-semibold">
          <span className="text-[#FFBE00]">S</span>CI
          <span className="text-[#50B3C5]">EN</span>
          <span className="text-[#C93227]">S</span>PACE
        </p>
      </div>
      <div>
        <h1 className="font-bold text-4xl ml-36 mb-12 text-[#1E1E1E]">
          Gérer vos modérateurs
        </h1>
        <button onClick={() => navigate(`/AddModerator`)} className="bg-[#50B3C5] hover:bg-[#1E1E1E] text-[#FEFEFE] font-medium py-2 px-4 rounded-[0.15em] float-right mr-36 mb-12">
          Ajouter modérateur +
        </button>
      </div>
      <div className="clear-both flex justify-between items-center mx-36 font-semibold bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] mb-4 drop-shadow-md">
        <p>Nom</p>
        <p>Prénom</p>
        <p>Compte Email</p>
        <p>Action</p>
      </div>
      <div>
        {
          data.map((user, index) => {
            return ( //posts ==> data && post ==> user
              <Moderateur key={index}
                Nom={user.last_name}
                Prenom={user.first_name}
                compteEmail={user.email}
                onButtonClick={() => {
                  setSelectedUserEmail(user.email);
                  setBtnPopup(true);
                }}
              ></Moderateur>
            )
          })
        }
      </div>
      <DeleteModerateurPopUp
        onButtonClick={() => handleDelete(selectedUserEmail)}
        trigger={btnPopup}
        setTrigger={setBtnPopup}></DeleteModerateurPopUp>
    </div>
  );
}

export default GererModerateursPage;
