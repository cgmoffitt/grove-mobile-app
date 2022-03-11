import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../../constants/themes";
import DropDownPicker from 'react-native-dropdown-picker';
import { friends } from "../../constants/defaultData";



const SelectFriends = ({
    route,
    navigation,
    friendsToReceive,
    setFriendsToReceive,
    removeFriend
}) => {

    friends.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    const items = [{ label: "All friends", value: "All friends" }].concat(friends.map(friend => ({ label: friend.name, value: friend.name })))


    return (
        <View style={{width:"100%", alignItems: "center"}}>
            <View style={[styles.dropDownContainer, commonStyles.shadow]}>
                <DropDownPicker
                    value={friendsToReceive}
                    items={items}
                    setValue={setFriendsToReceive}
                    onPress={() => console.log("pressed")}
                    // multipleText={multipleText}
                    open={true}
                    setOpen={() => { }}
                    textStyle={styles.textItalic}
                    style={{ display: "none" }}
                    dropDownContainerStyle={{ borderWidth: 0 }}
                    multiple={true}
                    ArrowDownIconComponent={() => <View></View>}
                    ArrowUpIconComponent={() => <View></View>}
                    searchable={true}
                    searchPlaceholder="Search..."
                    searchPlaceholderTextColor={TEXT_GRAY}
                    searchTextInputStyle={styles.textItalic}
                    searchContainerStyle={{ height: 50, }}
                    searchTextInputStyle={{ borderWidth: 0 }}
                />
            </View>
            <View style={styles.selectedSection}>
                <Text style={styles.selectedHeader}>Selected:</Text>
                <View style={styles.selectedFriends}>
                    {friendsToReceive.map(friend =>
                        <TouchableOpacity
                            key={friend}
                            style={commonStyles.darkGreenChip}
                            onPress={() => removeFriend(friend)}
                        >
                            <Text style={styles.selectedText}>{friend}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    nextButton: {
        paddingVertical: 8,
        position: "absolute",
        bottom: 20,
        width: "50%"
    },
    textHeader: {
        fontFamily: "OpenSansItalic",
        fontSize: 20,
        color: DARK_GREEN,
        marginVertical: 20
    },
    textItalic: {
        fontFamily: "OpenSans",
        fontSize: 18
    },
    dropDownContainer: {
        width: "80%",
        height: 250,
        backgroundColor: "white",
        borderRadius: 10,
        // alignItems:"center", 
        paddingTop: 10
    },
    selectedHeader: {
        fontFamily: "OpenSansBold",
        color: DARK_GREEN,
        fontSize: 16
    },
    selectedSection: {
        width: "80%",
        marginTop: 20,
        paddingHorizontal: 0
    },
    selectedFriends: {
        width: "100%",
        flexDirection: "row",
        marginTop: 10
    },
    selectedText: {
        fontFamily: "OpenSans",
        color: "white",
        fontSize: 16
    }
});

export default SelectFriends;