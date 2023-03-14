import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    iconButton: ViewStyle;
    svgStyle: ViewStyle;
      
  }
  
  export default (theme: ExtendedTheme) => {
      const borderWidth = 0.8;
     const { colors } = theme;
    return StyleSheet.create<Style>({
      iconButton: {
        display: 'flex', 
        flex:1, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    svgStyle: {
        marginLeft: 28, 
        marginTop: 10 
    }
    });
  };