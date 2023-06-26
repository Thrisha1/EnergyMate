import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const DevicePreview = ({name,voltage}) => {
    return (
        <View className="bg-em-green-light rounded-lg m-2 p-3 flex-row justify-between">
            <View>
                <Text className="text-white text-2xl uppercase">{name}</Text>
                <Text className="text-white text-xl">{voltage} volts</Text>
            </View>
            <TouchableOpacity className="bg-[#FF5757] flex justify-center items-center p-4 rounded-lg">
                <Text className="text-white text-3xl m-0">
                    <Ionicons name="trash-outline" size={30}></Ionicons>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default DevicePreview;
