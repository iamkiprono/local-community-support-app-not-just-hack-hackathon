import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import Buy from "./screens/Buy";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* <Home /> */}
      <Buy />
      <StatusBar style="auto" />
    </View>
  );
}
