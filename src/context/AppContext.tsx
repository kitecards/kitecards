import React from "react";
import { UserProvider } from "./UserContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleProvider } from "./StyleContext";

const AppProviders: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StyleProvider>
        <UserProvider>{children}</UserProvider>
      </StyleProvider>
    </SafeAreaProvider>
  );
};

export { AppProviders };
