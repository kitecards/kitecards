import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Surface,
  Title,
  Subheading,
  Caption,
  TouchableRipple,
} from "react-native-paper";
import { RewardsCard } from "../common/interfaces";

type RewardsCardListItemProps = {
  rewardsCard: RewardsCard;
};

export const RewardsCardListItem: React.FC<RewardsCardListItemProps> = ({
  rewardsCard,
}) => {
  const {
    companyName,
    backgroundColor,
    textColor,
    companyLocation,
    promoTitle
  } = rewardsCard;
  const styles = StyleSheet.create({
    cardContainer: {
      padding: 10,
      height: 120,
      width: "100%",
      elevation: 4,
      borderRadius: 10,
      alignContent: "space-between",
      marginBottom: 20,
      backgroundColor,
      color: textColor,
    },
    topHeading: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "space-between",
      marginBottom: 10,
    },
    topHeadingTitle: {
      flex: 0.7,
    },
    topHeadingCaption: {
      flex: 0.3,
      alignSelf: "flex-end",
    },
  });
  return (
    <Surface style={styles.cardContainer}>
      <TouchableRipple
        onPress={() => console.log("Pressed")}
      >
        <View>
          <View style={styles.topHeading}>
            <Title style={styles.topHeadingTitle}>{companyName}</Title>
            <Caption style={styles.topHeadingCaption}>{companyLocation}</Caption>
          </View>
          <Subheading>{promoTitle}</Subheading>
        </View>
      </TouchableRipple>
    </Surface>
  );
};
