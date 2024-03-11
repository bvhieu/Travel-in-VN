import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Logo = ({ children }) => {
  return (
    <View>
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 20,
          resizeMode: "cover",
          alignSelf: "center",
        }}
        source={require("../assets/Logo/logo.jpg")}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
