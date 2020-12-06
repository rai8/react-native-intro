import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

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

  return (
    <View style={styles.container}>
      {/*  Using the flatlist component */}

      <FlatList
        data={people}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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
  },
})
