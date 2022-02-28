import React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable, Text } from "react-native";
import PlantActivityButton from "../components/shared-components/PlantActivityButton";
import commonStyles from "../styles/commonStyles"
import { CREME_WHITE } from "../constants/themes";

const Home = ({
  navigation
}) => {
  return (
    <View style={[commonStyles.center, commonStyles.backgroundCreme]}>
      <Image style={styles.plantLogo} source={require("../assets/images/plants/plant2.png")}></Image>
      <View style={styles.floatBottom}>
        <PlantActivityButton navigation={navigation} />
      </View>

    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth * 0.8;

const styles = StyleSheet.create({
  plantLogo: {
    width: logoWidth,
    height: logoWidth,
    marginBottom: 100
  },
  floatBottom: {
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingTop: '10%',
    paddingBottom: '5%'
  }
});

export default Home;