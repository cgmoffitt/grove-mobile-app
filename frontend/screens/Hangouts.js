import React, { useState, useEffect } from "react";
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
    PAST_ACTIVITIES
} from "../constants/defaultData"

const Hangouts = ({
    navigation
}) => {
    const [listToggled, setListToggled] = useState(true)
    const toggleView = () => setListToggled(!listToggled)

    const UPCOMING = "Upcoming"
    const PENDING = "Pending"
    const PLANTED = "Planted"
    const PAST = "Past"

    const HEADERS = [
        UPCOMING,
        PENDING,
        PLANTED,
        PAST
    ]
    const [selected, setSelected] = useState(HEADERS[0])
    const [selectedActivities, setSelectedActivities] = useState(PLANTED_ACTIVITIES)

    useEffect(() => {
        let mounted = true
        if (mounted) {
            switch (selected) {
                case UPCOMING:
                    setSelectedActivities(UPCOMING_ACTIVITIES)
                    break;
                case PENDING:
                    setSelectedActivities(PENDING_ACTIVITIES)
                    break;
                case PLANTED:
                    setSelectedActivities(PLANTED_ACTIVITIES)
                    break;
                case PAST:
                    setSelectedActivities(PAST_ACTIVITIES)
                    break;
            }
        }

        return () => mounted = false

    }, [selected])

    return (
        <View style={[commonStyles.full, commonStyles.backgroundCreme]}>
            <ListCalendarToggle
                listToggled={listToggled}
                toggleView={toggleView}
            />
            <ActivityHeaders
                headers={HEADERS}
                selected={selected}
                setSelected={setSelected}
            />
            <ImageBackground source={require("../assets/images/backgrounds/Me-This-Week.png")} resizeMode="cover" style={styles.content}>
                <ActivitiesCard activities={selectedActivities} selected={selected} />
                {selected === PLANTED && <PlantActivityButton navigation={navigation} />}
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

export default Hangouts;