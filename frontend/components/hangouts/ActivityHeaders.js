import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import commonStyles from "../../styles/commonStyles"
import { DARK_GREEN } from "../../constants/themes";
import {
    setActivityType
} from "../../redux/utils"
import { useDispatch } from "react-redux";

export default HeaderTabs = ({
    headers,
    selected
}) => {
    const dispatch = useDispatch()

    return (
        <View
            style={styles.activityHeaders}
        >
            {headers.map(header =>
                <TouchableWithoutFeedback
                    key={header}
                    onPress={() => setActivityType(header, dispatch)}
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
                                header == selected ? styles.openSansBold : styles.openSansNormal
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
        marginBottom: 6,
        marginTop: 20
    },
    selected: {
        borderBottomWidth: 2, 
        borderBottomColor: DARK_GREEN,
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