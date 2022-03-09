import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ActivityCard from "../components/plant-activity/ActivityCard";
import ProgressBar from "../components/plant-activity/ProgressBar";
import { DEFAULT_ACTIVITIES } from "../constants/defaultData";


const Activities = ({
    selected,
    onChooseActivity
}) => {
    const recentActivities = [0, 0, 0, 0,]

    return (
        <ScrollView contentContainerStyle={styles.activities}>
            {DEFAULT_ACTIVITIES.map((activity, i) =>
                <ActivityCard
                    activity={activity}
                    cardStyle={styles.activityCard}
                    selected={selected}
                    onChooseActivity={onChooseActivity}
                />
            )}
        </ScrollView>
    )
}

const PlantActivityB = ({
    navigation
}) => {

    const [selected, setSelected] = useState("")

    const onChooseActivity = (activity) => {
        if (selected === activity.title) {
            setSelected("")
        } else {
            setSelected(activity.title)
        }
    }

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar curStep={steps.ACTIVITY} showLabels={true} />
            <Text style={styles.textHeader}>Select an activity</Text>
            <Activities
                selected={selected}
                onChooseActivity={onChooseActivity}
            />
            <ActionButton
                active={true}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYC, {activity: selected})}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    activities: {
        flexDirection: "row",
        justifyContent: "center",
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

export default PlantActivityB;