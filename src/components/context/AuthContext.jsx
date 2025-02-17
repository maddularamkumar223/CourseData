import axios from "axios";
import { createContext} from "react";

export let userContextApi = createContext();

// eslint-disable-next-line react/prop-types
let UserContextProvider = ({ children }) => {
  let createUser = async (payload) => {
    await axios.post("http://localhost:3000/users", payload);
  };
  let singleUser = async (userName, password) => {
    let { data } = await axios.get("http://localhost:3000/users");
    let userData = data.find((value) => value.username == userName);

    if (userData) {
      if (userData.username == userName) {
        if (userData.password == password) {
          console.log("Login successful");
          localStorage.setItem("id", userData.id);
        } else {
          console.log("Invalid password");
        }
      }
    } else {
      console.log("User not found");
    }
  };
  return (
    <userContextApi.Provider value={{ createUser, singleUser}}>
      {children}
    </userContextApi.Provider>
  );
};

export default UserContextProvider;
