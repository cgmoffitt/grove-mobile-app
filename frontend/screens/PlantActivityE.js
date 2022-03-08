import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import DropDownPicker from 'react-native-dropdown-picker';
import { friends } from "../constants/defaultData";



const PlantActivityE = () => {

    friends.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    const items = [{ label: "All friends", value: "All friends" }].concat(friends.map(friend => ({ label: friend.name, value: friend.name })))
    const [value, setValue] = useState([])
    const [friendsToReceive, setFriendsToReceive] = useState([])
    const updateFriends = (selected) => {
        console.log("hi")
        const nextFriends = selected.map(friendItem => friends.find(friend => friend.name === friendItem.value))
        setFriendsToReceive(nextFriends)
    }

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.FRIENDS}
                activity="Tennis"
                location="EVGR Courts"
                date="Mon, March 3"
            />
            <Text style={styles.textHeader}>Select friends to send this activity to</Text>
            <View style={[styles.dropDownContainer, commonStyles.shadow]}>
                <DropDownPicker
                    value={value}
                    items={items}
                    setValue={setValue}
                    onPress={() => console.log("pressed")}
                    onChangeValue={(value) => console.log("change value: ", value)}
                    // multipleText={multipleText}
                    open={true}
                    setOpen={() => { }}
                    textStyle={styles.textItalic}
                    style={{display: "none"}}
                    dropDownContainerStyle={{borderWidth:0}}
                    multiple={true}
                    ArrowDownIconComponent={() => <View></View>}
                    ArrowUpIconComponent={() => <View></View>}
                    searchable={true}
                    searchPlaceholder="Search for a friend..."
                    searchPlaceholderTextColor={DARK_GREEN}
                    searchTextInputStyle={styles.textItalic}
                    searchContainerStyle={{height: 50,}}
                    searchTextInputStyle={{borderWidth: 0}}
                />
            </View>

            <ActionButton
                active={true}
                main={"Next"}
                style={styles.nextButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    activities: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap"
    },
    activityCard: {
        marginHorizontal: 20
    },
    nextButton: {
        paddingVertical: 8,
        position: "absolute",
        bottom: 20,
        width: "50%"
    },
    textHeader: {
        fontFamily: "OpenSansItalic",
        fontSize: 22,
        color: DARK_GREEN,
        marginVertical: 30
    },
    textItalic: {
        fontFamily: "OpenSans",
        fontSize: 18
    },
    dropDownContainer: {
        width:"80%", 
        height:250, 
        backgroundColor: "white", 
        borderRadius: 10, 
        // alignItems:"center", 
        paddingTop:10
    }
});

export default PlantActivityE;