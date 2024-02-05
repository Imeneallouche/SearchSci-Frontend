import { useState } from "react";
import acceuilbtn from "../assets/acceuil.svg";
import uploadbtn from "../assets/upload.svg";
import gererusersbtn from "../assets/gererusers.svg";
import traits from "../assets/traits.svg";
import logout from "../assets/logout.svg";

function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    // Navigate to the login page
    navigate("/");
  };

  return (
    <div className='flex flex-col justify-between text-[0.9em] font-["Inter"] text-[#1E1E1E] text-[0.9em] font-medium fixed top-0 left-0 h-screen bg-grey w-[12em] py-8 px-6'>
      <button onClick={() => setExpanded((curr) => !curr)}>
        <img className="w-6" src={traits} alt="" />
      </button>
      <div className="flex flex-col space-y-12 ">
        <a className="flex items-center space-x-3" href="#">
          <img src={acceuilbtn} alt="" />
          <p>Acceuil</p>
        </a>
        <a className="flex items-center space-x-4" href="#">
          <img src={uploadbtn} alt="" />
          <p>Upload</p>
        </a>
        <a className="flex items-center space-x-3" href="#">
          <img src={gererusersbtn} alt="" />
          <p>Gérer users</p>
        </a>
      </div>

      <button className="flex space-x-4" onClick={handleLogout} >
        <img src={logout} alt="" />
        <p>déconnecter</p>

      </button>
    </div>
  );
}

export default SideBar;
