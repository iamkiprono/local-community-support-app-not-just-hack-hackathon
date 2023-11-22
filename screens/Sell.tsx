import React from "react";
import {
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Wrapper from "../components/Wrapper";

const Sell = () => {
  return (
    <Wrapper>
      <View></View>
      <Text className="text-3xl text-[#282525] my-4 font-bold text-center">
        Become a vendor today!
      </Text>
      <View className="flex-row gap-2 items-center">
        <Text className="text-lg">Name:</Text>
      </View>
      <TextInput
      
        placeholder="Name"
        className="py-2 px-4 border rounded-lg w-full my-4"
      />
      <View className="flex-row gap-2 items-center">
        <Text className="text-lg">Location:</Text>
      </View>
      <TextInput
        placeholder="Location"
        className="py-2 px-4 border rounded-lg w-full my-4"
      />
      <View className="flex-row gap-2 items-center">
        <Text className="text-lg">Price:</Text>
      </View>
      <TextInput
        inputMode="numeric"
        placeholder="Price"
        className="py-2 px-4 border rounded-lg w-full my-4"
      />
      <TouchableOpacity
        onPress={Keyboard.dismiss}
        className="p-2 bg-green-700 rounded-lg mt-8 "
      >
        <Text className="my-2 text-white w-fit text-center">Sell</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Sell;
