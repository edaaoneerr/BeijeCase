import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from '@react-navigation/native';
import createStyles from './SyncIcon.style';

const SyncIcon = () => {

    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    
  return (

    <View style = {styles.syncContainer}>

    {/* 2 Ayda 1 Gönderim Başlığı için Svg Iconu */}

    <Svg viewBox="0 0 24 24" 
    fill="none"  
    width={18} 
    height={18} 
    strokeWidth="1">
    <Path d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3" 
    stroke="#343131" 
    strokeWidth={1}
    strokeLinecap="round" 
    strokeLinejoin="round"/></Svg>
    </View>
  )
}

export default SyncIcon