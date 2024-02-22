import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import "./styles.css";
import CLogin from "./CLogin"; // Importa el componente CLogin
import LOGOPROYECTO2 from './assets/LOGOPROYECTO2.png';

function App() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    setType(text);
  };

  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "left-panel-active");

  return (
    <Router>
      <div className="App">
        <div className="fotooo">
          <img src={LOGOPROYECTO2} className='img1' alt="Logo"/>
        </div>
        {/* Usa el componente CLogin aquí */}
        <CLogin />
      </div>
    </Router>
  );
}

export default App;
