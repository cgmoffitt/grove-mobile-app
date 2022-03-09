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
    confirmActivity
} from "../redux/utils"
import {
    filterUpcoming,
    filterPast,
    filterPending,
    filterPlanted
} from "../util-functions"



const Hangouts = ({
    selectedActivityType,
    activities,
    navigation,
}) => {
    const [listToggled, setListToggled] = useState(true)
    const toggleView = () => setListToggled(!listToggled)
    const dispatch = useDispatch()
    const [selectedActivities, setSelectedActivities] = useState(activities.filter(activity => filterUpcoming(activity)))

    const acceptPendingActivity = (activity) => {
        console.log("Confirming activity")
        confirmActivity(activity.id, dispatch)
    }
    

    useEffect(() => {
        let mounted = true
        if (mounted) {
            switch (selectedActivityType) {
                case activityHeader.UPCOMING:
                    setSelectedActivities(activities.filter(activity => filterUpcoming(activity)).sort((a,b) => a.date - b.date))
                    break;
                case activityHeader.PENDING:
                    setSelectedActivities(activities.filter(activity => filterPending(activity)).sort((a,b) => a.date - b.date))
                    break;
                case activityHeader.PLANTED:
                    setSelectedActivities(activities.filter(activity => filterPlanted(activity)).sort((a,b) => a.date - b.date))
                    break;
                case activityHeader.PAST:
                    setSelectedActivities(activities.filter(activity => filterPast(activity)).sort((a,b) => b.date - a.date))
                    break;
            }
        }

        return () => mounted = false

    }, [selectedActivityType, activities])

    return (
        <View style={[commonStyles.full, commonStyles.backgroundCreme]}>
            {/* <ListCalendarToggle
                listToggled={listToggled}
                toggleView={toggleView}
            /> */}
            <ActivityHeaders
                headers={ACTIVITY_HEADERS}
                selected={selectedActivityType}
            />
            <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.content}>
                <ActivitiesCard 
                    activities={selectedActivities} 
                    selected={selectedActivityType} 
                    navigation={navigation}
                    acceptMethod={acceptPendingActivity}
                    declineMethod={()=>console.log("Declined")}
                    editMethod={()=>console.log("Edited")}
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