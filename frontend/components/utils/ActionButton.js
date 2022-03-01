import React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DARK_GREEN, CREME_WHITE, shadows} from "../../constants/themes";

const ActionButton = ({
    main,
    onPressMethod,
    style
}) => {
    return(
      <TouchableOpacity style={[styles.activeButton, style]} onPress={onPressMethod}>
        <Text style={styles.buttonText}>{main}</Text>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    activeButton: {
      backgroundColor: DARK_GREEN,
      padding:'5%',
      borderRadius:10,
      width: '90%',
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
    }
});

export default ActionButton;