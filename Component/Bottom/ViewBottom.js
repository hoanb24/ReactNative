import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PressAbleContent from "../ultis/PressAbleContent";

export default function ViewBottom() {
    const styles = StyleSheet.create({
        bottomContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }
    })
  return (
    <View style={styles.bottomContainer}>
      <PressAbleContent icon="play" text="Play" />
      <PressAbleContent icon="setting" text="Setting" />
    </View>
  );
}
