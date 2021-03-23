import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Friend</Text>
      <Button
        title="Components screen"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to list screen"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to image screen"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go to counter screen"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to colors screen"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to square screen"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
