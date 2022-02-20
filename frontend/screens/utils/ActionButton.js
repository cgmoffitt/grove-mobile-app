import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { DARK_GREEN, CREME_WHITE, shadows} from "../../constants/themes";

const ActionButton = (props, {
     navigation
}) => {
    return(
      <Pressable style={styles.activeButton} onPress={props.onPressMethod}>
        <Text style={styles.buttonText}>{props.main}</Text>
      </Pressable>
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