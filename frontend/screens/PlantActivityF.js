import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps, activityHeader, MY_ID } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import routes from "../constants/routes";
import { addActivity, setActivityType } from "../redux/utils";
import { useDispatch } from "react-redux";
import SuccessModal from "../components/utils/SuccessModal";

const ConfirmCard = ({
    title,
    selection,
    route,
    navigation
}) => {
    return (
        <View style={styles.confirmCard}>
            <View style={styles.column}>
                <Text style={styles.confirmTitle}>{title}</Text>
                <Text style={styles.selection}>{selection}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    switch (title) {
                        case ("Activity"):
                            navigation.navigate(routes.PLANT_ACTIVITYB)
                            break;
                        case ("Location"):
                            navigation.navigate(routes.PLANT_ACTIVITYC)
                            break;
                        case ("Date" || "Time"):
                            navigation.navigate(routes.PLANT_ACTIVITYD)
                            break;
                        case ("Send To"):
                            navigation.navigate(routes.PLANT_ACTIVITYE)
                            break;
                    }
                }}
            >
                <Image style={[{ width: 35, height: 35 }, commonStyles.shadow]} source={require("../assets/images/plant-activity/pen.png")} />
            </TouchableOpacity>

        </View>
    )
}

const PlantActivityF = ({
    navigation,
    route
}) => {

    const { activity, location, date, friends, time } = route.params
    const dispatch = useDispatch()
    const startTime = new Date(time[0])
    const endTime = new Date(time[1])
    const timeString = (startTime.getHours() % 12) + ":" + (startTime.getMinutes() == 0 ? "00" : startTime.getMinutes()) + "-" + (endTime.getHours() % 12) + ":" + (endTime.getMinutes() === 0 ? "00" : endTime.getMinutes())

    const [successModalVisible, setSuccessModalVisible] = useState(false)



    const plantActivity = () => {
        setActivityType(activityHeader.PLANTED, dispatch)
        const activityToPlant = {
            id: 15,
            title: activity,
            date: new Date(date),
            confirmed: false,
            plantedId: MY_ID,
            reflected: false,
            location: location
        }
        addActivity(activityToPlant, dispatch)
        setSuccessModalVisible(true)
    }

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <SuccessModal
                modalVisible={successModalVisible}
                prompt={"You have successfully planted an activity! We will notifiy you when a friend accepts it. Click below to view your planted activity in your hangouts tab."}
                onClose={() => {
                    setSuccessModalVisible(false)
                    navigation.popToTop()
                }}
                button={"Go to hangouts"}
                onButtonPress={() => {
                    setSuccessModalVisible(false)
                    navigation.popToTop()
                    navigation.navigate(routes.HANGOUTS_TAB)
                }}
            />
            <ProgressBar curStep={steps.CONFIRM} showLabels={false} />
            <Text style={styles.textHeader}>Confirm and plant your hangout!</Text>
            <View style={[styles.confirmContainer, commonStyles.shadow]}>
                <ConfirmCard title={"Activity"} selection={activity} navigation={navigation} />
                <ConfirmCard title={"Location"} selection={location} navigation={navigation} />
                <ConfirmCard title={"Date"} selection={new Date(date).toDateString()} navigation={navigation} />
                <ConfirmCard title={"Time"} selection={timeString} navigation={navigation} />
                <ConfirmCard title={"Send To"} selection={friends[0]} navigation={navigation} />
            </View>
            <ActionButton
                active={true}
                main={"Plant"}
                style={styles.nextButton}
                onPressMethod={plantActivity}
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
        width: "80%"
    },
    textHeader: {
        fontFamily: "OpenSansItalic",
        fontSize: 22,
        color: DARK_GREEN,
        marginVertical: 10
    },
    confirmContainer: {
        marginTop: 10,
        width: "80%",
        height: "60%",
        borderRadius: 20,
        backgroundColor: "white",
        padding: 20
    },
    confirmCard: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    column: {
        flexDirection: "column"
    },
    confirmTitle: {
        fontFamily: "OpenSansBold",
        fontSize: 22,
        color: DARK_GREEN
    },
    selection: {
        fontFamily: "OpenSans",
        fontSize: 18
    }
});

export default PlantActivityF;