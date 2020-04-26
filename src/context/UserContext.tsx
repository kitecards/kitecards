import React, { useContext, createContext, useState, useEffect } from "react";
import { User } from "../common/interfaces";

type UserContextType = {
  user: User
  withUser: boolean
}

const UserContext = createContext<UserContextType>({
  user: {
    id: "",
    name: "",
    email: "",
    imageUrl: "",
  },
  withUser: false
});

const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<User>({
    id: "123",
    name: "Julian",
    email: "julian@example.com",
    imageUrl: "",
  });

  const [withUser, setWithUser] = useState<boolean>(false);

  useEffect(() => {
    if (user.id.length) {
      setWithUser(true);
    } else {
      setWithUser(false);
    }
  }, [user])

  const contextValue = {
    user,
    withUser
  }

  return <UserContext.Provider value={contextValue} {...props} />;
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
