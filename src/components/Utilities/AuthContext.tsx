import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import type { User } from '../../type';

type AuthContextType = {
  user: User | null;
  setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const AuthProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const setAuth = (authUser: User | null) => {
    setUser(authUser);
  };


  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          credentials: "include",
        });

        if (!response.ok) {
          console.log("Utilisateur déconnecté.")
          setUser(null);
          return;
        }

        const data = await response.json();
        setUser(data.data);

        console.log("Utilisateur connecté.")
      } catch {
        // Erreur réseau : ne pas conclure forcément
        // que la session est invalide.
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
export default AuthProvider;
