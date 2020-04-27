import React from "react";
import { StyleSheet, View } from "react-native";

type QrCodeModalProps = {
  value: string,
  companyLogo: string
}

export const QrCodeModal: React.FC = ({  }) => {
  return <View style={styles.content}>{children}</View>;
};
