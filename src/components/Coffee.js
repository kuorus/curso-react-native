import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import ButtonView from './UI/Button/View'

const Coffee = ({ cafe, discount, setLoading }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#bababa',
    },
    text: {
      color: '#323232',
      fontSize: 15,
      margin: 2,
      paddingLeft: 10 + cafe.name.length * 5,
    },
    discount: {
      borderColor: '#de3232',
      borderWidth: 2,
      color: '#de3232',
      backgroundColor: '#efbbcc',
    },
  })

  return (
    <View style={styles.container}>
      <ButtonView
        color={'red'}
        text={'Soy un botón'}
        onPress={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 1000)
        }}
      />
      <Text style={styles.text}>Name: {cafe.name}</Text>
      <Text style={styles.text}>Method: {cafe.method}</Text>
      <Text style={styles.text}>Coffee qt.: {cafe.coffeeQt} g.</Text>
      <Text style={styles.text}>Water qt.: {cafe.waterQt} g.</Text>
      <Text style={styles.text}>Price: {cafe.price} €</Text>
      <Text style={[styles.text, styles.discount]}>
        {`Price w/${discount * 100}% discount: ${(cafe.price * (1 - discount)).toFixed(2)} €`}
      </Text>
    </View>
  )
}

export default Coffee
