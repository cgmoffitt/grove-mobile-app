import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps, NEARBY_LOCATIONS } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from "react-native-maps";
import customMapStyle from "../styles/customMapStyle";
import NearbyLocations from "../components/plant-activity/NearbyLocations";
import LocationsMap from "../components/plant-activity/LocationsMap";

const LocationMarker = ({
    coordinate
}) => {
    return (
        <MapView.Marker
            coordinate={coordinate}
        >
            <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: 'rgba(0, 70, 60, 0.3)', justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: DARK_GREEN }} />
            </View>
        </MapView.Marker>
    )
}

const SearchBar = ({

}) => {
    return (
        <View style={{ position: 'absolute', top: 0, width: '100%' }}>
            <TextInput
                style={{
                    color: '#000',
                    backgroundColor: '#FFF',
                    height: 45,
                    paddingHorizontal: 10,
                    fontSize: 20,
                    fontFamily: "OpenSansItalic"
                }}
                placeholder={'Search'}
                placeholderTextColor={DARK_GREEN}
            />
        </View>
    )
}

const PlantActivityC = ({
    navigation,
    route
}) => {

    const [curNearbyIndex, setCurNearbyIndex] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const { activity } = route.params

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.LOCATION}
                activity={activity}
                showLabels={true}
            />
            <Text style={styles.textHeader}>Select a location</Text>
            <LocationsMap
                curNearbyIndex={curNearbyIndex}
                setCurNearbyIndex={setCurNearbyIndex}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            <ActionButton
                active={selectedIndex !== -1}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYD, {activity: activity, location: NEARBY_LOCATIONS[selectedIndex].name})}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"
    },
    map: {
        width: "80%",
        height: "60%",
        marginTop: 5,
    },
    nextButton: {
        paddingVertical: 8,
        position: "absolute",
        bottom: 20,
        width: "50%"
    },
    textHeader: {
        fontFamily: "OpenSansItalic",
        fontSize: 22,
        color: DARK_GREEN,
    }
});

export default PlantActivityC;