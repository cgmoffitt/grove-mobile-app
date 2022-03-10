import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Modal, Button } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN } from "../../constants/themes";
import FriendCard from "../../components/shared-components/FriendCard";
import { friends } from "../../constants/defaultData";
import DropDownPicker from 'react-native-dropdown-picker';
import MultipleSelectModal from "../utils/MultipleSelectModal"

const AddFriendModal = ({
    closeModal,
    focusFriends,
    updateFocusFriends
}) => {
    friends.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    const items = friends.map(friend => ({ label: friend.name, value: friend.name }))

    return (
        <MultipleSelectModal
            closeModal={closeModal}
            title="Select up to 3 friends to focus on this week"
            value={focusFriends.map(friend => friend.name)}
            items={items}
            onSelectItem={(selected) => updateFocusFriends(selected)}
            placeholder="Select up to 3 friends"
            multipleText={`${focusFriends.length} friends selected`}
        />
    )
}

export default FocusFriendships = ({
    focusFriends,
    updateFocusFriends,
    removeFriend
}) => {

    const [addFriendModalVisible, setAddFriendModalVisible] = useState(false)

    const closeModal = () => setAddFriendModalVisible(false)
    const openModal = () => setAddFriendModalVisible(true)

    return (
        <View
            style={[commonStyles.cremeCard, { marginTop: 30, width: "90%" }]}>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={addFriendModalVisible}
                onRequestClose={() => {
                    setAddFriendModalVisible(!addFriendModalVisible);
                }}>
                <AddFriendModal
                    closeModal={closeModal}
                    focusFriends={focusFriends}
                    updateFocusFriends={updateFocusFriends}
                />
            </Modal>
            <Text
                style={[styles.headerText, { marginBottom: 10 }]}
            >Friendships to focus on this week
            </Text>
            <View style={styles.thinLine}></View>
            <View style={[styles.focusRow]}>
                {focusFriends.map(friend =>
                    <FriendCard
                        name={friend.name}
                        plantLevel={friend.plant}
                        onPressMethod={() => { }}
                        removable={true}
                        onPressMethod={() => removeFriend(friend)}
                        size={"Small"}
                    />
                )}
                <TouchableOpacity
                    style={[styles.plusMinusContainer, { alignSelf: "center", marginBottom: 15 }]}
                    onPress={openModal}
                >
                    <Text style={[styles.plusMinus, styles.bold]}>+</Text>
                </TouchableOpacity>
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
    focusRow: {
        flexDirection: "row",
        width: "100%",
    },
    textRegular: {
        fontFamily: "OpenSans",
        fontSize: 14
    }
});