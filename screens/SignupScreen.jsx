import { View, Text, Image,TouchableOpacity } from 'react-native'
import {
  SafeAreaView
} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import * as GoogleSignIn from 'expo-google-sign-in';

const Signup = () => {
  GoogleSignIn.initAsync({
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
  });
  
  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        // User signed in successfully
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        }} className="bg-white h-[55px] w-[316px] rounded-3xl mt-8 flex-row justify-center items-center px-2 shadow-2xl m-0">
        <Image className="mr-2 w-8 h-8" source={require("../assets/googleicon.png")}/>
        <Text className="text-[20px]">Sign in with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Signup