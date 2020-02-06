import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextComponent from "./TextComponent";

const ButtonComponent = ({ title, goTo, style, width }) => {
  return (
    <View>
      <TouchableOpacity onPress={goTo}>
        <AwesomeButton
          style={style}
          borderRadius={22}
          // progress
          // onPress={next => {
          //   next(goTo);
          // }}
          backgroundColor="#00c0e3"
          backgroundDarker="#00c0e3"
          backgroundShadow="#02497f"
          width={width}
          textSize={16}
        >
          <TextComponent style={styles.text} title={title} />
        </AwesomeButton>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    color: "white",
    alignSelf: "center"
  }
});

export default ButtonComponent;
