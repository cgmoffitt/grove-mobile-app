import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { CREME_WHITE } from "../constants/themes";


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    backgroundCreme: {
        backgroundColor: CREME_WHITE 
    }
});

export default styles