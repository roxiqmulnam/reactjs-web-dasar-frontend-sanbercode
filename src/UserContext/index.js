import Cookies from "js-cookie";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const currentUser = Cookies.get("user")
  const iniateUser = currentUser ? currentUser : null
  const [user, setUser] = useState(iniateUser);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};