import { SafeAreaView,ScrollView, View, Image, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardScreen = () => {
  return (
    <SafeAreaView className="bg-[#006156] pt-7 h-screen pb-0">
      <Header />
      <Footer />
    </SafeAreaView>
  );
};

export default DashboardScreen;
