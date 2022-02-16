import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { 
    HomeStackNavigator, 
    FriendsStackNavigator,
    HangoutsStackNavigator,
    MeThisWeekStackNavigator
} from "./StackNavigators";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Hangouts" component={HangoutsStackNavigator} />
            <Tab.Screen name="Friends" component={FriendsStackNavigator} />
            <Tab.Screen name="Me This Week" component={MeThisWeekStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;