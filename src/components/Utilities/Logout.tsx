import { useNavigate } from "react-router-dom";
import { logout } from "./api";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

const Logout = () => {

  const { user, setAuth } = useAuth();
  const navigate = useNavigate();



  useEffect(() => {
    const disconnectUser = async () => {
      try {
        const response = await logout();

        if (response?.ok || !user) {
          console.log("response ok");
        } else {
          console.log("response not ok");
        }
          setAuth(null);
          navigate("/");
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
      }
    };

    disconnectUser();
  }, [user, setAuth, navigate]);

  return (<p>Déconnexion en cours...</p>)

}

export default Logout;
