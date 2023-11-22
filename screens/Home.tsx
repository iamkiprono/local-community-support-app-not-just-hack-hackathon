import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <Wrapper>
      <View className="justify-center flex-1">
        <View>
          <Text className="text-center mt-20 mb-4 font-bold text-3xl text-[#fff]">
            What would you like to do?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Vendors")}
          className="my-4"
        >
          <View className={`py-4 bg-green-700 w-fit rounded `}>
            <Text className="text-white  text-center font-bold text-3xl ">
              Buy Water
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Sell")}
          className="my-4"
        >
          <View className={`py-4 bg-green-700 w-fit rounded `}>
            <Text className="text-white  text-center font-bold text-3xl ">
              Sell Water
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </Wrapper>
  );
};

export default Home;
