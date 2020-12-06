import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'todd', key: '6' },
    { name: 'bowser', key: '7' },
    { name: 'peach', key: '8' },
    { name: 'peach', key: '9' },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
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
