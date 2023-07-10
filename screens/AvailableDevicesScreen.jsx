import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DevicePreview from "../components/DevicePreview";
import { useQuery } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AvailableDevicesScreen = () => {
  async function getData() {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        //parse
        const data = JSON.parse(value);
        console.log(data._id)
        return data._id;
        // value previously stored
      }
    } catch (e) {
      console.log(e);
      // error reading value
    }
  }
  
  const fetchAvailableDevices = async () => {
    const userValue = await getData();
    const response = await fetch(`http://192.168.0.173:3001/available_devices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userValue }),
    });
    const data = await response.json();
    return data;
  };
  const { isLoading, error, data } = useQuery(
    "available_devices",
    fetchAvailableDevices
  );
  if(isLoading) {
    return <Text>Loading...</Text>;
  }
  if(error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <>
    <View className=" pt-7 bg-[#4C7380]">
        <Header heading="Available Devices" />
    </View>
        <ScrollView className="mb-20">
          {data.map((device) => (
            <DevicePreview name={device.device_name} voltage={device.volt} />
          ))}
        </ScrollView>
      <Footer />
    </>
  );
};

export default AvailableDevicesScreen;
