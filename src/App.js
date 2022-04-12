import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native'
import CoffeeList from './components/CoffeeList/View'
import CoffeeForm from './components/CoffeeForm/View'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const [newCoffee, setNewCoffee] = useState({ name: '', cost: '' })

  /*  useEffect(() => {
    loadCafes()
  })
*/
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <CoffeeForm setNewCoffee={setNewCoffee} />
        <Text>{newCoffee.name}</Text>
        <Text>{newCoffee.cost}</Text>
        <CoffeeList />
      </SafeAreaView>
    </Provider>
  )
}

export default App
