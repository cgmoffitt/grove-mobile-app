import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN } from "../../constants/themes";



export default SuccessModal = ({
  setModalVisible,
  prompt
}) => {
  return (
    <View style={[commonStyles.center, { backgroundColor: 'rgba(0,0,0,0.7)' }]}>
      <View style={styles.modalView}>
        <Text style={[styles.modalHeaderText, {alignSelf: "center"}]}>Success!</Text>
        <Text style={styles.modalText}>{prompt}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.textStyle}>x </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
      alignItems: "center",
    },
    accordionHeaderText: {
      fontFamily: "OpenSans",
      color: "black",
      fontSize: 18
    },
    accordionSection: {
      width: "100%",
      backgroundColor: CREME_WHITE
    },
    card: {
      width: "80%",
    },
    modalView: {
      margin: 20,
      backgroundColor: LIGHT_GREEN,
      borderRadius: 20,
      padding: 35,
      minWidth: '85%',
      minHeight: '25%',
      alignItems: "flex-start",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: DARK_GREEN,
      position: "absolute",
      margin: -10,
      alignContent: "flex-start",
      justifyContent: "flex-start"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalHeaderText: {
      textAlign: "center",
      fontSize: 20,
      color: DARK_GREEN,
      fontFamily: "OpenSansBold"
    },
    modalText: {
      textAlign: "center",
      fontSize: 18,
      color: "black",
      fontFamily: "OpenSans"
    }
  });