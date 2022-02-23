import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { CREME_WHITE, DARK_GREEN } from "../constants/themes";


const styles = StyleSheet.create({
    full: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    row: {
        flexDirection: "row"
    },
    flexCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundCreme: {
        backgroundColor: CREME_WHITE 
    },
    backgroundDarkGreen: {
        backgroundColor: DARK_GREEN
    },
    search: {
        backgroundColor: "#FFFFFF",
        color: DARK_GREEN,
    }
});

export default styles