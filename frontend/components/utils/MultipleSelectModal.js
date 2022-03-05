import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import commonStyles from "../../styles/commonStyles"
import DropDownPicker from 'react-native-dropdown-picker';
import { DARK_GREEN } from "../../constants/themes";

export default MultipleSelectModal = ({
    closeModal,
    title,
    value,
    items,
    onSelectItem,
    placeholder,
    multipleText
}) => {

    return (
        <View style={[commonStyles.center, { backgroundColor: 'rgba(0,0,0,0.7)' }]}>
            <View
                style={[commonStyles.cremeCard, { marginBottom: 120 }]}
            >
                <Text style={[styles.headerText, { marginBottom: 10 }]}>{title}</Text>
                <DropDownPicker
                    value={value}
                    items={items}
                    onSelectItem={onSelectItem}
                    placeholder={placeholder}
                    multipleText={multipleText}
                    open={true}
                    setOpen={() => { }}
                    containerStyle={[{ height: 300 }]}
                    placeholderStyle={styles.textRegular}
                    textStyle={styles.textRegular}
                    style={commonStyles.backgroundCreme}
                    dropDownContainerStyle={commonStyles.backgroundCreme}
                    multiple={true}
                    ArrowDownIconComponent={() => <View></View>}
                    ArrowUpIconComponent={() => <View></View>}

                />
                <TouchableOpacity
                    onPress={closeModal}
                >
                    <Text style={[styles.textBold, {width: 50, height:30}]}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: "OpenSans",
        fontSize: 14
    },
    textBold: {
        fontFamily: "OpenSansBold",
        fontSize: 16
    },
    headerText: {
        fontFamily: "OpenSansBold",
        color: DARK_GREEN,
        fontSize: 18
      },
});