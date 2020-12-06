import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Platform, StatusBar } from 'react-native'
import Sandbox from './components/Sandbox'

export default function App() {
  return (
    <View style={styles.container} style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Sandbox />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
})
