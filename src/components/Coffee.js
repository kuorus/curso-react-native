import { Text, View } from 'react-native'
import React from 'react'

const Coffee = ({ cafe, discount }) => (
  <View>
    <Text>-----------------------</Text>
    <Text>Name: {cafe.name}</Text>
    <Text>Method: {cafe.method}</Text>
    <Text>Coffee qt.: {cafe.coffeeQt} g.</Text>
    <Text>Water qt.: {cafe.waterQt} g.</Text>
    <Text>Price: {cafe.price} €</Text>
    <Text>{`Price w/${discount * 100}% discount: ${(cafe.price * (1 - discount)).toFixed(2)} €`}</Text>
    <Text>-----------------------</Text>
  </View>
)

export default Coffee
