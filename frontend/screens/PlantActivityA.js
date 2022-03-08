import React from "react";
import { View, StyleSheet, Text } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";

import ActionButton from "../components/utils/ActionButton";
import ActivityCard from "../components/plant-activity/ActivityCard";
import routes from "../constants/routes";


const RecentActivities = ({
}) => {
  const recentActivities = [0,0,0]

  return(
    <View>
      {recentActivities.map((_,i) => <ActivityCard />)}
    </View>
  ) 
}

const PlantActivityA = ({
  navigation
}) => {
  return (
    <View style={[commonStyles.backgroundCreme, styles.screen]}>
      <Text style={styles.textHeader}>Plant a recent activity</Text>
      <RecentActivities/>
      <ActionButton 
        active={true} 
        main={"Plant a new activity"} 
        style={styles.plantNew} 
        onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYB)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  plantNew: {
    paddingVertical: 8,
    position: "absolute",
    bottom: 20
  },
  textHeader: {
    fontFamily: "OpenSansItalic",
    fontSize: 22,
    color: DARK_GREEN,
    marginVertical: 30
  }
});

export default PlantActivityA;