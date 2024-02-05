import uploadbtn from "../assets/upload.svg";
import gererusersbtn from "../assets/gererusers.svg";
import traits from "../assets/traits.svg";
import logout from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";

function SideBar(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    // Navigate to the login page
    navigate("/");
  };

  return props.trigger ? (
    <div className='absolute flex flex-col justify-between text-[0.9em] font-["Inter"] text-[#1E1E1E] text-[0.9em] font-medium top-0 left-0 h-screen bg-grey w-[12em] py-8 px-6'>
      <button onClick={() => props.setTrigger((curr) => !curr)}>
        <img className="w-6" src={traits} alt="" />
      </button>
      <div className="flex flex-col space-y-12 ">
        <a
          onClick={() => navigate("/UploadArticle")}
          className="flex items-center space-x-4"
          href="#"
        >
          <img src={uploadbtn} alt="" />
          <p>Upload</p>
        </a>
        <a
          onClick={() => navigate("/GererModerator")}
          className="flex items-center space-x-3"
          href="#"
        >
          <img src={gererusersbtn} alt="" />
          <p>Gestion</p>
        </a>
      </div>

      <button className="flex space-x-2"   onClick={handleLogout}>
        <img src={logout} alt="" />
        <p>déconnecter</p>
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default SideBar;
