import { React, useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, FlatList, TouchableOpacity, TextInput } from "react-native";
import MyAutoTags from "../components/utils/MyAutoTags.js";
import { CREME_WHITE, DARK_GREEN, VIBRANT_GREEN, TEXT_GRAY } from "../constants/themes.js";
import commonStyles from "../styles/commonStyles.js";
import ActionButton from "../components/utils/ActionButton.js";
import { Slider } from '@miblanchard/react-native-slider';
import ToggleSwitch from 'toggle-switch-react-native';
import { ProfileInfo } from "../constants/defaultData.js";


const MyProfile = ({navigation}) => {

  const [text, onChangeText] = useState(null);
  const renderItem = (item, index) => (
    <View style={styles.chipChild}> 
      <ActivityChipNonInteractive activity={item}/>
    </View>
    )

    const ViewButton = ({
      navigation
    }) => {
      return (
          <TouchableOpacity
              onPress={() => console.log("Settings")}
          >
              <View
                  style={styles.viewButton}
              >
                  <Text style={styles.reflectText}>Update Password & Settings</Text>
              </View>
          </TouchableOpacity>
      )
    }

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

    return (
      <View style={[commonStyles.center, commonStyles.backgroundCreme]}>
            <View style={styles.headingParent}>
      <View style={styles.headingChild}>
        <Image style={styles.profilePhoto} source={ProfileInfo.url}></Image>
      </View>
      <View style={styles.headingChild}>
        <View style={styles.headingSubparent}>
          <View style={styles.headingSubchild}>
            <View style={styles.headingParentTitle}>
              <View style={styles.headingChildTitle}>
                  <Image style={{width: 50, height: 40}} source={require("../assets/images/plants/plant2.png")}></Image>
              </View>
              <View style={styles.headingChildTitle}>
                <Text style={styles.headingTitle}>{ProfileInfo.name}</Text>
              </View>
            </View>

          </View>
          <View style={styles.headingSubchild}>
            <Text style={styles.headingSubTitle}>Favorite Activities</Text>
          </View>
          <View style={styles.headingSubchild}>
            <View style={styles.chipParent}>
              <FlatList
                      data={ProfileInfo.activities}
                      renderItem={({item, index}) => renderItem(item, index)}
                      numColumns={2}
                      keyExtractor={(item, index) => index.toString()}   
              />
            </View>
            <View style={[styles.headingSubchild, {paddingVertical: '7%'}]}> 
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.mainFriendCard}>
    
    <ImageBackground style={styles.backdrop} source={require("../assets/images/backgrounds/Me-This-Week.png")}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}
        style={[commonStyles.full, styles.mainFriendBackground]}
        >
        <View style={[commonStyles.cremeCard, styles.cremeCard]}>
          <View style={styles.inputParent}>
            <View style={styles.inputChild}>
              <Text style={styles.fieldText}>Email</Text>
            </View>
            <View style={styles.inputChild}>
              <Text style={styles.fieldTextEntry}>{ProfileInfo.email}</Text>
            </View>
          </View>
          
          
          {/*<TextInput text={"amelia.a.woodward@gmail.com"}
                      onChangeText={onChangeText}
                      style={[styles.input, styles.inputText]}
                      multiline={false}
                      placeholder="Write a caption here!"/> */}
          <View style={styles.inputParent}>
            <View style={styles.inputChild}>
              <Text style={styles.fieldText}>Phone Number</Text>
            </View>
            <View style={styles.inputChild}>
              <Text style={styles.fieldTextEntry}>{ProfileInfo.number}</Text>
            </View>

          </View>
          

          <ViewButton />
         
          <View style={styles.thinLine}></View>
        
          </View>
      </ImageBackground>
      <View style={{marginVertical: 5}}></View>
      <ActionButton main={"📷 My Scrapbook"}
                      style={[styles.memoriesButton]}
                      onPressMethod={()=>navigation.navigate("Hangouts")}
                      active={true} />
      <ActionButton main={"Update 'Me This Week'"}
                      style={[styles.memoriesButton, {fontSize: 10}]}
                      onPressMethod={()=>navigation.navigate("Hangouts")}
                      active={true} />
      
        </View>
      </View> );
  }
  
  const styles = StyleSheet.create({
    profilePhoto:{
      width:170,
      height:170,
      marginLeft: '2%',
      borderRadius: 100,
      borderStyle: "solid",
      borderWidth: 10,
      borderColor: DARK_GREEN
    },
    headingParent:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    headingChild: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
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
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    headingSubchild:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: '2%'
    },
    chip: {
      backgroundColor: VIBRANT_GREEN,
      marginLeft: 5,
      borderRadius: 20,
      padding: 10,
      marginTop: 5
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
      alignItems: "flex-start",
    },
    mainFriendCard:{
      width: '90%',
      height: '65%',
      paddingVertical: '5%',
    }, 
    mainFriendBackground:{
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    },
    memoriesButton:{
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginBottom: '2%',
      width: '100%',
      height: '18%'
    },
    cremeCard:{
      width:'92%',
      height: '90%'
    },
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
      fontSize: 16,
      paddingBottom:'3%',
      color: "black"
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
    headingParentTitle:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    headingChildTitle:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    viewButton: {
      backgroundColor: "black",
      width: '100%',
      padding: '4%',
      borderRadius: 5,
      marginLeft: 5,
      paddingHorizontal: 10,
    },
    reflectText: {
      fontFamily: "OpenSans",
      color: "white",
      textAlign: "center",
      fontSize: 18
    },
    backdrop:{
      marginBottom: '2%',
    },
    fieldText: {
      color: DARK_GREEN,
      fontFamily: "OpenSansBold",
      fontSize: 18
    },
    fieldTextEntry:{
      color: "black",
      fontFamily: "OpenSans",
      fontSize: 18

    },
    inputParent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: '85%',
      height: '30%'
    },
    inputChild: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: 5,
      marginRight: 4
    }
    });
  
  export default MyProfile;