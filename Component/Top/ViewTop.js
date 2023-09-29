import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ViewTop({cards}) {
    const styles = StyleSheet.create({
        container: {flexDirection: 'column', paddingTop: 50},
        text : {textAlign:'center', fontSize: 18, fontWeight: '600',}
    })
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {} ({cards} cards)</Text>
    </View>
  )
}