import bgtp1 from "../../assets/bgtp1.jpg";
import traits from "../../assets/traits.svg";
import Moderateur from "../../Components/Moderateur";

function GererModerateursPage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div
      className='font-["Inter"] text-[#1E1E1E] object-cover w-full h-full'
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
        <h1 className="font-semibold text-[2em] ml-36 mb-12 text-[#1E1E1E]">
          Gérer vos modérateurs
        </h1>
        <button className="text-[0.9em] bg-[#50B3C5] hover:bg-[#1E1E1E] text-[#FEFEFE] font-medium py-2 px-4 rounded-[0.15em] float-right mr-36 mb-12">
          Ajouter modérateur +
        </button>
      </div>
      <div className="clear-both flex justify-between items-center mx-36 text-[0.9em] font-semibold bg-white p-4 rounded-[0.2em] box-shadow-light border-y border-[#E4E2E2] mb-4 drop-shadow-md">
        <p>Nom Utilisateur</p>
        <p>Compte Email</p>
        <p>Action</p>
      </div>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
      <Moderateur
        nomUtilisateur="Arlene McCoy"
        compteEmail="ArleneMcCoy@esi.dz"
        Action="delete"
      ></Moderateur>
    </div>
  );
}

export default GererModerateursPage;
