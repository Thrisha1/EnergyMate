import { ScrollView,Image,View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View className="bg-[#006156] w-full p-5 flex-row justify-between">
      <View className="flex-row justify-center items-center gap-x-4">
        <Image
          source={require("../assets/logo.png")}
          className="w-6 h-6 p-4"
        />
        <Text className="text-2xl text-white font-light">Energy Mate</Text>
      </View>
      <View className="flex-row items-center justify-center gap-x-3">
        <Ionicons name="person" size={25} color="#fff" />
        <Ionicons name="notifications" size={25} color="#fff" ></Ionicons>
      </View>
    </View>
  )
}

export default Header