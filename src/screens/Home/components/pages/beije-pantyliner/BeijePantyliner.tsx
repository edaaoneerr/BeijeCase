import { ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import SliderContainer from '../../../../../components/slider-container/SliderContainer'
import { useTheme } from '@react-navigation/native';
import createStyles from './BeijePantyliner.style';
import { ProductType } from '../../../../../services/shopping-cart/reducer/ProductReducer';
import CartModal from '../../cart-modal/CartModal';



const BeijePantyliner = () => {

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const trackMarks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    return (


<ScrollView contentContainerStyle = {styles.container}>

    {/* Günlük Ped Çeşitleri */}
    
<SliderContainer 
caption="Standart Ped"
minimumValue={0}
maximumValue={60}
trackMarks={trackMarks} 
productName = {ProductType. SanitaryPad}/>

<SliderContainer 
caption="Süper Ped" 
minimumValue={0} 
maximumValue={60} 
trackMarks= {trackMarks}
productName = {ProductType.SuperSanitaryPad}/>

<SliderContainer 
caption="Süper+ Ped" 
minimumValue={0} 
maximumValue={60} 
trackMarks= {trackMarks}
productName = {ProductType.SuperPlusSanitaryPad}/>

<CartModal/>

</ScrollView>
  )
}

export default BeijePantyliner;


