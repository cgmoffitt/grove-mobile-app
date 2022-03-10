import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN, TEXT_GRAY } from "../../constants/themes";
import { NEARBY_LOCATIONS } from "../../constants/defaultData"
import Icon from 'react-native-vector-icons/Ionicons'


import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from "react-native-maps";
import customMapStyle from "../../styles/customMapStyle";
import NearbyLocations from "./NearbyLocations";

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
        <View style={styles.searchBar}>
            <Icon name="search" size={20} color={"#333333"} />
            <TextInput
                style={styles.searchInput}
                placeholder={'Search'}
                placeholderTextColor={TEXT_GRAY}
            />
        </View>
    )
}

const LocationsMap = ({
    curNearbyIndex,
    setCurNearbyIndex,
    selectedIndex,
    setSelectedIndex,
    containerStyle,
    locationCardContainerStyle
}) => {

    return (
        <View style={[styles.map, containerStyle]}>
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
                <Marker
                    coordinate={NEARBY_LOCATIONS[curNearbyIndex].coordinate}
                    title={NEARBY_LOCATIONS[curNearbyIndex].name}
                    pinColor={selectedIndex === curNearbyIndex ? DARK_GREEN : undefined}
                >

                </Marker>
            </MapView>
            <SearchBar />
            <NearbyLocations
                nearbyLocations={NEARBY_LOCATIONS}
                setCurNearbyIndex={setCurNearbyIndex}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                locationCardContainerStyle={locationCardContainerStyle}
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
    },
    searchBar: {
        position: 'absolute',
        top: 0,
        width: '100%',
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 5
    },
    searchInput: {
        color: '#000',
        backgroundColor: '#FFF',
        height: 45,
        paddingHorizontal: 10,
        fontSize: 20,
        fontFamily: "OpenSans"
    }
});

export default LocationsMap;