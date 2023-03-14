import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { palette } from "../../../themes/Themes";


interface Style {
  container: ViewStyle;
    titleContainer: ViewStyle;
    sliderContainer: ViewStyle;
    activeMark: ViewStyle;
    inactiveMark: ViewStyle;
    thumbContainer: ViewStyle;
    rectangle: ViewStyle;
    triangle: ViewStyle;
    thumbText: TextStyle;
    minValueText: TextStyle;
    maxValueText: TextStyle;
}

export default (theme: ExtendedTheme) => {
    const borderWidth = 0.8;
   const { colors } = theme;
  return StyleSheet.create<Style>({
    activeMark: {
        borderColor: palette.black,
        borderWidth,
        left: 16,
    },
    inactiveMark: {
        borderColor: 'grey',
        borderWidth,
        left: 16,
    },
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        color:'rgb(52,49,49)',
        
    },
    sliderContainer: {
        top:30,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    titleContainer: {
        bottom:4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        
        },
        maxValueText: {
        alignSelf: 'flex-end', 
        bottom: 22,
        color: palette.black,
        fontSize: 11,
        fontFamily: 'Gordita-Medium',
        },
        minValueText: {
        fontFamily: 'Gordita-Medium', 
        color: palette.black, 
        fontSize:11,
        left:3
      },
    thumbContainer: {
        width: 30,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rectangle: {
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        top:10,
        width: 30,
        height: 19,
        borderRadius: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      triangle: {
        width: 0,
        height: 0,
        top:10,
        right:5,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderBottomWidth: 6,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: palette.grey,
        transform: [
          {rotate: '180deg'}
        ]
      },
      thumbText: {
      color: 'white',  
      fontSize: 11, 
      fontFamily: 'Gordita-Bold', 
      textAlign: 'center'
    }
  });
};