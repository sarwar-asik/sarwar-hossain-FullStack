import React, { createContext, useEffect, useReducer, useState } from "react";
import app from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { initialState, projectsReducer} from "../SharedComponents/states/redux/ReducerMessage";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

// const savedtheme =localStorage.getItem("theme")

  const[theme,setTheme] = useState(false)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const logout = () => {
    const isLogout = window.confirm("Log Out ?");
    if (isLogout) {
      return signOut(auth)
        .then(() => {toast('Logout')})
        .catch((e) => console.log(e));
    }
  };

  const [state,dispatch] = useReducer(projectsReducer,initialState)


  const authInfo = {name: ' zinku ' , user, createUser, login, logout,theme,setTheme };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
