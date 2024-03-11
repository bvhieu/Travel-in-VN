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
import Logo from "../components/Logo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handleLogin = () => {
    navigation.replace("Home");
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
