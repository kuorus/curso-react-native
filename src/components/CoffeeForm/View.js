import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
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
  const [showForm, setShowForm] = useState(false)

  const handleOnSubmit = () => {
    props.addNewCoffee({
      id: Math.random(),
      ...inputValues,
    })
    setInputValues(initialValues)
    setShowForm(false)
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
    <View
      style={{
        margin: 20,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        borderTopRightRadius: 0,
        elevation: 5,
      }}>
      <TouchableOpacity onPress={() => setShowForm(!showForm)}>
        <Title style={{ paddingBottom: 10 }} text={`${showForm ? '➖' : '➕'} Add new recipe`} />
      </TouchableOpacity>
      {showForm && (
        <>
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
      )}
    </View>
  )
}

export default CoffeeFormView
