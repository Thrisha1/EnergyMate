import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DevicePreview from '../components/DevicePreview'

const AvailableDevicesScreen = () => {
  return (
    <>
    <View className=" pt-7 bg-[#4C7380]">
        <Header  heading="Available Devices"/>
    </View>
    <View className="h-full">
    <ScrollView >
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="Television" voltage={220}/>
            <DevicePreview name="Smart Lamp" voltage={220}/>
            <DevicePreview name="Air Conditioner" voltage={220}/>
            <DevicePreview name="Speaker" voltage={220}/>
            <DevicePreview name="Microwave Oven" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
        </ScrollView>
    </View>
    <Footer/>
    </>
  )
}

export default AvailableDevicesScreen