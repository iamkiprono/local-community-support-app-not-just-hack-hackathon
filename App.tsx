import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import Vendors from "./screens/Vendors";
import Buy from "./screens/Buy";
import Sell from "./screens/Sell";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Delivery from "./screens/Delivery";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ animation: "none", headerShown: false }}
          name="Sell"
          component={Sell}
        />
        <Stack.Screen
          options={{ animation: "none", headerShown: false }}
          name="Vendors"
          component={Vendors}
        />
        <Stack.Screen
          options={{ animation: "none", headerShown: false }}
          name="Buy"
          component={Buy}
        />
        <Stack.Screen
          options={{ animation: "none", headerShown: false }}
          name="Delivery"
          component={Delivery}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
