import { React, useState } from "react";
import { View, StyleSheet, Text, Button, ImageBackground, Dimensions, Pressable, Image } from "react-native";
import ReflectCard from "../components/reflect/ReflectCard";
import commonStyles from "../styles/commonStyles";
import ActionButton from "../components/utils/ActionButton";
import InfoBar from "../components/utils/InfoBar";
import Banner from "../components/utils/Banner";
import { TabRouter } from "@react-navigation/native";
import Carousel from 'react-native-banner-carousel';
import { TEXT_GRAY, DARK_GREEN, VIBRANT_GREEN } from "../constants/themes";


const Reflect = ({
  navigation
}) => {

  const windowWidth = Dimensions.get('window').width;
  const logoWidth = windowWidth * 0.8;
  const [filteredActivities, setFilteredActivities] = useState([])

  const hangout = {
    event: {
      name: "Coffee at 52nd St. Cafe",
      date: "Sat 15 January, 1pm",
      memories: [{url: require("../assets/hangouts/nirali_selfie.png"), caption: "Got coffee with Callie at the cutest cafe!"}, 
      {url: require("../assets/hangouts/nirali_coffee.png"), caption: "Look at the beautiful latte art!"}]
    }
  }

  const [photosUploaded, setPhotosUploaded] = useState(false);
  return (
    <View style={styles.center}>
    <Banner event={hangout.event.name} date={hangout.event.date}/>
      <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.image}>
        
        <ReflectCard header="How did you feel about this hangout?" subheader="This reflection is just for you!"/>
        
        <View style={[commonStyles.cremeCard, styles.photosCard]}>
          {(!photosUploaded)
          ? <ActionButton 
            main="Add to Scrapbook" 
            onPressMethod={() => navigation.navigate("UploadMemory", 
                                    {hangout: {event: hangout.event, date: hangout.date, 
                                    photoLinks: hangout.photoLinks, 
                                    captions: hangout.captions,
                                    baseImagesAdded: false,
                                    updatePhotosUploaded: () => {setPhotosUploaded(true)}}})}
            active={true}
          />
          : <View>
          <View >
            <Pressable
                  style={[styles.buttonAdd]}
                  onPress={() => navigation.navigate("UploadMemory", {hangout: {event: hangout.event, date: hangout.date, 
                              photoLinks: hangout.photoLinks, 
                              captions: hangout.captions,
                              baseImagesAdded: true,
                              updatePhotosUploaded: () => {setPhotosUploaded(true)}}})}
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
                    {hangout.event.memories.map((item, index) => 
                    <View style={styles.carouselCard}>
                        <Image style={styles.cardImage} source={item.url}></Image>
                      <Text style={styles.carouselText}>{item.caption}</Text>
                    </View>)}
                  </Carousel> 

                  
                </View>
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
  image:{
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '120%',
    textAlign: "center",
    alignItems: "center"
  },
  photosCard: {
    width: '90%',
    marginTop: '3%',
    height: '40%'
  },
  cardWrapper:{
    paddingTop: '0%',
  },
  cardImage:{
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
  carouselText:{
    fontFamily: "OpenSans",
    color: TEXT_GRAY,
    fontSize: 16,
    padding: '4%',
    textAlign: "center"
  },
  carouselCard:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex"
  },
  buttonAdd: {
    backgroundColor: VIBRANT_GREEN,
    borderRadius: 100,
    width:42,
    height:42,
    textAlign: "center",
    position: "relative"
  },
  textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "OpenSansBold",
        fontSize:30
  },
});

export default Reflect;