import React from "react";
import { View, StyleSheet, Text } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ActivityCard from "../components/plant-activity/ActivityCard";
import ProgressBar from "../components/plant-activity/ProgressBar";


const Activities = ({

}) => {
    const recentActivities = [0, 0, 0, 0,]

    return (
        <View style={styles.activities}>
            {recentActivities.map((_, i) => <ActivityCard cardStyle={styles.activityCard} />)}
        </View>
    )
}

const PlantActivityB = ({
    navigation
}) => {
    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar curStep={steps.ACTIVITY} />
            <Text style={styles.textHeader}>Select an activity</Text>
            <Activities />
            <ActionButton
                active={true}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYC)}
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
        flexWrap: "wrap"
    },
    activityCard: {
        marginHorizontal: 20
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