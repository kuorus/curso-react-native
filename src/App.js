import React, { useEffect, useMemo, useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native'
import Coffee from './components/Coffee'

const App = () => {
  const loadCafes = useMemo(() => {
    console.log('Una vez')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cafes = require('./cafes.json')
        resolve(cafes.recipes)
      }, 2500)
    })
  }, [])

  const isDarkMode = useColorScheme() === 'dark'

  const [cafes, setCafes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCafes.then(resCafes => {
      setCafes(resCafes)
      setLoading(false)
    })
  }, [loadCafes])

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ marginBottom: 50 }}>
        {loading ? (
          <Text>Cargando...</Text>
        ) : (
          <>
            <Text>Total coffee recipes: {cafes.length}</Text>
            <FlatList
              data={cafes}
              renderItem={({ item }) => <Coffee cafe={item} discount={0.2} setLoading={setLoading} />}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default App
