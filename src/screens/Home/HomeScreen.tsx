import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header/Header'
import PackageTabBar from './components/tab-bar/package-tab-bar/PackageTabBar'
import { useTheme } from 'react-native-paper'
import createStyles from './HomeScreen.style'

const HomeScreen = () => {


  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style = {styles.container}>

      {/* Header */}
       <Header/>

      
      <View style = {styles.textContainer}>
      {/* Başlık Metni */}
      <Text style = {styles.createYourPackagetext}>Kendi Paketini Oluştur</Text>


     {/* Açıklama Metni */}
     <Text 
      style = {styles.homeContextText}>
      Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, 
      sana özel bir paket oluşturalım.
     </Text>
  
    </View>

    {/* Kaydırılabilir Alt Başlıklar: Ped Çeşitleri */}
    <PackageTabBar/>
    </SafeAreaView>
  )
}

export default HomeScreen