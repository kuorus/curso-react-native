import React, { FunctionComponent } from 'react'
import { ActivityIndicator } from 'react-native'
import { mainColors } from '../../../styles/colors'
import { LoaderProps } from './View.Types'

const LoaderView: FunctionComponent<LoaderProps> = props => {
  return (
    <ActivityIndicator
      size={props.size || 'small'}
      color={props.color || mainColors.green.base}
      animating={props.isVisible}
    />
  )
}

export default LoaderView
