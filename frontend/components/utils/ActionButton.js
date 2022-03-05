import React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DARK_GREEN, CREME_WHITE, shadows, TEXT_GRAY} from "../../constants/themes";

const ActionButton = ({
    main,
    onPressMethod,
    active,
    style
}) => {
    return(
      <TouchableOpacity 
        style={[
          styles.button, 
          active ? styles.active : styles.deactive,
          style
        ]} 
        onPress={onPressMethod}
      >
        <Text style={styles.buttonText}>{main}</Text>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    active: {
      backgroundColor: DARK_GREEN,
    },
    deactive: {
      backgroundColor: TEXT_GRAY
    },
    button: {
      
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