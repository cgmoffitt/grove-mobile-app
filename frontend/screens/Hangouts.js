import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Hangouts = ({
    navigation
}) => {
    return (
        <View style={styles.center}>
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
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Hangouts;