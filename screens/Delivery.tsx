import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Wrapper from "../components/Wrapper";

import MapView from "react-native-maps";

const Delivery = ({ route }: { route: any }) => {
  const { longitude, latitude } = route.params;
  return (
    <Wrapper>
      <View className="flex-1">
        <Text className="my-6 text-center text-3xl font-bold text-white">
          Thank you for your purchase, The delivery will arrive at yout location soon
          
        </Text>
        <MapView
          initialRegion={{
            latitude :latitude || -0.2492668,
            longitude,
            latitudeDelta: 0.0922 || 35.9589471,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "80%",
  },
});

export default Delivery;
