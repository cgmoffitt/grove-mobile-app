import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";

export default ToggleTabs = ({listToggled, toggleView }) => {

    return (
        <View
            style={[{ width: "100%", height: 100 }, commonStyles.flexCenter]}
        >
            <Pressable
                style={styles.toggle}
                onPress={toggleView}
            >
                <View
                    style={[
                        commonStyles.center,
                        listToggled ? commonStyles.backgroundDarkGreen : {},
                    ]}
                >
                    <Text
                        style={[
                            styles.openSansNormal,
                            listToggled ? styles.toggledText : {}
                        ]}
                    >
                        List
                    </Text>
                </View>
                <View
                    style={[
                        commonStyles.center,
                        listToggled ? {} : commonStyles.backgroundDarkGreen
                    ]}
                >
                    <Text
                        style={[
                            styles.openSansNormal,
                            listToggled ? {} : styles.toggledText
                        ]}
                    >
                        Calendar
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    toggle:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "50%", 
        height: 30,
        borderColor: DARK_GREEN, 
        borderWidth: 4, 
        borderRadius: 5
    },
    toggledText: {
        color: "white",
        fontFamily: "OpenSansBold",
        fontSize: 16,
    },
    openSansNormal: {
        fontFamily: "OpenSans",
        fontSize: 16,
    }
});