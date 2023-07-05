import React, { useState } from 'react';
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

const Signup = () => {
  const [email, setemail] = useState('');
  const [pswd, setpswd] = useState('');
  const [switcher, setswitcher] = useState(false);
  const navigation = useNavigation();

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
