import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        // screenOptions={{
        //     headerShown:false
        // }}
    >
      <Drawer.Screen 
        name="Grove" 
        component={TabNavigator} 
    />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;