import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const Signup = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "558838348481-okn12mo9ibb8p7vngr0vjpihirbocdv6.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === 'success') {
      getUserInfo(response.params.id_token);
    }
  }, [response]);

  const signInWithGoogleAsync = async () => {
    if (!userInfo) {
      promptAsync();
    }
  }

  const signOutAsync = async () => {
    setUserInfo(null);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.ok) {
        const user = await response.json();
        setUserInfo(user);
      } else {
        console.error('Error retrieving user info:', response.status);
        // Handle the error appropriately
      }
    } catch (error) {
      console.error('Error retrieving user info:', error);
      // Handle the error appropriately
    }
  };

  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="bg-[#4C7380] h-screen mb-0 flex-1 justify-between py-48 items-center">
        <>
          <View className="flex items-center">
            <Image
              source={require("../assets/energymatelogo.png")}
            />
            <Text className="text-[24px] text-white">EnergyMate</Text>
          </View>
          <Button title="Sign In With Google" onPress={signInWithGoogleAsync} />
          <Button title="Sign Out" onPress={signOutAsync} />

          {userInfo ? (
            <View>
              <Text>{userInfo?.name}</Text>
              <Text>{userInfo?.email}</Text>
            </View>
          ) : null}
        </>
      </SafeAreaView>
    </>
  );
};

export default Signup;
