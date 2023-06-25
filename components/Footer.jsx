import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Footer = () => {
  return (
    <View className="flex-row w-full justify-around bg-[#4C7380] absolute bottom-0 h-14 items-center">
      <Ionicons name="home" color="#fff" size={30} />
      <Ionicons name="card" color="#fff" size={32} />
      <Ionicons name="add-circle" color="#fff" size={34} />
    </View>
  )
}

export default Footer