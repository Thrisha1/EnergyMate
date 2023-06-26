import { View, Text, Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#4C7380] h-screen mb-0 flex-1 justify-between py-48 items-center">
      <View className="flex items-center">
        <Image
          source={require("../assets/energymatelogo.png")}
        />
        <Text className="text-[24px] text-white">EnergyMate</Text>
      </View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Dashboard")
        console.log("button pressed")
        }} className="bg-white h-[75px] w-[316px] rounded-3xl mt-8 flex-row justify-center items-center px-2 shadow-2xl m-0">
        <Image className="mr-2" source={require("../assets/googleicon.png")}/>
        <Text className="text-[24px]">Sign in with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Signup