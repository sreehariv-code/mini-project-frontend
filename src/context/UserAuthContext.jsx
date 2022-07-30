import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";
import { auth } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    uid: "",
  });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState();
  //Create user (Registration)
  const createUser = async (userName, email, password) => {
    const Signeduser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(Signeduser);
    //create an obj with email,username,Signeduser.ui
    //
    const docRef = await addDoc(collection(db, "users"), {
      name: userName,
      email,
      uid: Signeduser.user.uid,
    });
    console.log(docRef);
  };
  //Signout
  const logout = async () => {
    await signOut(auth);
    setUser({
      name: "",
      email: "",
      uid: null,
    });
  };

  //Login User (Login Page)
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const getUser = async (uid) => {
    console.log("called ", uid);
    const queue = query(collection(db, "users"), where("uid", "==", uid));

    const querySnapshot = await getDocs(queue);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setUser((prevState) => {
        const newState = {
          ...prevState,
          name: doc.data().name,
          email: doc.data().email,
        };
        return newState;
      });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser((prevState) => {
          // console.table(prevState);
          const newState = {
            ...prevState,
            uid: currentUser.uid,
          };
          return newState;
        });
        getUser(currentUser.uid);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signIn, logout, createUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
