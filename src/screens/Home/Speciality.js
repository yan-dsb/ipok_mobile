import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import { Card } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import ButtonComponent from "../../components/ButtonComponent";
import Backend from "../../backend/Backend.js";
import { ScrollView } from "react-native-gesture-handler";

const Speciality = ({ navigation }) => {
  const [speciality, setSpeciality] = useState([]);
  const spec = navigation.getParam("speciality");
  async function listSpeciality() {
    const response = await Backend.get(`speciality?speciality=${spec}`)
      .then(response => {
        setSpeciality(response.data.doctors[0]);
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    listSpeciality();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textAttendance}>Especialistas</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        // }
        keyExtractor={doc => `${doc.doctor_id}`}
        data={speciality}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <View
                style={{
                  borderColor: "gray",
                  borderRadius: 20,
                  borderBottomWidth: 4,
                  borderTopWidth: 1,
                  borderLeftWidth: 1,
                  borderRightWidth: 2,
                  margin: 5
                }}
              >
                <View
                  style={{
                    width: 300,
                    height: 130,
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png"
                    }}
                    style={styles.profileImg}
                  />
                  <Text style={styles.text}>
                    <Text style={styles.doctor}>{item.doc_name}</Text>
                    <Text>
                      <Text>
                        {"                                                              " +
                          item.sub_name_main}
                      </Text>
                      {
                        "                                                                   Valor da Consulta"
                      }
                    </Text>
                    <Text style={styles.consult}>{" R$" + item.price}</Text>
                  </Text>
                </View>
                <ButtonComponent
                  style={styles.button}
                  title="Marcar Consulta"
                  width={150}
                />
              </View>
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
    paddingLeft: 10,
    paddingBottom: 10,
    borderRadius: 1
  },
  textAttendance: {
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    paddingBottom: 15,
    alignSelf: "center"
    // textSize: 18
    // fontWeight: 15
  },
  profileImgContainer: {
    marginLeft: 4,
    height: 80,
    width: 80,
    borderRadius: 40
  },
  profileImg: {
    marginLeft: 2,
    marginTop: 40,
    height: 120,
    width: 120,
    borderRadius: 100
  },
  consult: {
    fontSize: 13,
    color: "#00c0e3",
    fontFamily: "Montserrat-SemiBold"
  },
  text: {
    paddingLeft: 5,
    paddingBottom: 50,
    alignSelf: "center",
    fontFamily: "Montserrat-Regular"
  },
  doctor: {
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold"
  },
  textPrice: {
    fontSize: 13,
    margin: 15,
    fontFamily: "Montserrat-Regular"
  },
  button: {
    margin: 0,
    marginBottom: 10,
    marginLeft: 135
  }
});

export default Speciality;
