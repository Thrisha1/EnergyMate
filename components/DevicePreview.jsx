import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DevicePreview = ({ name, voltage, image }) => {
  return (
    <View className="h-28 my-3 mx-5 flex-row bg-[#D8E4E8] justify-between items-center px-5 rounded-xl">
      <View className="flex-row items-center space-x-5 ">
        {/* <Image source={image} className="" /> */}
        <View className="flex-col ">
          <Text className="text-2xl font-bold">{name}</Text>
          <Text className="text-xl">{voltage} volts</Text>
          <Text className="text-sm text-[#5e5e5e]">8 Units | 12 jam</Text>
        </View>
      </View>
      <TouchableOpacity className="flex justify-center items-center rounded-lg">
        <Text className=" text-3xl m-0">
          <Ionicons name="trash-outline" size={30}></Ionicons>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DevicePreview;
