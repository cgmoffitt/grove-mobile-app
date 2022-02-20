import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles"
import { CREME_WHITE, DARK_GREEN } from "../constants/themes";

const ToggleTabs = ({ }) => {
    const [aToggled, setAToggled] = useState(true)

    const toggle = () => setAToggled(!aToggled)


    return (
        <View
            style={[{ width: "100%", height: 100 }, commonStyles.flexCenter]}
        >
            <TouchableWithoutFeedback

                onPress={toggle}
            >
                <View style={[
                    commonStyles.row,
                    commonStyles.flexCenter,
                    { width: "50%", height: 30 },
                    { borderColor: DARK_GREEN, borderWidth: 4, borderRadius: 5 },
                ]}>
                    <View
                        style={[
                            commonStyles.center,
                            aToggled ? { backgroundColor: DARK_GREEN } : {},
                        ]}
                    >
                        <Text
                            style={[
                                styles.openSansNormal,
                                aToggled ? { color: "white" } : {},
                                aToggled ? styles.openSansBold : {}
                            ]}
                        >
                            List
                        </Text>
                    </View>
                    <View
                        style={[
                            commonStyles.center,
                            aToggled ? {} : { backgroundColor: DARK_GREEN }
                        ]}
                    >
                        <Text
                            style={[
                                styles.openSansNormal,
                                aToggled ? {} : { color: "white" },
                                aToggled ? {} : styles.openSansBold
                            ]}
                        >
                            Calendar
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const HeaderTabs = () => {

    const headers = [
        "Upcoming",
        "Pending",
        "Planted",
        "Past"
    ]

    const [selected, setSelected] = useState(headers[0])

    return (
        <View
            style={[
                { width: "100%" },
                commonStyles.row,
                { justifyContent: "space-around" },
                { marginBottom: 6 }
            ]}
        >
            {headers.map(header =>
                <TouchableWithoutFeedback
                    key={header}
                    onPress={() => setSelected(header)}
                >
                    <View
                        style={[
                            commonStyles.flexCenter,
                            { flex: 1, paddingVertical: 3, textAlign: "center" },
                            header == selected ? { borderBottomWidth: 2, borderBottomColor: DARK_GREEN } : {}
                        ]}
                    >
                        <Text
                            style={[
                                styles.openSansNormal,
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

const Hangouts = ({
    navigation
}) => {
    return (
        <View style={{ flex: 1, backgroundColor: CREME_WHITE }}>
            <ToggleTabs />
            <HeaderTabs />
            <View
                style={[
                    {flex: 1, backgroundColor: DARK_GREEN}
                ]}
            >
                <Text>This is the Hangouts screen</Text>
                <Button
                    title="Go to Reflect Screen"
                    onPress={() => navigation.navigate("Reflect")}
                />
                <Button
                    title="Go to PlantActivity Screen"
                    onPress={() => navigation.navigate("PlantActivity")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    openSansNormal: {
        fontFamily: "OpenSans",
        fontSize: 16,
    },
    openSansBold: {
        fontFamily: "OpenSansBold",
        fontSize: 16,
    }
});

export default Hangouts;