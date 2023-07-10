import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text,
  Animated,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Device from "../components/Device";
import { useQuery } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BillScreen = () => {
  async function getData() {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        //parse
        const data = JSON.parse(value);
        console.log(data._id);
        return data._id;
        // value previously stored
      }
    } catch (e) {
      console.log(e);
      // error reading value
    }
  }

  const [userid, setuserid] = useState("")

  const fetchAvailableDevices = async () => {
    const userValue = await getData();
    setuserid(userValue);
    const response = await fetch(
      `http://192.168.0.173:3001/available_devices`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userValue }),
      }
    );
    const data = await response.json();
    return data;
  };
  const { isLoading, error, data } = useQuery(
    "available_devices",
    fetchAvailableDevices
  );
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <>
      <ScrollView className="mb-16">
        <View className="pt-7 bg-[#4C7380] ">
          <Header heading="Available Devices" />
          <Text className="text-2xl text-white font-light px-5 pb-5">
            Usage this Week
          </Text>
          <Image
            source={require("../assets/device_chart.png")}
            className="h-62 mx-2"
          />
        </View>
        <ScrollView className="bg-white">
          {data.map((device) => (
            <Device name={device.device_name} power={device.volt} toggle={device.isOn} userId={userid} />
          ))}
        </ScrollView>
      </ScrollView>
      <Footer />
    </>
  );
};

export default BillScreen;
