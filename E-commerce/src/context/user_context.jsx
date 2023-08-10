import { useEffect, createContext, useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../lib/firebase";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("myUser") || "{}")
      : null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        localStorage.setItem("myUser", JSON.stringify(data.user));
        setIsAuthenticated(true);
        console.log(data.user);
      })
      .catch((error) => {
        console.log(error);
        setMyUser(null);
        setIsAuthenticated(false);
      });
  };

  const logOut = () => {
    navigate("/");
    localStorage.removeItem("myUser");
  };

  useEffect(() => {
    /*  let unsubscribe
         // unsubscribe function
         return () => unsubscribe(); */
  }, []);

  return (
    <UserContext.Provider
      value={{ signInWithGoogle, myUser, logOut, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
