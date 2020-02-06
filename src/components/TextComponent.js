import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const TextComponent = ({ title, style, onPress }) => {
  const [loading, setLoading] = useState(false);
  async function fonts() {
    await Font.loadAsync({
      "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf")
    }).then(() => {
      setLoading(true);
    });
  }
  useEffect(() => {
    fonts();
  }, []);
  if (!loading) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={style} onPress={onPress}>
          {title}
        </Text>
      </View>
    );
  }
};

export default TextComponent;
