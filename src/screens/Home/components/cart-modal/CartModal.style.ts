import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { palette } from "../../../../../themes/Themes";

interface Style {
  packageContainer: ViewStyle;
  expandedPackageContainer: ViewStyle;
  seePackageButton: ViewStyle;
  specialPackageText: TextStyle;
  sendOnceInTwoMonthsContainer: ViewStyle;
  sendOnceInTwoMonthsText: TextStyle;
  invisibleContainer: ViewStyle;
  tamponPackageContainer: ViewStyle;
  pantylinerPackageContainer: ViewStyle;
  sanitaryPackageContainer: ViewStyle;
  removeFromPackageButton: ViewStyle;
  visibleContainer: ViewStyle;
  removeFromPackageText: TextStyle;
  packageContextText: TextStyle;
  addToCartButton: ViewStyle;
  packageTitleText: TextStyle;
 
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    packageContainer: {
      top: 17,
      left: 30,
      width: 300, 
      height: 'auto', 
      padding: 25,
      backgroundColor: palette.white, 
      justifyContent: 'flex-start', 
      alignItems: 'flex-end'
    },
    expandedPackageContainer: {
      top: 1,
      width: 350,
      margin: 10,
      height: 'auto',
      padding: 25,
      backgroundColor: palette.white,
      justifyContent: 'flex-start',
      alignSelf: 'center',
      alignItems: 'flex-end'
    },
    seePackageButton: {
      marginHorizontal: 25, 
      marginTop: 55, 
      backgroundColor: palette.black,
      elevation: 2
    },
    specialPackageText: {
      fontSize: 18,
      top: 5,
      left: 5,
      alignSelf: 'flex-start',
      fontFamily: 'Gordita-Bold',
      color: palette.black
    },
    sendOnceInTwoMonthsContainer: {
      width: '100%', 
      height: 37, 
      bottom:12, 
      backgroundColor: palette.white,
      elevation: 2,
      borderRadius:10,
      alignItems: 'center',
      justifyContent: 'center'},

      sendOnceInTwoMonthsText: {
        fontSize: 14, 
        bottom:10, 
        right: 20, 
        color: palette.black
      },
      invisibleContainer: {
        display: 'none'
      },
      visibleContainer: {
        display: 'flex'
      },
      tamponPackageContainer: {
        display:'flex', 
        marginTop: 5,
        top: 10,
        padding:3, 
        height: 95,
        backgroundColor: palette.white,
      },
      pantylinerPackageContainer: {
        display:'flex', 
        marginTop: 5,
        top: 10,
        padding:3, 
        height: 95,
        backgroundColor: palette.white,
      },
      sanitaryPackageContainer: {
        display:'flex',  
        marginTop: 3,
        top: 10,
        padding:3, 
        height: 95,
        backgroundColor: palette.white,
      },
      removeFromPackageButton: {
        left: 16,
        bottom: 8
      },
      removeFromPackageText: {
        fontFamily: 'Gordita-Bold', 
        fontSize: 11, 
        color: palette.black
      },
      packageContextText: {
        display: 'flex', 
        height: 'auto', 
        width: 'auto', 
        marginLeft: 16, 
        fontSize: 11, 
        bottom: 13, 
        fontFamily: 'Gordita-Medium', 
        color: palette.grey
      },
      addToCartButton: {
        paddingHorizontal: 45,
        alignSelf: 'center',
        marginTop: 20,
        top: 5,
        width: 'auto',
      },
      packageTitleText: {
        fontSize: 14,
        fontFamily: 'Gordita-Medium'
      }

  });
};