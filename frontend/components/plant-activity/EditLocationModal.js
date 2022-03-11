import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Modal, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN } from "../../constants/themes";
import LocationsMap from "./LocationsMap";
import EditModal from "../utils/EditModal";



export default EditLocationModal = ({
    modalVisible,
    onClose,
    curNearbyIndex,
    setCurNearbyIndex,
    selectedIndex,
    setSelectedIndex
}) => {

    return (
        <EditModal
            modalVisible={modalVisible}
            onClose={onClose}
            onSave={() => onSave()}
            title={"Edit Location"}
            saveActive={selectedIndex !== -1}
        >
            <LocationsMap
                curNearbyIndex={curNearbyIndex}
                setCurNearbyIndex={setCurNearbyIndex}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                containerStyle={{ height: "70%" }}
                locationCardContainerStyle={{ width: "90%" }}
            />
        </EditModal>
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
});