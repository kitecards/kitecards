import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export const Content: React.FC = ({ children }) => {
  return <View style={styles.content}>{children}</View>;
};
