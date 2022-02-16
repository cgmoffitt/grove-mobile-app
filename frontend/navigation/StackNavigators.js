import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import PlantActivity from "../screens/PlantActivity";
import Friends from "../screens/Friends";
import MeThisWeek from "../screens/MeThisWeek"
import Hangouts from "../screens/Hangouts";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlantActivity" component={PlantActivity} />
    </Stack.Navigator>
  );
}

const FriendsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friends" component={Friends} />
    </Stack.Navigator>
  );
}

const HangoutsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friends" component={Hangouts} />
    </Stack.Navigator>
  );
}

const MeThisWeekStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friends" component={MeThisWeek} />
    </Stack.Navigator>
  );
}

export { 
  HomeStackNavigator, 
  FriendsStackNavigator,
  HangoutsStackNavigator,
  MeThisWeekStackNavigator
};