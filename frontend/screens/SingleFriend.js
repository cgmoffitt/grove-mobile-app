import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MyAutoTags from "../components/utils/MyAutoTags.js";
import { CREME_WHITE, DARK_GREEN, VIBRANT_GREEN } from "../constants/themes.js";
import commonStyles from "../styles/commonStyles.js";

const ActivityChipNonInteractive = ({
  activity
}) => {
  return (
      <View style={styles.chip}>
          <Text style={styles.activityText}>
              {activity}
          </Text>
      </View>
  )
}

const SingleFriend = ({props, navigation}) => {

  return (
    <View style={[commonStyles.center, commonStyles.backgroundCreme]}>
    <View style={styles.headingParent}>
      <View style={styles.headingChild}>
        <Image style={styles.profilePhoto} source={require("../assets/friends/nirali.jpeg")}></Image>
      </View>
      <View style={styles.headingChild}>
        <View style={styles.headingSubparent}>
          <View style={styles.headingSubchild}>
          <Text style={styles.headingTitle}>Callie</Text>
          </View>
          <View style={styles.headingSubchild}>
            <Text style={styles.headingSubTitle}>Favorite Activities</Text>
          </View>
          <View style={styles.headingSubchild}>
            <View style={styles.chipParent}>
              <View style={styles.chipChild}> 
                <ActivityChipNonInteractive activity={"Coffee"}/>
              </View>
              <View style={styles.chipChild}>             
                <ActivityChipNonInteractive activity={"Bar-hopping"}/>
              </View>
            </View>
          </View>

        </View>
        
      </View>
    </View>
      <View>
        <Text>TO DO:This is the main Callie card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePhoto:{
    width:150,
    height:150,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: DARK_GREEN
  },
  headingParent:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  headingChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: '5%'
  },
  headingTitle:{
    fontFamily: "OpenSansBold",
    color: DARK_GREEN,
    fontSize: 25
  },
  headingSubTitle:{
    fontFamily: "OpenSans",
    color: DARK_GREEN,
    fontSize: 18
  },
  headingSubparent:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  headingSubchild:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: '2%'
  },
  chip: {
    backgroundColor: VIBRANT_GREEN,
    marginLeft: 5,
    borderRadius: 20,
    padding: 10
  },
  activityText:{
    fontFamily: "OpenSansBold",
    fontSize: 14,
    color: "white"
  },
  chipParent:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  chipChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

});

export default SingleFriend;