import React, { useState, useEffect } from "react";
import "./MdetailsAr.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { routers } from "../../endpoints";
import bgtp1 from "../../assets/bgtp1.jpg";


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

  const backgroundImageStyle = {
    backgroundImage: `url(${bgtp1})`,
  };

  return (
    <div style={backgroundImageStyle} className='min-h-screen relative text-[#1E1E1E] font-["Inter"]'>
      <h1 className="text-4xl font-bold ml-80 mt-24">
        Rectifier Article
      </h1>
      <form onSubmit={handleSubmit}>
        <div className=" min-h-screen flex items-center ml-80 ">
          <div className=" font-semibold text-black text-left  ">
            <div className="input-container">
              <strong>Titre Article:</strong>
              <input
                className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"
                type="text"
                name="titre"
                value={formData.titre}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Mots clés:</strong>
              <input
                className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"
                type="text"
                name="motsCles"
                value={formData.motsCles}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Resumé:</strong>
              <input
                className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"
                type="text"
                name="resume"
                value={formData.resume}
                onChange={(e) => handleChange(e)}
                style={{ border: "1px solid gray", padding: "5px" }}
              />
            </div>

            <div className="input-container">
              <strong>Texte Integral:</strong>
              <textarea
                className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"
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
                      className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"
                      type="text"
                      name="full_name"
                      value={auteur.full_name}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                    <input
                      className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"

                      type="text"
                      name="email"
                      value={auteur.email}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                    <input
                      className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"

                      type="text"
                      name="institution_nom"
                      value={auteur.institution.nom}
                      onChange={(e) => handleChange(e, index, "auteurs")}
                      style={{ border: "1px solid gray", padding: "5px" }}
                    />
                    <input
                      className="w-full border-2 border-green rounded my-4 p-4 w-full text-green bg-dark-blue"

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
                    className="w-full border-2 border-green rounded p-4 w-full text-green bg-dark-blue"
                    type="text"
                    name="titre"
                    value={reference.titre}
                    onChange={(e) => handleChange(e, index, "references")}
                    style={{ border: "1px solid gray", padding: "5px" }}
                  />
                </div>
              ))}
            </div>

            <div className="buttons flex gap-5">
              <Link to={`${routers.MDETAILS}/${id}`}>
                <button className={`red-button flex items-center justify-center w-full h-8 p-8 rounded-[0.15em]`}>Annuler changements</button>
              </Link>

              <button
                className={`flex items-center justify-center bg-[#50B3C5] h-8 p-8 rounded-[0.15em] text-white`}
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
