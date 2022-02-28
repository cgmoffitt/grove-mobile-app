import React from "react";
import { Pressable, Text, StyleSheet, View} from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows} from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";
import { Icon } from 'react-native-elements';
import { BaseNavigationContainer } from "@react-navigation/native";

const Banner = (props, {
     navigation
}) => {
    return(
      <View style={[commonStyles.cremeCard, styles.banner]}>
        <Text style={styles.bannerText}>{props.event}</Text>
        <Text style={[styles.bannerText, styles.bannerSub]}>{props.date}</Text>
      </View>
    );
};
const styles = StyleSheet.create({
    banner:{
        width: '100%',
        borderRadius: 0,
        paddingBottom: '5%',
        backgroundColor: CREME_WHITE,

    },
    bannerText: {
        fontSize: 20,
        fontFamily: "OpenSans",
        color: DARK_GREEN,
    },
    bannerSub:{
        fontFamily: "OpenSansItalic",
        fontSize:15
    }
});

export default Banner;