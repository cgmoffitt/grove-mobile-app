import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions, Image, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";
import Carousel from 'react-native-banner-carousel'

const NearbyCard = ({

}) => {
    return (
        <View style={styles.nearbyCardContainer}>

            <View style={[styles.nearbyCard, commonStyles.shadow]}>
                <Image
                    source={require("../../assets/images/plant-activity/plant-1.png")}
                    style={{ width: 50, height: 50 }}
                />
                <View>
                    <Text style={styles.textTitle}>Verve Coffee</Text>
                    <Text style={styles.textSub}>10 miles</Text>
                </View>

                <TouchableOpacity style={{ alignSelf: "center" }}>
                    <View style={styles.selectButton}>
                        <Text style={styles.selectText}>Select</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const NearbyLocations = ({

}) => {

    const carouselWidth = Dimensions.get('window').width * 0.8;

    const nearby = [0, 0, 0]

    return (
        <View style={styles.nearbySection}>
            <Text style={styles.nearbyHeader}>Nearby Locations</Text>
            <Carousel
                autoplay={false}
                showsPageIndicator={true}
                pageSize={carouselWidth}
            >
                {nearby.map((_, index) => <NearbyCard />)}
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