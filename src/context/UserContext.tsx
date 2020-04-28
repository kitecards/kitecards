import React, { useContext, createContext, useState, useEffect } from "react";

type UserContextType = {
  user: firebase.User | null
  token: string
  setUser: (firebaseUser: firebase.User | null) => void
  setToken: (token: string) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  token: "",
  setUser: () => {},
  setToken: () => {},
});

const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [token, setToken] = useState<string>("")

  const contextValue = {
    user,
    setUser,
    token,
    setToken,
  }

  return <UserContext.Provider value={contextValue} {...props} />;
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
