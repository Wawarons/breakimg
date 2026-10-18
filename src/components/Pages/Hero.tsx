import { useEffect, useState } from "react";
import "../../App.css";
import Button from "../UI/Button/Button";
import SideBarProfile from "../UI/Sidebar/Profile/SideBarProfile";
import ProfilSvg from "../../assets/UI/Hero/profil.svg?react";
import type { Rooms, SideLinks } from "../../type";
import RoomsContainer from "../UI/Rooms/RoomsContainer";
import PopupRoom from "../UI/Rooms/Popup/Popup";
import { useAuth } from "../Utilities/AuthContext";

const Hero = () => {
  const [sideBar, setSideBar] = useState(false);
  const [sideLinks, setSideLinks] = useState<SideLinks[]>([]);
  const { user } = useAuth();
  const dataRoom = useState<Rooms>({
    list: [
      {
        id: 1,
        name: "Vapule's Room",
        maxPlayer: 4,
        activePlayer: 1,
        isPrivate: true,
      },
      {
        id: 2,
        name: "Vapule's Room",
        maxPlayer: 4,
        activePlayer: 2,
        isPrivate: false,
      },
    ],
    total: 1,
    actualPage: 1,
    maxPage: 1,
  });

  const handleProfile = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    if (user) {
      setSideLinks([
        {
          name: "Profile",
          link: "/profile"
        },
        {
          name: "Politiques de confidentialité",
          link: "/politiques-de-confidentialite",
        },
        {
          name: "C.G.U",
          link: "/CGU",
        },
        {
          name: "Déconnexion",
          link: "/logout"
        }
      ]);
    } else {
      setSideLinks([{
        name: "Connexion",
        link: "/login"
      },
      {
        name: "Politiques de confidentialité",
        link: "/politiques-de-confidentialite",
      },
      {
        name: "C.G.U",
        link: "/CGU",
      }])
    }
  }, [])

  return (
    <main id="hero-container">
      <div id="filter-hero-bg"></div>

      {sideBar ? (
        <SideBarProfile key={ sideLinks.length}  links={sideLinks} closeFunction={handleProfile} />
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
            borderColor="#140F0F"
            backgroundColor="#00BFC2"
          />

          <Button
            id="button_jeux-video"
            link="#"
            text="Jeux-Vidéo"
            borderColor="#140F0F"
            backgroundColor="#00C96B"
          />
        </div>
      </section>
      <section id="rooms">
        <PopupRoom />
        <div id="roomsContainer">
          <RoomsContainer id="movie" title="Cinéma" rooms={dataRoom} />
          <RoomsContainer id="serie" title="Série" rooms={dataRoom} />
          <RoomsContainer id="video-game" title="Jeux-Vidéo" rooms={dataRoom} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
