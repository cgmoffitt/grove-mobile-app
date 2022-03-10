import React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable, Text, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import {
    CREME_WHITE,
    BROWN,
    DARKER_CREME,
    DARK_CREME,
    DARK_GREEN,
    LIGHT_GREEN,
    GREEN,
    TEXT_GRAY,
    YELLOW_GREEN
} from "../../constants/themes";
import {
    activityHeader,
    ACTIVITY_IMG_SOURCES
} from "../../constants/defaultData"
import {
    confirmActivity
} from "../../redux/utils"
import { useDispatch, connect } from "react-redux";

const HomeCard = ({
    activity,
    type
}) => {
    const dispatch = useDispatch()

    const acceptMethod = (activity) => {
        confirmActivity(activity.id, dispatch)
    }

    return (
        <View style={{ width: "100%", alignItems: "center" }}>
            <View style={type == activityHeader.PENDING ? styles.pendingCard : styles.upcomingCard}>
                <Text style={styles.headerText}>{type} Hangout</Text>
                <View style={{flexDirection: "row", alignItems:"center", paddingVertical:1}}>
                    <Image style={{ width: 35, height: 35 }} resizeMode={"contain"} source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}></Image>
                    <Text style={styles.activity}>{activity.title} with {activity.friend}</Text>
                </View>
                <Text style={styles.date}>{activity.date.toDateString()}</Text>
                <Text style={styles.location}>{activity.location}</Text>
                {type == activityHeader.PENDING &&
                    <View style={styles.buttons}>
                        <TouchableOpacity>
                            <View style={[styles.rejectButton, commonStyles.shadow]}>
                                <Text style={styles.rejectText}>Maybe Later</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => acceptMethod(activity)}
                        >
                            <View style={[styles.acceptButton, commonStyles.shadow]}>
                                <Text style={styles.acceptText}>Accept</Text>
                            </View>
                        </TouchableOpacity>
                    </View>}
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    pendingCard: {
        backgroundColor: DARKER_CREME,
        width: "90%",
        borderRadius: 10,
        padding: 25
    },
    upcomingCard: {
        backgroundColor: YELLOW_GREEN,
        width: "90%",
        borderRadius: 10,
        padding: 25
    },
    headerText: {
        fontFamily: "OpenSansBold",
        fontSize: 16,
        color: DARK_GREEN,
        marginBottom: 3
    },
    activity: {
        fontFamily: "OpenSans",
        fontSize: 20,
        marginLeft:5
    },
    date: {
        fontFamily: "OpenSans",
        fontSize: 14
    },
    location: {
        fontFamily: "OpenSansItalic",
        fontSize: 14
    },
    buttons: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rejectButton: {
        borderRadius: 5,
        backgroundColor: DARK_CREME,
        width: 140,
        padding: 5,
    },
    rejectText: {
        fontFamily: "OpenSans",
        fontSize: 16,
        textAlign: "center",
        color: TEXT_GRAY
    },
    acceptButton: {
        borderRadius: 5,
        backgroundColor: GREEN,
        width: 140,
        padding: 5,
    },
    acceptText: {
        fontFamily: "OpenSans",
        fontSize: 16,
        textAlign: "center",
        color: "white"
    }


});

export default HomeCard;