import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth.email, password);
  };

  const allValues = {
    createUser,
  };

  return (
    <AuthContext.Provider value={allValues}>
      {children}
      <h3></h3>
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;
