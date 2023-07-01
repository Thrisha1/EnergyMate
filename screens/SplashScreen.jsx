import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.png';

const SplashScreen = () => {

  const navigation = useNavigation();

  return (
    <View className="flex-row bg-[#4C7380] h-screen">
      {/* <Text className="text-white text-2xl font-bold">EnergyMate</Text> */}
      <View className="flex-col items-center justify-center">
        <Image className="w-10 h-10 mb-8" source={Logo} />
        <StatusBar hidden />
        <View className="items-center">
          <Text className="text-white text-2xl font-bold mb-6">
            Welcome to EnergyMate
          </Text>
          <Text className="text-white text-center text-lg px-3 w-80">
            No matter how far you go,
            Home will be your destination to return to.
            let's make your home comfortable
          </Text>
          <Image source={require("../assets/kid.png")} className="w-[396px] h-[260px] mb-6" />
          <TouchableOpacity className="bg-[#e0e4e3] h-[48px] w-[300px] mt-8 rounded-lg flex justify-center">
            <Text onPress={() => navigation.navigate("Signup")} className="text-center text-2xl font-bold text-[#4C7380]">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

export default SplashScreen;