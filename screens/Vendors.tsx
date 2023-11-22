import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { milkVendors } from "../MilkVendors";
import Wrapper from "../components/Wrapper";

const Vendors = ({ navigation }: { navigation: any }) => {
  return (
    <Wrapper>
      <View className="flex-1">
        <Text className="text-center mb-4 font-bold text-3xl text-[#fcfcfce6]">
          Water Vendors
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {milkVendors.map((vendor) => {
            return (
              <View
                key={vendor.vendor_id}
                className="p-4 my-4  rounded-lg shadow-lg bg-[#ffffff0b] "
              >
                <View >
                  <Text className="my-2 text-[#fffdf7] text-xl font-bold">
                    {vendor.name}
                  </Text>
                  <Text className="my-2 text-[#fffdf7] text-xl">
                    {vendor.location}
                  </Text>
                  <View>
                    <Text className="text-lg font-bold text-[#fffdf7]">
                      $ {vendor.price}
                      <Text className="text-[#fffdf7] text-md"> /lit</Text>
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Buy",{
                    price: vendor.price,
                    name: vendor.name
                  })}
                  className="p-2 bg-green-700 rounded-lg mt-8 "
                >
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
