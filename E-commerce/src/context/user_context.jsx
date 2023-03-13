import { useEffect, createContext, useContext, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../lib/firebase'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [myUser, setMyUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app, provider);


    useEffect(() => {


    })

    return (
        <UserContext.Provider value={{ signInWithPopup }}>
            {children}
        </UserContext.Provider >
    );
};

export const useUserContext = () => useContext(UserContext);
