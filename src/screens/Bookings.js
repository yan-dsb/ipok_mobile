import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Bookings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/logoDark.jpg")}
        style={styles.logoIpok}
      />
      <Text>Saúde no seu tempo</Text>
      <Text style={styles.textAttendance}>
        Olá, vamos iniciar seu atendimento?
      </Text>
      <AwesomeButton
        style={styles.button}
        borderRadius={22}
        progress
        onPress={next => {
          setTimeout(() => {
            next();
          }, 2500);
        }}
        backgroundColor="#00c0e3"
        backgroundDarker="#00c0e3"
        backgroundShadow="#02497f"
        width={300}
        textSize={16}
      >
        Consultas
      </AwesomeButton>
      <AwesomeButton
        style={styles.button}
        borderRadius={22}
        progress
        onPress={next => {
          setTimeout(() => {
            next();
          }, 2500);
        }}
        backgroundColor="#00c0e3"
        backgroundDarker="#00c0e3"
        backgroundShadow="#02497f"
        width={300}
        textSize={16}
      >
        Exames, Procedimentos e Vacinas
      </AwesomeButton>
      <AwesomeButton
        style={styles.button}
        borderRadius={22}
        progress
        onPress={next => {
          setTimeout(() => {
            next();
          }, 2500);
        }}
        backgroundColor="#00c0e3"
        backgroundDarker="#00c0e3"
        backgroundShadow="#02497f"
        width={300}
        textSize={16}
      >
        Estética
      </AwesomeButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 6
  },
  logoIpok: {
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 100
  },
  textLogo: {},
  textAttendance: {
    fontSize: 18,
    margin: 30
    // textSize: 18
    // fontWeight: 15
  }
});

export default Bookings;
