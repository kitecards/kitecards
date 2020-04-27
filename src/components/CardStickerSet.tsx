import React from "react";
import { StyleSheet, View } from "react-native";
import { times } from "lodash";
import { CardSticker } from "./CardSticker";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

type CardStickerSetProps = {
  imageUrl: string;
  acquiredCount: number;
  totalCount: number;
};

export const CardStickerSet: React.FC<CardStickerSetProps> = ({
  imageUrl,
  acquiredCount,
  totalCount,
}) => {
  const stickers: React.ReactElement[] = [];
  times(totalCount, (idx) => {
    if (idx <= acquiredCount) {
      stickers.push(<CardSticker key={idx} imageUrl={imageUrl} />);
    } else {
      stickers.push(<CardSticker key={idx} imageUrl={undefined} />);
    }
  });

  return <View style={styles.container}>{stickers}</View>;
};
