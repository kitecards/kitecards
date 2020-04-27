import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Surface,
  Title,
  Caption,
  TouchableRipple,
} from "react-native-paper";
import { RewardsCard } from "../common/interfaces";

type RewardsCardListItemProps = {
  rewardsCard: RewardsCard;
  onSelect: (rewardsCardId: string) => void
};

export const RewardsCardListItem: React.FC<RewardsCardListItemProps> = ({
  rewardsCard,
  onSelect
}) => {
  const {
    companyName,
    backgroundColor,
    textColor,
    companyLocation,
  } = rewardsCard;

  const styles = StyleSheet.create({
    cardContainer: {
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
      padding: 10,

    },
    topHeadingTitle: {
      flex: 0.7,
    },
    topHeadingCaption: {
      flex: 0.3,
      alignSelf: "flex-end",
    },
    touchRipple: {
      borderRadius: 10,
    },
    bottomContent: {
      backgroundColor: "#9D9D9D",
      height: 50,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    clickRewardsCaption: {
      color: "black",
      fontSize: 15
    },
  });

  return (
    <View>
      <Surface style={styles.cardContainer}>
        <TouchableRipple
          style={styles.touchRipple}
          onPress={() => onSelect(rewardsCard.id)}
        >
          <View style={styles.topHeading}>
            <Title style={styles.topHeadingTitle}>{companyName}</Title>
            <Caption style={styles.topHeadingCaption}>{companyLocation}</Caption>
          </View>
        </TouchableRipple>
        <View style={styles.bottomContent}>
          <Caption style={styles.clickRewardsCaption}>Select a rewards card</Caption>
        </View>
      </Surface>
    </View>
  );
};
