import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import Users from "./users";
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
        <img src={LOGOPROYECTO2} className='img1' alt="Logo"/>
        <div className={containerClass} id="container">
          <Routes>
            <Route path="/signIn" element={<SignInForm />} />
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Navigate to="/signIn" replace />} />
          </Routes>
          <div className="overlay-container">
            <div className="overlay">
              <div className={`overlay-panel overlay-left ${type === "signUp" ? "hidden" : ""}`}>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start the journey with us</p>
                <Link to="/signIn">
                  <button className="ghost" onClick={() => handleOnClick("signIn")}>
                    Sign In
                  </button>
                </Link>
              </div>
              <div className={`overlay-panel overlay-right ${type === "signIn" ? "hidden" : ""}`}>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us, please log in with your personal info</p>
                <Link to="/signUp">
                  <button className="ghost" onClick={() => handleOnClick("signUp")}>
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
