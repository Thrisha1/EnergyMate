import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Footer = () => {
  return (
    <View className="flex-row w-full justify-around bg-white absolute bottom-0 h-14 items-center">
      <Ionicons name="home" size={32} />
      <Ionicons name="card" size={32} />
      <Ionicons name="add-circle" size={34} />
    </View>
  )
}

export default Footer