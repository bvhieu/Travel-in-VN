import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/logo.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Button
          title="Tiếp tục"
          buttonStyle={{ backgroundColor: "rgba(19, 19, 19, 1)" }}
          containerStyle={{
            marginHorizontal: 50,
            marginVertical: 200,
            borderRadius: 15,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#103B4B",
  },
  image: {
    flex: 1,
    // width: "100%",
    top: 150,
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
