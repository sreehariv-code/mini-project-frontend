import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";
import { auth } from "../firebase";

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //Create user (Registration)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Signout
  const logout = () => {
    return signOut(auth);
  };

  //Login User (Login Page)
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [setUser]);

  return (
    <UserContext.Provider value={{ signIn, logout, createUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
