import { React, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable, Modal } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { LIGHT_GREEN, DARK_GREEN, VIBRANT_GREEN, shadows, DARK_CREME, BROWN, GREEN, TEXT_GRAY } from "../../constants/themes"
import InfoModal from "../shared-components/InfoModal";
import routes from "../../constants/routes";
import { ACTIVITY_IMG_SOURCES } from "../../constants/defaultData";
import { getStandardDate } from "../../util-functions";

const ReflectButton = ({
    navigation,
    activity
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routes.REFLECT, { activityId: activity.id })}
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
    navigation,
    activity
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routes.REFLECT, { activityId: activity.id })}
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
    acceptMethod,
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
                    openSuccessModal(`You've successfully accepted a hangout with ${activity.friend} for ${getStandardDate(activity.date)}`)
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

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <InfoModal
                navigation={navigation}
                activity={activity}
                selected={selected}
                acceptMethod={acceptMethod}
                declineMethod={declineMethod}
                editMethod={editMethod}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
            />

            <View
                style={[styles.activityItem]}
            >
                <View style={[styles.img, styles.activityChild]}>
                    <Image style={{ width: 35, height: 35 }} resizeMode={"contain"} source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}></Image>
                </View>
                <View
                    style={{ flex: 2.5, flexDirection: "column", justifyContent: "flex-start" }}
                >

                    <View style={styles.activityChild}>
                        <Text style={styles.titleText}>
                            {activity.friend &&
                                <Text style={[styles.titleText, { fontFamily: "OpenSansBold" }]}>
                                    {activity.friend} •{" "}
                                </Text>
                            }
                            {activity.title}
                        </Text>
                        <Text style={styles.dateText}>
                            {getStandardDate(activity.date)}
                        </Text>

                    </View>
                </View>
                {selected === "Past"
                    ?
                    !activity.reflected
                        ?
                        <ReflectButton activity={activity} navigation={navigation} />
                        :
                        <ViewButton activity={activity} navigation={navigation} />
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
                    declineMethod={() => declineMethod(activity)}
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
        justifyContent: "flex-start",
        marginVertical: 5,
    },
    titleText: {
        textAlign: "left",
        fontFamily: "OpenSans",
        fontSize: 17
    },
    dateText: {
        textAlign: "left",
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
        alignItems: "flex-start",
        paddingLeft: '2%',
        marginBottom: 3,
        marginLeft: 3
    },
    infoButton: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginBottom: 20
    },
    reflectButton: {
        backgroundColor: GREEN,
        width: 75,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    viewButton: {
        backgroundColor: "black",
        width: 75,
        borderRadius: 5,
        marginLeft: 5,
        paddingHorizontal: 10,
        paddingVertical: 3
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
    },
    maybeLaterButton: {
        backgroundColor: DARK_CREME,
        borderRadius: 5,
        paddingHorizontal: 10,
        minWidth: 110,
        minHeight: 30,
        justifyContent: "center",
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

});