import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";
import { ZoomIn } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ACTIVITY_IMG_SOURCES } from "../../constants/defaultData";



const ActivityCard = ({
    cardStyle,
    activity,
    selected,
    onChooseActivity
}) => {
    console.log(cardStyle)

    return (
        <TouchableOpacity
            onPress={() => onChooseActivity(activity)}
            style={[styles.activityCard, commonStyles.shadow].concat(cardStyle)}
        >
            <Image
                source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}
                style={styles.activityImg}
            />
            {activity.title && <Text style={styles.activityTitle}>{activity.title}</Text>}
            {activity.location && <Text style={styles.activityLocation}>{activity.location}</Text>}
            {selected === activity.title &&
                <View style={styles.check}>
                    <Icon name="check" color="white" size={20} />
                </View>
            }
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
        marginTop:10,
        alignItems: "center",
        justifyContent: "center"
    },
    activityImg: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        marginVertical: 10
    },
    activityTitle: {
        fontFamily: "OpenSans",
        fontSize: 16,
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