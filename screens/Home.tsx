import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

const Home = () => {
  return (
    <Wrapper>
      <View className="justify-center flex-1">
        <View>
          <Text className="text-center mt-20 font-bold text-3xl text-[#777673]">
      What would you like to do?
          </Text>
        </View>
        <Button color="#b77e1d" content="Buy Milk" />
        <Button color="" content="Sell Milk" />

       
      </View>
    </Wrapper>
  );
};

export default Home;
