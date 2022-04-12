import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import Title from '../UI/Title/View'
import styles from './View.Styles'
import ButtonView from '../UI/Button/View'

const CoffeeFormView = props => {
  const initialValues = {
    id: '',
    name: '',
    method: '',
    coffeeQt: '',
    waterQt: '',
    price: '',
  }

  const [inputValues, setInputValues] = useState(initialValues)

  const handleOnSubmit = () => {
    props.addNewCoffee({
      id: Math.random(),
      ...inputValues,
    })
    setInputValues(initialValues)
  }

  const handleOnReset = () => {
    setInputValues(initialValues)
  }

  /**
   *     {
   *       "id": 4,
   *       "name": "Drip",
   *       "method": "Filter coffee maker",
   *       "coffeeQt": 15,
   *       "waterQt": 240,
   *       "price": 2.25
   *     },
   */

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
        onChangeText={value => setInputValues({ ...inputValues, method: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#666"
        value={inputValues.price}
        onChangeText={value => setInputValues({ ...inputValues, price: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Coffee Qt"
        placeholderTextColor="#666"
        value={inputValues.coffeeQt}
        onChangeText={value => setInputValues({ ...inputValues, coffeeQt: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Water Qt"
        placeholderTextColor="#666"
        value={inputValues.waterQt}
        onChangeText={value => setInputValues({ ...inputValues, waterQt: value })}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <ButtonView style={{ width: '30%' }} onPress={() => handleOnReset()} text={'Reset'} color={'red'} />
        <ButtonView style={{ width: '30%' }} onPress={() => handleOnSubmit()} text={'Add'} />
      </View>
    </>
  )
}

export default CoffeeFormView
