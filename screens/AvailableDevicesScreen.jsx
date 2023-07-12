import { View, Text, RefreshControl } from "react-native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DevicePreview from "../components/DevicePreview";
import { useQuery } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AvailableDevicesScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  async function getData() {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        // Parse the value
        const data = JSON.parse(value);
        console.log(data._id);
        return data._id;
      }
    } catch (e) {
      console.log(e);
      // Error reading value
    }
  }

  const userIdd = getData();

  const fetchAvailableDevices = async () => {
    const userValue = await getData();
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
    fetchAvailableDevices,
    {
      staleTime: 1000,
      cacheTime: 2000,
      refetchInterval: 100,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    }
  );
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <>
      <View className=" pt-7 bg-[#4C7380]">
        <Header heading="Available Devices" />
      </View>
      <ScrollView
        className="mb-20"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data.map((device) => (
          <DevicePreview
            userIdd={userIdd}
            _id={device._id}
            name={device.device_name}
            voltage={device.volt}
            key={device._id} // Add a unique key prop for each item in the array
          />
        ))}
      </ScrollView>
      <Footer />
    </>
  );
};

export default AvailableDevicesScreen;
