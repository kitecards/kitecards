import React, { useState, useContext, createContext, useEffect } from "react";
import { DefaultTheme, Theme, Provider, DarkTheme } from "react-native-paper";

type StyleContextType = {
  toggleTheme: () => void;
};

const StyleContext = createContext<StyleContextType>({
  toggleTheme: () => {},
});

const StyleProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [paperProviderTheme, setPaperProviderTheme] = useState<Theme>(
    DefaultTheme
  );

  const isDark = theme === "dark";
  const primaryColor = "#e91e63";
  const accentColor = "#1EE9A4";

  useEffect(() => {
    if (isDark) {
      setPaperProviderTheme({
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          primary: primaryColor,
          accent: accentColor,
        },
      });
    } else {
      setPaperProviderTheme({
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: primaryColor,
          accent: accentColor,
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
      <StyleContext.Provider value={contextValue} {...props} />
    </Provider>
  );
};

const useStyle = () => useContext(StyleContext);
export { StyleProvider, useStyle };
