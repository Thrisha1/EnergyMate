import { ScrollView,Image,View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <ScrollView className="bg-[#006156] w-full p-5">
      <View className="flex-row w-full items-center gap-x-4">
        <Image
          source={require("../assets/logo.png")}
          className="w-7 h-7 p-4"
        />
        <Text className="text-2xl text-white font-light">Energy Mate</Text>
      </View>
    </ScrollView>
  )
}

export default Header