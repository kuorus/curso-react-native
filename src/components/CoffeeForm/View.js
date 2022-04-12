import React, { useEffect, useState } from 'react'
import { TextInput, Text } from 'react-native'
import Title from '../UI/Title/View'
import styles from './View.Styles'

const CoffeeFormView = ({ setNewCoffee }) => {
  const [inputValues, setInputValues] = useState({ name: '', cost: '' })
  const [error, setError] = useState(false)

  //console.log(inputValues)

  useEffect(() => {
    setNewCoffee(inputValues)
  }, [inputValues])

  useEffect(() => {
    inputValues.name === '' ? setError(true) : setError(false)
  }, [inputValues.name])

  return (
    <>
      <Title text="Formulario" />
      <TextInput
        style={styles.input}
        placeholder="Nombre del café"
        placeholderTextColor="#666"
        value={inputValues.name}
        onChangeText={value => setInputValues({ ...inputValues, name: value })}
      />
      {error && <Text>El input no puede estar vacio</Text>}
      <TextInput
        style={styles.input}
        placeholder="Precio del café"
        placeholderTextColor="#666"
        value={inputValues.cost}
        onChangeText={value => setInputValues({ ...inputValues, cost: value })}
      />
    </>
  )
}

export default CoffeeFormView
