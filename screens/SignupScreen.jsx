import { View, Text, Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native"
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Signup = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: '513762154052-mvseuknbh8uk1o8fs8mpfebac00m2qus.apps.googleusercontent.com',
  });

  const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user_signin = auth().signInWithCredential(googleCredential);
    user_signin.then(() => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-background h-screen mb-0 flex-1 justify-between py-48 items-center">
      <View className="flex items-center">
        <Image
          source={require("../assets/energymatelogo.png")}
        />
        <Text className="text-[24px] text-white">EnergyMate</Text>
      </View>
      <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} className="bg-white h-[75px] w-[316px] rounded-3xl mt-8 flex-row justify-center items-center px-2 shadow-2xl m-0">
        <Image className="mr-2" source={require("../assets/googleicon.png")}/>
        <Text className="text-[24px]">Sign in with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Signup