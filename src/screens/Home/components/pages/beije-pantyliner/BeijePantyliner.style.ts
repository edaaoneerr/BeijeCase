import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { palette } from "../../../../../../themes/Themes";

interface Style {
  container: ViewStyle;
 
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      backgroundColor: palette.background, 
      minHeight: '100%'
    },
  })
}