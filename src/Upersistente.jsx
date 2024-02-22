// Upersistente.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Upersistente.css";

function Upersistente() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Cargar los datos del formulario desde el almacenamiento local cuando el componente se monte
    const savedData = localStorage.getItem("upagoFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  return (
    <div>
      {formData && (
        <div >
          <Link to="/Pprincipal">
            <div className="persi_photo-container">
              {formData.profilePicture && (
                <img src={formData.profilePicture} alt="Foto de perfil" />
              )}
            </div>
          </Link>
          <p className="photo-name">{formData.username}</p>
        </div>
      )}
    </div>
  );
}

export default Upersistente;
