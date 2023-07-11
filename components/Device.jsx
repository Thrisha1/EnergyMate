import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text,
  Animated,
  Switch
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DeviceDetailsScreen from "../screens/DeviceDetailsScreen.jsx";

const Device = ({ name, toggle, power,userId,deviceData }) => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(toggle);
  const toggleSwitch = () => {
    toggle_switch();
    setIsEnabled((previousState) => !previousState);
  };

  console.log("power : ", power.toFixed(5));
  console.log("device : ", deviceData)
  
  const toggle_switch = async () => {
    try {
      const response = await fetch("http://192.168.0.173:3001/toggle_switch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deviceName: name, userId: userId}),
      });

      // Handle the response as needed
      if (response.ok) {
        // Power consumption calculated successfully
        const result = await response.json();
        console.log("Power consumption:", result);
      } else {
        // Handle error response
        console.error("Error calculating power consumption:", response.status);
      }
    } catch (error) {
      console.error("Error calculating power consumption:", error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DeviceDetails", { name, power ,deviceData  })
      }
    >
      <View className="h-28 my-3 mx-5 flex-row bg-[#D8E4E8] justify-between items-center px-5 rounded-xl">
        <View className="flex-row items-center space-x-5 ">
          {/* <Image source={image} className="" /> */}
          <View className="flex-col ">
            <Text className="text-2xl font-bold">{name}</Text>
            <Text className="text-lg text-[#1d3e4a]">{power ? power.toFixed(5) : 0} kw/h</Text>
          </View>
        </View>
        <View className="flex-col ">
        <View className="self-start" >
          <Switch
            trackColor={{  true: "#81b0ff" ,false: "#767577"}}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          />
        </View>
          
          <View className="flex-row items-center">
            <Ionicons name="arrow-down" size={18} color="#902d12" />
            <Text className="text-red-900 text-sm">- 11.2 %</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Device;
