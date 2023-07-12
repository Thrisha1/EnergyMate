import { ScrollView, Image, View, Text,TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Header = ({ heading }) => {
  const navigation = useNavigation();
  const logout = () => {
    AsyncStorage.clear();
    navigation.navigate("Signup")
    console.log("cleared")
  };
  return (
    <View className="bg-[#4C7380] w-full p-5 flex-row justify-between">
      <View className="flex-row justify-center items-center gap-x-4">
        <Image source={require("../assets/logo.png")} className="w-6 h-6 p-4" />
        <Text className="text-2xl text-white font-light">{heading}</Text>
      </View>
      <View className="flex-row items-center justify-center gap-x-3">
        {/* <Ionicons name="person" size={25} color="#fff" /> */}
        <TouchableOpacity onPress={()=> logout()}>
          <Ionicons name="power" size={25} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
