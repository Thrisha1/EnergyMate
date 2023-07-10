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

const Signup = () => {
  const [email, setemail] = useState("");
  const [pswd, setpswd] = useState("");
  const [username, setusername] = useState("");
  const navigation = useNavigation();

  return (
    <View className="">
      <TextInput
        value={username}
        onChangeText={(text) => setusername(text)}
        name="username"
        placeholder="enter username"
        className="bg-white p-3 rounded-lg text-lg w-64"
      />
      <TextInput
        value={email}
        onChangeText={(text) => setemail(text)}
        name="email"
        placeholder="enter email"
        className="bg-white p-3 rounded-lg text-lg w-64 mt-4"
      />
      <TextInput
        value={pswd}
        onChangeText={(text) => setpswd(text)}
        name="pswd"
        placeholder="enter password"
        className="bg-white p-3 rounded-lg text-lg my-4"
      />
      {/* <TextInput
          value={pswd}
          onChangeText={(text) => setpswd(text)}
          name="pswd"
          placeholder="Re-enter password"
          className="bg-white p-3 rounded-lg text-lg mb-4"
        /> */}
      <TouchableOpacity
        onPress={() => {
          console.log("button pressed");
          axios
            .post("http://192.168.0.173:3001/signup", {
              email: email,
              password: pswd,
              username: username,
            })
            .then((res) => {
              console.log(res);
              // navigation.navigate("Login");
            })

            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text className="bg-yellow-600 text-white text-[24px] border-2 border-white px-5 py-2 rounded-xl text-center">
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
