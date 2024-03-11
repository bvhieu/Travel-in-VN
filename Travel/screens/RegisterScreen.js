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
import Logo from "../components/Logo";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {};
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
              value={name}
              onChangeText={(text) => setName(text)}
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
