import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import ButtonComponent from "../../components/ButtonComponent";
import Backend from "../../backend/Backend.js";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";

const SpecialitiesList = ({ navigation }) => {
  const [specialities, setSpecialities] = useState([]);
  async function listSpecialities() {
    const response = await Backend.get("specialities")
      .then(response => {
        setSpecialities(response.data.specs);
      })
      .catch(error => console.log(error));
  }
  async function fonts() {
    Font.loadAsync({
      "Montserrat-Regular": require("../../../assets//fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("../../../assets//fonts/Montserrat-SemiBold.ttf")
    });
  }
  function speciality(speciality) {
    navigation.navigate("Speciality", { speciality: speciality });
  }
  useEffect(() => {
    listSpecialities();
    fonts();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textAttendance}>Consultas com Especialistas</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        // }
        keyExtractor={spec => spec.sub_name}
        data={specialities}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <ButtonComponent
                width={340}
                style={styles.button}
                goTo={() => speciality(item.sub_name_main)}
                title={item.sub_name_main}
              />
            </ScrollView>
          );
        }}
      />
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
    fontSize: 19,
    fontFamily: "Montserrat-SemiBold"
    // textSize: 18
    // fontWeight: 15
  },
  text: {
    marginTop: 15,
    marginBottom: 50
  },
  button: {
    margin: 5
  }
});

export default SpecialitiesList;
