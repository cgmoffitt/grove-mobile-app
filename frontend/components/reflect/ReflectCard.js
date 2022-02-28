import React from "react";
import { Pressable, Text, StyleSheet, View} from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows} from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";
import ReflectBar from "../reflect/ReflectBar";
import InfoBar from "../utils/InfoBar";


const InfoCard = (props, {
     navigation
}) => {
    return(
      <View style={[commonStyles.cremeCard, styles.infoCard]}>
            
            <View style={[styles.infoHeader]}>
                <Text style={styles.headerText}>{props.header}</Text>
                <Text style={styles.subHeader}>{props.subheader}</Text>
            </View>
            
          <ReflectBar title="Location"/>
          <ReflectBar title="Activity"/>
      </View>
    );
};
const styles = StyleSheet.create({
    infoHeader:{
        backgroundColor: VIBRANT_GREEN,
        width:'100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: '5%'
    },
    headerText: {
        color: CREME_WHITE,
        fontSize: 18,
        textAlign: "center",
        fontFamily: "OpenSans"
    },
    infoCard:{
        width: '90%',
        padding: '0%',
        paddingBottom: '5%'
    },
    subHeader:{
        textAlign: "center",
        fontSize: 15,
        fontFamily: "OpenSans",
        color: CREME_WHITE
    }
});

export default InfoCard;