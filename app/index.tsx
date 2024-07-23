import { View, Text, ImageBackground, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3 text-regular">
                Simplifying meditation for everyone
              </Text>
            </View>
            <View></View>
            <StatusBar style="light"></StatusBar>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
