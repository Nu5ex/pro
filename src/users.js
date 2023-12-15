import React from "react";
import "./users.css";
import LOGOPROYECTO2 from './assets/LOGOPROYECTO2.png';
import luffy from './assets/luffy.png';
import snorlax from './assets/snorlax.png';
import stich from './assets/stich.png';
import cartman from './assets/cartman.webp';

export default function ImageComponent() {
  return (
    <div className="fotos">
      <img src={LOGOPROYECTO2} alt="Logo"/>
      <img src={luffy} alt="Luffy"/>
      <img src={snorlax} alt="Snorlax"/>
      <img src={stich} alt="Stich"/>
      <img src={cartman} alt="Cartman"/>
    </div>
  );
}
