import React from 'react'
import { FlatList, SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native'
import Coffee from './components/Coffee'

const App = () => {
  function loadCafes() {
    const cafes = require('./cafes.json')
    return cafes.recipes
  }

  const isDarkMode = useColorScheme() === 'dark'

  const cafes = loadCafes()

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FlatList data={cafes} renderItem={({ item }) => <Coffee cafe={item} discount={0.2} />} scrollEnabled={false} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
