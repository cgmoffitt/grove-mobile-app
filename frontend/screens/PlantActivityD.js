import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";


const customDayHeaderStylesCallback = () => {
    return {
        textStyle: {
            fontFamily: "OpenSansBold",
            fontSize: 14
        }
    };
}

const customDateStylesCallback = () => {
    return {
        textStyle: {
            fontFamily: "OpenSans",
            fontSize: 14
        }
    };
}

const PlantActivityD = ({
    navigation
}) => {

    const calendarWidth = Dimensions.get("screen").width * 0.7

    const [date, setDate] = useState(new Date());

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.DATE}
                activity="Tennis"
                location="EVGR Courts"
            />
            <Text style={styles.textHeader}>Select a date and time</Text>
            <View style={[styles.calendarContainer, commonStyles.shadow]}>
                <CalendarPicker
                    width={calendarWidth}
                    selectedDayStyle={{ backgroundColor: DARK_GREEN, color: DARK_GREEN }}
                    selectedDayColor={DARK_GREEN}
                    selectedDayTextColor={"white"}
                    todayBackgroundColor={TEXT_GRAY}
                    textStyle={{
                        fontFamily: "OpenSans",
                        fontSize: 12
                    }}
                    customDayHeaderStyles={customDayHeaderStylesCallback}
                    customDatesStyles={customDateStylesCallback}
                    monthTitleStyle={[styles.boldCalendarText, { paddingRight: 10 }]}
                    yearTitleStyle={styles.boldCalendarText}
                    dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                    previousTitle="<"
                    nextTitle=">"
                />
            </View>
            <View style={[styles.timeContainer, commonStyles.shadow]}>
                <View style={styles.timeRow}>
                    <Text style={styles.timePrompt}>Start Time</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        style={{ width: 110 }}
                        mode={"time"}
                        value={date}
                        display="default"
                    />
                </View>
                <View style={styles.timeRow}>
                    <Text style={styles.timePrompt}>End Time</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        style={{ width: 110 }}
                        mode={"time"}
                        value={date}
                        display="default"
                    />
                </View>
            </View>
            <ActionButton
                active={true}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYE)}
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