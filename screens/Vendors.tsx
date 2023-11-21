import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { milkVendors } from "../MilkVendors";
import Wrapper from "../components/Wrapper";

const Vendors = () => {
  return (
    <Wrapper>
      <View className="flex-1">
      <Text className="text-center mb-4 font-bold text-3xl text-[#4f4d49e6]">
            Milk Vendors
          </Text>
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
         
          {milkVendors.map((vendor) => {
            return (
              <View
                key={vendor.vendor_id}
                className="p-4 my-4 rounded shadow-lg bg-[#ffffffd1] "
              >
                <View>
                  <Text className="my-2 text-[#96938d] text-xl font-bold">
                    {vendor.name}
                  </Text>
                  <Text className="my-2 text-[#96938d] text-xl">
                    {vendor.location}
                  </Text>
                  <View>
                    <Text className="text-lg font-bold text-[#2e2e2c]">
                      $ {vendor.price}
                      <Text className="text-[#6a6464] text-md"> /lit</Text>
                    </Text>
                  </View>
                </View>
                <TouchableOpacity className="p-2 bg-green-700 rounded-lg mt-8 ">
                  <Text className="my-2 text-white w-fit text-center">
                    Buy from {vendor.name}
                  </Text>
                </TouchableOpacity>
                <View></View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Vendors;
