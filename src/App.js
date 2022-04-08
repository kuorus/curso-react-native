import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native'
import Coffee from './components/Coffee'

const App = () => {
  function loadCafes() {
    const cafes = require('./cafes.json')
    return cafes.recipes
  }

  const isDarkMode = useColorScheme() === 'dark'

  const [cafes, setCafes] = useState([])

  useEffect(() => {
    setCafes(loadCafes())
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Total coffee recipes: {cafes.length}</Text>
        <FlatList data={cafes} renderItem={({ item }) => <Coffee cafe={item} discount={0.2} />} />
      </View>
    </SafeAreaView>
  )
}

export default App
