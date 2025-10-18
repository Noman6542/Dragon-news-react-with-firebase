import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const authData = {
    user,
    setUser,
    creatUser,
    logout,
    login
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
