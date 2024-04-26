import React, { useContext } from "react";
import { AuthContext } from "../Pages/FirebaseProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
