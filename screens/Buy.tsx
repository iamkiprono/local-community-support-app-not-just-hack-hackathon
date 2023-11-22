import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";

import Checkbox from "expo-checkbox";

import * as Location from "expo-location";

const Buy = ({ navigation, route }: { route: any; navigation: any }) => {
  const [isSelected, setSelection] = useState(true);
  const [payOnDelivery, setPayOnDelivery] = useState(false);

  const [location, setLocation] = useState<Object | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { price } = route.params;

  const [litres, setLitres] = useState("1");
  const [total, setTotal] = useState(price);

  const calculatePrice = (litres: string, price: number) => {
    setTotal(Number(litres) * price);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Getting location";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location?.coords);
  }

  console.log(text)

  return (
    <Wrapper>
      <View className="flex-1 justify-center">
        <Text className="text-3xl text-center font-bold text-[#fff]">
          How many litres of water do you need from {route.params.name}? 
        </Text>
        <TextInput
          onChangeText={(text) => {
            setLitres(text);
            calculatePrice(text, price);
          }}
          defaultValue="numeric"
          value={litres}
          inputMode="numeric"
          className="border rounded p-4 my-4 text-white border-white"
          placeholder="Litres"
        />
        <View className="flex-row items-center gap-2 my-4">
          <Checkbox
            className="text-[#fff] "
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text className="text-[#fff]">Deliver to my location</Text>
          {/* <Text>{isSelected?"chek":"unx"}</Text> */}
        </View>
        <View className="flex-row items-center gap-2 my-4">
          <Checkbox
            className="text-[#fff] "
            value={payOnDelivery}
            onValueChange={setPayOnDelivery}
          />
          <Text className="text-[#fff]">Pay on delivery</Text>
          {/* <Text>{isSelected?"chek":"unx"}</Text> */}
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Delivery", {
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
            })
          }
          className="my-4"
        >
          <View className={`py-4 bg-green-700 w-fit rounded `}>
            <Text className="text-white  text-center font-bold text-3xl ">
              {payOnDelivery
                ? `Deliver ${litres} litres`
                : `Pay $${total.toFixed(2)}`}
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Delivery")}
          className="my-4"
        >
          <View className={`py-4 ${isSelected ? "bg-gray-400 text-gray-200": "bg-green-700"} border w-fit rounded `}>
            <Text className="text-center font-bold text-3xl ">
              Use Another Address
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </Wrapper>
  );
};

export default Buy;
