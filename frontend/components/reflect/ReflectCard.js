import { React, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { DARK_GREEN, CREME_WHITE, VIBRANT_GREEN, shadows, TEXT_GRAY} from "../../constants/themes";
import commonStyles from "../../styles/commonStyles";
import ReflectBar from "../reflect/ReflectBar";
import { setActivityReflected } from "../../redux/utils";
import { useDispatch } from "react-redux";



const ReflectCard = ({
     navigation,
     header,
     subheader,
     activity
}) => {
    const dispatch = useDispatch()
    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [successPrompt, setSuccessPrompt] = useState("")
    const openSuccessModal = (prompt) => {
        setSuccessModalVisible(true)
        setSuccessPrompt(prompt)
        setTimeout(() => {
            setSuccessModalVisible(false)
        }, 3000)
    }
    const [reflectedA, setReflectedA] = useState(false)
    const [reflectedB, setReflectedB] = useState(false)
    
    const ViewButton = ({
      }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    openSuccessModal("Your reflection was successfully saved.")
                    setActivityReflected(activity.id, dispatch)
                }}
            >
                <View style={[
                    styles.viewButton,
                    (reflectedA && reflectedB) ? styles.active : styles.inActive
                ]}>
                    <Text style={styles.reflectText}>Save</Text>
                </View>
            </TouchableOpacity>
        )
      }

    return(
      <View style={[commonStyles.cremeCard, styles.infoCard]}>
            <View style={[styles.infoHeader]}>
                <Text style={styles.headerText}>{header}</Text>
                <Text style={styles.subHeader}>{subheader}</Text>
            </View>
            
          <ReflectBar title="Location" setReflected={setReflectedA} />
          <ReflectBar title="Activity" setReflected={setReflectedB} />
          <ViewButton></ViewButton>
          <SuccessModal
                modalVisible={successModalVisible}
                onClose={() => setSuccessModalVisible(false)}
                prompt={successPrompt}/>

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
        width: '95%',
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
        width: 100,
        borderRadius: 5,
        marginLeft: 5
    },
    reflectText: {
        fontFamily: "OpenSansBold",
        color: "white",
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    active: {
        backgroundColor: DARK_GREEN
    },
    inActive: {
        backgroundColor: TEXT_GRAY
    }
});

export default ReflectCard;