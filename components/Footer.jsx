import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Footer = () => {
  return (
    <View className="flex-row w-full bg-white absolute bottom-0">
      <Ionicons name="add" size={32} />
    </View>
  )
}

export default Footer