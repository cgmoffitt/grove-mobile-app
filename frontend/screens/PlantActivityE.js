import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import { getStandardDate } from "../util-functions";
import SelectFriends from "../components/plant-activity/SelectFriends";



const PlantActivityE = ({
    route,
    navigation
}) => {
    const {activity, location, date, time} = route.params

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
                date={getStandardDate(new Date(date))}
                showLabels={true}
            />
            <Text style={styles.textHeader}>Select friends to send this activity to</Text>
            <SelectFriends  
                friendsToReceive={friendsToReceive}
                setFriendsToReceive={setFriendsToReceive}
                removeFriend={removeFriend}
            />
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