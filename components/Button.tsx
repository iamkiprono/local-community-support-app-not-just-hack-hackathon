import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (
  { content, color }: { content: string, color?: string },
  
) => {
  return (
    <View>
      <TouchableOpacity className="my-4">
        <View className={`py-4 bg-[${color}] w-fit rounded border`}>
          <Text className="text-white  text-center font-bold text-3xl ">
            {content}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
