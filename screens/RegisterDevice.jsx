import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RegisterDevice = () => {

  return (
    <>
      <ScrollView className="bg-[#4C7380] pt-7 flex-1 mb-16 px-5">
        <Image
          source={require("../assets/Frame.png")}
          className="absolute h-80"
        />
        <Header heading="Register Devices" />

        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-2xl font-bold ">Name of your Device</Text>
          <TextInput className="bg-white rounded-lg px-2 py-1 w-full" />
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-2xl font-bold ">Power in Volts</Text>
          <TextInput className="bg-white rounded-lg px-2 py-1 w-full" />
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-2xl font-bold ">No of Devices</Text>
          <TextInput keyboardType="numeric" className="bg-white rounded-lg px-2 py-1 w-full" />
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Button title="Register" color="#4C7380" />
        </View>

      </ScrollView>
      <Footer />
    </>
  );
};

export default RegisterDevice;
