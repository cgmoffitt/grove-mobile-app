import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";
import { ZoomIn } from "react-native-reanimated";



const ActivityCard = ({
    cardStyle
}) => {
    const ACTIVITY_IMG_SOURCES = {
        tennis: require("../../assets/images/activity-icons/tennis.png"),
        coffee: require("../../assets/images/activity-icons/coffee.png"),
        hiking: require("../../assets/images/activity-icons/hiking.png"),
        ["bar hopping"]: require("../../assets/images/activity-icons/bar-hopping.png")
    }

    return (
        <TouchableOpacity>
            <View style={[styles.activityCard, commonStyles.shadow, cardStyle]}>
                <Image
                    source={ACTIVITY_IMG_SOURCES.tennis}
                    style={styles.activityImg}
                />
                <Text style={styles.activityTitle}>Tennis</Text>
                <Text style={styles.activityLocation}>EVGR Courts</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    activityCard: {
        width: 120,
        height: 120,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    activityImg: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginBottom: 10
    },
    activityTitle: {
        fontFamily: "OpenSans",
        fontSize: 14,
    },
    activityLocation: {
        fontFamily: "OpenSansItalic",
        fontSize: 14
    }
});

export default ActivityCard;