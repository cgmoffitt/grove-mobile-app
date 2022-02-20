import React from "react";
import { View, Pressable, Text, StyleSheet, Image, Dimensions } from "react-native";
import { DARK_GREEN, CREME_WHITE, shadows } from "../constants/themes";
import  ActionButton from "./utils/ActionButton";
const Home = ({
    navigation
}) => {
  return (
    <View style={styles.center}>
      <Image style={styles.plantLogo} source={require("../assets/images/plants/plant2.png")}></Image>
      <View style={styles.floatBottom}>
      <ActionButton main="🌿  Plant an Activity  ☀️" onPressMethod={() => navigation.navigate("PlantActivity")}
      ></ActionButton>

      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth * 0.8;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: CREME_WHITE,
    position: "relative"
  },
  plantLogo: {
    width:logoWidth,
    height:logoWidth,
    marginBottom:100
  },
  floatBottom: {
    width: '100%',
    justifyContent:"flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingTop: '10%',
    paddingBottom: '5%'
  }
});

export default Home;