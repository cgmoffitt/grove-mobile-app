import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../constants/routes";
import {
    HomeStackNavigator,
    FriendsStackNavigator,
    HangoutsStackNavigator,
    MeThisWeekDrawer
} from "./StackNavigators";
import { CREME_WHITE, DARK_GREEN, TEXT_GRAY } from "../constants/themes";
import { connect } from "react-redux";
import {
    filterPending
} from "../util-functions"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({
    activities
}) => {

    const [pendingActivities, setPendingActivities] = useState([])
    console.log(pendingActivities)
    useEffect(() => {
        let mounted = true
        if (mounted) {
            console.log("Here!!!")
            setPendingActivities(activities.filter(activity => filterPending(activity)))
        }
    }, [activities])

    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    headerShown: false,
                    tabBarActiveBackgroundColor: CREME_WHITE,
                    tabBarInactiveBackgroundColor: CREME_WHITE,
                    tabBarStyle: { backgroundColor: CREME_WHITE, minHeight: 90, color: "black" },
                    tabBarIcon: ({ focused }) => {
                        let sourceUrl = require("../assets/images/plants/plant2.png");
                        if (route.name === "TabHome") {
                            sourceUrl = focused ? require("../assets/images/bottom-bar-icons/home-filled.png")
                                : require("../assets/bottom-bar-icons/home-grey.png");
                        } else if (route.name === "TabHangouts") {
                            sourceUrl = focused ? require("../assets/images/bottom-bar-icons/calendar-filled.png")
                                : require("../assets/bottom-bar-icons/calendar-grey.png");
                        } else if (route.name === "TabFriends") {
                            sourceUrl = focused ? require("../assets/images/bottom-bar-icons/my-grove-filled.png")
                                : require("../assets/bottom-bar-icons/my-grove-grey.png");
                        } else {
                            sourceUrl = focused ? require("../assets/images/bottom-bar-icons/me-this-week-filled.png")
                                : require("../assets/bottom-bar-icons/clipboard.png");
                        }
                        return (
                            <View>
                                {(route.name === "TabHangouts" && pendingActivities.length > 0)
                                    &&
                                    <View style={styles.notification}>
                                        <Text style={styles.notificationText}>{pendingActivities.length}</Text>
                                    </View>
                                }
                                <Image style={{ width: 27, height: 27, marginTop: 10 }} source={sourceUrl}></Image>
                            </View>
                        )
                    }
                })}
        >
            <Tab.Screen
                name={routes.HOME_TAB}
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: ({ focused, }) => (
                        <Text style={[styles.tabTitle, focused ? styles.focusedText : styles.unfocousedText]}>Home</Text>
                    ),
                }}
            />
            <Tab.Screen
                name={routes.HANGOUTS_TAB}
                component={HangoutsStackNavigator}
                options={{
                    tabBarLabel: ({ focused, }) => (
                        <Text style={[styles.tabTitle, focused ? styles.focusedText : styles.unfocousedText]}>Hangouts</Text>
                    ),
                }}
            />
            <Tab.Screen
                name={routes.FRIENDS_TAB}
                component={FriendsStackNavigator}
                options={{
                    tabBarLabel: ({ focused, }) => (
                        <Text style={[styles.tabTitle, focused ? styles.focusedText : styles.unfocousedText]}>My Grove</Text>
                    ),
                }}
            />
            <Tab.Screen
                name={routes.MY_WEEK_TAB}
                component={MeThisWeekDrawer}
                options={{
                    tabBarLabel: ({ focused, }) => (
                        <Text style={[styles.tabTitle, focused ? styles.focusedText : styles.unfocousedText]}>Me This Week</Text>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabNav: {
        backgroundColor: CREME_WHITE,
    },
    tabTitle: {
        fontFamily: "OpenSans",
        fontSize: 12
    },
    notification: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#ef2949",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
        right: -10
    },
    notificationText: {
        color: "white",
        fontFamily: "OpenSansBold"
    },
    unfocousedText:{
        color: TEXT_GRAY,
        fontFamily: "OpenSans"
    },
    focusedText: {
        color: DARK_GREEN,
        fontFamily: "OpenSansBold"
    }
});

const mapStateToProps = state => ({
    activities: state.activities
})

export default connect(mapStateToProps)(BottomTabNavigator);