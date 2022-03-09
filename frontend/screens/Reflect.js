import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, ImageBackground, Dimensions, Pressable, Image } from "react-native";
import ReflectCard from "../components/reflect/ReflectCard";
import commonStyles from "../styles/commonStyles";
import ActionButton from "../components/utils/ActionButton";
import InfoBar from "../components/utils/InfoBar";
import Banner from "../components/utils/Banner";
import { TabRouter } from "@react-navigation/native";
import Carousel from 'react-native-banner-carousel';
import { TEXT_GRAY, DARK_GREEN, VIBRANT_GREEN } from "../constants/themes";
import { connect } from "react-redux";


const Reflect = ({
  navigation,
  route,
  activities
}) => {
  const { activityId } = route.params
  const [hangout, setHangout] = useState(null)
  const [loaded, setLoaded] = useState(false)
  console.log("Hangout: ", hangout)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setHangout(activities.find(activity => activity.id === activityId))
      setLoaded(true)
    }
  }, [activities])

  React.useLayoutEffect(() => {
    console.log("Id: ", activityId)
    const thisHangout = activities.find(activity => activity.id === activityId)
    navigation.setOptions({
      title: `Hangout with ${thisHangout.friend}`,
    });
  }, [navigation]);


  const windowWidth = Dimensions.get('window').width;
  const logoWidth = windowWidth * 0.8;
  const [filteredActivities, setFilteredActivities] = useState([])

  // const hangout = {
  //   event: {
  //     name: "Coffee at 52nd St. Cafe",
  //     date: "15th January 2022, 1pm",
  //     memories: [{ url: require("../assets/hangouts/nirali_selfie.png"), caption: "Got coffee with Callie at the cutest cafe!" },
  //     { url: require("../assets/hangouts/nirali_coffee.png"), caption: "Look at the beautiful latte art!" }]
  //   }
  // }

  const [photosUploaded, setPhotosUploaded] = useState(false);

  if (!loaded) {
    return <View></View>
  }

  return (
    <View style={styles.center}>
      <Banner event={hangout.title + " at " + hangout.location} date={hangout.date.toDateString()} />
      <ImageBackground source={require("../assets/images/backgrounds/grove_friends.png")} resizeMode="cover" style={styles.image}>

        <ReflectCard header="How did you feel about this hangout?" subheader="This reflection is just for you!" />

        <View style={[commonStyles.cremeCard, styles.photosCard]}>
          {(!hangout.memories)
            ? <ActionButton
              main="Add to Scrapbook"
              onPressMethod={() => navigation.navigate("UploadMemory",
                {
                  activity: hangout
                })}
              active={true}
            />
            :
            <View>
              <Pressable
                style={[styles.buttonAdd]}
                onPress={() => navigation.navigate("UploadMemory", {
                  activity: hangout
                })}
              >
                <Text style={styles.textStyle}>+</Text>
              </Pressable>
              <View style={[styles.container, styles.upcomingHeight]}>
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
    width: '90%',
    marginTop: '5%',
    height: '40%'
  },
  cardWrapper: {
    paddingTop: '0%',
  },
  cardImage: {
    width: 180,
    height: 140,
    borderRadius: 10
  },
  carousel: {
    flexGrow: 0,
    height: 150,
  },
  container: {
    width: "100%",
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0
  },
  upcomingHeight: {
    height: '100%'
  },
  carouselText: {
    fontFamily: "OpenSans",
    color: TEXT_GRAY,
    fontSize: 16,
    padding: '4%',
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
    position: "relative"
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