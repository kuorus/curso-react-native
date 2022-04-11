import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { mainColors } from '../../../styles/colors'
import { mainFonts } from '../../../styles/fonts'

interface Style extends Record<string, ViewStyle | TextStyle> {
  btn: ViewStyle
  btnFullWidth: ViewStyle
  mediumBtn: ViewStyle
  bigBtn: ViewStyle
  smallBtn: ViewStyle
  text: TextStyle
  mediumText: ViewStyle
  bigText: ViewStyle
  smallText: ViewStyle
  disabled: ViewStyle
  mediumIcon: ViewStyle
  bigIcon: ViewStyle
  smallIcon: ViewStyle
}

export default StyleSheet.create<Style>({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 3,
    borderRadius: 30,
    borderWidth: 1,
  },
  btnFullWidth: {
    justifyContent: 'center',
  },
  mediumBtn: {
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  bigBtn: {
    paddingVertical: 15,
    paddingHorizontal: 45,
  },
  smallBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  text: {
    ...mainFonts.medium,
    textAlign: 'center',
  },
  mediumText: {
    fontSize: 17,
    lineHeight: 20,
  },
  bigText: {
    fontSize: 22,
    lineHeight: 25,
  },
  smallText: {
    fontSize: 15,
    lineHeight: 17,
  },
  disabled: {
    borderWidth: 0,
    backgroundColor: mainColors.gray.disabledButton,
    color: mainColors.white,
  },
  mediumIcon: {
    width: 18,
    height: 18,
  },
  bigIcon: {
    width: 21,
    height: 21,
  },
  smallIcon: {
    width: 15,
    height: 15,
  },
})
