import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ViewTop from "./Top/ViewTop";
import ViewMid from "./Mid/ViewMid";
import ViewBottom from "./Bottom/ViewBottom";

export default function BigView() {
  const styles = StyleSheet.create({
    viewTop: { flex: 0.1 },
    viewMid: { flex: 0.8 },
    viewBottom: { flex: 0.1 },
  });
  return (
    <View>
      <View style={styles.viewTop}>
        <ViewTop />
      </View>
      <View style={styles.viewMid}>
        <ViewMid />
      </View>
      <View style={styles.viewBottom}>
        <ViewBottom />
      </View>
    </View>
  );
}
