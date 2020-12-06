import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 25,
    backgroundColor: 'teal',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
})
export default Header
