import { React, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, FlatList } from "react-native";
import MyAutoTags from "../components/utils/MyAutoTags.js";
import { CREME_WHITE, DARK_GREEN, VIBRANT_GREEN, TEXT_GRAY } from "../constants/themes.js";
import commonStyles from "../styles/commonStyles.js";
import ActionButton from "../components/utils/ActionButton.js";
import { Slider } from '@miblanchard/react-native-slider';
import ToggleSwitch from 'toggle-switch-react-native';
import routes from "../constants/routes.js";
import { plantToImage, friends } from "../constants/defaultData.js";

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

const FrequencySlider = ({
  name
}) => {
  const [preferredDistance, setPreferredDistance] = useState(0.2);
  return (
    <View style={[{ width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: '3%' }]}>
      <Text style={styles.textHeader}>It would be fun to see {name}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          minimumTrackTintColor={DARK_GREEN}
          thumbTintColor={DARK_GREEN}
          value={preferredDistance}
          onValueChange={value => setPreferredDistance(value)}
        />
      </View>
      <Text style={styles.textRegular}>{Math.round(preferredDistance * 8)} times per month</Text>
    </View>

  )
}

const SingleFriend = ({ route, navigation }) => {
  const [alertIsOn, setAlertIsOn] = useState(false);
  const [priorityIsOn, setPriorityIsOn] = useState(false);
  const { props } = route.params;
  const friend = friends.find(friend => friend.name === props.name)

  const renderItem = (item, index) => (
    <View style={styles.chipChild}>
      <ActivityChipNonInteractive activity={item} />
    </View>
  )

  return (
    <View style={[commonStyles.center, commonStyles.backgroundCreme]}>
      <View style={{ justifyContent: "flex-end", width: '95%', paddingTop: '5%' }}>
        <View style={[styles.headingParentUtils]}>
          <View style={[styles.headingChildUtils]}>
            <Image style={styles.upperIcon} source={require("../assets/single_friend/speech-bubble.png")}></Image>
          </View>
          <View style={styles.headingChildUtils} >
            <Image style={styles.upperIcon} source={require("../assets/single_friend/warning.png")}></Image>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.headingParent}>
          <View style={styles.headingChild}>
            <Image style={styles.profilePhoto} source={props.url}></Image>
          </View>
          <View style={styles.headingChild}>
            <View style={styles.headingSubparent}>
              <View style={styles.headingSubchild}>


              </View>
              <View style={styles.headingSubchild}>
                <View style={styles.headingParentTitle}>
                  <View style={[styles.headingChildTitle]}>
                    <Image style={{ width: 50, height: 40 }} source={plantToImage[friend.plant]}></Image>
                  </View>
                  <View style={styles.headingChildTitle}>
                    <Text style={styles.headingTitle}>{props.name}</Text>
                  </View>
                </View>

              </View>
              <View style={styles.headingSubchild}>
                <Text style={styles.headingSubTitle}>  Favorite Activities</Text>
              </View>
              <View style={styles.headingSubchild}>
                <View style={styles.chipParent}>
                  <FlatList
                    data={props.activities}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>
      <View style={styles.mainFriendCard}>
        <ActionButton
          main={"Memories with " + props.name}
          style={styles.memoriesButton}
          onPressMethod={() => navigation.navigate(routes.FRIEND_HANGOUTS, { friend: props.name })}
          active={true}
          renderIcon={() => <Image style={{width: 30, height:30, marginRight: 10}} source={require("../assets/single_friend/camera.png")} />}
        />
        <ImageBackground
          source={require("../assets/images/backgrounds/Me-This-Week.png")}
          resizeMode="cover"
          imageStyle={{ borderRadius: 20 }}
          style={[commonStyles.full, styles.mainFriendBackground]}
        >

          <View style={[commonStyles.cremeCard, styles.cremeCard]}>
            <FrequencySlider name={props.name} />
            <View style={styles.thinLine}></View>
            <View style={{ paddingVertical: '5%', paddingHorizontal: '2%' }}>
              <ToggleSwitch
                isOn={alertIsOn}
                onColor={DARK_GREEN}
                offColor={TEXT_GRAY}
                label={"Alert me for their planted activities"}
                labelStyle={{ color: "black", fontFamily: "OpenSans", fontSize: 15, width: 200 }}
                size="medium"
                onToggle={() => setAlertIsOn(!alertIsOn)}
              />
            </View>
            <View style={styles.thinLine}></View>
            <View style={{ paddingVertical: '5%', paddingHorizontal: '3%' }}>
              <ToggleSwitch
                isOn={priorityIsOn}
                onColor={DARK_GREEN}
                offColor={TEXT_GRAY}
                label={"Make " + props.name + " a top priority friend      "}
                labelStyle={{ color: "black", fontFamily: "OpenSans", fontSize: 15, width: 200 }}
                size="medium"
                onToggle={() => setPriorityIsOn(!priorityIsOn)}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  profilePhoto: {
    width: 170,
    height: 170,
    marginLeft: '2%',
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: DARK_GREEN
  },
  headingParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  headingChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: '1%'
  },
  headingTitle: {
    fontFamily: "OpenSansBold",
    color: DARK_GREEN,
    fontSize: 25
  },
  headingSubTitle: {
    fontFamily: "OpenSans",
    color: DARK_GREEN,
    fontSize: 18
  },
  headingSubparent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  headingSubchild: {
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
    padding: 10,
    marginTop: 5
  },
  activityText: {
    fontFamily: "OpenSansBold",
    fontSize: 14,
    color: "white"
  },
  chipParent: {
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
  mainFriendCard: {
    width: '90%',
    height: '70%',
    paddingVertical: '5%',
  },
  mainFriendBackground: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  memoriesButton: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginVertical: '2%',
    width: '100%',
    height: '18%',
    marginBottom: '8%'
  },
  cremeCard: {
    width: '92%',
    height: '90%'
  },
  sliderContainer: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  sliderOptions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textHeader: {
    fontFamily: "OpenSans",
    fontSize: 18,
    color: DARK_GREEN,
    paddingTop: 10
  },
  textRegular: {
    fontFamily: "OpenSans",
    fontSize: 16,
    paddingBottom: '3%',
    color: "black",
  },
  sliderContainer: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  thinLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
    width: "100%"
  },
  headingParentTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  headingChildTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  upperIcon: {
    width: 25,
    height: 25
  },
  headingParentUtils: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headingChildUtils: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: '2%'
  },
});

export default SingleFriend;