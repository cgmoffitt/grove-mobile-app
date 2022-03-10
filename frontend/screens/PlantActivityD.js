import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import DatePicker from "../components/plant-activity/DatePicker";
import TimePicker from "../components/plant-activity/TimePicker";

const PlantActivityD = ({
    navigation,
    route
}) => {
    const { activity, location } = route.params

    const [startTime, setStartTime] = useState(new Date("January 1, 2022 18:00"));
    const [endTime, setEndTime] = useState(new Date("January 1, 2022 19:00"))


    const [date, setDate] = useState(null)
    const updateDate = (date) => {
        setDate(date)
    }

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.DATE}
                activity={activity}
                location={location}
                showLabels={true}
            />
            <Text style={styles.textHeader}>Select a date and time</Text>

            <DatePicker
                updateDate={updateDate}
            />
            <TimePicker
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
            />


            <ActionButton
                active={date !== null}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYE, { activity: activity, location: location, date: date, time: [startTime, endTime] })}
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
        fontSize: 22,
        color: DARK_GREEN,
        marginTop: 15,
        marginBottom: 15
    },
    calendarContainer: {
        backgroundColor: "white",
        width: "80%",
        height: "40%",
        paddingTop: 20,
        borderRadius: 20
    },
    boldCalendarText: {
        fontFamily: "OpenSansBold",
        fontSize: 14,
        textDecorationLine: "underline"
    },
    timeContainer: {
        backgroundColor: "white",
        marginTop: 20,
        borderRadius: 20,
        width: "80%",
        height: "15%",
        padding: 10,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    timeRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    timePrompt: {
        fontFamily: "OpenSans",
        fontSize: 16,
        width: 100
    },
    time: {
        backgroundColor: "rgba(118, 118, 128, 0.4)",
        borderRadius: 5,
        padding: 4,
        marginLeft: 10
    },
    timeText: {
        fontFamily: "OpenSans",
        fontSize: 18
    }
});

export default PlantActivityD;