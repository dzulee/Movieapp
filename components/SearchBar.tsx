import React from "react";
import { Image, TextInput, View } from "react-native";
import { icons } from "../constants/icons";
interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar = ({ placeholder, value, onChangeText }: Props) => {
    return (
        <View className="flex-row items-center bg-light-200 
            rounded-full px-5 py-4 mx-4 mt-4">
            <Image
                source={icons.search}
                className="size-5"
                resizeMode="contain"
                tintColor="#ab8bff"
            />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-3 text-sm text-light-200"
            />
        </View>
    );
};

export default SearchBar;