import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../../components/Logo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handleLogin = () => {
    // const user = {
    //   email: email,
    //   password: password,
    // };

    // axios
    //   .post("http://10.0.2.2:8000/api/v1/auth/login", user)
    //   .then((response) => {
    //     console.log(response);
    //     const token = response.data.token;
    //     AsyncStorage.setItem("authToken", token);

    navigation.replace("Home");
    // })
    // .catch((error) => {
    //   Alert.alert("Login Error", "Invalid email or password");
    //   console.log("Login Error", error);
    // });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </View>

        <View style={{ width: 300, marginTop: 30 }}>
          <View>
            <TextInput
              value={email}
              label="Email"
              mode="outlined"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={{ width: 300, marginTop: 15 }}>
            <TextInput
              value={password}
              label="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              mode="outlined"
            />
          </View>

          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#103B4B",
              padding: 15,
              marginTop: 50,
              width: 300,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Dont't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
