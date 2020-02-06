import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";

const TypeAppointment = ({ navigation }) => {
  function specialitiesList() {
    navigation.navigate("SpecialitiesList");
  }
  return (
    <View style={styles.container}>
      <TextComponent style={styles.textAttendance} title="Consultas" />
      <ButtonComponent
        title="Consultas Acessíveis"
        style={styles.button}
        width={340}
      />
      <TextComponent
        style={styles.text}
        title="Qualidade e preços que cabem no seu bolso"
      />
      <ButtonComponent
        goTo={specialitiesList}
        title="Consultas com Especialistas"
        style={styles.button}
        width={340}
      />
      <Text style={styles.text}>Experiência, hora marcada e conforto</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // alignItems: "center"
  },
  textAttendance: {
    fontSize: 20,
    paddingTop: 50,
    paddingBottom: 50,
    fontFamily: "Montserrat-Regular"
    // textSize: 18
    // fontWeight: 15
  },
  button: {
    margin: 15
  },
  text: {
    marginBottom: 50,
    fontFamily: "Montserrat-Regular"
  }
});
export default TypeAppointment;
