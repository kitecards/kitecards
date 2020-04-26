import React from "react";
import { AppProviders } from "./src/context/AppContext";
import { Main } from "./src/Main";

export default function App() {
  return (
    <AppProviders>
      <Main />
    </AppProviders>
  );
}
