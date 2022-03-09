import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import Activities from "../components/plant-activity/Activities";

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