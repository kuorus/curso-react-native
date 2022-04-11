import { FunctionComponent } from 'react'
import { SvgProps } from 'react-native-svg'
import { TextStyle, ViewStyle } from 'react-native'

export type ButtonViewInputProps = {
  text?: string
  textStyle?: TextStyle
  autoWidth?: boolean
  icon?: FunctionComponent<SvgProps>
  iconPosition?: 'left' | 'right'
  iconStyle?: ViewStyle
  color?: 'green' | 'red' | 'black' | 'white'
  customColor?: string
  radius?: 'oval' | 'square'
  size?: 'big' | 'medium' | 'small'
  width?: string
  outline?: boolean
  disabled?: boolean
  bgWhite?: boolean
  style?: ViewStyle
  loader?: 'spinner' | 'message'
  isLoading?: boolean
  onPress: () => void
  testID?: string
}
