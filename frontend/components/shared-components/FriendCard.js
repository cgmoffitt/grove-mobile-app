import React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { DARK_GREEN, CREME_WHITE, shadows } from "../../constants/themes";
import { MaterialIcons } from '@expo/vector-icons';
import { plantToImage } from "../../constants/defaultData";
const FriendCard = ({
  name,
  plantLevel,
  onPressMethod,
  size,
  removable
}) => {
  //Will need to dynamically change the level of the plant based on how much a friendship is growing
  return (
    <View style={[styles.cardSpace, size === "LARGE" ? styles.cardLarge : styles.cardSmall]}>
      <Pressable style={styles.card} onPress={onPressMethod}>
        {removable && <MaterialIcons name="remove-circle-outline" size={16} color="black" style={styles.removeIcon} />}
        <Image style={size === "Large" ? styles.plantLarge : styles.plantSmall} source={plantToImage[plantLevel]}></Image>
        <Text style={[styles.cardText, size === "LARGE" ? styles.textLarge : styles.textSmall]}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: CREME_WHITE,
    height: 125,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: shadows.shadowColor,
    shadowRadius: shadows.shadowRadius,
    shadowOpacity: shadows.shadowOpacity,
    shadowRadius: shadows.shadowRadius,
    shadowOffset: shadows.shadowOffset,
  },
  cardLarge: {
    width: 110,
    height: 140,
  },
  cardSmall: {
    width: 80,
    height: 100,
    padding: '10%'
  },
  cardSpace: {
    padding: '4%'
  },
  cardText: {
    color: DARK_GREEN,
    fontFamily: "OpenSans",
    fontSize: 20,
    textAlign: "center"
  },
  textLarge: {
    fontSize: 20
  },
  textSmall: {
    fontSize: 14
  },
  plantLarge: {
    width: 100,
    height: 100
  },
  plantSmall: {
    width: 90,
    height: 90
  },
  removeIcon: {
    position: "absolute", 
    right: 2, 
    top: 2
  }
});

export default FriendCard;