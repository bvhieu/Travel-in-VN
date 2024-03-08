import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>test</Text>
        <Text>ứng dụng giới thiệu điểm du lịch, đặt vé tham quan,...</Text>
        <Text>Bàn Văn Hiếu</Text>
        <Text>Đỗ Minh Đức</Text>
        <Text>Lê Quang Đông</Text>
        <Text>Đoàn Văn Dự</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
