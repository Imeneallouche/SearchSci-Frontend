// import React, { useState } from "react";
// import './MdetailsAr.css' ;
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function RectifierArc() {

//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isDeleteClicked, setIsDeleteClicked] = useState(false);
//   const [isEditClicked, setIsEditClicked] = useState(false);

//   const toggleFavorite = () => {
//     setIsFavorite(!isFavorite);
//   };

//   const handleDeleteClick = () => {
//     setIsDeleteClicked(!isDeleteClicked);
//   };

//   const handleEditClick = () => {
//     setIsEditClicked(!isEditClicked);
//   };

//   const { id } = useParams();
//   const [rectifierArc, setRectifierArc] = useState([]);
//   const [references, setReferences] = useState([]);
//   const [auteurs, setAuteurs] = useState([]);

//   useEffect(() => {
//     const url = `http://127.0.0.1:8000/api/articles/${id}/`;
//     console.log('testing');
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Data received:",data.Article);
//         console.log("refernces:",data.Article.references);

//         setRectifierArc(data.Article);
//         setReferences(data.Article.references);
//         setAuteurs(data.Article.auteurs);

//       });
//   }, [id]); // Empty dependency array to run the effect only once on mount

//   return (
//     <div className="min-h-screen relative ">
//       <h1 className="text-4xl font-bold text-black absolute md:top-40 text-center md:right-30 mt-20">
//        Rectifier Article
//       </h1>
//       <div className="  relative">
//         <a href={rectifierArc && rectifierArc.urlPdf} className="text-blue-500 absolute md:top-60 md:right-30 ml-80 ">
//           [VIEW PDF]
//         </a>
//       </div>
//       <span onClick={toggleFavorite} className="cursor-pointer ml-2 absolute top-0 right-0 mt-8 mr-8">
//         {isFavorite ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-yellow-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 14l9-5-9-5-9 5 9 5z"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 14l9-5-9-5-9 5 9 5z"
//             />
//           </svg>
//         )}
//       </span>
//       <div className=" min-h-screen flex items-center ml-80 ">
//         <div className=" font-semibold text-black text-left  ">

//           <div className="input-container">
//             <strong>Titre Article:</strong>
//             <input className="input-large" type="text" value={rectifierArc && rectifierArc.titre}/>
//           </div>

//           <div className="input-container">
//   <strong>Auteurs:</strong>
//   {auteurs
//     ? auteurs.map((auteur, index) => (
//         <div key={index}>
//           <input
//             className="input-large"
//             type="text"
//             value={`${"\u2022"} ${auteur.full_name}, ${auteur.email}, ${auteur.institution.nom}, ${auteur.institution.adress}`}

//           />
//         </div>
//       ))
//     : null}
// </div>

//          <div className="input-container">
//             <strong>Mots cle:</strong>
//             <input className="input-large" type="text" value={rectifierArc && rectifierArc.motsCles} />
//           </div>

//           <div className="input-container">
//             <strong>Resume:</strong>
//             <input className="input-large" type="text" value={rectifierArc && rectifierArc.resume} />
//           </div>

//           <div className="input-container">
//             <strong>Texte Integral:</strong>
//             <input className="input-large" type="text" value={rectifierArc && rectifierArc.texteIntegral} />
//           </div>

//           <div className="input-container">
//             <strong>Réference:</strong>

//              {references
//     ? references.map((reference, index) => (
//         <div key={index}>
//           <input
//             className="input-large"
//             type="text"
//             value={`${"\u2022"} ${reference.titre}`}

//           />
//         </div>
//       ))
//     : null}
//           </div>

//           <div className="buttons">
//             <button
//                className={`red-button ${isDeleteClicked ? "gray-bg" : ""}`}
//               onClick={handleDeleteClick}
//             >
//               Annuler changements
//             </button>
//             <button
//               className={`blue-button ${isEditClicked ? "gray-bg" : ""}`}
//               onClick={handleEditClick}
//             >
//               Valider changements
//             </button>
//           </div>

//           {/* Ajoutez le reste du texte avec le formatage approprié */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RectifierArc;

import React, { useState, useEffect } from "react";
import "./MdetailsAr.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { routers } from "../../endpoints";

function RectifierArc() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titre: "",
    motsCles: "",
    resume: "",
    texteIntegral: "",
    auteurs: [],
    references: [],
  });

  const { id } = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/articles/${id}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data.Article);
      });
  }, [id]);

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === "auteurs") {
      const updatedAuteurs = [...formData.auteurs];
      updatedAuteurs[index][name] = value;
      setFormData({ ...formData, auteurs: updatedAuteurs });
    } else if (type === "references") {
      const updatedReferences = [...formData.references];
      updatedReferences[index][name] = value;
      setFormData({ ...formData, references: updatedReferences });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      Article: {
        id: id,
        titre: formData.titre,
        resume: formData.resume,
        texteIntegral: formData.texteIntegral,
        motsCles: formData.motsCles,
        references: formData.references,
        auteurs: formData.auteurs.map((auteur) => ({
          full_name: auteur.full_name,
          email: auteur.email,
          institution: {
            nom: auteur.institution_nom,
            adress: auteur.institution_adress,
          },
        })),
        traiter: false, // Assuming this is a default value
      },
    };

    // Send the updated article data to the backend API
    fetch("http://127.0.0.1:8000/api/Rectifier_Article/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Article updated successfully:", data);
        navigate("/ListeArticles/");
        // Handle success or redirect if needed
      })
      .catch((error) => {
        console.error("Error updating article:", error.message);
        // Handle error
      });
  };

  return (
    <div className="min-h-screen relative">
      <h1 className="text-4xl font-bold text-black absolute md:top-40 text-center md:right-30 mt-20">
        Rectifier Article
      </h1>
      <form onSubmit={handleSubmit}>
        <div className=" min-h-screen flex items-center ml-80 ">
          <div className=" font-semibold text-black text-left  ">
            <div className="input-container">
              <strong>Titre Article:</strong>
              <input
                className="input-large"
                type="text"
                name="titre"
                value={formData.titre}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Mots cle:</strong>
              <input
                className="input-large"
                type="text"
                name="motsCles"
                value={formData.motsCles}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Resume:</strong>
              <input
                className="input-large"
                type="text"
                name="resume"
                value={formData.resume}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Texte Integral:</strong>
              <input
                className="input-large"
                type="text"
                name="texteIntegral"
                value={formData.texteIntegral}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Auteurs:</strong>
              {formData.auteurs.map((auteur, index) => (
                <>
                  <div key={index}>
                    <input
                      className="input-large"
                      type="text"
                      name="full_name"
                      value={auteur.full_name}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                    <input
                      className="input-large"
                      type="text"
                      name="email"
                      value={auteur.email}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                    <input
                      className="input-large"
                      type="text"
                      name="institution_nom"
                      value={auteur.institution.nom}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                    <input
                      className="input-large"
                      type="text"
                      name="institution_adress"
                      value={auteur.institution.adress}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                  </div>
                  <br></br>
                </>
              ))}
            </div>

            <div className="input-container">
              <strong>Références:</strong>
              {formData.references.map((reference, index) => (
                <div key={index}>
                  <input
                    className="input-large"
                    type="text"
                    name="titre"
                    value={reference.titre}
                    onChange={(e) => handleChange(e, index, "references")}
                    style={{ border: "1px solid gray", padding: "5px" }}
                  />
                </div>
              ))}
            </div>

            <div className="buttons">
              <Link to={`${routers.MDETAILS}/${id}`}>
                <button className={`red-button`}>Annuler changements</button>
              </Link>

              <button
                className={`blue-button`}
                type="submit"
                onClick={handleSubmit}
              >
                Valider changements
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RectifierArc;
