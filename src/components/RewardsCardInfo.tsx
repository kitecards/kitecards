import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Surface, Title, Subheading, Menu, Caption } from "react-native-paper";
import { RewardsCard } from "../common/interfaces";
import { Octicons } from "@expo/vector-icons";
import { CardStickerSet } from "./CardStickerSet";
import { QrCodeModal } from "./QrCodeModal";

type RewardsCardInfoProps = {
  rewardsCard: RewardsCard;
  onClose: () => void;
};

export const RewardsCardInfo: React.FC<RewardsCardInfoProps> = ({
  rewardsCard,
  onClose,
}) => {
  const {
    companyName,
    backgroundColor,
    textColor,
    acquiredCount,
    totalCount,
    promoTitle,
    companyLogo,
    companyLocation,
    id,
  } = rewardsCard;

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const styles = StyleSheet.create({
    cardContainer: {
      padding: 10,
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
    },
    topHeadingLeft: {
      flex: 1,
    },
    topHeadingRight: {
      flex: 1,
      alignItems: "flex-end",
      paddingRight: 5,
    },
    stickersSetContatiner: {
      marginTop: 20,
    },
    bottomChevronUpContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setIsMenuOpen(false);
  };

  return (
    <View>
      <Surface style={styles.cardContainer}>
        <QrCodeModal
          rewardsCardId={id}
          isVisible={isModalVisible}
          companyLogo={companyLogo}
          onDismiss={toggleModal}
        />
        <View>
          <View style={styles.topHeading}>
            <View style={styles.topHeadingLeft}>
              <Title>{companyName}</Title>
            </View>
            <View style={styles.topHeadingRight}>
              <Menu
                visible={isMenuOpen}
                onDismiss={toggleMenu}
                anchor={
                  <Octicons
                    onPress={toggleMenu}
                    name="kebab-horizontal"
                    size={40}
                    color={textColor}
                  />
                }
              >
                {acquiredCount !== totalCount ? (
                  <>
                    <Menu.Item onPress={toggleModal} title="Open QR Code" />
                    <Menu.Item onPress={() => {}} title="Delete Card" />
                  </>
                ) : (
                  <>
                    <Menu.Item onPress={() => {}} title="Redeem!" />
                  </>
                )}
              </Menu>
            </View>
          </View>
          <View>
            <Subheading>{promoTitle}</Subheading>
          </View>
          <View style={styles.stickersSetContatiner}>
            <CardStickerSet
              imageUrl={companyLogo}
              acquiredCount={acquiredCount}
              totalCount={totalCount}
            />
          </View>
          <View style={styles.bottomChevronUpContainer}>
            <Caption>{companyLocation}</Caption>
            <MaterialCommunityIcons
              onPress={onClose}
              name="chevron-up"
              size={40}
              color={textColor}
            />
          </View>
        </View>
      </Surface>
    </View>
  );
};
