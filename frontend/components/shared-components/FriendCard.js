import React from "react";
import { Pressable, Text, StyleSheet, Image, View} from "react-native";
import { DARK_GREEN, CREME_WHITE, shadows} from "../../constants/themes";

const FriendCard = (props, {
     navigation
}) => {
    //Will need to dynamically change the level of the plant based on how much a friendship is growing
    return(
      <View style={styles.cardSpace}>
        <Pressable style={styles.card} onPress={props.onPressMethod}>
          <Image style={styles.plantToken} source={require("../../assets/images/plants/plant2.png")}></Image>
          <Text style={styles.cardText}>{props.name}</Text>
        </Pressable>
      </View>
    );
};
const styles = StyleSheet.create({
    card: {
      backgroundColor: CREME_WHITE,
      padding:'5%',
      borderRadius:10,
      width: 110,
      height: 140,
      justifyContent:"center",
      alignItems: "center",
      shadowColor: shadows.shadowColor,
      shadowRadius: shadows.shadowRadius,
      shadowOpacity: shadows.shadowOpacity,
      shadowRadius: shadows.shadowRadius,
      shadowOffset: shadows.shadowOffset,
    },
    cardSpace: {
      padding: '2%'
    },
    cardText: {
      color: DARK_GREEN,
      fontFamily: "OpenSans",
      fontSize: 20,
      textAlign: "center"
    },
    plantToken: {
      width:90,
      height:90
    }
});

export default FriendCard;