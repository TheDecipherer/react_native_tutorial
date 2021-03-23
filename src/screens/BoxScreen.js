import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.mother}>
      <View style={styles.redView}></View>
      <View style={styles.greenView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mother: {
    borderColor: "black",
    borderWidth: 3,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  redView: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  blueView: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  greenView: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    top: 50,
  },
});

export default BoxScreen;
