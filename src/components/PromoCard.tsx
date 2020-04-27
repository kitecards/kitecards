import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Surface, Title, Subheading, Caption, Avatar } from "react-native-paper";

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    height: 120,
    width: "100%",
    elevation: 4,
    borderRadius: 10,
    alignContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  textContainer: {
    flex: 0.7
  },
  imageContainer: {
    flex: 0.3,
    alignItems: "flex-end"
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 5
  }
});

type PromoCardProps = {
  promoId: string;
  storeName: string;
  storeLogo: string;
  tagLine: string;
  description: string;
  location: string;
};

export const PromoCard: React.FC<PromoCardProps> = ({
  storeName,
  tagLine,
  location,
  storeLogo,
}) => {
  return (
    <Surface style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Title>{storeName}</Title>
        <Subheading>{tagLine}</Subheading>
        <Caption>{location}</Caption>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: storeLogo}} />
      </View>
    </Surface>
  );
};
