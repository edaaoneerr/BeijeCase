import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  iconContainer: ViewStyle;

}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    iconContainer: {
      display: 'flex',
      flex: 0.5,
      flexDirection: 'row-reverse', 
      justifyContent: 'space-evenly', 
      alignItems: 'center'
      },
      container: {
        display: 'flex', 
        flexDirection: 'row', 
        paddingHorizontal: 15, 
        paddingVertical: 15}
   
  });
};