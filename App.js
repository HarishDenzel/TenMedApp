
import * as React from "react";
import RootNavigator from "./src/RootNavigation";
import { SafeAreaView, View } from "react-native";


export default function App(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    </SafeAreaView>
  );
}
