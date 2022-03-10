import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../../constants/themes";
import { steps } from "../../constants/defaultData"

const PLANT_ACTIVITY_IMG_SOURCES = {
    pen: require("../../assets/images/plant-activity/pen.png"),
    plant: require("../../assets/images/plant-activity/plant.png"),
    sun: require("../../assets/images/plant-activity/sun.png"),
    plant1: require("../../assets/images/plant-activity/plant-1.png"),
    plant2: require("../../assets/images/plant-activity/plant-2.png"),
    plant3: require("../../assets/images/plant-activity/plant-3.png"),
    plant4: require("../../assets/images/plant-activity/plant-4.png"),
}


const ProgressBar = ({
    curStep,
    activity,
    location,
    date,
    friends,
    showLabels
}) => {

    const styles = createProgressStyles(curStep.progress)

    return (
        <View style={[showLabels ? styles.containerLarge : styles.containerSmall]}>
            <View style={styles.icons}>
                <Image source={PLANT_ACTIVITY_IMG_SOURCES.plant1} style={[styles.icon, { left: "10%" }]} />
                <Image source={PLANT_ACTIVITY_IMG_SOURCES.plant2} style={[styles.icon, { left: "33%", height: 90, width: 90 }]} />
                <Image source={PLANT_ACTIVITY_IMG_SOURCES.plant3} style={[styles.icon, { left: "60%" }]} />
                <Image source={PLANT_ACTIVITY_IMG_SOURCES.plant4} style={[styles.icon, { left: "86%" }]} />
            </View>
            <View style={styles.barContainer}>
                <View style={styles.barBackground} />
                <View style={styles.progressBar} />
                <View style={styles.thumb}></View>
            </View>
            {showLabels && <View style={styles.labels}>
                <View>
                    <Text style={[styles.label, curStep.step >= steps.ACTIVITY.step ? styles.activeLabel : {}]}>{steps.ACTIVITY.title}</Text>
                    {activity && <Text style={styles.input}>{activity}</Text>}
                </View>
                <View>
                    <Text style={[styles.label, curStep.step >= steps.LOCATION.step ? styles.activeLabel : {}]}>{steps.LOCATION.title}</Text>
                    {location && <Text style={styles.input}>{location}</Text>}
                </View>
                <View>
                    <Text style={[styles.label, curStep.step >= steps.DATE.step ? styles.activeLabel : {}]}>{steps.DATE.title}</Text>
                    {date && <Text style={styles.input}>{date}</Text>}
                </View>
                <View>
                    <Text style={[styles.label, curStep.step >= steps.FRIENDS.step ? styles.activeLabel : {}]}>{steps.FRIENDS.title}</Text>
                    {friends && <Text style={styles.input}>{friends}</Text>}
                </View>
            </View>}
        </View>
    )
}

const createProgressStyles = (progress) => StyleSheet.create({
    containerLarge: {
        height: 125,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    containerSmall: {
        height: 100,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    icons: {
        width: "90%",
        marginBottom: 5
    },
    icon: {
        position: "absolute",
        width: 75,
        height: 75,
        bottom: 0,
        marginLeft: -25,
        resizeMode: "contain"
    },
    labels: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 5
    },
    label: {
        fontFamily: "OpenSans",
        fontSize: 10,
        color: TEXT_GRAY
    },
    input: {
        fontFamily: "OpenSans",
        fontSize: 10,
    },
    activeLabel: {
        fontFamily: "OpenSansBold",
        color: DARK_GREEN
    },
    barContainer: {
        width: "100%",
        height: 20,
        justifyContent: "center"

    },
    barBackground: {
        position: "absolute",
        width: "100%",
        height: "30%",
        backgroundColor: "#A4A2AA"
    },
    progressBar: {
        position: "absolute",
        height: "40%",
        width: progress,
        backgroundColor: DARK_GREEN
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: DARK_GREEN,
        left: progress,
        borderRadius: 10,
        marginLeft: -10
    }
});

export default ProgressBar;