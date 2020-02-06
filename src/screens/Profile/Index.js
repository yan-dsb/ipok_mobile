import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage,
  Image,
  StyleSheet
} from "react-native";

import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
import LogoComponent from "../../components/LogoComponent";

import Backend from "../../backend/Backend";

const Index = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginResponse, setLoginResponse] = useState("");
  const [user, setUser] = useState(null);
  async function Login() {
    await Backend.post("login", {
      email_or_tel: username,
      password: password
    }).then(response => {
      if (response.data.error) {
        setLoginResponse(response.data.error);
      } else {
        AsyncStorage.setItem("user", JSON.stringify(response.data), () => {
          AsyncStorage.getItem("user", (err, result) => {
            setUser(JSON.parse(result));
            setUsername("");
            setPassword("");
          });
        });

        setLoginResponse("");
      }
    });
  }
  function logout() {
    AsyncStorage.setItem("user", "null", () => {});
    setUser(null);
  }
  if (user == null) {
    return (
      <View style={styles.container}>
        <LogoComponent />
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.textInputStyle}
          placeholder="Email"
          placeholderTextColor="#72797b"
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.textInputStyle}
          placeholder="********"
          placeholderTextColor="#72797b"
          underlineColorAndroid="transparent"
          textAlignVertical="center"
        ></TextInput>
        <TextComponent style={styles.error} title={loginResponse} />
        <TextComponent style={styles.forgot} title="Esqueci a senha" />
        <TextComponent
          style={styles.forgot}
          title="Ainda não tem cadastro? Cadastre-se aqui"
        />
        <ButtonComponent
          title="Entrar"
          goTo={Login}
          style={styles.button}
          width={300}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextComponent style={styles.logout} onPress={logout} title="Sair" />
        <LogoComponent />
        <TextComponent style={styles.user} title={"Olá, " + user.data.name} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10
  },
  text: {
    fontFamily: "Montserrat-Regular",
    paddingRight: 215,
    marginTop: 30
  },
  forgot: {
    fontFamily: "Montserrat-Regular",
    paddingTop: 10
  },
  logout: {
    fontFamily: "Montserrat-Regular",
    marginLeft: 300,
    color: "red",
    fontSize: 18
  },
  user: {
    fontFamily: "Montserrat-Regular",
    paddingTop: 20,
    fontSize: 20
  },
  error: {
    fontFamily: "Montserrat-Regular",
    paddingTop: 5,
    color: "red"
  },
  button: {
    margin: 20
  },
  textInputStyle: {
    height: 50,
    width: 300,
    marginTop: 30,
    borderColor: "#00c0e3",
    borderWidth: 1,
    borderRadius: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center"
  }
});
export default Index;
