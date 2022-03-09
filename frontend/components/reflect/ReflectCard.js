import { React, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows} from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";
import ReflectBar from "../reflect/ReflectBar";



const InfoCard = (props, {
     navigation
}) => {

    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [successPrompt, setSuccessPrompt] = useState("")
    const openSuccessModal = (prompt) => {
        setSuccessModalVisible(true)
        setSuccessPrompt(prompt)
        setTimeout(() => {
            setSuccessModalVisible(false)
        }, 3000)
    }
    const [pressed, setPressed] = useState(false);
    
    const ViewButton = ({
      }) => {
        return (
            <TouchableOpacity
                onPress={() => openSuccessModal("Your reflection was successfully saved.")}
            >
                <View style={styles.viewButton}>
                    <Text style={styles.reflectText}>Save</Text>
                </View>
            </TouchableOpacity>
        )
      }

    return(
      <View style={[commonStyles.cremeCard, styles.infoCard]}>
            
            <View style={[styles.infoHeader]}>
                <Text style={styles.headerText}>{props.header}</Text>
                <Text style={styles.subHeader}>{props.subheader}</Text>
            </View>
            
          <ReflectBar title="Location"/>
          <ReflectBar title="Activity"/>
          <ViewButton></ViewButton>
          <SuccessModal
                        modalVisible={successModalVisible}
                        onClose={() => setSuccessModalVisible(false)}
                        prompt={successPrompt}
                    />

      </View>
    );
};
const styles = StyleSheet.create({
    infoHeader:{
        backgroundColor: VIBRANT_GREEN,
        width:'100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: '4%'
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
        paddingBottom: '1%'
    },
    subHeader:{
        textAlign: "center",
        fontSize: 15,
        fontFamily: "OpenSansItalic",
        color: CREME_WHITE
    },
    viewButton: {
        marginVertical: 20,
        backgroundColor: DARK_GREEN,
        width: 69,
        borderRadius: 5,
        marginLeft: 5
    },
    reflectText: {
        fontFamily: "OpenSansBold",
        color: "white",
        textAlign: "center",
        fontSize: 14,
        paddingHorizontal: '20%',
    },
});

export default InfoCard;