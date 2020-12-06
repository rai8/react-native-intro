import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'todd', id: '6' },
    { name: 'bowser', id: '7' },
    { name: 'peach', id: '8' },
    { name: 'peach', id: '9' },
  ])
  const pressHandler = id => {
    console.log(id)
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      {/*  Using the flatlist component */}

      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* using the scroll view */}
      {/* <ScrollView>
        {people.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginTop: 20,
    fontSize: 22,
    marginHorizontal: 10,
  },
})
