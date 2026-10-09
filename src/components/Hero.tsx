import { useState } from "react";
import "../App.css";
import Button from "./UI/Button/Button.tsx";
import SideBarProfile from "./UI/Sidebar/Profile/SideBarProfile.tsx";
import ProfilSvg from "../assets/UI/Hero/profil.svg?react";

const Hero = () => {
  const [sideBar, setSideBar] = useState(false);
  const sideLinks = [
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  const handleProfile = () => {
    setSideBar(!sideBar);
  };

  return (
    <div id="hero-container">
      <div id="filter-hero-bg"></div>

      {sideBar ? (
        <SideBarProfile links={sideLinks} />
      ) : (
        <ProfilSvg id="profile" onClick={handleProfile} />
      )}
      <section id="hero-content">
        <h1 id="hero-title">BREAKIMG</h1>
        <h2 id="hero-subtitle">Une image. Un indice. À toi de deviner.</h2>
        <div id="hero-links">
          <Button
            id="button_cinema"
            text="Cinéma"
            link="#"
            borderColor="#140F0F"
            backgroundColor="#F9E400"
          />
          <Button
            id="button_serie"
            link="#"
            text="Série"
            borderColor="#005F61"
            backgroundColor="#00BFC2"
          />

          <Button
            id="button_jeux-video"
            link="#"
            text="Jeux-Vidéo"
            borderColor="#006B3A"
            backgroundColor="#00C96B"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
