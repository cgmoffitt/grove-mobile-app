import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN, TEXT_GRAY } from "../../constants/themes";
import { Slider } from '@miblanchard/react-native-slider';


export default PreferredDistance = ({

}) => {
  const [preferredDistance, setPreferredDistance] = useState(0.2)
  return (
    <View style={[{width: "100%", justifyContent: "center", alignItems: "center"}]}>
      <Text style={styles.textHeader}>I'm open to travel up to</Text>
      <View style={styles.sliderContainer}>
        <Slider
          minimumTrackTintColor={DARK_GREEN}
          thumbTintColor={DARK_GREEN}
          value={preferredDistance}
          onValueChange={value => setPreferredDistance(value)}
        />
      </View>
      <Text style={styles.textRegular}>{Math.round(preferredDistance * 30)} miles from home</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: "100%",
    paddingLeft:10,
    paddingRight:10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  sliderOptions:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textHeader:{
      fontFamily: "OpenSans",
      fontSize: 18,
      color: DARK_GREEN
  },
  textRegular: {
    fontFamily: "OpenSans",
    fontSize: 14,
    color: "black"
  },
  sliderContainer: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});