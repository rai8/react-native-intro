import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Coffee', key: '1' },
    { text: 'Feed the cat', key: '2' },
    { text: 'Learn Go language', key: '3' },
  ])

  //function that will handle our delete on the TodoItem component
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  //function to submit out todo
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos]
      })
    } else {
      Alert.alert('OOPS!!!', 'TODOS must be over two characters', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ])
    }
  }
  return (
    <View style={styles.container}>
      {/* Setting up the header */}
      <Header />
      <View style={styles.content}>
        {/* Setting up or todo form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  lis: {
    marginTop: 20,
  },
})
