import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

 const Details=()=> {
    const { id } =useLocalSearchParams();
    return (
        <View className="flex-1 justify-center items-center">
        <Text className="text-5xl text-dark-200 font-bold">Movie details: {id}</Text>
        </View>
    )
}
export default Details;
