import React from "react";
import { StyleSheet, View, Image } from "react-native";

type CardStickProps = {
  imageUrl?: string;
};

export const CardSticker: React.FC<CardStickProps> = ({ imageUrl }) => {
  const styles = StyleSheet.create({
    container: {
      height: 40,
      width: 40,
      backgroundColor: "#9D9D9D",
      borderColor: "black",
      margin: 10,
      borderRadius: 5,
    },
    image: {
      height: 40,
      width: 40,
      borderRadius: 5,
    },
  });
  return (
    <View style={styles.container}>
      {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
    </View>
  );
};
