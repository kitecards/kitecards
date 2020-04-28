import React from "react";
import { Text } from "react-native-paper";
import { AppLayout } from "../components/AppLayout";
import { Content } from "../components/Content";
import firebase from "firebase";

export const ProfileScreen: React.FC = () => {

  const logout = async () => {
    await firebase.auth().signOut();
  }

  return (
    <AppLayout>
      <Content>
        <Text onPress={logout}>Log Out</Text>
      </Content>
    </AppLayout>
  )
};
