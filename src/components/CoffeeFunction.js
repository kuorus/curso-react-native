import { Text, View } from 'react-native'
import React from 'react'

const CoffeeFunction = ({ cafe }) => {
  let cuteName = cafe.name
  if (cafe.name === 'Espresso') {
    cuteName = 'Espresso in tazza'
  }

  return (
    <View>
      <Text>{cuteName}</Text>
    </View>
  )

  /*
  return (
    <View>
      <Text>{cafe.name === 'Espresso' ? "Espresso in tazza" : cafe.name}</Text>
    </View>
  )
*/

  /*  return (
    <View>
      {cafe.name === 'Espresso' && <Text>Espresso in tazza</Text>}
      {cafe.name !== 'Espresso' && <Text>{cafe.name}</Text>}
    </View>
  )*/
}

export default CoffeeFunction
