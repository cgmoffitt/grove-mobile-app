import React, {useState, useEffect} from "react";
import { View, StyleSheet, Image, Dimensions, Pressable, Text } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, BROWN } from "../../constants/themes";
import { activityHeader } from "../../constants/defaultData";
import HomeCard from "./HomeCard";
import Carousel from 'react-native-banner-carousel'
import {
  filterUpcoming,
  filterPending
} from "../../util-functions"
import { connect } from "react-redux";

const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth * 0.8;

const ActivitiesCarousel = ({
  type,
  activities,
  navigation
}) => {

  const [filteredActivities, setFilteredActivities] = useState([])

  useEffect(() => {

    let mounted = true
    if (mounted) {
      if (type === activityHeader.PENDING){
        setFilteredActivities(activities.filter(activity => filterPending(activity)).sort((a, b) => a.date - b.date))
      } else if (type === activityHeader.UPCOMING){
        setFilteredActivities(activities.filter(activity => filterUpcoming(activity)).sort((a, b) => a.date - b.date))
      }
    }

  }, [activities])


  return (
    <View style={[styles.container, type == activityHeader.PENDING ? styles.pendingHeight : styles.upcomingHeight]}>
      <Carousel
        autoplay={false}
        showsPageIndicator={true}
        pageSize={windowWidth}
      >
        {filteredActivities.map((activity, index) => <HomeCard type={type} activity={activity} />)}
      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0
  },
  upcomingHeight: {
    height: 170
  },
  pendingHeight: {
    height: 210
  }
});

export default ActivitiesCarousel;