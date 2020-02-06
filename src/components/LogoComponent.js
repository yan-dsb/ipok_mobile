import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import TextComponent from "./TextComponent";

const LogoComponent = () => {
  return (
    <View>
      <Image
        source={require("../../assets/img/logoDark.jpg")}
        style={styles.logoIpok}
      />
      <TextComponent title="Saúde no seu tempo" style={styles.textLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIpok: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 220,
    height: 100
  },
  textLogo: {
    fontFamily: "Montserrat-Regular",
    textAlign: "center"
  }
});

export default LogoComponent;
