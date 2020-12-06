import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
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
  return (
    <View style={styles.container}>
      {/* Setting up the header */}
      <Header />
      <View style={styles.content}>
        {/* Setting up or todo form */}
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
