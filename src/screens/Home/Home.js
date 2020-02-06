import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
import LogoComponent from "../../components/LogoComponent";

const Home = ({ navigation }) => {
  function typeAppointment() {
    navigation.navigate("TypeAppointment");
  }

  return (
    <View style={styles.container}>
      <LogoComponent />
      <TextComponent
        style={styles.textAttendance}
        title="Olá, vamos iniciar seu atendimento?"
      />
      <ButtonComponent
        style={styles.button}
        title="Consultas"
        goTo={typeAppointment}
        width={340}
      />
      <ButtonComponent
        style={styles.button}
        title="Exames, Procedimentos e Vacinas"
        width={340}
      />
      <ButtonComponent style={styles.button} title="Estética" width={340} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  textAttendance: {
    fontSize: 18,
    margin: 15,
    fontFamily: "Montserrat-Regular"
  },
  button: {
    margin: 15
  }
});

export default Home;
