import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { StatusBar } from "react-native";

export const AppLayout: React.FC = ({ children }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingBottom: 0
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      {children}
    </SafeAreaView>
  );
};
