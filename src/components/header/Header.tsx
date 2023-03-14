import { View, Text, SafeAreaView } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme } from 'react-native-paper';
import BeijeIcon from '../beije-icon/BeijeIcon';
import CartIcon from '../cart-icon/CartIcon';
import OptionsIcon from '../options-icon/OptionsIcon';
import ProfileIcon from '../profile-icon/ProfileIcon';
import createStyles from './Header.style';

const Header = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    
 
     <SafeAreaView style = {styles.container}>
 
     {/*Beige Icon Butonu - Svg*/}
     <BeijeIcon />
  
     <View style = {styles.iconContainer}>
 
      {/* Üç Çizgi Opsiyon Icon Butonu - Svg */}
      <OptionsIcon />
 
      {/* Profil Icon Butonu - Svg */}
      <ProfileIcon />
     
       {/* Sepet Icon Butonu- Svg */}
      <CartIcon />
 
     </View>
     </SafeAreaView>
  )
}

export default Header