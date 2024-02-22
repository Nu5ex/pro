import React from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import Users from "./users";
import Pprincipal from "./Pprincipal";
import Upago from "./Upago";
import Pfinal from "./Pfinal";
import Upersistente from "./Upersistente";

const CLogin = () => {
  const [type, setType] = React.useState("signIn");
  const location = useLocation();

  const handleOnClick = (text) => {
    setType(text);
  };

  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "left-panel-active");

  return (
    <div className="testAlex">
      {(() => {
        if (location.pathname === "/users") {
          return (
            <Routes>
              <Route path="/users" element={<Users />} />
              <Route path="/*" element={<Navigate to="/users" replace />} />
            </Routes>
          );
        }
        if (location.pathname === "/Pprincipal") {
            return (
              <Routes>
                <Route path="/Pprincipal" element={<Pprincipal />} />
                <Route path="/*" element={<Navigate to="/Pprincipal" replace />} />
              </Routes>
            );
        }
        if (location.pathname === "/Upago") {
          return (
            <Routes>
              <Route path="/Upago" element={<Upago />} />
              <Route path="/*" element={<Navigate to="/Upago" replace />} />
            </Routes>
          );
        }
        if (location.pathname === "/Pfinal") {
          return (
            <Routes>
              <Route path="/Pfinal"element={<Pfinal />} />
              <Route path="/*" element={<Navigate to="/Pfinal" replace />} />
            </Routes>
          );
        }
        if (location.pathname === "/Upersistente") {
          return (
            <Routes>
              <Route path="/Upersistente"element={<Upersistente />} />
              <Route path="/*" element={<Navigate to="/Upersistente" replace />} />
            </Routes>
          );
        }
        return (
          <div className={containerClass} id="container">
            <Routes>
              <Route path="/signIn" element={<SignInForm />} />
              <Route path="/signUp" element={<SignUpForm />} />
              <Route path="/users" element={<Users />} /> 
              <Route path="/Pprincipal" element={<Pprincipal />} />
              <Route path="/Upago" element={<Upago />} />
              <Route path="/Upersistente" element={<Upersistente />} />
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
        );
      })()}
    </div>
  );
};

export default CLogin;
