import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Surface, Title, Subheading, Caption } from "react-native-paper";
import {Promo} from "../common/interfaces";

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
  promo: Promo
};

export const PromoCard: React.FC<PromoCardProps> = ({ promo }) => {
  const { companyName, title, location, companyLogo } = promo;

  return (
    <Surface style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Title>{companyName}</Title>
        <Subheading>{title}</Subheading>
        <Caption>{location}</Caption>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: companyLogo}} />
      </View>
    </Surface>
  );
};
