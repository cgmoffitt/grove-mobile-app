import { React, useState } from "react";
import { Pressable, Text, StyleSheet, View, Image} from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows} from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";

const ReflectBar = (props, {
     navigation
}) => {

    const [bigSmile, setBigSmile] = useState(false);
    const [mediumSmile, setMediumSmile] = useState(false);
    const [straightFace, setStraightFace] = useState(false);


    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.reflectParent}>
                <Pressable style={styles.reflectChild} onPress={() => {setBigSmile(!bigSmile), setMediumSmile(false), setStraightFace(false)}}>
                    <Image style={bigSmile ? styles.reflectIconBold : styles.reflectIcon} source={require("../../assets/reflection/bigsmile.png")}></Image>
                </Pressable>
                <Pressable style={styles.reflectChild} onPress={() => {setBigSmile(false), setMediumSmile(!mediumSmile), setStraightFace(false)}}>
                    <Image style={mediumSmile ? styles.reflectIconBold : styles.reflectIcon} source={require("../../assets/reflection/mediumsmile.png")}></Image>
                </Pressable>
                <Pressable style={styles.reflectChild} onPress={() => {setBigSmile(false), setMediumSmile(false), setStraightFace(!straightFace)}}>
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
    reflectIcon:{
        width:50,
        height:50
    },
    reflectParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    reflectChild:{
        width: 50,
        height: 50,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    reflectIconBold: {
        borderColor: DARK_GREEN,
        borderWidth: 2,
        borderRadius:100,
        width:50,
        height:50
    }
});

export default ReflectBar;