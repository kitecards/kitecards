import React, { useState, useEffect } from "react";
import { AppLayout } from "../components/AppLayout";
import { Content } from "../components/Content";
import { RewardsCard } from "../common/interfaces";
import { RewardsCardList } from "../components/RewardsCardList";
import { View, Image } from "react-native";
import { fetchRewardsCards } from "../actions/rewardsCards";
import { RewardsCardInfo } from "../components/RewardsCardInfo";
import {Banner} from "react-native-paper";

export const HomeScreen: React.FC = () => {
  const [rewardsCards, setRewardsCards] = useState<RewardsCard[]>([]);
  const [selectedRewardsCard, setSelectedRewardsCard] = useState<
    RewardsCard | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      try {
        setRewardsCards(await fetchRewardsCards());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const rewardsCardOnSelectHandler = (rewardsCardId: string) => {
    const rewardsCard = rewardsCards.find(
      (rewardsCard) => rewardsCard.id === rewardsCardId
    );
    if (rewardsCard) {
      setSelectedRewardsCard(rewardsCard);
    }
  };

  const rewardsCardOnCloseHandler = () => {
    setSelectedRewardsCard(undefined);
  };

  const rewardsCardOnDeleteHandler = () => {
    console.log("fire a delete request here against selected rewards card");
    setSelectedRewardsCard(undefined)
  };

  return (
    <AppLayout>
      <Content>
        <View>
          {selectedRewardsCard && (
            <RewardsCardInfo
              rewardsCard={selectedRewardsCard}
              onClose={rewardsCardOnCloseHandler}
              onDelete={rewardsCardOnDeleteHandler}
            />
          )}
        </View>
        <View>
          <RewardsCardList
            rewardsCards={rewardsCards}
            onSelect={rewardsCardOnSelectHandler}
          />
        </View>
      </Content>
    </AppLayout>
  );
};
