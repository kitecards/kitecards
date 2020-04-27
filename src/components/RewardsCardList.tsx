import React from "react";
import { View } from "react-native";
import { RewardsCard } from "../common/interfaces";
import {RewardsCardListItem} from "./RewardsCardListItem";


type RewardsCardList = {
  rewardsCards: RewardsCard[];
};

export const RewardsCardList: React.FC<RewardsCardList> = ({ rewardsCards }) => {
  return (
    <View>
      {rewardsCards.map((rewardsCard, index) => {
        const topVal = index * 50;

        return (
          <View style={{top: topVal, width: "100%", position: "absolute"}}>
            <RewardsCardListItem rewardsCard={rewardsCard} />
          </View>
        )
      })}
    </View>
  );
};
