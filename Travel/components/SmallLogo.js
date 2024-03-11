import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SmallLogo = ({ children }) => {
  return (
    <View>
      <Image
        style={{
          width: 150,
          height: 45,

          resizeMode: "cover",
        }}
        source={require("../assets/Logo/smallLogo.jpg")}
      />
    </View>
  );
};

export default SmallLogo;

const styles = StyleSheet.create({});
