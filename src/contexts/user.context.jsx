import { createContext, useState, useEffect, useReducer } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// As the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const useReducer = (state, action) =>{
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }

  return {
    currentUser: payload,
  }

}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const value = {currentUser, setCurrentUser};

  useEffect(() =>{
    const unsubscribe = onAuthStateChangedListener((user) =>{
      console.log(user);
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  },[])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
