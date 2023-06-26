import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <ScrollView className="bg-blue-400 h-screen">
      <Text className=" text-3xl text-red-700" onPress={()=>navigation.navigate("Signup")} >HomeScreen</Text>
      <Text className=" text-3xl text-red-700" onPress={()=>navigation.navigate("Dashboard")} >Dashboard</Text>
      <Text className="text-black">hlo world</Text>
    </ScrollView>
  )
}

export default HomeScreen