import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../constants/routes";
import { 
    HomeStackNavigator, 
    FriendsStackNavigator,
    HangoutsStackNavigator,
    MeThisWeekDrawer
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
                name={routes.HOME_TAB} 
                component={HomeStackNavigator} 
                options={{
                    title:"Home"
                }}
            />
            <Tab.Screen 
                name={routes.HANGOUTS_TAB}
                component={HangoutsStackNavigator} 
                options={{
                    title:"Hangouts"
                }}
            />
            <Tab.Screen 
                name={routes.FRIENDS_TAB} 
                component={FriendsStackNavigator} 
                options={{
                    title:"Friends"
                }}
            />
            <Tab.Screen 
                name={routes.MY_WEEK_TAB} 
                component={MeThisWeekDrawer} 
                options={{
                    title:"Me This Week"
                }}
            />
                
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;