import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground, TextInput, Text, Pressable, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import commonStyles from "../styles/commonStyles";
import Banner from "../components/utils/Banner.js";
import ActionButton from "../components/utils/ActionButton.js";
import InfoBar from "../components/utils/InfoBar";
import { shadows, TEXT_GRAY, DARK_GREEN } from "../constants/themes.js";
import { addMemory } from "../redux/utils";
import { useDispatch } from "react-redux";
import routes from "../constants/routes";

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
    >
        {children}
    </TouchableWithoutFeedback>
);

const WriteCaption = ({
    route, navigation
}) => {
    const dispatch = useDispatch()
    const { photo } = route.params;
    console.log("photo: ", photo)
    
    const [text, onChangeText] = useState(photo.caption);
    console.log("Text: ", text)
    const [pressed, setPressed] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [successPrompt, setSuccessPrompt] = useState("")
    const openSuccessModal = (prompt) => {
        setSuccessModalVisible(true)
        setSuccessPrompt(prompt)
        setTimeout(() => {
            setSuccessModalVisible(false)
            navigation.navigate(routes.REFLECT, {activityId: photo.activityId})
        }, 2000)
    }

    return (
        <View style={styles.center}>
            <Banner event="Coffee at 52nd St. Cafe" date="15th January 2022, 1pm" />
            <SuccessModal
                modalVisible={successModalVisible}
                onClose={() => setSuccessModalVisible(false)}
                prompt={successPrompt}
            />
            <ImageBackground source={require("../assets/backgrounds/grove_newbackground.png")} resizeMode="cover" style={styles.image}>
                <DismissKeyboard>
                    <View style={[commonStyles.cremeCard, styles.photosCard]}>
                        <Image style={styles.cardImage} source={photo}></Image>
                        <TextInput
                            value={text}
                            onChangeText={onChangeText}
                            style={[styles.input, styles.inputText]}
                            multiline={true}
                            placeholder="Write a caption here!"
                            maxLength={48}
                        />
                        {/* <Pressable style={styles.input} onPress={() => setPressed(true)}>
                        <Text style={styles.inputText}>{(pressed) ? photo.caption : "Add your caption here"}</Text>
                    </Pressable> */}

                        <ActionButton main="Save" active={true} onPressMethod={() => {
                            addMemory(photo.activityId, {uri:photo.uri, caption: text}, dispatch)
                            openSuccessModal("Caption was successfully saved.")
                        }} />
                        <InfoBar infoMessage="This is for your personal collection and will not be viewed by anyone else." />
                    </View>
                </DismissKeyboard>
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
        height: '80%',
        justifyContent: "flex-start"
    },
    cardWrapper: {
        paddingTop: '0%',
    },
    photoButton: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        paddingVertical: '2%'
    },
    cardImage: {
        width: '80%',
        height: '35%',
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
    input: {
        margin: 10,
        borderWidth: 1,
        width: '90%',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        borderRadius: 10,
        borderColor: TEXT_GRAY,
        fontFamily: "OpenSans"
    },
    notesTitle: {
        fontFamily: "OpenSans",
        fontSize: 20,
        color: DARK_GREEN,
        paddingTop: '1%'
    },
    inputText: {
        fontFamily: "OpenSans",
        padding: '5%',
        fontSize: 18
    }
});

export default WriteCaption;