import React from "react";
import { View, StyleSheet, Text } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";

import ActionButton from "../components/utils/ActionButton";
import ActivityCard from "../components/plant-activity/ActivityCard";
import routes from "../constants/routes";
import { ALL_ACTIVITIES } from "../constants/defaultData";


const RecentActivities = ({
  onChooseActivity
}) => {
  const recentActivities = ALL_ACTIVITIES.slice(0, 3)

  return (
    <View>
      {recentActivities.map((activity, i) => <ActivityCard activity={activity} key={i} onChooseActivity={onChooseActivity} />)}
    </View>
  )
}

const PlantActivityA = ({
  navigation
}) => {

  const onChooseActivity = (activity) => {
    navigation.navigate(routes.PLANT_ACTIVITYD, {activity: activity.title, location: activity.location})
  }

  return (
    <View style={[commonStyles.backgroundCreme, styles.screen]}>
      <Text style={styles.textHeader}>Quick Plant: Your recent activities</Text>
      <RecentActivities 
        onChooseActivity={onChooseActivity}
      />
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
    bottom: 30
  },
  textHeader: {
    fontFamily: "OpenSansItalic",
    fontSize: 22,
    color: DARK_GREEN,
    marginVertical: 30
  }
});

export default PlantActivityA;