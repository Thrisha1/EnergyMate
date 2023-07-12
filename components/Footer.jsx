import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row w-full justify-around bg-[#4C7380] absolute bottom-0 h-14 items-center">
      <Ionicons onPress={() => navigation.navigate("Dashboard")} name="home" color="#fff" size={30} />
      <Ionicons onPress={() => navigation.navigate("AvailableDevices")} name="card" color="#fff" size={32} />
      <Ionicons onPress={() => navigation.navigate("RegisterDevices")}  name="add-circle" color="#fff" size={34} />
    </View>
  )
}

export default Footer