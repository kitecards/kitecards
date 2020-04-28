import React from "react";
import { AppProviders } from "./src/context/AppContext";
import { Main } from "./src/Main";
import { firebaseConfig } from "./src/config";

import firebase from "firebase";
firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <AppProviders>
      <Main />
    </AppProviders>
  );
}
