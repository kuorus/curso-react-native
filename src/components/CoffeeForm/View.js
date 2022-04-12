import React, { useState } from 'react'
import { TextInput } from 'react-native'
import Title from '../UI/Title/View'
import styles from './View.Styles'

const CoffeeFormView = () => {
  const [inputValues, setInputValues] = useState({
    id: '',
    name: '',
    method: '',
    coffeeQt: '',
    waterQt: '',
    price: '',
  })

  return (
    <>
      <Title text="Formulario" />
      <TextInput
        style={styles.input}
        placeholder="Recipe name"
        placeholderTextColor="#666"
        value={inputValues.name}
        onChangeText={value => setInputValues({ ...inputValues, name: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Brewing method"
        placeholderTextColor="#666"
        value={inputValues.method}
        onChangeText={value => setInputValues({ ...inputValues, cost: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#666"
        value={inputValues.price}
        onChangeText={value => setInputValues({ ...inputValues, cost: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Coffee Qt"
        placeholderTextColor="#666"
        value={inputValues.coffeeQt}
        onChangeText={value => setInputValues({ ...inputValues, cost: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Water Qt"
        placeholderTextColor="#666"
        value={inputValues.waterQt}
        onChangeText={value => setInputValues({ ...inputValues, cost: value })}
      />
    </>
  )
}

export default CoffeeFormView
