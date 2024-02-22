import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonComponent() {
  const navigate = useNavigate();

  const goToClogin = () => {
    navigate('/Clogin'); // Usa la ruta definida para CLogin
  };

  //mas breve:
  //const goToClogin = () => navigate('/clogin');

  return (
    <div>
      <button onClick={goToClogin}>Botón 1</button>
      <button onClick={goToClogin}>Botón 2</button>
    </div>
  );
}

export default ButtonComponent;

