// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import BillScreen from './screens/BillScreen';
import AvailableDevicesScreen from './screens/AvailableDevicesScreen';
import DeviceDetailsScreen from './screens/DeviceDetailsScreen';
import RegisterDevicesScreen from './screens/RegisterDevicesScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Dashboard" component={DashboardScreen}  />
        <Stack.Screen name="AvailableDevices" component={AvailableDevicesScreen}/>
        <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
        <Stack.Screen name="RegisterDevices" component={RegisterDevicesScreen} />
        <Stack.Screen name="Bill" component={BillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;