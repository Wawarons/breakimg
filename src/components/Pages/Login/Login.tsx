import { useEffect, useState } from "react";
import login from "../../Utilities/api";
import style from "./Login.module.css";
import backgroundSide from "../../../assets/UI/Login/room_cinema.png";
import Profile from "../../../assets/UI/Hero/profil.svg?react";
import { Link,  useNavigate } from "react-router-dom";
import { useAuth } from "../../Utilities/AuthContext";
import type { ApiResponse, User } from "../../../type";

const Login = () => {

  const { setAuth } = useAuth();
  const [errors, setErrors] = useState<string>()
  const navigate = useNavigate();

  useEffect(() => {

  }, [errors])

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {

      const data: ApiResponse<User> | undefined = await login(e);
      if (data === undefined ) {
        throw new Error("Invalid credentials");
      }

      if (data.data) {
        const user = data.data;
        setAuth(user);
      }

      navigate("/");

    } catch(error: unknown) {
      console.error("Invalid credentials");
      setErrors("Invalid credentials");
    }
  }

  return (
    <section id={style.connexion}>
      <div
        id={style.sideLeft}
        style={{
          backgroundImage: `url(${backgroundSide})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>{" "}
      <div id={style.content}>
        <h1 id={ style.title }>Connexion</h1>
        <Profile id={ style.icon_profile } />

        <form id={ style.form } onSubmit={handleLogin}>
          <div className={style.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="jhondoe@domain.com"/>
          </div>
          <div className={style.form_container}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" placeholder="*********" />
            <Link to="" id={ style.reset_password }>mot de passe oublié</Link>
          </div>
          {errors && <p id={ style.errors }>{errors}</p>}

          <input id={ style.submit } type="submit" value="valider" />
        </form>

        <Link to="/register" id={ style.new_account }>Créer un compte</Link>
      </div>
    </section>
  );
};

export default Login;
