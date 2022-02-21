import React from "react";
import { View, StyleSheet, Text } from "react-native";
import commonStyles from "../../styles/commonStyles"

const ActivityItem = ({
    activity
}) => {
    return (
        <View
            style={styles.activityItem}
        >
            <Text
                style={commonStyles.center}
            >
                🎾
            </Text>
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

export default ActivitiesCard = ({
    activities
}) => {

    return (
        <View
            style={[
                styles.card,
                commonStyles.backgroundCreme,
            ]}
        >
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
    }
});