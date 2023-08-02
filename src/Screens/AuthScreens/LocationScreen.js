import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  fontFamily,
  fontSize,
  height,
  width,
} from "../../Assets/Constant/fontsAndColors";
import Primary_Button from "../../Components/Primary_Button";

export default function LocationScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ flex: 0.5 }}>
        <Image
          style={{
            height: (height / 100) * 40,
            width: (width / 100) * 50,
            resizeMode: "contain",
          }}
          source={require("../../Assets/Images/Location.png")}
        />
      </View>
      <View style={{ flex: 0.2, alignItems: "center" }}>
        <Text
          style={{
            fontSize: fontSize.ExtraLarge,
            fontFamily: fontFamily.Poppins_Bold,
            color: "#2B2B2B",
          }}
        >
          Enable Location
        </Text>
        <Text
          style={{
            fontSize: fontSize.Small,
            fontFamily: fontFamily.Poppins_Regular,
            textAlign: "center",
          }}
        >
          {" "}
          {"Chooose ypur location to start find the \n request around you."}
        </Text>
      </View>
      <View style={{ flex: 0.3, alignItems: "center", paddingVertical: 20 }}>
        <Primary_Button label={"Allow Access"} />
        <Text
          style={{
            color: "#F15A2A",
            fontFamily: fontFamily.Poppins_Bold,
            fontSize: fontSize.Small,
            paddingVertical: 20,
          }}
        >
          {"Skip For Now"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
