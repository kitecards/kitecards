import React, { useContext, createContext, useState, useEffect } from "react";

type UserContextType = {
  user: firebase.User | null
  setUser: (firebaseUser: firebase.User | null) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {}
});

const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<firebase.User | null>(null)

  const contextValue = {
    user,
    setUser
  }

  return <UserContext.Provider value={contextValue} {...props} />;
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
