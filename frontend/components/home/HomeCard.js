import React, { useState } from "react";
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
    confirmActivity,
    deleteActivity
} from "../../redux/utils"
import { useDispatch, connect } from "react-redux";
import InfoModal from "../shared-components/InfoModal";
import { getStandardDate } from "../../util-functions";

const HomeCard = ({
    activity,
    type
}) => {
    const dispatch = useDispatch()

    const acceptMethod = (activity) => {
        confirmActivity(activity.id, dispatch)
    }
    const deleteMethod = (activity) => {
        deleteActivity(activity.id, dispatch)
    }

    const [infoModalVisible, setInfoModalVisible] = useState(false);

    return (
        <View style={{ width: "100%", alignItems: "center" }}>
            <InfoModal
                // navigation={navigation}
                activity={activity}
                selected={activity.confirmed ? activityHeader.UPCOMING : activityHeader.PENDING}
                // acceptMethod={acceptMethod}
                // declineMethod={declineMethod}
                // editMethod={editMethod}
                setModalVisible={setInfoModalVisible}
                modalVisible={infoModalVisible}
            />
            <View style={type == activityHeader.PENDING ? styles.pendingCard : styles.upcomingCard}>
                <Text style={styles.headerText}>{type} Hangout</Text>
                <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 1 }}>
                    <Image style={{ width: 35, height: 35 }} resizeMode={"contain"} source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}></Image>
                    <Text style={styles.activity}>{activity.title} with {activity.friend}</Text>
                </View>
                <Text style={styles.date}>{getStandardDate(activity.date)}</Text>
                <Text style={styles.location}>{activity.location}</Text>
                {type == activityHeader.PENDING &&
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            onPress={() => deleteMethod(activity)}
                        >
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
                <TouchableOpacity
                    onPress={() => setInfoModalVisible(true)}
                    style={{ position: "absolute", top: 10, right: 10 }}
                >
                    <Image
                        source={require("../../assets/icons/info.png")}
                        style={styles.infoButton}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    pendingCard: {
        backgroundColor: "#B7B1A4",
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
        marginLeft: 5
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
        fontSize: 18,
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
        fontSize: 18,
        textAlign: "center",
        color: "white"
    },
    infoButton: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginBottom: 20
    },


});

export default HomeCard;