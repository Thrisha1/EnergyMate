import React, { useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RegisterDevice = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    // Perform registration logic here
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000); // Close modal after 2 seconds (2000 milliseconds)
  };

  return (
    <>
      <ScrollView className="bg-[#4C7380] pt-7 flex-1 px-5">
        <Image
          source={require("../assets/Frame.png")}
          className="absolute h-80"
        />
        <Header heading="Register Devices" />

        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-xl font-semibold ">
            Name of your Device
          </Text>
          <TextInput className="bg-white rounded-lg px-2 py-2 w-full" />
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-xl font-semibold ">Power in Volts</Text>
          <TextInput className="bg-white rounded-lg px-2 py-2 w-full" />
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-xl font-semibold ">No of Devices</Text>
          <TextInput
            keyboardType="numeric"
            className="bg-white rounded-lg px-2 py-2 w-full"
          />
        </View>
        <View className="w-full flex-row justify-center mt-4">
          <TouchableOpacity
            onPress={handleRegister}
            className="w-1/3 my-2 space-y-2 rounded-xl bg-white py-3 flex-row items-center justify-center"
          >
            <Text className="text-[#4C7388] font-bold">Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View style={{ backgroundColor: "white", padding: 40, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
              Device Registered Successfully
            </Text>
            {/* <Button title="Close" onPress={() => setModalVisible(false)} /> */}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default RegisterDevice;
