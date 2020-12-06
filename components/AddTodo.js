import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native'

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('')
  const changeHandler = val => {
    setText(val)
  }
  return (
    <View>
      <TextInput style={styles.input} placeholder='New Todo ....' onChangeText={changeHandler} />
      <Button title='Add todo' color='teal' onPress={() => submitHandler(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'teal',
  },
})
export default AddTodo
