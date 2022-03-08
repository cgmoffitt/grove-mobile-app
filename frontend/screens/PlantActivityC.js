import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import commonStyles from "../styles/commonStyles"
import { DARK_GREEN } from "../constants/themes";
import { steps } from "../constants/defaultData"

import ActionButton from "../components/utils/ActionButton";
import ProgressBar from "../components/plant-activity/ProgressBar";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from "react-native-maps";
import customMapStyle from "../styles/customMapStyle";
import Carousel from 'react-native-banner-carousel'
import NearbyLocations from "../components/plant-activity/NearbyLocations";

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
                placeholder={'Select a location'}
                placeholderTextColor={DARK_GREEN}
            />
        </View>
    )
}

const PlantActivityC = ({
    navigation
}) => {

    const carouselWidth = Dimensions.get('screen').width;
    console.log(carouselWidth)

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.LOCATION}
                activity="Tennis"
            />
            <View style={styles.map}>
                <MapView
                    style={commonStyles.full}
                    customMapStyle={customMapStyle}
                    userLocationCalloutEnabled={true}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <LocationMarker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }} />

                </MapView>
                <SearchBar />
                <NearbyLocations />
            </View>


            <ActionButton
                active={true}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYD)}
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
        height: "65%",
        marginTop: 20,
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