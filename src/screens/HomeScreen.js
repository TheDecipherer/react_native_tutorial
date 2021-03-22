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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
