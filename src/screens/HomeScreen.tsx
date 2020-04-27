import React, { useState, useEffect } from "react";
import { AppLayout } from "../components/AppLayout";
import { Content } from "../components/Content";
import { RewardsCard } from "../common/interfaces";
import { RewardsCardList } from "../components/RewardsCardList";
import { Animated, View } from "react-native";
import { fetchRewardsCards } from "../actions/rewardsCards";
import { RewardsCardInfo } from "../components/RewardsCardInfo";

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

  return (
    <AppLayout>
      <Content>
        <View>
        {selectedRewardsCard && (
          <RewardsCardInfo rewardsCard={selectedRewardsCard} onClose={rewardsCardOnCloseHandler}/>
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
