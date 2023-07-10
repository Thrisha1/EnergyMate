import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Signin = () => {
  const [email, setemail] = useState("");
  const [pswd, setpswd] = useState("");
  const navigation = useNavigation();

  return (
    <View className="">
      <TextInput
        value={email}
        onChangeText={(text) => setemail(text)}
        name="email"
        placeholder="enter email"
        className="bg-white p-3 rounded-lg text-lg w-64"
      />
      <TextInput
        value={pswd}
        onChangeText={(text) => setpswd(text)}
        name="pswd"
        placeholder="enter password"
        className="bg-white p-3 rounded-lg text-lg my-4"
      />
      <TouchableOpacity
        onPress={() => {
          console.log("button pressed");
          axios
            .post("http://192.168.0.173:3001/signin", {
              email: email,
              password: pswd,
            })
            .then((res) => {
              console.log(res.data.message);
              navigation.navigate("Dashboard");
            })

            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text className="bg-yellow-600 text-white text-[24px] border-2 border-white px-5 py-2 rounded-xl text-center">
          Signin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
