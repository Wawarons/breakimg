import { useNavigate } from "react-router-dom";
import { logout } from "./api";
import { useAuth } from "./AuthContext";

const Logout = () => {

  const { user, setAuth } = useAuth();
  const navigate = useNavigate();

  const disconnectUser = async () => {
    const response = await logout();

    if (response?.ok || !user ) {
      setAuth(null);
      navigate("/");
    }

  }

  disconnectUser();

  return (<></>)

}

export default Logout;
