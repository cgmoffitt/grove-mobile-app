import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import commonStyles from "../styles/commonStyles"

const Friends = ({
    navigation
}) => {
    return (
        <View style={commonStyles.center}>
            <Text>This is the Friends screen</Text>
            <Button
                title="Go to Single Friend Screen"
                onPress={() => navigation.navigate("SingleFriend")}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Friends;