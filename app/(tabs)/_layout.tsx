import { Tabs } from "expo-router";
import React from "react";
import { Image,View, ImageBackground, Text } from "react-native";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const TabIcon=({focused, icon, title}: any)=>{
    if(!focused){
        return (
            <View className="size-full flex-1 justify-center items-center mt-4 rounded-full">
                <Image source={icon} tintColor="#000" className="size-5"/>
            </View>
        )
    }
    return (
            <ImageBackground
                        source={images.highlights}
                        className="flex flex-row w-full flex-1 items-center 
                        justify-center min-w-[112px] min-h-[58px] mt-4 rounded-full overflow-hidden"
            >
                            <Image source={icon} tintColor="#151312"
                                className="size-5 "
                            />
                            <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
             </ImageBackground>
    )
}
 const _Layout=()=> {
   
    return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'

        },
        tabBarStyle:{
            backgroundColor:'#0f0d23',
            borderRadius:50,
            marginHorizontal:10,
            marginBottom:36,
            height:52,
            position:'absolute',
            overflow:'hidden',
            borderWidth:1,
            borderColor:'#A8B5DB',
        }
    }}>
        <Tabs.Screen
            name="index"
            options={{
                title:'Home',
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.home} title="Home"/>
                )
            }}
        />
       <Tabs.Screen
            name="search"
            options={{
                title:'Search',
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.search} title="Search"/>
                )
            }}
        />
     
        <Tabs.Screen
            name="saved"
            options={{
                title:'Saved',
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.saved} title="Saved"/>
                )
            }}
        />
         <Tabs.Screen
            name="profile"
            options={{
                title:'Profile',
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.person} title="Profile"/>
                )
            }}
        />
    </Tabs>
    )
      
}
export default _Layout;
