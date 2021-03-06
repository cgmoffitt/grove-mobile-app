import { React, useState } from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows } from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";

const ReflectBar = ({
    title,
    setReflected,
    activity
}) => {

    const [bigSmile, setBigSmile] = useState(activity.reflected);
    const [mediumSmile, setMediumSmile] = useState(false);
    const [straightFace, setStraightFace] = useState(false);


    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.reflectParent}>
                <Pressable
                    style={styles.reflectChild}
                    onPress={() => {
                        setReflected(true)
                        setBigSmile(!bigSmile)
                        setMediumSmile(false)
                        setStraightFace(false)
                    }}>
                    <Image style={bigSmile ? styles.reflectIconBold : styles.reflectIcon} source={require("../../assets/reflection/bigsmile.png")}></Image>
                </Pressable>
                <Pressable
                    style={styles.reflectChild}
                    onPress={() => {
                        setReflected(true)
                        setBigSmile(false)
                        setMediumSmile(!mediumSmile)
                        setStraightFace(false)
                    }}>
                    <Image style={mediumSmile ? styles.reflectIconBold : styles.reflectIcon} source={require("../../assets/reflection/mediumsmile.png")}></Image>
                </Pressable>
                <Pressable
                    style={styles.reflectChild}
                    onPress={() => {
                        setReflected(true)
                        setBigSmile(false)
                        setMediumSmile(false)
                        setStraightFace(!straightFace)
                    }}>
                    <Image style={straightFace ? styles.reflectIconBold : styles.reflectIcon} source={require("../../assets/reflection/straightface.png")}></Image>
                </Pressable>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        fontFamily: "OpenSans",
        fontSize: 18,
        color: DARK_GREEN,
        textAlign: "center",
        paddingTop: '3%'
    },
    reflectIcon: {
        width: 50,
        height: 50
    },
    reflectParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    reflectChild: {
        width: 40,
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: '10%'
    },
    reflectIconBold: {
        borderColor: DARK_GREEN,
        borderWidth: 2,
        borderRadius: 100,
        width: 50,
        height: 50
    }
});

export default ReflectBar;