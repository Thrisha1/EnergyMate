import {
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    View,
    Image,
    Text,
    Animated,
  } from "react-native";
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Device from "../components/Device";

const BillScreen = () => {

  return (
    <>
    <View className="pt-7 bg-[#4C7380] ">
    <Header heading="Available Devices" />
    <Text className="text-2xl text-white font-light px-5 pb-5">Usage this Week</Text>
        <Image
          source={require("../assets/device_chart.png")}
          className="h-62 mx-2"
        />
    </View>
    <ScrollView className="bg-white">
        <Device name="Light" image={require("../assets/light.png")} power="1000" place="Kitchen - Bedroom" />
        <Device name="Air Cinditioner" image={require("../assets/ac.png")} power="1000" place="Kitchen - Living Room" />
        <Device name="Wireless Speaker" image={require("../assets/speaker.png")} power="1000" place="Bedroom" />
        <Device name="Television" image={require("../assets/tv.png")} power="1000" place="Living Room" />
        <Device name="Light" image={require("../assets/light.png")} power="1000" place="Kitchen - Bedroom" />
    </ScrollView>
    <Footer/>
    </>
    
  )
}

export default BillScreen