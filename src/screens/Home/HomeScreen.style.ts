import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  createYourPackagetext: TextStyle;
  homeContextText: TextStyle;
  textContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
    backgroundColor: '#F9F5F2', 
    position: 'relative', 
    minHeight: '100%'
  },
    textContainer: {
      marginTop: 45,
    backgroundColor: '#F9F5F2',
    flexDirection: 'column', 
    paddingHorizontal: 25
    },
    createYourPackagetext: {
      marginLeft: 5,
      fontFamily: 'Gordita-Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      color: 'rgba(0, 0, 0, 0.9)',
      fontSize: 22, 
      lineHeight: 45,
      letterSpacing: -0.48
      },
      homeContextText: {
        marginLeft: 5,
        marginTop: 10,
        fontFamily: 'Gordita',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.16
  
        }
  });
};