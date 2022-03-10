import React from "react";
import { Pressable, Text, StyleSheet, View} from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows} from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";
import { Icon } from 'react-native-elements';

const InfoBar = ({
     navigation,
     cardStyle,
     infoMessage
}) => {
    return(
      <View style={[commonStyles.cremeCard, styles.infoCard, cardStyle]}>
        <View style={styles.infoParent}>
            <View style={styles.infoChild}>
                <Icon name='info' type="feather" />
            </View>
            <View style={[styles.infoChild, styles.infoTextBox]}>
                <Text style={styles.infoText}>{infoMessage}</Text>
            </View>

        </View>

      </View>
    );
};
const styles = StyleSheet.create({
    infoCard:{
        width: '90%',
        padding:'0%',
        backgroundColor: "#ffffff",
        margin: '5%'
    },
    infoParent: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start"
    },
    infoChild:{
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: '2%',
    },
    infoTextBox:{
        width:'75%',
    },
    infoText:{
        fontSize: 11,
        fontFamily:"OpenSans"
    }
});

export default InfoBar;