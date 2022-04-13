import React from 'react'
import { Text } from 'react-native'
import styles from './View.Styles'

const TitleView = ({ text, style = {} }) => {
  return <Text style={[styles.title, style]}>{text}</Text>
}

export default TitleView
