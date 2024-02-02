import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

import luffy from './assets/luffy.png';
import snorlax from './assets/snorlax.png';
import stich from './assets/stich.png';
import cartman from './assets/cartman.webp';

export default function ImageComponent() {
  const characters = [
    { name: "Luffy", image: luffy },
    { name: "Snorlax", image: snorlax },
    { name: "Stich", image: stich },
    { name: "Cartman", image: cartman },
  ];

  return (
    <div className="fotos-container">
      {characters.map((character, index) => (
        <Link key={index} to="/Pprincipal" className="photo-link">
          <div className="photo-container">
            <img src={character.image} alt={character.name} className="photo-img" />

          </div>
          <p className="photo-name">{character.name}</p>
        </Link>
      ))}
    </div>
  );
}
