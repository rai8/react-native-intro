import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [name, setName] = useState('shaun')
  const [age, setAge] = useState('25')

  return (
    <View style={styles.container}>
      <Text>Enter your name : </Text>
      <TextInput
        multiline //add more than a single line
        style={styles.input}
        placeholder='e.g John Doe'
        placeholderTextColor='#777'
        onChangeText={val => setName(val)}
      />
      <Text>Enter your Age : </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g 43'
        placeholderTextColor='#777'
        onChangeText={val => setAge(val)}
      />
      <Text>
        name: {name} age: {age}{' '}
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    width: 200,
    padding: 8,
    borderRadius: 4,
  },
})
