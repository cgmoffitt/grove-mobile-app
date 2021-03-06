import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, Modal, Pressable } from "react-native";
import commonStyles from "../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, LIGHT_GREEN } from "../constants/themes";
import { defaultActivity, AUTOMATIC_ID } from "../constants/defaultData";
import PreferredDistance from "../components/my-week/PreferredDistance";
import PreferredActivities from "../components/my-week/PreferredActivities";
import FocusFriendships from "../components/my-week/FocusFriendships";
import NumHangouts from "../components/my-week/NumHangouts";
import Availability from "../components/my-week/Availability";
import ActionButton from "../components/utils/ActionButton";
import SuccessModal from "../components/utils/SuccessModal";
import { schedulePushNotification } from "../notifications";
import { addActivity } from "../redux/utils";
import { useDispatch, connect } from "react-redux";
import InfoBar from "../components/utils/InfoBar.js";
import routes from "../constants/routes";
import { getDateXDaysFromToday } from "../util-functions";

import {
  DEFAULT_FOCUS_FRIENDS,
  friends,
  DEFAULT_ACTIVITIES
} from "../constants/defaultData"

const PreferredDistanceCard = ({
  preferredDistance,
  setPreferredDistance
}) => {
  return (
    <View
      style={[commonStyles.cremeCard, { marginTop: 30, width: "95%" }]}
    >
      <PreferredDistance
        preferredDistance={preferredDistance}
        setPreferredDistance={setPreferredDistance}
      />
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
      style={[commonStyles.cremeCard, { marginTop: 30, width: "95%" }]}
    >
      <PreferredActivities
        preferredActivities={preferredActivities}
        updatePreferredActivities={updatePreferredActivities}
        removeActivity={removeActivity}
      />
    </View>
  )
}

const InfoCard = ({

}) => {
  return (
    <View
      style={[commonStyles.cremeCard, { marginTop: 30, flexDirection: "row", width: "95%", height: 80, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }]}
    >
      <Image
        style={{ width: 30, resizeMode: "contain" }}
        source={require("../assets/icons/info.png")}
      />
      <Text
        style={{ fontFamily: "OpenSans", paddingHorizontal: 10 }}
      >
        Grove will do its best to suggest hangouts that honor your preferences for this week!
      </Text>
    </View>
  )
}


const MeThisWeek = ({
  preferences,
  navigation
}) => {

  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [needsUpdate, setNeedsUpdate] = useState(true)
  const dispatch = useDispatch()

  const updatePreferences = () => {
    wizardOfOzGenerateActivity(dispatch)
    schedulePushNotification()
    setSuccessModalVisible(true)
    // setTimeout(() => {
    //   setSuccessModalVisible(false)
    // }, 3000)
    setNeedsUpdate(false)
  }

  /*Num Hangouts State*/
  const [numHangouts, setNumHangouts] = useState(preferences.numHangouts)
  const decrementNumHangouts = () => {
    if (numHangouts === 0) {
      return
    }
    setNeedsUpdate(true)
    setNumHangouts(numHangouts - 1)
  }
  const incrementNumHangouts = () => {
    setNeedsUpdate(true)
    setNumHangouts(numHangouts + 1)
  }

  /*Focus Friends State*/
  const [focusFriends, setFocusFriends] = useState(preferences.focusFriends)
  const updateFocusFriends = (selected) => {
    if (selected.length < 4) {
      const nextFocusFriends = selected.map(friendItem => friends.find(friend => friend.name === friendItem.value))
      setFocusFriends(nextFocusFriends)
      setNeedsUpdate(true)
    }
  }
  const removeFriend = (friend) => {
    setFocusFriends(prev => prev.filter(prevFriend => friend !== prevFriend))
    setNeedsUpdate(true)
  }

  /*Preferred Activities State*/
  const [preferredActivities, setPreferredActivities] = useState(preferences.preferredActivities)
  const updatePreferredActivities = (selected) => {
    const nextPreferredActivities = selected.map(activityItem => DEFAULT_ACTIVITIES.find(activity => activity.title === activityItem.value))
    setPreferredActivities(nextPreferredActivities)
    setNeedsUpdate(true)
  }
  const removeActivity = activity => {
    setPreferredActivities((prev) => prev.filter(prevActivity => prevActivity !== activity));
    setNeedsUpdate(true)
  }

  /**Prefered Distance State */
  const [preferredDistance, setPreferredDistance] = useState(preferences.preferredDistance)

  /**Availability State */
  const [availability, setAvailability] = useState(preferences.availability)

  /**Wizard of oz for generating activity */
  const wizardOfOzGenerateActivity = (dispatch) => {
    const activityTitle = preferredActivities[0].title
    const friend = focusFriends[0].name

    const getLocationFromActivity = (activity) => {
      switch (activity){
        case defaultActivity.BAR_HOPPING:
          return "Nolas"
        case defaultActivity.COFFEE:
          return "Verve Coffee"
        case defaultActivity.HIKING:
          return "Marin Trail"
        case defaultActivity.TENNIS:
          return "EVGR Courts"
      }
    }
    
    const activityToAdd = {
      id: 10,
      title: activityTitle,
      friend: friend,
      date: getDateXDaysFromToday(2),
      confirmed: false,
      plantedId: AUTOMATIC_ID,
      reflected: false,
      location: getLocationFromActivity(activityTitle)
    }

    addActivity(activityToAdd, dispatch)
  }

  return (
    <ImageBackground
      source={require("../assets/backgrounds/grove_newbackground.png")}
      resizeMode="cover"
      style={[commonStyles.full]}
    >
      <ScrollView style={commonStyles.full} contentContainerStyle={styles.background}>
        <SuccessModal
          modalVisible={successModalVisible}
          onClose={() => {
            setSuccessModalVisible(false)
            navigation.navigate(routes.HOME_TAB)
          }}
          prompt={"We will use these preferences to generate personalized hangouts for you this week."}
        />
        <InfoBar 
          infoMessage="We will use these preferences to generate personalized hangouts for you this week."
          cardStyle={{width: "95%"}}
        />
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
        <PreferredDistanceCard
          preferredDistance={preferredDistance}
          setPreferredDistance={setPreferredDistance}
        />
        <Availability
          availability={availability}
          setAvailability={setAvailability}
        />
        <ActionButton
          main={needsUpdate ? "Update Preferences" : "Updated"}
          style={{ marginBottom: 30 }}
          active={needsUpdate && focusFriends.length > 0 && preferredActivities.length > 0}
          onPressMethod={updatePreferences}
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
  },
  card: {
    width: "80%",
  },
  modalView: {
    margin: 20,
    backgroundColor: LIGHT_GREEN,
    borderRadius: 20,
    padding: 35,
    minWidth: '85%',
    minHeight: '25%',
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: DARK_GREEN,
    position: "absolute",
    margin: -10,
    alignContent: "flex-start",
    justifyContent: "flex-start"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalHeaderText: {
    textAlign: "center",
    fontSize: 20,
    color: DARK_GREEN,
    fontFamily: "OpenSansBold"
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
    fontFamily: "OpenSans"
  }
});

const mapStateToProps = state => ({
  preferences: state.preferences
})

export default connect(mapStateToProps)(MeThisWeek);