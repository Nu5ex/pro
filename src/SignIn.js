import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./styles.css";

// Configura la conexión a Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDP4jnap8pC5IQTw3axyu0aBE_2w4MShZQ",
  authDomain: "playflicks-eb99a.firebaseapp.com",
  projectId: "playflicks-eb99a",
  storageBucket: "playflicks-eb99a.appspot.com",
  messagingSenderId: "994543420293",
  appId: "1:994543420293:web:c67733f344fd675a7a3aec",
  measurementId: "G-PH9KR64W2M"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignInForm = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    try {
      // Autenticar al usuario con Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Usuario autenticado correctamente
      const user = userCredential.user;

      alert(`You are logged in with email: ${user.email}`);

      // Clear input fields
      setState({
        email: "",
        password: ""
      });

      // Marcar al usuario como autenticado
      setAuthenticated(true);

      // Navigate to /users
      navigate("/users");
    } catch (error) {
      // Manejar errores de autenticación
      alert("Invalid email or password. Please try again.");
      console.error(error);
    }
  };

  // Si el usuario ya está autenticado, redirige a /users
  if (authenticated) {
    navigate("/users");
    return null; // No renderizar el formulario si ya estamos redirigiendo
  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        
        <button className="ghost" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
