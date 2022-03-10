import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, ImageBackground, FlatList, Pressable, Text } from "react-native";
import commonStyles from "../styles/commonStyles";
import Banner from "../components/utils/Banner.js";
import ActionButton from "../components/utils/ActionButton.js";
import InfoBar from "../components/utils/InfoBar";
import { shadows, DARK_GREEN, TEXT_GRAY } from "../constants/themes.js";
import * as ImagePicker from 'expo-image-picker'
import { addMemory } from "../redux/utils";
import { useDispatch, connect } from "react-redux";

const UploadMemory = ({
    route, 
    navigation,
    activities
}) => {
    const dispatch = useDispatch()
    const { activity } = route.params;
    const [hangout, setHangout] = useState(null)
    const [loaded, setLoaded] = useState(false)

    const [hasPhotos, setHasPhotos] = useState(activity.memories ? true : false);
    const [photoLinks, setPhotoLinks] = useState([]);

    useEffect(() => {
        let mounted = true
        if (mounted){
          setHangout(activities.find(thisActivity => thisActivity.id === activity.id))
          setLoaded(true)
        }
      },[activities])


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            addPhoto(result.uri)
            addMemory(hangout.id, {uri: result.uri, caption: ""}, dispatch)
        }
    };

    const addPhoto = (uri) => {
        setHasPhotos(true)
        setPhotoLinks(prev => [...prev, {uri: uri, caption: ""}])
    }

    const renderItem = (item, index, activityId) => {
        return (
            <View style={styles.cardLayout}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        const temp = [...photoLinks];
                        temp.splice(index, 1);
                        setPhotoLinks(temp)
                    }}
                >
                    <Text style={styles.textStyle}>x</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("WriteCaption", { photo: { index: index, uri: item.uri, caption: item.caption, activityId: activityId } })}>
                    <Image style={styles.cardImage} source={item}></Image>
                </Pressable>
            </View>
        )
    }

    if (!loaded){
        return <View></View>
    }

    return (
        <View style={styles.center}>
            <Banner event={hangout.title + " at " + hangout.location} date={activity.date.toLocaleString('default', { weekday: 'short' }) + " " + activity.date.getDate() + " "+ activity.date.toLocaleString('default', { month: 'long' })} />
            <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.image}>

                {(!hasPhotos)
                    ? <View style={[commonStyles.cremeCard, styles.photosCard]}>
                        <View style={styles.photoButton}>
                            <ActionButton
                                main="Browse Photos"
                                onPressMethod={pickImage}
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
                        <InfoBar infoMessage="This is for your personal collection and will not be viewed by anyone else." />
                    </View>
                    : <View style={[commonStyles.cremeCard, styles.photosCard]}>

                        <FlatList
                            data={hangout.memories}
                            renderItem={({ item, index }) => renderItem(item, index, hangout.id)}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.photoButton}>
                            <ActionButton
                                main="Browse Photos"
                                onPressMethod={pickImage}
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
                        <InfoBar infoMessage="Tap on a photo to add caption! This is for your personal collection and will not be viewed by anyone else." />
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
        padding: '5%',
        marginTop: '5%',
        height: '90%'
    },
    cardWrapper: {
        paddingTop: '0%',
    },
    photoButton: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        paddingVertical: '3%'
    },
    cardImage: {
        width: 120,
        height: 100,
        borderRadius: 10
    },
    cardLayout: {
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
        width: 30,
        height: 30
    },
    buttonClose: {
        backgroundColor: TEXT_GRAY,
        position: "absolute",
        margin: 2,
        width: 28,
        height: 28,
        alignContent: "flex-start",
        justifyContent: "flex-start"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "OpenSans",
        fontSize: 18
    },
});

const mapStateToProps = state => ({
    activities: state.activities
})

export default connect(mapStateToProps)(UploadMemory);