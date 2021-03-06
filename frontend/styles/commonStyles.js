import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { CREME_WHITE, DARK_GREEN, shadows, smallShadows } from "../constants/themes";


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
    cremeCard: {
        borderRadius: 15,
        backgroundColor: CREME_WHITE,
        padding: "3%",
        justifyContent: "center",
        alignItems: "center"
    },
    shadow: {
        shadowColor: shadows.shadowColor,
        shadowRadius: shadows.shadowRadius,
        shadowOpacity: shadows.shadowOpacity,
        shadowRadius: shadows.shadowRadius,
        shadowOffset: shadows.shadowOffset,
    },
    smallShadow:{
        shadowColor: smallShadows.shadowColor,
        shadowRadius: smallShadows.shadowRadius,
        shadowOpacity: smallShadows.shadowOpacity,
        shadowRadius: smallShadows.shadowRadius,
        shadowOffset: smallShadows.shadowOffset,
    },
    darkGreenChip: {
        backgroundColor: DARK_GREEN,
        marginLeft: 5,
        borderRadius: 20,
        padding: 10
    }
});

export default styles