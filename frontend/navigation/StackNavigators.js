import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, Image } from "react-native"

import Home from "../screens/Home";
import PlantActivityA from "../screens/PlantActivityA";
import PlantActivityB from "../screens/PlantActivityB";
import PlantActivityC from "../screens/PlantActivityC";
import PlantActivityD from "../screens/PlantActivityD";
import PlantActivityE from "../screens/PlantActivityE";
import PlantActivityF from "../screens/PlantActivityF";
import Friends from "../screens/Friends";
import MeThisWeek from "../screens/MeThisWeek"
import Hangouts from "../screens/Hangouts";
import Reflect from "../screens/Reflect";
import SingleFriend from "../screens/SingleFriend";
import UploadMemory from "../screens/UploadMemory";
import WriteCaption from "../screens/WriteCaption";
import MyProfile from "../screens/MyProfile";
import { DARK_GREEN, CREME_WHITE } from "../constants/themes";
import routes from "../constants/routes";
import navigation from "./RootNavigation.js";
import { navigationRef } from './RootNavigation';

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
      <Stack.Screen name={routes.HOME}
      component={Home}
      
      options={{ 
          headerShown: true, 
          title: "grove", 
          headerStyle: {  
            backgroundColor: CREME_WHITE
          },
          headerTitleStyle: {
            fontFamily: "Poppins",
            color: DARK_GREEN,
            fontSize: 20
          },
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigationRef.current?.navigate(routes.MY_PROFILE)}><Image style={{width: 45, height: 45, borderRadius:30, marginLeft: 20, marginBottom: 10}} source={require("../assets/profile/amelia_profile.jpeg")}/></TouchableOpacity>
          ),
        }} 
      ></Stack.Screen>
      <Stack.Screen 
        name={routes.MY_PROFILE} 
        component={MyProfile} 
        options={configHeaderOptions("My Profile")}
        />
      <Stack.Screen name={routes.PLANT_ACTIVITYA} component={PlantActivityA} options={configHeaderOptions("plant an activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYB} component={PlantActivityB} options={configHeaderOptions("plant an activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYC} component={PlantActivityC} options={configHeaderOptions("plant an activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYD} component={PlantActivityD} options={configHeaderOptions("plant an activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYE} component={PlantActivityE} options={configHeaderOptions("plant an activity")} />
      <Stack.Screen name={routes.PLANT_ACTIVITYF} component={PlantActivityF} options={configHeaderOptions("plant an activity")} />
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
        component={Friends}
        options={{ 
          headerShown: true, 
          title: "my grove", 
          headerStyle: {  
            backgroundColor: CREME_WHITE
          },
          headerTitleStyle: {
            fontFamily: "Poppins",
            color: DARK_GREEN,
            fontSize: 20
          },
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigationRef.current?.navigate(routes.MY_PROFILE)}><Image style={{width: 45, height: 45, borderRadius:30, marginLeft: 20, marginBottom: 10}} source={require("../assets/profile/amelia_profile.jpeg")}/></TouchableOpacity>
          ),
        }} 
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
        component={Hangouts}
        options={{ 
          headerShown: true, 
          title: "hangouts", 
          headerStyle: {  
            backgroundColor: CREME_WHITE
          },
          headerTitleStyle: {
            fontFamily: "Poppins",
            color: DARK_GREEN,
            fontSize: 20
          },
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigationRef.current?.navigate(routes.MY_PROFILE)}><Image style={{width: 45, height: 45, borderRadius:30, marginLeft: 20, marginBottom: 10}} source={require("../assets/profile/amelia_profile.jpeg")}/></TouchableOpacity>
          ),
        }} 
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
    <Stack.Navigator>
      <Stack.Screen
        name="me this week"
        component={MeThisWeek}
        options={{ 
          headerShown: true, 
          title: "me this week", 
          headerStyle: {  
            backgroundColor: CREME_WHITE
          },
          headerTitleStyle: {
            fontFamily: "Poppins",
            color: DARK_GREEN,
            fontSize: 20
          },
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigationRef.current?.navigate(routes.MY_PROFILE)}><Image style={{width: 45, height: 45, borderRadius:30, marginLeft: 20, marginBottom: 10}} source={require("../assets/profile/amelia_profile.jpeg")}/></TouchableOpacity>
          ),
        }} 
      />
    </Stack.Navigator>
  );
}

export {
  HomeStackNavigator,
  FriendsStackNavigator,
  HangoutsStackNavigator,
  MeThisWeekDrawer
};