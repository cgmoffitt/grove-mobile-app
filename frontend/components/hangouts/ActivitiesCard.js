import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import commonStyles from "../../styles/commonStyles"

const ActivityItem = ({
    activity
}) => {

    const ACTIVITY_IMG_SOURCES = {
        tennis: require("../../assets/images/activity-icons/tennis.png"),
        coffee: require("../../assets/images/activity-icons/coffee.png"),
        hiking: require("../../assets/images/activity-icons/hiking.png"),
        ["bar hopping"]: require("../../assets/images/activity-icons/bar-hopping.png")
    }

    return (
        <View
            style={styles.activityItem}
        >
            <View style={styles.img}>
                <Image style={{ width: 25 }} resizeMode={"contain"} source={ACTIVITY_IMG_SOURCES[activity.title.toLowerCase()]}></Image>
            </View>

            <View
                style={{ flex: 2, flexDirection: "column", justifyContent: "center" }}
            >
                <Text style={styles.titleText}>
                    {activity.friend &&
                        <Text style={styles.titleText}>
                            {activity.friend} •{" "}
                        </Text>
                    }
                    {activity.title} 
                </Text>
                <Text style={styles.dateText}>
                    {activity.date}
                </Text>
            </View>
            <Text
                style={commonStyles.center}
            >
                ℹ️
            </Text>
        </View>
    )
}

const NoActivities = ({
    selected
}) => {
    return (
        <View style={styles.activityItem}>
            <Text
                style={styles.noActivities}
            >
                No {selected.toLowerCase()} hangouts. Check back later!
            </Text>
        </View>
    )
}

export default ActivitiesCard = ({
    activities,
    selected
}) => {

    return (
        <View
            style={[
                styles.card,
                commonStyles.backgroundCreme,
            ]}
        >
            {activities.length == 0
                &&
                <NoActivities selected={selected} />
            }
            {activities.map((activity, i) => <ActivityItem key={i} activity={activity} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "80%",
        borderRadius: 10
    },
    activityItem: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5
    },
    titleText: {
        textAlign: "center",
        fontFamily: "OpenSans",
        fontSize: 18
    },
    dateText: {
        textAlign: "center",
        fontFamily: "OpenSans",
        fontSize: 14
    },
    noActivities: {
        textAlign: "center",
        fontFamily: "OpenSansItalic",
        fontSize: 16
    },
    img: {
        flex: 1,
        alignItems: "center",
    }
});