import React, { useEffect, useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterDevice = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [UserId, setUserId] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      try {
        const value = await AsyncStorage.getItem("my-key");
        if (value !== null) {
          const user = JSON.parse(value);
          console.log(user._id);
          setUserId(user._id);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset, // Add the reset function
  } = useForm();

  const handleRegister = (data) => {
    // Perform registration logic here
    // console.log(data);
    // get the data from asyncStorage

    axios
      .post(`http://192.168.0.173:3001/device_register`, {
        data: data,
        UserId: UserId,
      })
      .then(async (res) => {
        console.log(res.data);
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
        }, 2000); // Close modal after 2 seconds (2000 milliseconds)

        reset(); // Reset the form fields
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Text className="text-white text-xl font-semibold mb-3">
            Name of your Device ( name your device as location - device name )
          </Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="kitchen-bulb"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="bg-white rounded-lg px-2 py-2 w-full"
              />
            )}
            name="deviceName"
          />
          {errors.deviceName && (
            <Text className="text-red-700">This field is required.</Text>
          )}
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-xl font-semibold ">
            Power in Volts
          </Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Power in Volts"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="bg-white rounded-lg px-2 py-2 w-full"
              />
            )}
            name="volt"
          />
          {errors.volt && (
            <Text className="text-red-700">This field is required.</Text>
          )}
        </View>
        <View className="w-full my-2 flex-col space-y-2">
          <Text className="text-white text-xl font-semibold ">
            Device Id
          </Text>
          <TextInput
            placeholder="f-01187"
            className="bg-white rounded-lg px-2 py-2 w-full"
          />
        </View>
        <View className="w-full flex-row justify-center mt-4">
          <TouchableOpacity
            onPress={handleSubmit(handleRegister)}
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 40, borderRadius: 10 }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
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
