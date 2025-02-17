/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export let privateContext = createContext();

let PrivateRoot = ({ children }) => {
  let [auth, setAuth] = useState(false);
  let id = localStorage.getItem("id");
  useEffect(() => {
    if (id) {
      setAuth(true);
    }
  }, []);
  return (
    <privateContext.Provider value={{ auth }}>
      {children}
    </privateContext.Provider>
  );
};

export default PrivateRoot;

