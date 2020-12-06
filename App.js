import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [name, setName] = useState('shaun')
  const [person, setPerson] = useState({ name: 'Mario', age: 22 })
  const clickHandler = () => {
    setName('Rhytonne')
    setPerson({ name: 'Luigi', age: 45 })
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <Text>
        {' '}
        My name is {person.name} of age {person.age}
      </Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {},
})
