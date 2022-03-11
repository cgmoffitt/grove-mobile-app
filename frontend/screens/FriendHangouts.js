import React, { useState, useEffect } from "react";
import { connect, useDispatch } from 'react-redux'
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
    confirmActivity,
    deleteActivity
} from "../redux/utils"
import {
    filterPast,
} from "../util-functions"



const FriendHangouts = ({
    selectedActivityType,
    activities,
    navigation,
    route
}) => {
    const { friend } = route.params

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: `hangouts with ${friend}`,
        });
    }, [navigation]);

    const [listToggled, setListToggled] = useState(true)
    const toggleView = () => setListToggled(!listToggled)
    const dispatch = useDispatch()
    const [selectedActivities, setSelectedActivities] = useState(activities.filter(activity => filterPast(activity)).filter(activity => activity.friend === friend))

    const acceptPendingActivity = (activity) => {
        console.log("Confirming activity")
        confirmActivity(activity.id, dispatch)
    }

    const deletePendingActivity = (activity) => {
        console.log("Deleting activity")
        deleteActivity(activity.id, dispatch)
    }


    useEffect(() => {
        let mounted = true
        if (mounted) {
            setSelectedActivities(activities.filter(activity => filterPast(activity)).filter(activity => activity.friend === friend).sort((a, b) => b.date - a.date))
        }

        return () => mounted = false

    }, [selectedActivityType, activities])

    return (
        <View style={[commonStyles.full, commonStyles.backgroundCreme]}>
            {/* <ListCalendarToggle
                listToggled={listToggled}
                toggleView={toggleView}
            /> */}
            <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.content}>
                <ActivitiesCard
                    activities={selectedActivities}
                    selected={activityHeader.PAST}
                    navigation={navigation}
                    acceptMethod={acceptPendingActivity}
                    declineMethod={deletePendingActivity}
                    editMethod={() => console.log("Edited")}
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

export default connect(mapStateToProps)(FriendHangouts)