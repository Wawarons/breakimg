import style from "./Register.module.css";
import backgroundSide from "../../../assets/UI/Login/room_cinema.png";
import Profile from "../../../assets/UI/Hero/profil.svg?react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../../Utilities/api";

const Register = () => {
  const [errors] = useState<string>();

  const handleRegister = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(e);
  };

  return (
    <section id={style.register}>
      <div
        id={style.sideLeft}
        style={{
          backgroundImage: `url(${backgroundSide})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>{" "}
      <div id={style.content}>
        <h1 id={style.title}>Inscription</h1>
        <Profile id={style.icon_profile} />

        <form id={style.form} onSubmit={handleRegister}>
          <div className={style.form_container}>
            <label htmlFor="username">Pseudo</label>
            <input type="text" name="username" placeholder="Redrum" required/>
          </div>
          <div className={style.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="jhondoe@domain.com" required/>
          </div>
          <div className={style.form_container}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" placeholder="*********" required/>
          </div>
          <div className={style.form_container}>
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input type="password" name="confirm-password" placeholder="*********" required/>
          </div>
          {errors && <p id={style.errors}>{errors}</p>}

          <input id={style.submit} type="submit" value="valider" />
        </form>

        <Link to="/login" id={style.already_account}>
          Déjà un compte
        </Link>
      </div>
    </section>
  );
};

export default Register;
