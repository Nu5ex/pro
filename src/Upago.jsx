// Upago.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Upago.css"; // Importa el archivo CSS
import users from "./users"

function Upago() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = () => {
    // Aquí puedes realizar las acciones correspondientes al formulario,
    // como enviar datos al servidor, mostrar mensajes, etc.

    console.log("Opción seleccionada:", selectedOption);
    console.log("Nombre de usuario:", username);
    console.log("Foto de perfil:", profilePicture);

    // Puedes enviar esta información al servidor o realizar otras operaciones aquí.
  };

  return (
    <div className="upago_container">
      <h1>Selección de Pago</h1>

      <section className="upago_payment">
        <h2>Elige tu opción de pago:</h2>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="free"
            checked={selectedOption === "free"}
            onChange={() => handleOptionChange("free")}
          />
          Gratis
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
        <h2>Crea tu usuario:</h2>
        <label>
          Nombre de usuario:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </section>

      <section className="upago_profile">
        <h2>Elige tu foto de perfil:</h2>
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </label>
      </section>

      <section className="upago_submit" href="users">
        <button onClick={handleSubmit}>Enviar</button>
      </section>

      <section className="upago_link">
        <Link to="/">Volver a la página principal</Link>
      </section>
    </div>
  );
}

export default Upago;
