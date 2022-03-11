import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, Alert } from "react-native";
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
            <View style={[styles.timeRow, { marginTop: 10 }]}>
                <Text style={styles.timePrompt}>End Time</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    style={{ width: 110 }}
                    mode={"time"}
                    value={endTime}
                    onChange={(e, time) => {
                        if (time < startTime) {
                            console.log("Problem")
                            setEndTime(startTime)
                            Alert.alert("Oops! Please choose an end time after your start time.")
                        } else {
                            setEndTime(time)
                        }
                    }
                    }
                    display="default"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    timeContainer: {
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 20,
        width: "80%",
        height: 95,
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