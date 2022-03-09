import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../../constants/themes";

import DateTimePicker from '@react-native-community/datetimepicker';




const TimePicker = ({
    startTime,
    setStartTime,
    endTime,
    setEndTime
}) => {

    return (
        <View style={[styles.timeContainer, commonStyles.shadow]}>
            <View style={styles.timeRow}>
                <Text style={styles.timePrompt}>Start Time</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    style={{ width: 110 }}
                    mode={"time"}
                    value={startTime}
                    onChange={(e, time) => setStartTime(time)}
                    display="default"
                />
            </View>
            <View style={styles.timeRow}>
                <Text style={styles.timePrompt}>End Time</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    style={{ width: 110 }}
                    mode={"time"}
                    value={endTime}
                    onChange={(e, time) => setEndTime(time)}
                    display="default"
                />
            </View>
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

export default TimePicker;