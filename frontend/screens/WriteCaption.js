import {React, useState} from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, Text, Pressable, Modal} from "react-native";
import commonStyles from "../styles/commonStyles";
import Banner from "../components/utils/Banner.js";
import ActionButton from "../components/utils/ActionButton.js";
import InfoBar from "../components/utils/InfoBar";
import { shadows, TEXT_GRAY, DARK_GREEN } from "../constants/themes.js";


const WriteCaption = ({
    route, navigation
}) => {
    const { photo } = route.params;
    
    const [text, onChangeText] = useState("Add your caption here!");
    const [pressed, setPressed] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [successPrompt, setSuccessPrompt] = useState("")
    const openSuccessModal = (prompt) => {
        setSuccessModalVisible(true)
        setSuccessPrompt(prompt)
        setTimeout(() => {
            setSuccessModalVisible(false)
        }, 3000)
    }

    return (
        <View style={styles.center}>
    <Banner event="Coffee at 52nd St. Cafe" date="15th January 2022, 1pm"/>
      <ImageBackground source={require("../assets/images/backgrounds/grove_friends.png")} resizeMode="cover" style={styles.image}>
        
        { <View style={[commonStyles.cremeCard, styles.photosCard]}>
                <Image style={styles.cardImage} source={photo.url}></Image>
                <Text style={styles.notesTitle}>Notes</Text>
                <Pressable style = {styles.input}onPress={()=> setPressed(true)}>
                    <Text style={styles.inputText}>{(pressed) ? photo.caption : "Add your caption here"}</Text>
                </Pressable>
                <Modal animationType="fade"
                transparent={true}
                visible={successModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setSuccessModalVisible(!successModalVisible);
                }}>
                <SuccessModal
                    setModalVisible={setSuccessModalVisible}
                    prompt={successPrompt}
                />
                </Modal>


                <ActionButton main="Save" active={true} onPressMethod={()=> openSuccessModal("Caption was successfully saved.")}/>
                <InfoBar infoMessage="This is for your personal collection and will not be viewed by anyone else."/>
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
        width: '80%',
        height: '35%',
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: '1%',
        width: '90%',
        height:100,
        justifyContent: 'flex-start',
        borderRadius: 10,
        borderColor: TEXT_GRAY,
        fontFamily: "OpenSans",
      },
      notesTitle:{
          fontFamily: "OpenSans",
          fontSize: 20,
          color:DARK_GREEN,
          paddingTop: '1%'
      },
      inputText: {
          fontFamily: "OpenSans",
          padding: '1%'

      }
});

export default WriteCaption;