import { Text, View } from 'react-native'
import React from 'react'

const CoffeeFunction = props => (
  <View>
    <Text>{props.cafe.name}</Text>
  </View>
)

export default CoffeeFunction
