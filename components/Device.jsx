import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text,
  Animated,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DeviceDetailsScreen from "../screens/DeviceDetailsScreen.jsx";

const Device = ({ name, image, power, place }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DeviceDetails", { name, image, power, place })
      }
    >
      <View className="h-28 my-3 mx-5 flex-row bg-[#D8E4E8] justify-between items-center px-5 rounded-xl">
        <View className="flex-row items-center space-x-5 ">
          <Image source={image} className="" />
          <View className="flex-col ">
            <Text className="text-2xl font-bold">{name}</Text>
            <Text className="text-lg">{place}</Text>
            <Text className="text-sm text-[#5e5e5e]">8 Units | 12 jam</Text>
          </View>
        </View>
        <View className="flex-col ">
          <Text className="text-lg text-[#1d3e4a]">{power} kw/h</Text>
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
