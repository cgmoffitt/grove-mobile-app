import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Reflect = ({
  navigation
}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Reflect screen</Text>
      <Button
        title="Upload Memory"
        onPress={() => navigation.navigate("UploadMemory")}
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

export default Reflect;