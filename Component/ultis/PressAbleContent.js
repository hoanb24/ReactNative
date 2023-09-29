import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

export default function PressAbleContent({ icon, text }) {
  const url = icon == "setting" ? "https://cdn-icons-png.flaticon.com/512/126/126472.png" : icon == "play" ? "https://cdn-icons-png.flaticon.com/512/0/375.png" : null;
  const styles = StyleSheet.create({
    pressAbleContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: 40,
      height: 40,
      marginVertical: 6,
    },
    text: {
      fontSize: 16,
      fontWeight: "500",
    },
  });


  return (

    <View>
      <Pressable style={styles.pressAbleContainer}>
        <Image source={{uri: url}} style={styles.img} />
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}
