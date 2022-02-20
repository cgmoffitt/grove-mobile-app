import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import commonStyles from "../styles/commonStyles"

const UploadMemory = ({
    navigation
}) => {
    return (
        <View style={commonStyles.center}>
            <Text>This is the UploadMemory screen</Text>
            <Button
                title="Write Caption"
                onPress={() => navigation.navigate("WriteCaption")}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default UploadMemory;