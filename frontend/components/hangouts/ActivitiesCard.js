import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { LIGHT_GREEN, shadows } from "../../constants/themes"

const ReflectButton = ({
    navigation
}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Reflect")}
        >
            <View
                style={styles.reflectButton}
            >
                <Text style={styles.reflectText}>Reflect</Text>
            </View>
        </TouchableOpacity>
    )
}

const ActivityItem = ({
    navigation,
    activity,
    selected
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
                    {activity.date.toDateString()}
                </Text>
            </View>
            {(selected === "Past" && !activity.reflected)
                ?
                <ReflectButton navigation={navigation} />
                :
                <Text
                    style={commonStyles.center}
                >
                    ℹ️
                </Text>
            }
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
    navigation,
    activities,
    selected
}) => {

    return (
        <View
            style={[
                commonStyles.cremeCard,
                styles.card
            ]}
        >
            {activities.length == 0
                &&
                <NoActivities selected={selected} />
            }
            {activities.map((activity, i) =>
                <ActivityItem
                    key={i}
                    activity={activity}
                    selected={selected}
                    navigation={navigation}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "80%",
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
    },
    reflectButton: {
        backgroundColor: LIGHT_GREEN,
        borderRadius: 5,
        paddingHorizontal: 10,
        shadowColor: shadows.shadowColor,
        shadowRadius: shadows.shadowRadius,
        shadowOpacity: shadows.shadowOpacity,
        shadowRadius: shadows.shadowRadius,
        shadowOffset: shadows.shadowOffset,
    },
    reflectText: {
        fontFamily: "OpenSans",
        color: "white"
    }
});