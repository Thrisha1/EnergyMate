import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DevicePreview from '../components/DevicePreview'

const AvailableDevicesScreen = () => {
  return (
    <View className="flex-1">
        <Header  heading="Available Devices"/>
        <ScrollView>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
            <DevicePreview name="washing machine" voltage={220}/>
        </ScrollView>
        <Footer/>
    </View>
  )
}

export default AvailableDevicesScreen