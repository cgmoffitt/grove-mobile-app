import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import ActionButton from "../utils/ActionButton";
import routes from "../../constants/routes";
import { DARK_GREEN, TEXT_GRAY, CREME_WHITE, shadows } from "../../constants/themes.js";

const PlantActivityButton = ({
  navigation
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PLANT_ACTIVITYA)}>
      <View style={styles.flexParent}>
        <View Style={styles.flexChild}>
          <Image style={styles.icons} source={require("../../assets/images/plant-activity/plant.png")}></Image>
        </View>
        <View Style={styles.flexChild}>
          <Text style={styles.buttonText}>Plant an Activity</Text>
        </View>
        <View Style={styles.flexChild}>
          <Image style={styles.icons} source={require("../../assets/images/plant-activity/sun.png")}></Image>
        </View>

      </View> 
        
        
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding:'5%',
    borderRadius:10,
    width: '90%',
    backgroundColor: DARK_GREEN,
    shadowColor: shadows.shadowColor,
    shadowRadius: shadows.shadowRadius,
    shadowOpacity: shadows.shadowOpacity,
    shadowRadius: shadows.shadowRadius,
    shadowOffset: shadows.shadowOffset,
  },
  buttonText: {
    color: CREME_WHITE,
    fontFamily: "OpenSans",
    fontSize: 25,
    textAlign: "center"
  },
  icons:{
    width: 30,
    height: 30
  },
  flexParent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  flexChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PlantActivityButton;