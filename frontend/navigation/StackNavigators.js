import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import PlantActivity from "../screens/PlantActivity";
import Friends from "../screens/Friends";
import MeThisWeek from "../screens/MeThisWeek"
import Hangouts from "../screens/Hangouts";
import Reflect from "../screens/Reflect";
import SingleFriend from "../screens/SingleFriend";
import UploadMemory from "../screens/UploadMemory";
import WriteCaption from "../screens/WriteCaption";
import { DARK_GREEN, CREME_WHITE } from "../constants/themes";
import routes from "../constants/routes";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const configHeaderOptions = (title) => {
  return ({
    title:title,
    headerTitleStyle: {
      fontFamily: "Poppins",
      color: DARK_GREEN,
    },
    headerTintColor: DARK_GREEN,
    headerStyle: {
      backgroundColor: CREME_WHITE
    }})
}

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen
        name="grove"
        component={Home}
        options={configHeaderOptions("grove")}
      />
    </Drawer.Navigator>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={HomeDrawer} options={{ headerShown: false, title: "home" }} />
      <Stack.Screen name={routes.PLANT_ACTIVITY} component={PlantActivity} options={configHeaderOptions("Plant Activity")} />
    </Stack.Navigator>
  );
}

const FriendDrawer = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen
        name="my grove"
        component={Friends}
        options={configHeaderOptions("my grove")}
      />
    </Drawer.Navigator>
  );
}

const FriendsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.FRIENDS}
        component={FriendDrawer}
        options={{ headerShown: false, title: "my grove" }}

      />
      <Stack.Screen
        name={routes.SINGLE_FRIEND}
        component={SingleFriend}
        options={configHeaderOptions("grove")}
      />
      <Stack.Screen
        name={routes.REFLECT}
        component={Reflect}
        options={configHeaderOptions("hangout with <name>")}
      />
      <Stack.Screen
        name={routes.UPLOAD_MEMORY}
        component={UploadMemory}
        options={configHeaderOptions("Upload a Memory")}
      />
    </Stack.Navigator>
  );
}

const HangoutsDrawer = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen
        name="my hangouts"
        component={Hangouts}
        options={configHeaderOptions("my hangouts")}
      />
    </Drawer.Navigator>
  );
}

const HangoutsStackNavigator = ({
  route,
  navigation
}) => {

  console.log("ROUTE: ", route.params)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HANGOUTS}
        component={HangoutsDrawer}
        initialParams={route.params}
        options={{ headerShown: false, title: "" }}
      />
      <Stack.Screen
        name={routes.REFLECT}
        component={Reflect}
        options={configHeaderOptions("hangout with <name>")}
      />
      <Stack.Screen
        name={routes.UPLOAD_MEMORY}
        component={UploadMemory}
        options={configHeaderOptions("Upload a Memory")}
      />
      <Stack.Screen
        name={routes.WRITE_CAPTION}
        component={WriteCaption}
        options={configHeaderOptions("Write a Caption")}
      />
      <Stack.Screen 
        name={routes.PLANT_ACTIVITY} 
        component={PlantActivity} 
        options={configHeaderOptions("Plant an Activity")}
      />
    </Stack.Navigator>
  );
}

const MeThisWeekDrawer = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen
        name="me this week"
        component={MeThisWeek}
        options={configHeaderOptions("me this week")}
      />
    </Drawer.Navigator>
  );
}

export {
  HomeStackNavigator,
  FriendsStackNavigator,
  HangoutsStackNavigator,
  MeThisWeekDrawer
};