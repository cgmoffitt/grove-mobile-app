import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps, activityHeader, MY_ID, NEARBY_LOCATIONS } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import routes from "../constants/routes";
import { addActivity, setActivityType } from "../redux/utils";
import { useDispatch } from "react-redux";
import SuccessModal from "../components/utils/SuccessModal";
import EditActivityModal from "../components/plant-activity/EditActivityModal";
import EditLocationModal from "../components/plant-activity/EditLocationModal";
import EditDateTimeModal from "../components/plant-activity/EditDateTimeModal";

const ConfirmCard = ({
    title,
    selection,
    openEditModal,
}) => {
    return (
        <View style={styles.confirmCard}>
            <View style={styles.column}>
                <Text style={styles.confirmTitle}>{title}</Text>
                <Text style={styles.selection}>{selection}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    openEditModal(title)
                }}
            >
                <Image style={[{ width: 28, height: 28, marginTop: 10 }]} source={require("../assets/images/plant-activity/pen.png")} />
            </TouchableOpacity>

        </View>
    )
}

const PlantActivityF = ({
    navigation,
    route
}) => {

    const { activity, location, date, friends, time } = route.params
    const [finalActivity, setFinalActivity] = useState(activity)
    const [finalLocation, setFinalLocation] = useState(location)
    const [finalDate, setFinalDate] = useState(date)
    const [finalFriends, setFinalFriends] = useState(friends)
    const [finalStartTime, setFinalStartTime] = useState(time[0])
    const [finalEndTime, setFinalEndTime] = useState(time[1])

    const dispatch = useDispatch()

    const getTimeString = () => {
        const startTime = new Date(finalStartTime)
        const endTime = new Date(finalEndTime)
        const startAmpm = startTime.getHours() > 11 ? "pm" : "am"
        const endAmpm = endTime.getHours() > 11 ? "pm" : "am"
        const startHour = (startTime.getHours() % 12 === 0 ? 12 : startTime.getHours() % 12) 
        const endHour = (endTime.getHours() % 12  === 0 ? 12 : endTime.getHours() % 12)
        const startMinute = startTime.getMinutes() < 10 ? "0" + startTime.getMinutes() : startTime.getMinutes()
        const endMinute = endTime.getMinutes() < 10 ? "0" + endTime.getMinutes() : endTime.getMinutes()

        return startHour + ":" + startMinute + startAmpm + "-" + endHour + ":" + endMinute + endAmpm
    }

    const [successModalVisible, setSuccessModalVisible] = useState(false)

    /**Edit Activity Modal State + Functions */
    const [editActivityOpen, setEditActivityOpen] = useState(false)

    /**Edit Location Modal State + Functions */
    const [editLocationOpen, setEditLocationOpen] = useState(false)
    const [curNearbyIndex, setCurNearbyIndex] = useState(NEARBY_LOCATIONS.findIndex(loc => loc.name === finalLocation))
    const [selectedIndex, setSelectedIndex] = useState(NEARBY_LOCATIONS.findIndex(loc => loc.name === finalLocation))

    /**Edit Time Modal State + Functions */
    const [editDateOpen, setEditDateOpen] = useState(false)

    const openEditModal = (type) => {
        switch (type) {
            case "Activity":
                setEditActivityOpen(true)
                break
            case "Location":
                setEditLocationOpen(true)
            case "Date":
                setEditDateOpen(true)
            case "Time":
                setEditDateOpen(true)
        }
    }

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
                specialButton={"Go to hangouts"}
                onButtonPress={() => {
                    setSuccessModalVisible(false)
                    navigation.popToTop()
                    navigation.navigate(routes.HANGOUTS_TAB)
                }}
            />
            <EditActivityModal
                modalVisible={editActivityOpen}
                onClose={() => setEditActivityOpen(false)}
                onSave={(selected) => {
                    setFinalActivity(selected)
                    setEditActivityOpen(false)
                }}
                selected={finalActivity}
            />
            <EditLocationModal
                modalVisible={editLocationOpen}
                onClose={() => setEditLocationOpen(false)}
                curNearbyIndex={curNearbyIndex}
                setCurNearbyIndex={setCurNearbyIndex}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            <EditDateTimeModal
                modalVisible={editDateOpen}
                onClose={() => setEditDateOpen(false)}
                onSave={(date, startTime, endTime) => {
                    setFinalDate(date)
                    setFinalStartTime(startTime)
                    setFinalEndTime(endTime)
                    setEditDateOpen(false)
                }}
                date={finalDate}
                startTime={finalStartTime}
                endTime={finalEndTime}
            />
            <ProgressBar curStep={steps.CONFIRM} showLabels={false} />
            <Text style={styles.textHeader}>Confirm and plant your hangout!</Text>
            <View style={[styles.confirmContainer, commonStyles.shadow]}>
                <ConfirmCard title={"Activity"} selection={finalActivity} openEditModal={openEditModal} />
                <ConfirmCard title={"Location"} selection={finalLocation} openEditModal={openEditModal} />
                <ConfirmCard title={"Date"} selection={new Date(finalDate).toDateString()} openEditModal={openEditModal} />
                <ConfirmCard title={"Time"} selection={getTimeString()} openEditModal={openEditModal} />
                <ConfirmCard title={"Send to"} selection={friends[0]} openEditModal={openEditModal} />
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