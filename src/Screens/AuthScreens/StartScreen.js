import { StyleSheet, Text, View,ImageBackground } from "react-native";
import React from "react";
import Primary_Button from "../../Components/Primary_Button";
export default function StartScreen() {
  return (
    <ImageBackground source={require("../../Assets/Images/Start.png")} style={{ flex: 1 }}>
      <View style={{ flex: 0.85 }}></View>
      
      <View style={styles.sub_con}>
        <Primary_Button
         label={"Get started"}
         onPress={()=>alert("Get started Trigger")}
          />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sub_con: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
});
