import { View, Text, ImageBackground, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";

import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "../components/AppGradient";

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3 text-regular">
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
            <StatusBar style="light"></StatusBar>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
