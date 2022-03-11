import { React, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable, Modal } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { LIGHT_GREEN, VIBRANT_GREEN, shadows, DARK_CREME, BROWN, DARK_GREEN } from "../../constants/themes"
import ActivityItem from "./ActivityItem";

const NoActivities = ({
    selected
}) => {
    return (
        <View style={styles.activityItem}>
            <Text
                style={styles.noActivities}
            >
                No {selected.toLowerCase()} hangouts. Check back later!
            </Text>
        </View>
    )
}

export default ActivitiesCard = ({
    navigation,
    activities,
    selected,
    acceptMethod,
    declineMethod,
    editMethod
}) => {

    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [successPrompt, setSuccessPrompt] = useState("")
    const openSuccessModal = (prompt) => {
        setSuccessModalVisible(true)
        setSuccessPrompt(prompt)
        setTimeout(() => {
            setSuccessModalVisible(false)
        }, 3000)
    }

    return (
        <View
            style={[
                commonStyles.cremeCard,
                styles.card
            ]}
        >
            <SuccessModal
                modalVisible={successModalVisible}
                prompt={successPrompt}
                onClose={() => setSuccessModalVisible(false)}
            />
            {activities.length == 0
                &&
                <NoActivities selected={selected} />
            }
            {activities.map((activity, i) =>
                <View style={{width: '100%'}}>
                <ActivityItem
                    key={i}
                    activity={activity}
                    selected={selected}
                    navigation={navigation}
                    acceptMethod={acceptMethod}
                    declineMethod={declineMethod}
                    editMethod={editMethod}
                    openSuccessModal={openSuccessModal}
                />
                {i < activities.length - 1 && <View style={styles.thinLine}></View>}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "85%",
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
        backgroundColor: LIGHT_GREEN,
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
        fontFamily: "OpenSans"
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
    },
    thinLine: {
        borderBottomWidth: 1,
        borderBottomColor: "#E6E6E6",
        width: "100%"
    },
});