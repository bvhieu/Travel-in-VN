import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Dimensions, // Thêm import Dimensions từ react-native
} from "react-native";
import React, { useLayoutEffect, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  Feather,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Hồ Chí Minh",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Đà Lạt",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hà Nội",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29ds2",
    title: "Hạ Long",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hà Nội",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29ds2",
    title: "Hạ Long",
  },
];

const numColumns = 3; // Số cột bạn muốn hiển thị

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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
    <>
      <View style={styles.layout}>
        <Text>Destination</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Ẩn thanh trượt ngang
        >
          <View style={styles.container}>
            {DATA.map((item) => (
              <Item key={item.id} title={item.title} />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.layout2}>
        <Text>Featured</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {DATA.map((item) => (
              <Item key={item.id} title={item.title} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Hiển thị theo chiều ngang
    flexWrap: "wrap", // Cho phép các phần tử lướt qua hàng mới khi không đủ không gian
  },
  item: {
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get("window").width / numColumns - 20, // Độ rộng của mỗi mục
    height: Dimensions.get("window").width / numColumns - 60, // Độ cao của mỗi mục
  },
  title: {
    fontSize: 16,
  },
  layout: {
    backgroundColor: "#e0e0e0",
    paddingBottom: 20,
    paddingTop: 10,
  },
  layout2: {
    backgroundColor: "#e0e0e0",
    paddingBottom: 20,
    marginTop: 20,
  },
});
