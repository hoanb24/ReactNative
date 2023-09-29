import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function ButtonAction({text, press}) {
    const styles = StyleSheet.create({
        container: {},
        button: {backgroundColor: "transparent", paddingHorizontal: 40, paddingVertical: 8, borderRadius: 6, borderColor: "lightpink", borderWidth: 1, },
        text: {textAlign: "center", color:"lightpink", fontSize: 15, fontWeight: "500"}
    })
  return (
    <Pressable style={styles.container} onPress={press}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}