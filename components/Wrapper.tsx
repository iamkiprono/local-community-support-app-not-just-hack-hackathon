import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

const image = {
  uri: "https://images.unsplash.com/photo-1601436423474-51738541c1b1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View className="flex-1 w-full">
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View className="flex-1 pt-12 px-4 w-full">{children}</View>
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
