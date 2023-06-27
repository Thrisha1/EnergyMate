import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Footer = () => {

  const handlePress = async () => {
    console.log("pressed")
    try {
      const response = await fetch(
        'http://192.168.1.36:3001/api/content/',
      );
      const json = await response.json();
      console.log(json)
    } catch (error) {
      console.error(error);
    }
  }

  const navigation = useNavigation();
  return (
    <View className="flex-row w-full justify-around bg-[#4C7380] absolute bottom-0 h-14 items-center">
      <Ionicons name="home" color="#fff" size={30} />
      <Ionicons onPress={handlePress} name="card" color="#fff" size={32} />
      <Ionicons onPress={() => navigation.navigate("RegisterDevice")} name="add-circle" color="#fff" size={34} />
    </View>
  )
}

export default Footer