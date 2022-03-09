import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions, Image, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";
import Carousel from 'react-native-banner-carousel'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const NearbyCard = ({
    location,
    index,
    selectedIndex,
    setSelectedIndex
}) => {

    return (
        <View style={styles.nearbyCardContainer}>

            <View style={[styles.nearbyCard, commonStyles.shadow]}>
                <Image
                    source={{uri: location.uri}}
                    style={{ width: 50, height: 50, borderRadius:5, marginRight:10 }}
                />
                <View>
                    <Text style={styles.textTitle}>{location.name}</Text>
                    <Text style={styles.textSub}>{location.distance}</Text>
                </View>

                <TouchableOpacity 
                    style={{ alignSelf: "center" }}
                    onPress={() => {
                        if (selectedIndex === index){
                            setSelectedIndex(-1)
                        } else {
                            setSelectedIndex(index)
                        }
                    }}
                >
                    <View style={styles.selectButton}>
                        {
                            selectedIndex === index 
                            ?
                            <Icon name="check" color={"white"} size={20}></Icon>
                            :
                            <Text style={styles.selectText}>Select</Text>
                        }
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const NearbyLocations = ({
    setCurNearbyIndex,
    nearbyLocations,
    selectedIndex,
    setSelectedIndex
}) => {

    const carouselWidth = Dimensions.get('window').width * 0.8;



    return (
        <View style={styles.nearbySection}>
            <Text style={styles.nearbyHeader}>Nearby Locations</Text>
            <Carousel
                autoplay={false}
                showsPageIndicator={true}
                pageSize={carouselWidth}
                onPageChanged={(index) => setCurNearbyIndex(index)}
            >
                {nearbyLocations.map((location, index) =>
                    <NearbyCard 
                        location={location} 
                        index={index}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                    />
                )}
            </Carousel>
        </View>
    )
}



const styles = StyleSheet.create({
    nearbySection: {
        width: "100%",
        position: "absolute",
        height: 100,
        bottom: 12
    },
    nearbyHeader: {
        fontFamily: "OpenSansBold",
        fontSize: 18,
        color: DARK_GREEN
    },
    nearbyCardContainer: {
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    nearbyCard: {
        width: "90%",
        height: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row"
    },
    textTitle: {
        fontFamily: "OpenSansItalic",
        fontSize: 18
    },
    textSub: {
        fontFamily: "OpenSans",
        fontSize: 10
    },
    selectButton: {
        backgroundColor: DARK_GREEN,
        width: 60,
        height: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginLeft: 25
    },
    selectText: {
        fontFamily: "OpenSans",
        color: "white"
    }
});

export default NearbyLocations;