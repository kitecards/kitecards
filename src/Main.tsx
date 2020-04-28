import React, {useEffect} from "react";
import { RootNavigator } from "./RootNavigator";
import { useUser } from "./context/UserContext";
import {LoginScreen} from "./screens/LoginScreen";
import firebase from "firebase";


export const Main = () => {
  const { setUser, setToken, user, token } = useUser();

  const onAuthStateChange = (setUserCallback: any, setTokenCallback: any) => {
    return firebase.auth().onAuthStateChanged(async (firebaseUser?: firebase.User | null) => {
      if (firebaseUser) {
        const token = await firebase.auth().currentUser!.getIdToken();
        console.log(token);

        setUserCallback(firebaseUser);
        setTokenCallback(token);
      } else {
        setUser(null);
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser, setToken);
    return () => {
      unsubscribe();
    };
  }, []);

  if (user && token.length) {
    return <RootNavigator />;
  }

  return <LoginScreen />;

};
