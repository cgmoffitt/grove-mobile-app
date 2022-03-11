import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";
import ReflectCard from "../components/reflect/ReflectCard";
import commonStyles from "../styles/commonStyles";
import ActionButton from "../components/utils/ActionButton";
import InfoBar from "../components/utils/InfoBar";
import Banner from "../components/utils/Banner";
import { TabRouter } from "@react-navigation/native";
import Carousel from 'react-native-banner-carousel';
import { TEXT_GRAY, DARK_GREEN, VIBRANT_GREEN } from "../constants/themes";
import { connect } from "react-redux";
import { getStandardDate } from "../util-functions";


const Reflect = ({
  navigation,
  route,
  activities
}) => {
  const { activityId } = route.params
  const [hangout, setHangout] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setHangout(activities.find(activity => activity.id === activityId))
      setLoaded(true)
    }
  }, [activities])

  React.useLayoutEffect(() => {
    const thisHangout = activities.find(activity => activity.id === activityId)
    navigation.setOptions({
      title: `hangout with ${thisHangout.friend}`,
    });
  }, [navigation]);


  const windowWidth = Dimensions.get('window').width;
  const logoWidth = windowWidth * 0.8;
  const [filteredActivities, setFilteredActivities] = useState([])

  const [photosUploaded, setPhotosUploaded] = useState(false);

  if (!loaded) {
    return <View></View>
  }

  return (
    <View style={styles.center}>
      <Banner event={hangout.title + " at " + hangout.location} date={getStandardDate(hangout.date)} />
      <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.image}>
        <ReflectCard
          header="How was the hangout?"
          subheader="This reflection is just for you!"
          activity={hangout}
        />

        <View style={[commonStyles.cremeCard, styles.photosCard]}>
          {(!hangout.memories || hangout.memories.length === 0)
            ? <ActionButton
              main="Add to Scrapbook"
              onPressMethod={() => navigation.navigate("UploadMemory",
                {
                  activity: hangout
                })}
              active={true}
            />
            :
            <View style={[styles.container]}>
              <TouchableOpacity
                style={[styles.buttonAdd]}
                onPress={() => navigation.navigate("UploadMemory", {
                  activity: hangout
                })}
              >
                <Text style={styles.textStyle}>+</Text>
              </TouchableOpacity>

              <Carousel
                autoplay={true}
                showsPageIndicator={true}
                pageSize={windowWidth}
                useNativeDriver={false}
              >
                {hangout.memories.map((item, index) =>
                  <View style={styles.carouselCard}>
                    <Image style={styles.cardImage} source={item}></Image>
                    <Text style={styles.carouselText}>{item.caption}</Text>
                  </View>)}
              </Carousel>

            </View>

          }
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '120%',
    textAlign: "center",
    alignItems: "center"
  },
  photosCard: {
    width: '95%',
    marginTop: '5%',
    height: '32%',
    paddingVertical: 0
  },
  cardWrapper: {
    paddingTop: '0%',
  },
  cardImage: {
    width: 120,
    height: 110,
    borderRadius: 10,
    marginTop: 15
  },
  carousel: {
    flexGrow: 0,
    height: 150,
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0
  },
  upcomingHeight: {
    height: '100%'
  },
  carouselText: {
    fontFamily: "OpenSans",
    color: "black",
    fontSize: 16,
    padding: '1%',
    textAlign: "center"
  },
  carouselCard: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex"
  },
  buttonAdd: {
    backgroundColor: VIBRANT_GREEN,
    borderRadius: 100,
    width: 42,
    height: 42,
    textAlign: "center",
    position: "absolute",
    top: -10,
    left: -20,
    zIndex: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "OpenSansBold",
    fontSize: 30
  },
});

const mapStateToProps = state => ({
  activities: state.activities
})

export default connect(mapStateToProps)(Reflect);