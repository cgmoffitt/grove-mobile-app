import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Friends = ({
    navigation
}) => {
    return (
        <View style={styles.center}>
            <Text>This is the Friends screen</Text>
            <Button
                title="Go to Single Friend Screen"
                onPress={() => navigation.navigate("SingleFriend")}
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

export default Friends;