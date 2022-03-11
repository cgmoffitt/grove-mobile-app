import { React, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable, Modal } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { LIGHT_GREEN, VIBRANT_GREEN, shadows, DARK_CREME, BROWN, DARK_GREEN, CREME_WHITE } from "../../constants/themes"
import { ACTIVITY_IMG_SOURCES } from "../../constants/defaultData";
import XButton from "../utils/XButton";
import { getStandardDate } from "../../util-functions";

const ReflectButton = ({
    navigation
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Reflect")}
        >
            <View
                style={styles.reflectButton}
            >
                <Text style={styles.reflectText}>Reflect</Text>
            </View>
        </TouchableOpacity>
    )
}

const AcceptButton = ({
    navigation, acceptMethod
}) => {
    return (
        <TouchableOpacity
            onPress={acceptMethod}
        >
            <View
                style={styles.acceptButton}
            >
                <Text style={styles.reflectText}>Accept</Text>
            </View>
        </TouchableOpacity>
    )
}
const MaybeLaterButton = ({
    navigation, declineMethod
}) => {
    return (
        <TouchableOpacity
            onPress={declineMethod}
        >
            <View
                style={styles.maybeLaterButton}
            >
                <Text style={styles.maybeLaterText}>Maybe Later</Text>
            </View>
        </TouchableOpacity>
    )
}

const AcceptOrDecline = ({
    navigation, acceptMethod, declineMethod
}) => {
    return (
        <View style={styles.buttonParent}>
            <View style={styles.buttonChild}>
                <MaybeLaterButton declineMethod={declineMethod} navigation={navigation} />
            </View>
            <View style={styles.buttonChild}>
                <AcceptButton acceptMethod={acceptMethod} navigation={navigation} />
            </View>
        </View>
    )
}

const EditButton = ({
    navigation, editMethod
}) => {
    return (
        <TouchableOpacity
            onPress={editMethod}
        >
            <View
                style={styles.maybeLaterButton}
            >
                <Text style={styles.maybeLaterText}>Edit</Text>
            </View>
        </TouchableOpacity>
    )
}

const getTimeString = (date) => {
    const time = new Date(date)
    const ampm = time.getHours() > 11 ? "pm" : "am"
    const hour = (time.getHours() % 12 === 0 ? 12 : time.getHours() % 12) 
    const minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    return hour + ":" + minute + ampm
}

export default InfoModal = ({
    navigation,
    activity,
    selected,
    acceptMethod,
    declineMethod,
    editMethod,
    setModalVisible,
    modalVisible
}) => {

    return (

        <Modal animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
            <View style={[commonStyles.center, { backgroundColor: 'rgba(0,0,0,0.7)' }]}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{selected} Hangout</Text>
                    <View style={styles.activityParent}>
                        <View style={styles.activityChild}>
                            <Image style={{ width: 45, height: 45, padding: '5%' }} source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}></Image>
                        </View>
                        <View style={styles.activityChild}>
                            <Text style={styles.activityText}>
                                {activity.title}
                                {activity.friend &&
                                    <Text style={styles.activityText}>
                                        {" "}with{" "}{activity.friend}
                                    </Text>
                                } </Text>
                        </View>
                    </View>
                    <Text style={styles.activitySubtext}>When: {getStandardDate(activity.date) + ", " + getTimeString(activity.date)}</Text>
                    <Text style={styles.activitySubtext}>Where: {activity.location}</Text>
                    {(selected === "Upcoming" || selected === "Planted")
                        ? <View style={{ paddingTop: '5%' }}><EditButton editMethod={editMethod} navigation={navigation} /></View>
                        : (selected === "Pending" && !activity.accepted)
                            ? <AcceptOrDecline acceptMethod={acceptMethod} declineMethod={declineMethod} navigation={navigation} />
                            : <View style={{ paddingTop: '5%' }} ><ReflectButton navigation={navigation} /></View>
                    }
                    <XButton    
                        onClose={() => setModalVisible(false)}
                    />
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    card: {
        width: "80%",
    },
    activityItem: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5
    },
    titleText: {
        textAlign: "center",
        fontFamily: "OpenSans",
        fontSize: 18
    },
    dateText: {
        textAlign: "center",
        fontFamily: "OpenSans",
        fontSize: 14
    },
    noActivities: {
        textAlign: "center",
        fontFamily: "OpenSansItalic",
        fontSize: 16
    },
    img: {
        flex: 1,
        alignItems: "center",
    },
    reflectButton: {
        backgroundColor: LIGHT_GREEN,
        borderRadius: 5,
        paddingHorizontal: 10,
        shadowColor: shadows.shadowColor,
        shadowRadius: shadows.shadowRadius,
        shadowOpacity: shadows.shadowOpacity,
        shadowRadius: shadows.shadowRadius,
        shadowOffset: shadows.shadowOffset,
    },
    reflectText: {
        fontFamily: "OpenSans",
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
    acceptButton: {
        backgroundColor: VIBRANT_GREEN,
        borderRadius: 5,
        paddingHorizontal: 10,
        minWidth: 110,
        minHeight: 30,
        justifyContent: "center",
        shadowColor: shadows.shadowColor,
        shadowRadius: shadows.shadowRadius,
        shadowOpacity: shadows.shadowOpacity,
        shadowRadius: shadows.shadowRadius,
        shadowOffset: shadows.shadowOffset,
    },
    maybeLaterButton: {
        backgroundColor: DARK_CREME,
        borderRadius: 5,
        paddingHorizontal: 10,
        minWidth: 110,
        minHeight: 30,
        justifyContent: "center",
        shadowColor: shadows.shadowColor,
        shadowRadius: shadows.shadowRadius,
        shadowOpacity: shadows.shadowOpacity,
        shadowRadius: shadows.shadowRadius,
        shadowOffset: shadows.shadowOffset,
    },
    maybeLaterText: {
        fontFamily: "OpenSans",
        color: BROWN,
        textAlign: "center",
        fontSize: 18
    },
    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: '5%'
    },
    buttonChild: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "3%",
        paddingTop: '3%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: CREME_WHITE,
        borderRadius: 20,
        padding: 35,
        minWidth: '85%',
        minHeight: '25%',
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: DARK_GREEN,
        position: "absolute",
        margin: -10,
        alignContent: "flex-start",
        justifyContent: "flex-start"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center",
        fontSize: 18,
        color: DARK_GREEN,
        fontFamily: "OpenSansBold"
    },
    activityParent: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: '5%'
    },
    activityChild: {
        display: "flex",
        flexDirection: "row",
        paddingRight: "5%"
    },
    activityText: {
        color: "black",
        fontSize: 20,
        fontFamily: "OpenSans"
    },
    activitySubtext: {
        color: "black",
        fontWeight: "bold",
        fontFamily: "OpenSans",
        fontSize: 14
    }
});