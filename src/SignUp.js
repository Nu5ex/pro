// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';  // Make sure to import auth from firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUpForm() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState((prevState) => ({
      ...prevState,
      [evt.target.name]: value
    }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;

    try {
      // Use auth to register the user
      await createUserWithEmailAndPassword(auth, email, password);

      alert(
        `You are signed up with name: ${name}, email: ${email}, and password: ${password}`
      );

      // Clear the form
      setState({
        name: "",
        email: "",
        password: ""
      });

      // Navigate to the route '/Upago'
      navigate("/Upago");
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
