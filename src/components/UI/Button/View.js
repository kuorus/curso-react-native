import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { capitalize } from 'lodash'
import styles from './View.Styles'
import { mainColors } from '../../../styles/colors'
import Loader from '../Loader/View'

const ButtonView = props => {
  const [isDisabled, setIsDisabled] = useState(props.disabled || false)
  const [showLoader, setShowLoader] = useState(props.isLoading || false)

  useEffect(() => {
    setShowLoader(props.isLoading || false)
  }, [props.isLoading])

  useEffect(() => {
    setIsDisabled(props.disabled || false)
  }, [props.disabled])

  const getCurrentColor = () => {
    const colors = ['green', 'red', 'black', 'white']
    if (!props.color || !colors.includes(props.color)) {
      return 'green'
    } else {
      return props.color
    }
  }

  const color = getCurrentColor()

  const btnColors = {
    green: mainColors.green['700'],
    red: mainColors.red.base,
    black: mainColors.black,
    white: mainColors.white,
  }

  const btnSizeStyles = `${props.size}Btn`
  const textSizeStyles = `${props.size}Text`
  const iconSizeStyles = `${props.size}Icon`

  const btnTypeStyles = {
    borderColor: props.customColor ? props.customColor : btnColors[color],
    backgroundColor: props.customColor
      ? props.customColor
      : props.outline
      ? props.bgWhite
        ? mainColors.white
        : '0'
      : btnColors[color],
  }

  const autoWidthStyles = props.autoWidth ? {} : styles.btnFullWidth
  const btnWidthStyles = {
    width: props.width,
  }

  const btnRadiusStyles = {
    borderRadius: props.radius === 'square' ? 5 : 40,
  }

  const colorTypeStyles = {
    color: props.outline ? btnColors[color] : color === 'white' ? mainColors.black : mainColors.white,
  }

  const btnDisabledStyles = props.disabled ? styles.disabled : {}

  const iconBtnStyles = {
    height: 48,
    width: 48,
    paddingVertical: 0,
    paddingHorizontal: 0,
  }

  const noTextStyles = !props.text && iconBtnStyles

  const _renderIcon = margin => {
    let iconMargin = `margin${capitalize(margin)}`
    let marginStyles = props.text && { [iconMargin]: 5 }
    let component

    if (props.icon) {
      component = (
        <props.icon
          fill={colorTypeStyles.color}
          style={{
            ...styles[iconSizeStyles],
            ...marginStyles,
            ...props.iconStyle,
          }}
        />
      )
    } else {
      component = false
    }
    return component
  }

  const buttonStyles = {
    ...styles.btn,
    ...btnWidthStyles,
    ...btnTypeStyles,
    ...btnRadiusStyles,
    ...styles[btnSizeStyles],
    ...btnDisabledStyles,
    ...noTextStyles,
    ...autoWidthStyles,
    ...props.style,
  }

  const textStyles = [styles.text, styles[textSizeStyles], colorTypeStyles, props.textStyle]

  return (
    <TouchableOpacity
      activeOpacity={isDisabled ? 1 : 0.7}
      onPress={isDisabled ? undefined : props.onPress}
      style={buttonStyles}>
      {props.isLoading && props.loader === 'spinner' ? (
        <Loader isVisible={showLoader} color={colorTypeStyles.color} />
      ) : (
        <>
          {props.icon && props.iconPosition === 'left' && _renderIcon('right')}
          <Text style={textStyles}>{props.text}</Text>
          {props.icon && props.iconPosition === 'right' && _renderIcon('left')}
        </>
      )}
    </TouchableOpacity>
  )
}

ButtonView.defaultProps = {
  size: 'medium',
  width: '100%',
  radius: 'oval',
  color: 'green',
  iconPosition: 'left',
  loader: 'spinner',
}

export default ButtonView
