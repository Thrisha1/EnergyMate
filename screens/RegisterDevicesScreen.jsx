import {
    ScrollView,
    View,
    Image,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RegisterDevice = () => {

    return (
        <>
            <ScrollView className="bg-[#4C7380] pt-7 flex-1 px-5">
                <Image
                    source={require("../assets/Frame.png")}
                    className="absolute h-80"
                />
                <Header heading="Register Devices" />

                <View className="w-full my-2 flex-col space-y-2">
                    <Text className="text-white text-xl font-semibold ">Name of your Device</Text>
                    <TextInput className="bg-white rounded-lg px-2 py-2 w-full" />
                </View>
                <View className="w-full my-2 flex-col space-y-2">
                    <Text className="text-white text-xl font-semibold ">Power in Volts</Text>
                    <TextInput className="bg-white rounded-lg px-2 py-2 w-full" />
                </View>
                <View className="w-full my-2 flex-col space-y-2">
                    <Text className="text-white text-xl font-semibold ">No of Devices</Text>
                    <TextInput keyboardType="numeric" className="bg-white rounded-lg px-2 py-2 w-full" />
                </View>
                <View className="w-full flex-row justify-center">
                    <TouchableOpacity className="w-1/3 my-2 space-y-2 rounded-xl bg-white py-2 flex-row items-center justify-center">
                        <Text className="text-[#4C7388] font-bold">
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <Footer />
        </>
    );
};

export default RegisterDevice;