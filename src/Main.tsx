import React, {useEffect} from "react";
import { RootNavigator } from "./RootNavigator";
import { useUser } from "./context/UserContext";
import {LoginScreen} from "./screens/LoginScreen";
import firebase from "firebase";

export const Main = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (firebaseUser?: firebase.User | null) => {
      if (firebaseUser) {
        const token = await firebase.auth().currentUser!.getIdToken();
        console.log(token);

        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (!user) {
    return <LoginScreen />;
  }

  return <RootNavigator />;
};
