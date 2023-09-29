import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import ButtonContent from "../ultis/ButtonContent";
import ButtonAction from "../ultis/ButtonAction";

export default function ViewMid() {
  const [alphabet, setAlphabet] = useState([
    { lower: "a", upper: "A" },
    { lower: "b", upper: "B" },
    { lower: "c", upper: "C" },
    { lower: "d", upper: "D" },
    { lower: "e", upper: "E" },
    { lower: "f", upper: "F" },
    { lower: "g", upper: "G" },
    { lower: "h", upper: "H" },
    { lower: "i", upper: "I" },
    { lower: "j", upper: "J" },
    { lower: "k", upper: "K" },
    { lower: "l", upper: "L" },
    { lower: "m", upper: "M" },
    { lower: "n", upper: "N" },
    { lower: "o", upper: "O" },
    { lower: "p", upper: "P" },
    { lower: "q", upper: "Q" },
    { lower: "r", upper: "R" },
    { lower: "s", upper: "S" },
    { lower: "t", upper: "T" },
    { lower: "u", upper: "U" },
    { lower: "v", upper: "V" },
    { lower: "w", upper: "W" },
    { lower: "x", upper: "X" },
    { lower: "y", upper: "Y" },
    { lower: "z", upper: "Z" },
  ]);
  const moveForward = () => {
    const index = location > alphabet.length ? (location = 0) : location + 1;
    setLocation(index);
  };

  const moveBackward = () => {
    const index = location == 0 ? (location = alphabet.length) : location - 1;
    setLocation(index);
  };

  const changeWord = () => {
    const currentlyWord = Word;
    const returnValue =
      currentlyWord === alphabet[Location].lower
        ? alphabet[Location].upper
        : alphabet[Location].lower;
    setWord(returnValue);
  };

  const removeCurrentIndex = () => {
    if (Location >= 0 && Location < alphabet.length) {
      const updatedAlphabet = [
        ...alphabet.slice(0, Location),
        ...alphabet.slice(Location + 1),
      ];
      setAlphabet(updatedAlphabet);
      setLocation(
        Location === updatedAlphabet.length ? Location - 1 : Location
      );
    }
  };

  const resetArray = () => {
    setAlphabet([
      { lower: "a", upper: "A" },
      { lower: "b", upper: "B" },
      { lower: "c", upper: "C" },
      { lower: "d", upper: "D" },
      { lower: "e", upper: "E" },
      { lower: "f", upper: "F" },
      { lower: "g", upper: "G" },
      { lower: "h", upper: "H" },
      { lower: "i", upper: "I" },
      { lower: "j", upper: "J" },
      { lower: "k", upper: "K" },
      { lower: "l", upper: "L" },
      { lower: "m", upper: "M" },
      { lower: "n", upper: "N" },
      { lower: "o", upper: "O" },
      { lower: "p", upper: "P" },
      { lower: "q", upper: "Q" },
      { lower: "r", upper: "R" },
      { lower: "s", upper: "S" },
      { lower: "t", upper: "T" },
      { lower: "u", upper: "U" },
      { lower: "v", upper: "V" },
      { lower: "w", upper: "W" },
      { lower: "x", upper: "X" },
      { lower: "y", upper: "Y" },
      { lower: "z", upper: "Z" },
    ]);
    setLocation(0);
  };

  const [Location, setLocation] = useState(0);
  const [Word, setWord] = useState(alphabet[Location].lower);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f0f0f0",
      height: "100%",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#f5f5f5",
      padding: 20,
    },
    upper: { flex: 0.7 },
    clickAble: {
      backgroundColor: "lightpink",
      height: "85%",
      marginVertical: 8,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    lower: { flex: 0.3 },
    containerAction: { flexDirection: "row", justifyContent: "space-between" },
    text: { fontSize: 50, color: "#fff" },
  });
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.clickAble}>
          <Pressable onPress={changeWord}>
            <Text style={styles.text}>{Word}</Text>
          </Pressable>
        </View>
        <View style={styles.containerAction}>
          <ButtonAction text="Previous" press={moveBackward} />
          <ButtonAction text="Next" press={moveForward} />
        </View>
      </View>
      <View style={styles.lower}>
        <ButtonContent text="Remove From Disk" press={removeCurrentIndex}/>
        <ButtonContent text="Reset Desk" press={resetArray}/>
      </View>
    </View>
  );
}
