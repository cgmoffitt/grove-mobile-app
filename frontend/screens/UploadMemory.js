import {React, useState } from "react";
import { View, StyleSheet, Image, ImageBackground, FlatList, Pressable, Text } from "react-native";
import commonStyles from "../styles/commonStyles";
import Banner from "../components/utils/Banner.js";
import ActionButton from "../components/utils/ActionButton.js";
import InfoBar from "../components/utils/InfoBar";
import { shadows, DARK_GREEN } from "../constants/themes.js";
import InfoModal from "../components/hangouts/InfoModal";

const UploadMemory = ({
    route, navigation
}) => {
    const { hangout } = route.params;
    const [hasPhotos, setHasPhotos] = useState(hangout.baseImagesAdded);
    const [photoLinks, setPhotoLinks] = useState([{url: require("../assets/hangouts/nirali_selfie.png"), caption: "Got coffee with Callie at the cutest cafe!"}, {url: require("../assets/hangouts/nirali_coffee.png"), caption: "Look at the beautiful latte art!"}]);
    
    
    const renderItem = (item, index) => {
        return (
        <View style={styles.cardLayout}>

                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        const temp = [... photoLinks];
                        temp.splice(index, 1);
                        setPhotoLinks(temp)}}
                    >
                    <Text style={styles.textStyle}>x</Text>
                </Pressable>
                <Pressable onPress={()=> navigation.navigate("WriteCaption", {photo: {index: index, url:item.url, caption:item.caption}})}>
                    <Image style={styles.cardImage} source={item.url}></Image>
                </Pressable>
            
        </View>
    )}

    return (
        <View style={styles.center}>
    <Banner event="Coffee at 52nd St. Cafe" date="15th January 2022, 1pm"/>
      <ImageBackground source={require("../assets/images/backgrounds/grove_friends.png")} resizeMode="cover" style={styles.image}>
        
        { (!hasPhotos)
           ? <View style={[commonStyles.cremeCard, styles.photosCard]}>
                <View style={styles.photoButton}>
                    <ActionButton 
                        main="Browse Photos" 
                        onPressMethod={() => {
                            const newLinks = [{url: require("../assets/hangouts/nirali_selfie.png"), caption: "Got coffee with Callie at the cutest cafe!"}, {url: require("../assets/hangouts/nirali_coffee.png"), caption: "Look at the beautiful latte art!"}];
                            setPhotoLinks(newLinks);
                            setHasPhotos(true);
                            hangout.updatePhotosUploaded();
                            }
                        }
                        active={true}
                    />
                </View>
                <View style={styles.photoButton}>
                    <ActionButton 
                    main="Take a Photo" 
                    onPressMethod={() => setHasPhotos(true)}
                    active={true}
                    />
                </View>
                <InfoBar infoMessage="This is for your personal collection and will not be viewed by anyone else."/>
            </View>
            : <View style={[commonStyles.cremeCard, styles.photosCard]}>

                <FlatList
                    data={photoLinks}
                    renderItem={({item, index}) => renderItem(item, index)}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
                
                <ActionButton 
                        main="Browse Photos" 
                        onPressMethod={() => {
                            const newLinks = [require("../assets/hangouts/nirali_selfie.png"), require("../assets/hangouts/nirali_coffee.png")];
                            setPhotoLinks(newLinks);
                            setHasPhotos(true);
                            }
                        }
                        active={true}
                    />
                <View style={styles.photoButton}>
                    <ActionButton 
                    main="Take a Photo" 
                    onPressMethod={() => setHasPhotos(true)}
                    active={true}
                    />
                </View>
                <InfoBar infoMessage="This is for your personal collection and will not be viewed by anyone else. Tap on a photo to add caption."/>
            </View>
        }
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
          paddingVertical: '2%'
      },
      cardImage:{
          width: 120,
          height: 100,
          borderRadius: 10
      },
      cardLayout:{
          padding: '5%',
          shadowColor: shadows.shadowColor,
          shadowRadius: shadows.shadowRadius,
          shadowOpacity: shadows.shadowOpacity,
          shadowRadius: shadows.shadowRadius,
          shadowOffset: shadows.shadowOffset,
      },
      button: {
        borderRadius: 20,
        elevation: 2,
        zIndex: 1,
        width:30,
        height:30
        },
      buttonClose: {
        backgroundColor: DARK_GREEN,
        position: "absolute",
        margin: 2,
        width:28,
        height:28,
         alignContent: "flex-start",
        justifyContent: "flex-start"
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "OpenSans",
            fontSize:18
        },
});

export default UploadMemory;