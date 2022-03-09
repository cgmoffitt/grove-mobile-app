import React, {useState} from "react";
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

    const carouselWidth = Dimensions.get('screen').width;
    console.log(carouselWidth)

    const [curNearbyIndex, setCurNearbyIndex] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const { activity } = route.params

    const nearbyLocations = [
        {
            name: "Verve Coffee",
            distance: "10 miles",
            coordinate: {
                latitude: 37.79825,
                longitude: -122.4224
            },
            uri: "http://www.thatveganlifedoe.com/wp-content/uploads/2016/02/3.jpg"
        },
        {
            name: "Casa Blanka",
            distance: "10 miles",
            coordinate: {
                latitude: 37.77825,
                longitude: -122.4414
            },
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/0c/be/2d/a9/la-casa-blanca-restaurant.jpg"
        },
        {
            name: "Pizza Royal",
            distance: "10 miles",
            coordinate: {
                latitude: 37.76825,
                longitude: -122.4300
            },
            uri:"https://img.restaurantguru.com/w550/h367/r6fb-meals-Pizza-Royal-2021-09-3.jpg"
        }
    ]

 

    return (
        <View style={[commonStyles.backgroundCreme, styles.screen]}>
            <ProgressBar
                curStep={steps.LOCATION}
                activity={activity}
                showLabels={true}
            />
            <Text style={styles.textHeader}>Select a location</Text>
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
                    <Marker
                        coordinate={nearbyLocations[curNearbyIndex].coordinate}
                        title={nearbyLocations[curNearbyIndex].name}
                        pinColor={selectedIndex === curNearbyIndex ? DARK_GREEN : undefined}
                    >

                    </Marker>

                </MapView>
                <SearchBar />
                <NearbyLocations 
                    nearbyLocations={nearbyLocations}
                    setCurNearbyIndex={setCurNearbyIndex}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            </View>


            <ActionButton
                active={true}
                main={"Next"}
                style={styles.nextButton}
                onPressMethod={() => navigation.navigate(routes.PLANT_ACTIVITYD, {activity: activity, location: nearbyLocations[selectedIndex].name})}
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