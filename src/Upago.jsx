import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Upago.css"; // Importa el archivo CSS

function Upago() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [redirectToPersistente, setRedirectToPersistente] = useState(false);

  useEffect(() => {
    // Cargar los datos del formulario desde el almacenamiento local cuando el componente se monte
    const savedData = localStorage.getItem("upagoFormData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      setSelectedOption(formData.selectedOption);
      setUsername(formData.username);
      setProfilePicture(formData.profilePicture);
    }
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    // Guardar la URL de la imagen
    const imageURL = URL.createObjectURL(file);
    setProfilePicture(imageURL);
  };

  const handleSubmit = () => {
    // Guardar los datos del formulario en el almacenamiento local
    const formData = {
      selectedOption,
      username,
      profilePicture // Guardar la URL de la imagen en lugar del archivo
    };
    localStorage.setItem("upagoFormData", JSON.stringify(formData));

    // Redireccionar a Upersistente.jsx
    setRedirectToPersistente(true);
  };

  if (redirectToPersistente) {
    return <Navigate to="/Upersistente" />;
  }

  return (
    <div className="upago_container">
      <h1>Payment Selection</h1>

      <section className="upago_payment">
        <h2>Choose your payment option:</h2>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="free"
            checked={selectedOption === "free"}
            onChange={() => handleOptionChange("free")}
          />
          Free
        </label>

        <label>
          <input
            type="radio"
            name="paymentOption"
            value="4.99"
            checked={selectedOption === "4.99"}
            onChange={() => handleOptionChange("4.99")}
          />
          4,99 euros
        </label>
      </section>

      <section className="upago_user">
        <h2>Create your user:</h2>
        <label>
        Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </section>

      <section className="upago_profile">
        <h2>Choose your profile photo:</h2>
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </label>
      </section>

      <section className="upago_submit">
        <button onClick={handleSubmit}>Send</button>
      </section>

      <section className="upago_link">
        <Link to="/">Return to main page</Link>
      </section>
    </div>
  );
}

export default Upago;
