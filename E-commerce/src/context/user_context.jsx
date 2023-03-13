import { useEffect, createContext, useContext, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../lib/firebase'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [myUser, setMyUser] = useState(JSON.parse(localStorage.getItem('myUser')));
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setIsAuthenticated(true);
                localStorage.setItem('myUser', JSON.stringify(data.user));
                console.log(data.user);
            })
            .catch((error) => {
                console.log(error);
                setMyUser(null);
                setIsAuthenticated(false);
            })
    }

    useEffect(() => {
        /*  let unsubscribe
         // unsubscribe function
         return () => unsubscribe(); */
    }, []);

    return (
        <UserContext.Provider value={{ signInWithGoogle }}>
            {children}
        </UserContext.Provider >
    );
};

export const useUserContext = () => useContext(UserContext);
