import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { DARK_GREEN, TEXT_GRAY } from "../../constants/themes";

export default XButton = ({
    onClose,
}) => {

    return (
        <Pressable
            style={[styles.closeButton]}
            onPress={onClose}
        >
            <Text style={styles.textStyle}>x </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        paddingTop: 6,
        elevation: 2,
        backgroundColor: TEXT_GRAY,
        position: "absolute",
        left: -10,
        top: -10,
        alignContent: "flex-start",
        justifyContent: "flex-start"
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
});