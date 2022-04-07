import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native'
import CoffeeClass from './components/CoffeeClass'
import CoffeeFunction from './components/CoffeeFunction'

const App = () => {
  /** arrow functions, const / let, template strings, ternary (KEKO) **/

  function loadCafes() {
    const cafes = require('./cafes.json')
    return cafes.recipes
  }

  console.log('loadcafes', loadCafes().length)

  /*
  const loadCafesFatArrow = () => {
    const cafes = require('./cafes.json')
    return cafes.recipes
  }

  console.log('loadcafesFatArrow', loadCafesFatArrow().length)

  const loadCafesLet = n => {
    let cafes = []
    if (n > 5) {
      cafes = require('./cafes.json')
      return cafes.recipes
    }
    return cafes
  }

  console.log('loadCafesLet', loadCafesLet(6).length)

  const filterEspresso = () => {
    const cafes = loadCafes()
    return cafes.filter(function (cafe) {
      return cafe.method === 'Espresso machine'
    })
  }

  const findFrenchPress = () => {
    const cafes = loadCafes()
    return cafes.find(cafe => {
      return cafe.method === 'French press'
    })
  }

  const lessThan10gr = () => loadCafes().filter(cafe => cafe.coffeeQt < 10)
  const lessThanXgr = coffeeQt =>
    loadCafes().filter(cafe => cafe.coffeeQt < coffeeQt)

  console.log('All cafe recipes', loadCafes().length)
  console.log('Cafe only with espresso machine', filterEspresso().length)
  console.log('Cafe only with french press', findFrenchPress())
  console.log('Cafe with less than 10gr of coffee', lessThan10gr())
  console.log('Cafe with less than 8gr of coffee', lessThanXgr(8))
  console.log('Cafe with less than 10gr of coffee', lessThanXgr(10))

  const recipesWithRatio = () =>
    loadCafes().map(cafe => ({
      name: cafe.name,
      ratio: '1/' + cafe.waterQt / cafe.coffeeQt,
    }))

  console.log('Coffee recipes ratios', recipesWithRatio())

  const fullCoffeeQt = () =>
    loadCafes().reduce((acc, current) => acc + current.coffeeQt, 0)

  console.log('Coffee needed for every recipe', fullCoffeeQt())
 */
  const isDarkMode = useColorScheme() === 'dark'

  const cafes = loadCafes()

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CoffeeClass cafe={cafes[0]} />
        <CoffeeFunction cafe={cafes[0]} />
        {cafes.map(cafe => (
          <CoffeeFunction key={cafe.id} cafe={cafe} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
