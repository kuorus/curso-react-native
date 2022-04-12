import React from 'react'
import { ActivityIndicator } from 'react-native'
import { mainColors } from '../../../styles/colors'

const LoaderView = props => {
  return (
    <ActivityIndicator
      size={props.size || 'small'}
      color={props.color || mainColors.green.base}
      animating={props.isVisible}
    />
  )
}

export default LoaderView
