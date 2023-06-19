import { SafeAreaView,ScrollView, View, Image, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardScreen = () => {
  return (
    <SafeAreaView className="">
      <Header />
      <Ionicons name="arrow-back-outline" size={32} color="" />

    </SafeAreaView>
  );
};

export default DashboardScreen;
