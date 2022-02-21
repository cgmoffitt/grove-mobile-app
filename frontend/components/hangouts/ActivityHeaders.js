import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";

export default HeaderTabs = ({
    headers,
    selected,
    setSelected
}) => {

    return (
        <View
            style={styles.activityHeaders}
        >
            {headers.map(header =>
                <TouchableWithoutFeedback
                    key={header}
                    onPress={() => setSelected(header)}
                >
                    <View
                        style={[
                            commonStyles.center,
                            { paddingVertical: 3 },
                            header == selected ? styles.selected : {}
                        ]}
                    >
                        <Text
                            style={[
                                styles.openSansNormal
                            ]}
                        >
                            {header}
                        </Text>
                    </View>

                </TouchableWithoutFeedback>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    activityHeaders: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 6
    },
    selected: {
        borderBottomWidth: 2, 
        borderBottomColor: DARK_GREEN
    },
    openSansNormal: {
        fontFamily: "OpenSans",
        fontSize: 16,
    },
    openSansBold: {
        fontFamily: "OpenSansBold",
        fontSize: 16,
    }
});