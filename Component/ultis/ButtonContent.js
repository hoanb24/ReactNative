import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function ButtonContent({ text, press }) {
    const styles = StyleSheet.create({
        container: {},
        button: {backgroundColor: "#fff", paddingHorizontal: 120, paddingVertical: 20, borderRadius: 6, marginVertical: 6,},
        text: {textAlign: "center", color:"lightpink", fontSize: 20, fontWeight: "700"}
    })
  return (
    <Pressable style={styles.container} onPress={press}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}
