import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {

  return StyleSheet.create({
    container: {
      width: 30,
      height: 32,
      left:35,
      top:7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rectangle: {
      width: 26,
      height: 17,
      borderRadius: 2,
      backgroundColor: 'grey'
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 4,
      borderRightWidth: 4,
      borderBottomWidth: 6,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'grey',
      transform: [
        {rotate: '180deg'}
      ]
    },
  })
}