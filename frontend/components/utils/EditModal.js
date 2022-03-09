import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN } from "../../constants/themes";
import XButton from "./XButton";


export default EditActivityModal = ({
    modalVisible,
    onClose,
    onSave,
    title,
    children
}) => {



    return (
        <Modal animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                onClose();
            }}>
            <View style={[commonStyles.center, { backgroundColor: 'rgba(0,0,0,0.7)' }]}>
                <View
                    style={[commonStyles.cremeCard, styles.editModal]}
                >
                    <Text style={[styles.headerText, { marginBottom: 20 }]}>{title}</Text>

                    {children}

                    <XButton onClose={onClose} />

                    <TouchableOpacity
                        onPress={onSave}
                        style={styles.saveButton}
                    >
                        <Text style={[styles.textBold, styles.textStyle, { width: 50, height: 30 }]}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    editModal: {
        width: "90%",
        height: "60%",
        marginBottom: 60,
        paddingTop: 20,
        justifyContent: "flex-start"
    },
    textRegular: {
        fontFamily: "OpenSans",
        fontSize: 14
    },
    textBold: {
        fontFamily: "OpenSansBold",
        fontSize: 16
    },
    headerText: {
        fontFamily: "OpenSansBold",
        color: DARK_GREEN,
        fontSize: 24
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: DARK_GREEN,
        position: "absolute",
        left:-10,
        top: -10,
        alignContent: "flex-start",
        justifyContent: "flex-start"
    },
    saveButton:{
        position: "absolute", 
        bottom: 10, 
        backgroundColor: DARK_GREEN, 
        paddingHorizontal: 20, 
        paddingTop: 5, 
        borderRadius: 10 
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});