import React, { useState, useContext, createContext, useEffect } from "react";
import { DefaultTheme, Theme, Provider, DarkTheme } from "react-native-paper";

type PreferencesContextType = {
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesContextType>({
  toggleTheme: () => {},
});

const PreferencesProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [paperProviderTheme, setPaperProviderTheme] = useState<Theme>(
    DefaultTheme
  );

  const isDark = theme === "dark";

  useEffect(() => {
    if (isDark) {
      setPaperProviderTheme({
        ...DarkTheme,
        colors: { ...DarkTheme.colors, primary: "#1ba1f2", accent: "#ffc107" },
      });
    } else {
      setPaperProviderTheme({
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: "#1ba1f2",
          accent: "#ffc107",
        },
      });
    }
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const contextValue = {
    toggleTheme,
  };

  return (
    <Provider theme={paperProviderTheme}>
      <PreferencesContext.Provider value={contextValue} {...props} />
    </Provider>
  );
};

const usePreferences = () => useContext(PreferencesContext);
export { PreferencesProvider, usePreferences };
