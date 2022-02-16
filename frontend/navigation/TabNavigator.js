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
            <Tab.Screen 
                name="TabHome" 
                component={HomeStackNavigator} 
                options={{
                    title:"Home"
                }}
            />
            <Tab.Screen 
                name="TabHangouts" 
                component={HangoutsStackNavigator} 
                options={{
                    title:"Hangouts"
                }}
            />
            <Tab.Screen 
                name="TabFriends" 
                component={FriendsStackNavigator} 
                options={{
                    title:"Friends"
                }}
            />
            <Tab.Screen 
                name="TabMeThisWeek" 
                component={MeThisWeekStackNavigator} 
                options={{
                    title:"Me This Week"
                }}
            />
                
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;