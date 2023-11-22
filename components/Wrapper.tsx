import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

const image = {
  uri: "https://inweh.unu.edu/wp-content/uploads/2022/03/AmorsPhotoshutterstock.jpg",
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View className="flex-1 w-full">
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "transparent"]} // Adjust the colors and opacity as needed
          style={styles.linearGradient}
        >
          <View className="flex-1 pt-12 px-4 w-full">{children}</View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #000000, #000)",
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center', // Adjust as needed
    alignItems: 'center', // Adjust as needed
  },
});

export default Wrapper;
