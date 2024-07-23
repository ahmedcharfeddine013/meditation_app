import { View, Text, ImageBackground } from "react-native";

import beachImage from "@/assets/meditation-images/beach.webp";

export default function App() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <Text>Home Screen</Text>
      </ImageBackground>
    </View>
  );
}
