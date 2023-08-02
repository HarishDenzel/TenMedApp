import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Primary_Button from "../../Components/Primary_Button";
import { fontFamily, fontSize } from "../../Assets/Constant/fontsAndColors";
export default function StartScreen(props) {
  return (
    <ImageBackground
      source={require("../../Assets/Images/Start.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 0.85, alignItems: "center", justifyContent: "flex-end" }}
      >
        <Text
          style={{
            fontFamily: fontFamily.Poppins_Bold,
            fontSize: fontSize.Large,
            textAlign: "center",
          }}
        >
          {"Stay safe and secure with \n our Emergency & SOS."}
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.Poppins_Regular,
            fontSize: fontSize.Small,
            textAlign: "center",
            color: "#2B2B2B",
          }}
        >
          {
            "Lorem Ipsum is simply dummy text of the \n printing and typesetting industry."
          }
        </Text>
      </View>

      <View style={styles.sub_con}>
        <Primary_Button
          label={"Get started"}
          onPress={() => props.navigation.navigate("LocationScreen")}
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
