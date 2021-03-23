import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ColorAdjustor from "../components/ColorAdjustor";

const COLOR_INCREMENT = 15;

const SquareColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const changeColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorAdjustor
        color="Red"
        onIncrease={() => {
          changeColor("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          changeColor("red", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorAdjustor
        color="Green"
        onIncrease={() => {
          changeColor("green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          changeColor("green", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorAdjustor
        color="Blue"
        onIncrease={() => {
          changeColor("blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          changeColor("blue", -1 * COLOR_INCREMENT);
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareColor;
