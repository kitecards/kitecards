import React from "react";
import { Text } from "react-native-paper";
import { AppLayout } from "../components/AppLayout";
import { Content } from "../components/Content";

export const HomeScreen: React.FC = () => {
  return (
    <AppLayout>
      <Content>
        <Text>Home</Text>
      </Content>
    </AppLayout>
  );
};
