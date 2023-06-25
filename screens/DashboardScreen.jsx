import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Text,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chart from "../components/Chart";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const longText =
    "Small changes today, brighter future tomorrow. Save electricity, save the world.".repeat(50);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const scrollDuration = 350000; // Adjust the duration for controlling the speed
  const navigation = useNavigation();

  useEffect(() => {
    const textWidth = longText.length * 8; // Adjust the width calculation based on your text styling
    const containerWidth = 100; // Adjust the container width based on your layout

    const startScroll = () => {
      scrollX.setValue(-containerWidth);
      Animated.timing(scrollX, {
        toValue: textWidth,
        duration: scrollDuration,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          startScroll(); // Restart the scroll once it reaches the end
        }
      });
    };

    startScroll();
  }, []);

  return (
    <>
      <SafeAreaView className="bg-[#4C7380] pt-7 h-screen flex-1">
        <Image
          source={require("../assets/Frame.png")}
          className="absolute h-80"
        />
        <Header heading="Energy Mate" />
        <View className="bg-[#D8E4E8] h-40 justify-around opacity-75 rounded-xl mx-5">
        <Image
          source={require("../assets/welcome.png")}
          className="mx-6"
        />
          <View className="flex-row bg-[#e0e4e3] mx-5 py-2 rounded-xl">
            <View className="flex-1">
              <Text className="text-[#404040] text-xl text-center">
                Your Total Bill
              </Text>
              <Text className="text-[#404040] text-xl text-center">₹ 5000,000</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[#404040] text-xl text-center">
                Units Used
              </Text>
              <Text className="text-[#404040] text-xl text-center">500</Text>
            </View>
          </View>
          {/* <TouchableOpacity className=" items-center flex-row justify-center">
            <Text className="bg-white py-2 px-3 rounded-xl text-[#4C7380] text-lg font-black text-center flex-row items-center justify-center">
              View for Individual Devices{" "}
              <View className="flex-row items-center justify-center w-full">
                <Ionicons name="arrow-forward" size={25} color="#4C7380" />
              </View>{" "}
            </Text>
          </TouchableOpacity> */}
        </View>
        <View className="my-7 px-6">
          <Image
            source={require("../assets/graph.png")}
            className=""
          />
        </View>
        <View className="bg-[#76929b] h-40 opacity-75 rounded-xl items-center flex flex-col justify-center mx-5 p-7">
          <View className="flex-row justify-center items-center">
            <Image
              source={require("../assets/bulb.png")}
              className="  w-20 h-20"
            />
            <View className=" flex-1">
              <Text className="text-white text-2xl font-bold text-center">
                How To Reduce Power Consumption !
              </Text>
            </View>
          </View>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            scrollEventThrottle={16}
            
          >
            <Animated.Text className="text-white text-lg" style={{ transform: [{ translateX: scrollX }] }}>
              {longText}
            </Animated.Text>
          </ScrollView>
        </View>
        <View className="bg-[#efeeee] h-2/5 w-full my-5 rounded-t-3xl p-5">
          <Text className=" text-2xl font-bold ">Quick Actions</Text>
          <View className="h-36 justify-between py-3 shadow-2xl">
            <TouchableOpacity className="w-full shadow-xl bg-white py-3 rounded-xl px-3 flex-row">
              <Ionicons name="today" size={24}></Ionicons>
              <Text className=" text-xl font-bold px-4">Manage Devices</Text>
              <View className="self-start pl-28">
                <Ionicons name="play" size={24}></Ionicons>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Bill")} className="w-full shadow-xl bg-white py-3 rounded-xl px-3 flex-row">
              <Ionicons name="today" size={24}></Ionicons>
              <Text className=" text-xl font-bold px-4">
                View Individual Devices
              </Text>
              <View className="self-start pl-14">
                <Ionicons name="play" size={24}></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* <Chart data={data} labels={labels} /> */}
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default DashboardScreen;
