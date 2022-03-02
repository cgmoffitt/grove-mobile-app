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
    UPCOMING_ACTIVITIES,
    PENDING_ACTIVITIES,
    PLANTED_ACTIVITIES,
    PAST_ACTIVITIES,
    ACTIVITY_HEADERS,
    activityHeader
} from "../constants/defaultData"

const Hangouts = ({
    selectedActivityType,
    navigation
}) => {
    const [listToggled, setListToggled] = useState(true)
    const toggleView = () => setListToggled(!listToggled)

    const [selectedActivities, setSelectedActivities] = useState(PLANTED_ACTIVITIES)

    useEffect(() => {
        let mounted = true
        if (mounted) {
            switch (selectedActivityType) {
                case activityHeader.UPCOMING:
                    setSelectedActivities(UPCOMING_ACTIVITIES)
                    break;
                case activityHeader.PENDING:
                    setSelectedActivities(PENDING_ACTIVITIES)
                    break;
                case activityHeader.PLANTED:
                    setSelectedActivities(PLANTED_ACTIVITIES)
                    break;
                case activityHeader.PAST:
                    setSelectedActivities(PAST_ACTIVITIES)
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
    selectedActivityType: state.selectedActivityType
})

export default connect(mapStateToProps)(Hangouts)