import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import DropDownPicker from 'react-native-dropdown-picker';
import { friends } from "../constants/defaultData";



const PlantActivityE = ({
    route,
    navigation
}) => {
    const {activity, location, date, time} = route.params

    friends.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    const items = [{ label: "All friends", value: "All friends" }].concat(friends.map(friend => ({ label: friend.name, value: friend.name })))
    const [friendsToReceive, setFriendsToReceive] = useState([])

    const removeFriend = (friend) => {
        const indexToRemove = friendsToReceive.findIndex(thisFriend => thisFriend === friend)
        const nextFriends = friendsToReceive.splice(0,indexToRemove).concat(friendsToReceive.splice(indexToRemove + 1))
        setFriendsToReceive(nextFriends)
    }


    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.FRIENDS}
                activity={activity}
                location={location}
                date={new Date(date).toDateString()}
                showLabels={true}
            />
            <Text style={styles.textHeader}>Select friends to send this activity to</Text>
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
            <ActionButton
                active={friendsToReceive.length > 0}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYF, {activity: activity, location: location, date: date, friends: friendsToReceive, time: time})}
            />
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
        marginTop:20,
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

export default PlantActivityE;