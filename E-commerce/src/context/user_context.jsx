import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../lib/firebase'
const provider = new GoogleAuthProvider();

import { useEffect, createContext, useContext, useState } from 'react'

const UserContext = createContext();

export const UserProvider = ({ children }) => {




    return (
        <UserContext.Provider value={{ signInWithPopup }}>
            {children}
        </UserContext.Provider >
    )

}

export const useUserContext = () => useContext(UserContext);
