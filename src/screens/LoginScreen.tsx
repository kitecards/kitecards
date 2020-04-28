import React, { useState } from "react";
import { View } from "react-native";
import { Button, Snackbar, Text } from "react-native-paper";
import * as Facebook from "expo-facebook";
import firebase from "firebase";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const LoginScreen = () => {
  const { appId, appName } = Constants.manifest.extra.facebook;
  const [error, setError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  Facebook.initializeAsync(appId, appName);

  const signInWithFacebook = async () => {
    setIsLoggingIn(true);
    try {
      await signInWithOAuthCredential(await getFirebaseOAuthCredential());
    } catch (e) {
      setError(e.message);
    }
    setIsLoggingIn(false);
  };

  const signInWithOAuthCredential = async (
    credential: firebase.auth.OAuthCredential
  ) => {
    await firebase.auth().signInWithCredential(credential);
  };

  const getFirebaseOAuthCredential = async (): Promise<firebase.auth.OAuthCredential> => {
    const options = {
      permissions: ["public_profile", "email"]
    };
    // @ts-ignore
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      options
    );

    if (type === "success") {
      return firebase.auth.FacebookAuthProvider.credential(token);
    } else {
      throw new Error("Failed");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        icon={() => (
          <MaterialCommunityIcons name="facebook" color="white" size={20} />
        )}
        mode="contained"
        onPress={signInWithFacebook}
        contentStyle={{ height: 50 }}
        style={{ bottom: -200, backgroundColor: "#4267B2" }}
        loading={isLoggingIn}
        disabled={isLoggingIn}
      >
        <Text style={{ color: "white" }}>Sign In With Facebook</Text>
      </Button>

      <Snackbar visible={!!error.length} onDismiss={() => setError("")}>
        {error}
      </Snackbar>
    </View>
  );
};
