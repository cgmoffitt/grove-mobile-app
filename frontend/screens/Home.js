import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Pressable, Text } from "react-native";
import PlantActivityButton from "../components/shared-components/PlantActivityButton";
import commonStyles from "../styles/commonStyles"
import { CREME_WHITE } from "../constants/themes";
import ActivitiesCarousel from "../components/home/ActivitiesCarousel";
import { activityHeader } from "../constants/defaultData";
import { connect } from "react-redux";
import {
  filterUpcoming,
  filterPending
} from "../util-functions"
import { useFocusEffect } from "@react-navigation/native";

const Home = ({
  activities,
  navigation
}) => {

  const [upcomingActivities, setUpcomingActivities] = useState(activities.filter(activity => filterUpcoming(activity)).sort((a, b) => a.date - b.date))
  const [pendingActivities, setPendingActivities] = useState(activities.filter(activity => filterPending(activity)).sort((a, b) => a.date - b.date))

  useFocusEffect(
    React.useCallback(() => {
      let mounted = true
      if (mounted) {
        setUpcomingActivities(activities.filter(activity => filterUpcoming(activity)).sort((a, b) => a.date - b.date))
        setPendingActivities(activities.filter(activity => filterPending(activity)).sort((a, b) => a.date - b.date))
      }

      return () => mounted = false;
    }, [activities])
  );

  return (
    <View style={[commonStyles.center, commonStyles.backgroundCreme, { justifyContent: "flex-end" }]}>
      {
        (pendingActivities.length == 0 || upcomingActivities.length == 0) ?
          <Image style={[styles.plantLogo, upcomingActivities.length > 0 ? styles.fixMargin : {}]} source={require("../assets/plants/grove_updated2.png")}></Image>
          :
          <Image style={styles.plantLogoSmall} source={require("../assets/plants/grove_updated2.png")}></Image>
      }

      <ActivitiesCarousel
        activities={pendingActivities}
        type={activityHeader.PENDING}
      />
      <ActivitiesCarousel
        activities={upcomingActivities}
        type={activityHeader.UPCOMING}
      />
      <View style={styles.floatBottom}>
        <PlantActivityButton navigation={navigation} />
      </View>

    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth;

const styles = StyleSheet.create({
  plantLogo: {
    width: logoWidth,
    height: logoWidth,
  },
  fixMargin: {
    marginBottom: -200
  },
  plantLogoSmall: {
    width: logoWidth / 3,
    height: logoWidth / 3,
    marginBottom: 20
  },
  floatBottom: {
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "10%"
  }
});

const mapStateToProps = state => ({
  activities: state.activities
})

export default connect(mapStateToProps)(Home);