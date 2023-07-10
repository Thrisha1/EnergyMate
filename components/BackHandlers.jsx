import { BackHandler, Alert } from "react-native";
import React, { useEffect } from "react";

const BackHandlers = () => {
  useEffect(() => {
    const handleBackPress = () => {
      Alert.alert(
        "Confirm Exit",
        "Are you sure you want to exit the app?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Exit", onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: true }
      );
      return true; // Prevent default back button behavior
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  return null;
};

export default BackHandlers; 