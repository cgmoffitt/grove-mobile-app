import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN } from "../../constants/themes";

export default NumHangouts = ({
    incrementNumHangouts,
    decrementNumHangouts,
    numHangouts
}) => {
    return (
        <View
            style={[commonStyles.cremeCard, { marginTop: 10, width: "90%" }]}
        >
            <Text
                style={[styles.headerText, { marginBottom: 10 }]}
            >Ideally, I'd like to receive
            </Text>
            <View style={styles.thinLine}></View>
            <View style={[{ height: 50, marginTop: 10 }, commonStyles.flexCenter, commonStyles.row]}>
                <TouchableOpacity
                    style={styles.plusMinusContainer}
                    onPress={decrementNumHangouts}
                >
                    <Text style={[styles.plusMinus, styles.bold]}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.plusMinusContainer]}
                    onPress={incrementNumHangouts}
                >
                    <Text style={[styles.plusMinus, styles.bold]}>+</Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10 }}>
                    <Text style={[styles.headerText, styles.bold]}>{numHangouts}</Text>
                    <Text style={[styles.headerText, { color: "black" }]}> automated hangouts</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    bold: {
        fontFamily: "OpenSansBold",
    },
    headerText: {
        fontFamily: "OpenSans",
        color: DARK_GREEN,
        fontSize: 18
    },

    thinLine: {
        borderBottomWidth: 1,
        borderBottomColor: "#E6E6E6",
        width: "100%"
    },
    plusMinus: {
        fontFamily: "OpenSans",
        color: DARK_GREEN,
        fontSize: 22
    },
    plusMinusContainer: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: DARK_GREEN,
        borderRadius: 10,
        width: 30,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginRight: 5
    },
});