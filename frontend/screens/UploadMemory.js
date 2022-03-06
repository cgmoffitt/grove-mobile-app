import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";
import commonStyles from "../styles/commonStyles";
import Banner from "../components/utils/Banner.js";
import ActionButton from "../components/utils/ActionButton.js";
import InfoBar from "../components/utils/InfoBar";

const UploadMemory = ({
    navigation
}) => {
    return (
        <View style={styles.center}>
    <Banner event="Coffee at 52nd St. Cafe" date="15th January 2022, 1pm"/>
      <ImageBackground source={require("../assets/images/backgrounds/grove_friends.png")} resizeMode="cover" style={styles.image}>
        
        <View style={[commonStyles.cremeCard, styles.photosCard]}>
            <View style={styles.photoButton}>
                <ActionButton 
                    main="Browse Photos" 
                    onPressMethod={() => navigation.navigate("WriteCaption")}
                    active={true}
                />
            </View>
            <View style={styles.photoButton}>
                <ActionButton 
                main="Take a Photo" 
                onPressMethod={() => navigation.navigate("WriteCaption")}
                active={true}
                />
            </View>


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
        height: '90%'
      },
      cardWrapper:{
        paddingTop: '0%',
      },
      photoButton:{
          justifyContent: "center",
          alignItems: "center",
          width: '100%',
          paddingVertical: '5%'
      }
});

export default UploadMemory;