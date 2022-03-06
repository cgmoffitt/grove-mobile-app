import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";
import ReflectCard from "../components/reflect/ReflectCard";
import commonStyles from "../styles/commonStyles";
import ActionButton from "../components/utils/ActionButton";
import InfoBar from "../components/utils/InfoBar";
import Banner from "../components/utils/Banner";

const Reflect = ({
  navigation
}) => {
  return (
    <View style={styles.center}>
    <Banner event="Coffee at 52nd St. Cafe" date="15th January 2022, 1pm"/>
      <ImageBackground source={require("../assets/images/backgrounds/grove_friends.png")} resizeMode="cover" style={styles.image}>
        
        <ReflectCard header="How did you feel about this hangout?" subheader="This reflection is just for you!"/>
        
        <View style={[commonStyles.cremeCard, styles.photosCard]}>
          <ActionButton 
            main="Add to Scrapbook" 
            onPressMethod={() => navigation.navigate("UploadMemory")}
            active={true}
          />
          <InfoBar infoMessage="This is for your personal collection and will not be viewed by anyone else."/>
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
    padding: '5%',
    marginTop: '5%',
    height: '35%'
  },
  cardWrapper:{
    paddingTop: '0%',
  }
});

export default Reflect;