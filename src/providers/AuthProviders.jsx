import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import React, { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser, signInUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
