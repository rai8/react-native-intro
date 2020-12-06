import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    /*  flex: 1, */
    flexDirection: 'row',
    paddingTop: 40,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: '#ddd',
  },
  boxOne: {
    backgroundColor: 'yellow',
    padding: 10,
  },
  boxTwo: {
    backgroundColor: 'teal',
    padding: 20,
  },
  boxThree: {
    backgroundColor: 'orange',
    padding: 30,
  },
  boxFour: {
    backgroundColor: 'green',
    padding: 40,
  },
})
export default Sandbox
