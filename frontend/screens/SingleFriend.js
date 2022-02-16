import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SingleFriend = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Single Friend screen</Text>
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

export default SingleFriend;