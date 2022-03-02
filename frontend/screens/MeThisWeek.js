import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import commonStyles from "../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN } from "../constants/themes";
import FriendCard from "../components/shared-components/FriendCard";
import { List } from 'react-native-paper';
import { Slider } from '@miblanchard/react-native-slider';
import PreferredDistance from "../components/my-week/PreferredDistance";
import PreferredActivities from "../components/my-week/PreferredActivities";
import FocusFriendships from "../components/my-week/FocusFriendships";
import NumHangouts from "../components/my-week/NumHangouts";
import Availability from "../components/my-week/Availability";
import ActionButton from "../components/utils/ActionButton";
import { schedulePushNotification } from "../notifications";

import {
  DEFAULT_FOCUS_FRIENDS,
  friends,
  DEFAULT_ACTIVITIES
} from "../constants/defaultData"

const Accordions = ({

}) => {

  return (
    <View
      style={[commonStyles.cremeCard, { marginTop: 30, width: "90%" }]}
    >
      <List.Section style={styles.accordionSection}>
        <List.Accordion
          style={commonStyles.backgroundCreme}
          title="My Availability"
          titleStyle={styles.accordionHeaderText}
        >
          <List.Item title="Calendar" />
        </List.Accordion>
        <List.Accordion
          style={commonStyles.backgroundCreme}
          title="Preferred Distance"
          titleStyle={styles.accordionHeaderText}
        >
          <PreferredDistance />
        </List.Accordion>
        <List.Accordion
          style={commonStyles.backgroundCreme}
          title="Preferred Activities"
          titleStyle={styles.accordionHeaderText}
        >
          <PreferredActivities />
        </List.Accordion>
      </List.Section>
    </View>
  )
}

const PreferredDistanceCard = ({

}) => {
  return (
    <View
      style={[commonStyles.cremeCard, { marginTop: 30, width: "90%" }]}
    >
      <PreferredDistance />
    </View>
  )
}

const PreferredActivitiesCard = ({
  preferredActivities,
  updatePreferredActivities,
  removeActivity
}) => {
  return (
    <View
      style={[commonStyles.cremeCard, { marginTop: 30, width: "90%" }]}
    >
      <PreferredActivities
        preferredActivities={preferredActivities}
        updatePreferredActivities={updatePreferredActivities}
        removeActivity={removeActivity}
      />
    </View>
  )
}


const MeThisWeek = () => {

  /*Num Hangouts State*/
  const [numHangouts, setNumHangouts] = useState(1)
  const decrementNumHangouts = () => {
    if (numHangouts === 0) {
      return
    }
    setNumHangouts(numHangouts - 1)
  }
  const incrementNumHangouts = () => {
    setNumHangouts(numHangouts + 1)
  }

  /*Focus Friends State*/
  const [focusFriends, setFocusFriends] = useState(DEFAULT_FOCUS_FRIENDS)
  const updateFocusFriends = (selected) => {
    if (selected.length < 4) {
      const nextFocusFriends = selected.map(friendItem => friends.find(friend => friend.name === friendItem.value))
      setFocusFriends(nextFocusFriends)
    }
  }
  const removeFriend = (friend) => {
    setFocusFriends(prev => prev.filter(prevFriend => friend !== prevFriend))
  }

  /*Preferred Activities State*/
  const [preferredActivities, setPreferredActivities] = useState([{ name: "Hiking" }, { name: "Tennis" }])
  const updatePreferredActivities = (selected) => {
    const nextPreferredActivities = selected.map(activityItem => DEFAULT_ACTIVITIES.find(activity => activity.name === activityItem.value))
    setPreferredActivities(nextPreferredActivities)
  }
  const removeActivity = activity => {
    setPreferredActivities((prev) => prev.filter(prevActivity => prevActivity !== activity));
  }

  return (
    <ImageBackground
      source={require("../assets/images/backgrounds/Me-This-Week.png")}
      resizeMode="cover"
      style={[commonStyles.full]}
    >
      <ScrollView style={commonStyles.full} contentContainerStyle={styles.background}>
        <NumHangouts
          incrementNumHangouts={incrementNumHangouts}
          decrementNumHangouts={decrementNumHangouts}
          numHangouts={numHangouts}
        />
        <FocusFriendships
          focusFriends={focusFriends}
          updateFocusFriends={updateFocusFriends}
          removeFriend={removeFriend}
        />
        <PreferredActivitiesCard
          preferredActivities={preferredActivities}
          updatePreferredActivities={updatePreferredActivities}
          removeActivity={removeActivity}
        />
        <PreferredDistanceCard />
        <Availability />
        <ActionButton 
            main="Update Preferrences"
            style={{marginBottom: 30}}
            onPressMethod={() => schedulePushNotification()}
        />
        {/* <Accordions /> */}

      </ScrollView>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
  },
  accordionHeaderText: {
    fontFamily: "OpenSans",
    color: "black",
    fontSize: 18
  },
  accordionSection: {
    width: "100%",
    backgroundColor: CREME_WHITE
  }
});

export default MeThisWeek;