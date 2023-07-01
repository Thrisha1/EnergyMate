import { View, Text, Image,TouchableOpacity } from 'react-native'
import {
  SafeAreaView
} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import * as GoogleSignIn from 'expo-google-sign-in';

const Signup = () => {

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId: '558838348481-a4f11epc4qpnoff3m8r2te5uuhrk81li.apps.googleusercontent.com',
    });
  };
  
  useEffect(() => {
    initAsync();
  }, []);

  
  const signInWithGoogleAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      
      if (type === 'success') {
        // Handle successful sign-in
        console.log(user);
      } else {
        // Handle cancelled sign-in or error
        console.log('Sign-in cancelled');
      }
    } catch (error) {
      console.log('Error signing in:', error);
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
        onPress={signInWithGoogleAsync}
        console.log("button pressed")
        }} className="bg-white h-[55px] w-[316px] rounded-3xl mt-8 flex-row justify-center items-center px-2 shadow-2xl m-0">
        <Image className="mr-2 w-8 h-8" source={require("../assets/googleicon.png")}/>
        <Text className="text-[20px]">Sign in with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Signup