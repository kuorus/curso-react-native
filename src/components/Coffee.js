import { Text, View } from 'react-native'
import React from 'react'

const Coffee = ({ cafe }) => (
  <React.Fragment>
    <View>
      <Text>Name: {cafe.name}</Text>
      <Text>Method: {cafe.method}</Text>
      <Text>Coffee qt.: {cafe.coffeeQt}</Text>
      <Text>Water qt.: {cafe.waterQt}</Text>
    </View>
    <View>
      <Text>Fin del componente</Text>
    </View>
  </React.Fragment>
)

export default Coffee
