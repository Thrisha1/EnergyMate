import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signin from '../components/SignIn.jsx';
import SignupComp from '../components/Signup.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      try {
        const value = await AsyncStorage.getItem("my-key");
        if (value !== null) {
          const user = JSON.parse(value);
          console.log(user.email);
          if (user.email) {
            navigation.navigate("Dashboard");
          }
          // value previously stored
        }
      } catch (e) {
        console.log("error in async storage is : "+ e);
        // error reading value
      }
    }
    getData();
  }, []);
  const [email, setemail] = useState('');
  const [pswd, setpswd] = useState('');
  const [switcher, setswitcher] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView className="bg-[#4C7380] h-screen mb-0 w-full justify-between py-24 items-center">
        <View className="flex items-center">
          <Image source={require('../assets/energymatelogo.png')} />
          <Text className="text-[24px] text-white">EnergyMate</Text>
        </View>
        {
          switcher ? <SignupComp /> : <Signin />
        }
        
        <TouchableOpacity onPress={()=>setswitcher(!switcher)} >
          {
            switcher ? <Text className="text-center text-blue-200 ">Already have an account? Signin</Text> : <Text className="text-center text-blue-200 ">New User? Signup</Text>
          }
          
        </TouchableOpacity>
       
       
      </SafeAreaView>
    </ScrollView>
  );
};

export default Signup;
