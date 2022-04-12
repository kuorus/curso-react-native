import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import CoffeeList from './components/CoffeeList'
import CoffeeForm from './components/CoffeeForm'
import { Provider } from 'react-redux'
import { loadCafes, store } from './store'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    loadCafes()
  })

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <CoffeeForm />
        <CoffeeList />
      </SafeAreaView>
    </Provider>
  )
}

export default App
