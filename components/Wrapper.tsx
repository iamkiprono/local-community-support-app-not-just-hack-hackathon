import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

const image = {
  uri: "https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?s=612x612&w=0&k=20&c=5Xumh49_zYs9GjLkGpZXM41tS17K8M-svN9jLMv0JpE=",
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View className="flex-1 w-full">
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View className="flex-1 py-12 px-4 w-full">{children}</View>
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
  },

});

export default Wrapper;
