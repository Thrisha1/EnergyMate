import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const Usage = ({month,power,price}) => {
  return (
    <View className="h-28 my-3 mx-5 flex-row bg-[#e6ecf0] justify-between items-center px-5 rounded-xl shadow-xl">
    <View className="flex-row items-center space-x-5 ">
      {/* <Image  className="" /> */}
      <View className="flex-col ">
        <Text className="text-2xl py-1 font-bold">{month}</Text>
        <Text className="text-sm text-[#5e5e5e]">8 Units | 12 jam</Text>
      </View>
    </View>
    <View className="flex-col ">
      <Text className="text-lg pt-1 font-bold text-[#1d3e4a]">{power} kw/h</Text>
        <Text className=" text-lg">₹ {price}</Text>
    </View>
  </View>
  )
}

export default Usage