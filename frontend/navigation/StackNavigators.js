import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import PlantActivity from "../screens/PlantActivity";
import Friends from "../screens/Friends";
import MeThisWeek from "../screens/MeThisWeek"
import Hangouts from "../screens/Hangouts";
import Reflect from "../screens/Reflect";
import SingleFriend from "../screens/SingleFriend";

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
      <Stack.Screen name="SingleFriend" component={SingleFriend} />
    </Stack.Navigator>
  );
}

const HangoutsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hangouts" component={Hangouts} />
      <Stack.Screen name="Reflect" component={Reflect} />
      <Stack.Screen name="PlantActivity" component={PlantActivity} />
    </Stack.Navigator>
  );
}

const MeThisWeekStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Me This Week" component={MeThisWeek} />
    </Stack.Navigator>
  );
}

export { 
  HomeStackNavigator, 
  FriendsStackNavigator,
  HangoutsStackNavigator,
  MeThisWeekStackNavigator
};