import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

const SplashScreen = () => {



  return (
    <View className="flex-1 bg-[#4C7380] ">
      <Text className="text-white text-2xl font-bold mb-6 mr-auto "> EnergyMate</Text>
      <View className=" flex-1 items-center justify-center">
        <StatusBar hidden />
        <View className="items-center">
          <Text className="text-white text-2xl font-bold mb-6">
            Welcome to EnergyMate
          </Text>
          <Text className="text-white text-center text-lg">no matter how far you go,
            home will be your destination to return to.
            let's make your home comfortable</Text>
          <Image source={require("../assets/kid.png")} className="w-[396px] h-[260px] mb-6" />
          <TouchableOpacity  className="bg-[#9A7265] h-[48px] w-[300px] mt-8 rounded-lg flex justify-center">
            <Text  className="text-center text-2xl font-bold ">Get Started   >| </Text>
          </TouchableOpacity>



        </View>
      </View>
    </View>

  );
};

export default SplashScreen;