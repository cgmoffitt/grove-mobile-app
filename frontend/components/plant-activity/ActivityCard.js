import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";
import { ZoomIn } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const ActivityCard = ({
    cardStyle,
    activity,
    selected,
    onChooseActivity
}) => {
    const ACTIVITY_IMG_SOURCES = {
        Tennis: require("../../assets/images/activity-icons/tennis.png"),
        Coffee: require("../../assets/images/activity-icons/coffee.png"),
        Hiking: require("../../assets/images/activity-icons/hiking.png"),
        ["Bar Hopping"]: require("../../assets/images/activity-icons/bar-hopping.png")
    }

    return (
        <View
            style={[cardStyle]}
        >
            <TouchableOpacity
                onPress={() => onChooseActivity(activity)}
            >
                <View style={[styles.activityCard, commonStyles.shadow]}>
                    <Image
                        source={ACTIVITY_IMG_SOURCES[activity.title]}
                        style={styles.activityImg}
                    />
                    {activity.title && <Text style={styles.activityTitle}>{activity.title}</Text>}
                    {activity.location && <Text style={styles.activityLocation}>{activity.location}</Text>}
                    {selected === activity.title &&
                        <View style={styles.check}>
                            <Icon name="check" color="white" size={20} />
                        </View>
                    }
                </View>
            </TouchableOpacity>
        </View>


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
    },
    check: {
        width: 30,
        height: 30,
        backgroundColor: DARK_GREEN,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        position: "absolute",
        left: -10,
        top: -10,
    }
});

export default ActivityCard;