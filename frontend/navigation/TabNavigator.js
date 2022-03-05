import React from "react";
import { StyleSheet, Image, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../constants/routes";
import { 
    HomeStackNavigator, 
    FriendsStackNavigator,
    HangoutsStackNavigator,
    MeThisWeekDrawer
} from "./StackNavigators";
import { CREME_WHITE, DARK_GREEN, TEXT_GRAY } from "../constants/themes";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                headerShown: false,
                tabBarActiveBackgroundColor: CREME_WHITE,
                tabBarInactiveBackgroundColor: CREME_WHITE,
                tabBarStyle: {backgroundColor: CREME_WHITE, minHeight:90, color:"black"},
                tabBarIcon: ({focused}) => {
                    let sourceUrl = require("../assets/images/plants/plant2.png");
                    if (route.name === "TabHome"){
                        sourceUrl = focused ? require("../assets/images/bottom-bar-icons/home-filled.png") 
                                            : require("../assets/images/bottom-bar-icons/home.png");
                    } else if (route.name === "TabHangouts") {
                        sourceUrl = focused ? require("../assets/images/bottom-bar-icons/calendar-filled.png") 
                                            : require("../assets/bottom-bar-icons/calendar.png");
                    } else if (route.name === "TabFriends") {
                        sourceUrl = focused ? require("../assets/images/bottom-bar-icons/my-grove-filled.png") 
                                    : require("../assets/bottom-bar-icons/my-grove.png");
                    } else {
                        sourceUrl = focused ? require("../assets/images/bottom-bar-icons/me-this-week-filled.png") 
                                    : require("../assets/bottom-bar-icons/me-this-week.png");
                    }
                    return(<Image style={{width:27, height:27, marginTop:10 }} source={sourceUrl}></Image>)
                    }
            })}
        >
            <Tab.Screen 
                name={routes.HOME_TAB} 
                component={HomeStackNavigator} 
                options={{
                    tabBarLabel: ({focused,}) => (
                        <Text style={[styles.tabTitle, {color: focused ? DARK_GREEN : TEXT_GRAY}]}>Home</Text>
                    ),
                }}
            />
            <Tab.Screen 
                name={routes.HANGOUTS_TAB}
                component={HangoutsStackNavigator} 
                options={{
                    tabBarLabel: ({focused,}) => (
                        <Text style={[styles.tabTitle, {color: focused ? DARK_GREEN : TEXT_GRAY}]}>Hangouts</Text>
                    ),
                }}
            />
            <Tab.Screen 
                name={routes.FRIENDS_TAB} 
                component={FriendsStackNavigator} 
                options={{
                    tabBarLabel: ({focused,}) => (
                        <Text style={[styles.tabTitle, {color: focused ? DARK_GREEN : TEXT_GRAY}]}>Friends</Text>
                    ),
                }}
            />
            <Tab.Screen 
                name={routes.MY_WEEK_TAB} 
                component={MeThisWeekDrawer} 
                options={{
                    tabBarLabel: ({focused,}) => (
                        <Text style={[styles.tabTitle, {color: focused ? DARK_GREEN : TEXT_GRAY}]}>Me This Week</Text>
                    ),
                }}
            />
                
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabNav:{
        backgroundColor:CREME_WHITE,
    },
    tabTitle:{
        fontFamily:"OpenSans",
        fontSize:12
    }
});

export default BottomTabNavigator;