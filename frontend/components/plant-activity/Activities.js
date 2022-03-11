import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { DARK_GREEN } from "../../constants/themes";
import ActivityCard from "./ActivityCard";
import { DEFAULT_ACTIVITIES } from "../../constants/defaultData";


export default Activities = ({
    selected,
    onChooseActivity,
    containerStyle,
    cardStyle
}) => {

    return (
        <ScrollView contentContainerStyle={[styles.activities, containerStyle]}>
            {DEFAULT_ACTIVITIES.map((activity, i) =>
                <ActivityCard
                    activity={activity}
                    cardStyle={[styles.activityCard, cardStyle]}
                    selected={selected}
                    onChooseActivity={onChooseActivity}
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    activities: {
        flexDirection: "row",
        width: "100%",
        height: "50%",
        flexWrap: "wrap",
    },
    activityCard: {
        marginHorizontal: 10,
        padding:10
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
        marginVertical: 30
    }
});
