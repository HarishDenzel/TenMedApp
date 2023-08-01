import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  width,
  height,
  LG_BG_THEME,
  fontSize,
  Basic_Viewdimension,
} from "../Assets/Constant/fontsAndColors";

export default function Primary_Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn} {...props}>
      <Text
        style={{
          fontSize: fontSize.Large,
          fontWeight: "bold",
          color: LG_BG_THEME.App_Text_White,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: (height / 100) * 6,
    width: (width / 100) * 90,
    backgroundColor: LG_BG_THEME.APPTHEME_BG_2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
  },
});
