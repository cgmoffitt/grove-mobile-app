import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { View, StyleSheet, ImageBackground } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import PlantActivityButton from "../components/shared-components/PlantActivityButton";
import ListCalendarToggle from "../components/hangouts/ListCalendarToggle";
import ActivityHeaders from "../components/hangouts/ActivityHeaders"
import ActivitiesCard from "../components/hangouts/ActivitiesCard";
import {
    MY_ID,
    ACTIVITY_HEADERS,
    activityHeader
} from "../constants/defaultData"
import {
    setActivities
} from "../redux/utils"

//UPCOMING ACTIVITIES: date IN FUTURE AND confirmed IS TRUE
const filterUpcoming = (activity) => {
    const curDate = new Date()
    return activity.date > curDate && activity.confirmed
}
//PLANTED ACTIVITIES: date IN FUTURE, confirmed IS FALSE, plantedId is "ME"
const filterPlanted = (activity) => {
    const curDate = new Date()
    return activity.date > curDate && !activity.confirmed && activity.plantedId == MY_ID
}

//PENDING ACTIVITIES: date IN FUTURE, confirmed is FALSE, plantedId is "SOMEONE_ELSE" OR "AUTOMATIC"
const filterPending = (activity) => {
    const curDate = new Date()
    return activity.date > curDate && !activity.confirmed && activity.plantedId != MY_ID
}

//Past Activities: date IN PAST, confirmed is TRUE
const filterPast = (activity) => {
    const curDate = new Date()
    return activity.date < curDate && activity.confirmed
}

const Hangouts = ({
    selectedActivityType,
    activities,
    navigation,
}) => {
    const [listToggled, setListToggled] = useState(true)
    const toggleView = () => setListToggled(!listToggled)

    // const activities = ALL_ACTIVITIES

    const [selectedActivities, setSelectedActivities] = useState(activities.filter(activity => filterUpcoming(activity)))

    

    useEffect(() => {
        let mounted = true
        if (mounted) {
            switch (selectedActivityType) {
                case activityHeader.UPCOMING:
                    setSelectedActivities(activities.filter(activity => filterUpcoming(activity)))
                    break;
                case activityHeader.PENDING:
                    setSelectedActivities(activities.filter(activity => filterPending(activity)))
                    break;
                case activityHeader.PLANTED:
                    setSelectedActivities(activities.filter(activity => filterPlanted(activity)))
                    break;
                case activityHeader.PAST:
                    setSelectedActivities(activities.filter(activity => filterPast(activity)))
                    break;
            }
        }

        return () => mounted = false

    }, [selectedActivityType])

    return (
        <View style={[commonStyles.full, commonStyles.backgroundCreme]}>
            <ListCalendarToggle
                listToggled={listToggled}
                toggleView={toggleView}
            />
            <ActivityHeaders
                headers={ACTIVITY_HEADERS}
                selected={selectedActivityType}
            />
            <ImageBackground source={require("../assets/images/backgrounds/Me-This-Week.png")} resizeMode="cover" style={styles.content}>
                <ActivitiesCard 
                    activities={selectedActivities} 
                    selected={selectedActivityType} 
                    navigation={navigation}
                />
                {selectedActivityType === activityHeader.PLANTED && <PlantActivityButton navigation={navigation} />}
            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: DARK_GREEN,
        paddingVertical: 30
    }
});

const mapStateToProps = state => ({
    selectedActivityType: state.selectedActivityType,
    activities: state.activities
})

export default connect(mapStateToProps)(Hangouts)