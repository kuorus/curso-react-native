import React from 'react'
import { Text } from 'react-native'
import styles from './View.Styles'

const TitleView = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>
}

export default TitleView
