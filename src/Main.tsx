import React from "react";
import { RootNavigator } from "./RootNavigator";
import {useUser} from "./context/UserContext";

export const Main = () => {
  const { withUser } = useUser();

  if (!withUser) {
    return null;
  }

  return <RootNavigator />;
};
