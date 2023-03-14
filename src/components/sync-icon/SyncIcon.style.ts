import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { palette } from "../../../themes/Themes";

interface Style {
  syncContainer: ViewStyle;
 
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    syncContainer: {
        alignSelf: 'flex-start', top: 10, left: 10
    }
  });
};