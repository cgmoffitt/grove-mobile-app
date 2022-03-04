import { React, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable, Modal } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { LIGHT_GREEN, VIBRANT_GREEN, shadows, DARK_CREME, BROWN, GREEN } from "../../constants/themes"
import InfoModal from "./InfoModal";

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
const ViewButton = ({
    navigation
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Reflect")}
        >
            <View
                style={styles.viewButton}
            >
                <Text style={styles.reflectText}>View</Text>
            </View>
        </TouchableOpacity>
    )
}

const AcceptButton = ({
    navigation,
    acceptMethod
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
    navigation,
    declineMethod
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
    navigation,
    acceptMethod,
    declineMethod,
    openSuccessModal,
    activity
}) => {


    return (
        <View style={styles.buttonParent}>
            <View style={styles.buttonChild}>
                <MaybeLaterButton declineMethod={declineMethod} navigation={navigation} />
            </View>
            <View style={styles.buttonChild}>
                <AcceptButton acceptMethod={() => {
                    acceptMethod()
                    openSuccessModal(`You've successfully accepted a hangout with ${activity.friend} for ${activity.date.toDateString()}`)
                }} navigation={navigation} />
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

export default ActivityItem = ({
    navigation,
    activity,
    selected,
    acceptMethod,
    declineMethod,
    editMethod,
    openSuccessModal
}) => {

    const ACTIVITY_IMG_SOURCES = {
        tennis: require("../../assets/images/activity-icons/tennis.png"),
        coffee: require("../../assets/images/activity-icons/coffee.png"),
        hiking: require("../../assets/images/activity-icons/hiking.png"),
        ["bar hopping"]: require("../../assets/images/activity-icons/bar-hopping.png")
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <InfoModal
                    navigation={navigation}
                    activity={activity}
                    selected={selected}
                    acceptMethod={acceptMethod}
                    declineMethod={declineMethod}
                    editMethod={editMethod}
                    setModalVisible={setModalVisible}
                />
            </Modal>
            <View
                style={styles.activityItem}
            >
                <View style={styles.img}>
                    <Image style={{ width: 25 }} resizeMode={"contain"} source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}></Image>
                </View>

                <View
                    style={{ flex: 2, flexDirection: "column", justifyContent: "center" }}
                >
                    <Text style={styles.titleText}>
                        {activity.friend &&
                            <Text style={styles.titleText}>
                                {activity.friend} •{" "}
                            </Text>
                        }
                        {activity.title}
                    </Text>
                    <Text style={styles.dateText}>
                        {activity.date.toDateString()}
                    </Text>
                </View>
                {selected === "Past"
                    ?
                    !activity.reflected
                        ?
                        <ReflectButton navigation={navigation} />
                        :
                        <ViewButton navigation={navigation} />
                    :
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={styles.centeredView}
                    >
                        <Image
                            source={require("../../assets/icons/info.png")}
                            style={styles.infoButton}
                        />
                    </TouchableOpacity>
                }

            </View>
            {(selected === "Pending" && !activity.accepted)
                ? <AcceptOrDecline
                    acceptMethod={() => acceptMethod(activity)}
                    declineMethod={declineMethod}
                    navigation={navigation}
                    activity={activity}
                    openSuccessModal={openSuccessModal}
                />
                : <View></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
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
    infoButton: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginBottom: 15
    },
    reflectButton: {
        backgroundColor: GREEN,
        width: 80,
        borderRadius: 5,
        paddingHorizontal: 10,
        shadowColor: shadows.shadowColor,
        shadowRadius: shadows.shadowRadius,
        shadowOpacity: shadows.shadowOpacity,
        shadowRadius: shadows.shadowRadius,
        shadowOffset: shadows.shadowOffset,
    },
    viewButton: {
        backgroundColor: "black",
        width: 80,
        borderRadius: 5,
        marginLeft: 5,
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
        backgroundColor: GREEN,
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
    }
});