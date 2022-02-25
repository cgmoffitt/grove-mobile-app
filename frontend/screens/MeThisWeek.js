import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import commonStyles from "../styles/commonStyles"

const MeThisWeek = () => {
  return (
    <ImageBackground source={require("../assets/images/backgrounds/Me-This-Week.png")} resizeMode="cover" style={commonStyles.full}>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default MeThisWeek;