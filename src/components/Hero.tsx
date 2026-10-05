import "../App.css";
import Button from "./UI/Button/Button.tsx";
import ProfilSvg from "../assets/UI/Hero/profil.svg?react";

const Hero = () => {
  return (
    <div id="hero-container">
      <div id="filter-hero-bg"></div>
      <ProfilSvg id="profile" />
      <section id="hero-content">
        <h1 id="hero-title">BREAKIMG</h1>
        <h2 id="hero-subtitle">Une image. Un indice. À toi de deviner.</h2>
        <div id="hero-links">
          <Button id="button_cinema" text="Cinéma" link="#" />
          <Button
            id="button_serie"
            link="#"
            text="Série"
            borderColor="#007375"
            backgroundColor="#00D9DB"
            color="#004647"
          />
          <Button
            id="button_jeux-video"
            link="#"
            text="Jeux-Vidéo"
            borderColor="#00753F"
            backgroundColor="#00DB75"
            color="#004726"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
