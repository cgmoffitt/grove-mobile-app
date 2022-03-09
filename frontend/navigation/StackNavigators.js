import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, Image } from "react-native"

import Home from "../screens/Home";
import PlantActivityA from "../screens/PlantActivityA";
import PlantActivityB from "../screens/PlantActivityB";
import PlantActivityC from "../screens/PlantActivityC";
import PlantActivityD from "../screens/PlantActivityD";
import PlantActivityE from "../screens/PlantActivityE";
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
    title: title,
    headerTitleStyle: {
      fontFamily: "Poppins",
      color: DARK_GREEN,
    },
    headerTintColor: DARK_GREEN,
    headerStyle: {
      backgroundColor: CREME_WHITE
    },
    headerBackTitle: " "
  })
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
      <Stack.Screen 
        name={routes.HOME} 
        component={Home} 
        options={{ 
          headerShown: true, 
          title: "", 
          headerStyle: {
            backgroundColor: CREME_WHITE
          },
          headerLeft: () => (
            <Image style={{width: 40, height: 40, borderRadius: 20, marginLeft: 20}} source={require("../assets/hangouts/nirali_selfie.png")} />
          ),
        }} 
        />
      <Stack.Screen name={routes.PLANT_ACTIVITYA} component={PlantActivityA} options={configHeaderOptions("Plant Activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYB} component={PlantActivityB} options={configHeaderOptions("Plant Activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYC} component={PlantActivityC} options={configHeaderOptions("Plant Activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYD} component={PlantActivityD} options={configHeaderOptions("Plant Activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYE} component={PlantActivityE} options={configHeaderOptions("Plant Activity")} />
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
      <Stack.Screen
        name={routes.HANGOUTS}
        component={Hangouts}
        options={configHeaderOptions("Hangouts")}
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
        name={routes.PLANT_ACTIVITYA}
        component={PlantActivityA}
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