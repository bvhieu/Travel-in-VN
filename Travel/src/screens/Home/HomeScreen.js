import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useLayoutEffect, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  Feather,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",

      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              width: "95%",
              fontSize: 19,
              backgroundColor: "#E3E3E3",
              borderRadius: 20,
              height: 37,
              paddingLeft: 20,
            }}
            placeholder="Search"
          />
          <AntDesign
            style={{ position: "absolute", marginLeft: 320 }}
            name="closecircleo"
            size={20}
            color="black"
          />
        </View>
      ),
    });
  }, []);

  return (
    <View>
      <View>
        <Text>Destination</Text>
        <Text>Hồ Chí Minh</Text>
        <Text>Đà Lạt</Text>
        <Text>Hà Nội</Text>
      </View>
      <View>
        <Text>Featured destination</Text>
        <Text>Tam Đảo</Text>
        <Text>Sa Pa</Text>
        <Text>Vịnh Hạ Long</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
