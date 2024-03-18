import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Logo from "../../components/Logo";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      username: username,
      email: email,
      password: password,
      address: address,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://10.0.2.2:8000/api/v1/auth/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setUsername("");
        setEmail("");
        setPassword("");
        setAddress("");
        navigation.replace("Login");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
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

        <View style={{ marginTop: 30 }}>
          <View style={{ width: 300, marginTop: 10 }}>
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              mode="outlined"
              label="Enter your name"
            />
          </View>

          <View style={{ width: 300, marginTop: 10 }}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              mode="outlined"
              label="Enter Your Email"
            />
          </View>

          <View style={{ width: 300, marginTop: 10 }}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              mode="outlined"
              label="Password"
            />
          </View>

          <View style={{ width: 300, marginTop: 10 }}>
            <TextInput
              value={address}
              onChangeText={(text) => setAddress(text)}
              mode="outlined"
              label="Address"
            />
          </View>

          <Pressable
            onPress={handleRegister}
            style={{
              width: 300,
              backgroundColor: "#103B4B",
              padding: 15,
              marginTop: 50,
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
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already Have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
