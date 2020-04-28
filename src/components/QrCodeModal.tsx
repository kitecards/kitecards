import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Portal, Modal } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    borderRadius: 5,
    backgroundColor: "#ffff",
    padding: 20,
    alignSelf: 'center'
  },
});

type QrCodeModalProps = {
  rewardsCardId: string;
  companyLogo: string;
  isVisible: boolean;
  onDismiss: () => void;
};

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  rewardsCardId,
  companyLogo,
  isVisible,
  onDismiss,
}) => {
  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={onDismiss}>
        <View>
          <View style={styles.content}>
            <QRCode
              value={rewardsCardId}
              logoSize={50}
              size={200}
              logo={{ uri: companyLogo }}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};
