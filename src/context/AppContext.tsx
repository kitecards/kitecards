import React from "react";
import { UserProvider } from "./UserContext";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {PreferencesProvider} from "./PreferencesContext";

const AppProviders: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider>
      <PreferencesProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </PreferencesProvider>
    </SafeAreaProvider>
  );
};

export { AppProviders }
