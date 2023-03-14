import { ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import SliderContainer from '../../../../../components/slider-container/SliderContainer'
import { useTheme } from '@react-navigation/native';
import CartModal from '../../cart-modal/CartModal';
import { ProductType } from '../../../../../services/shopping-cart/reducer/ProductReducer';
import createStyles from './BeijeSanitaryPad.style';


const BeijeSanitaryPad = () => {

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const trackMarks = [10, 20, 30, 40, 50, 60]



    return (
      <ScrollView contentContainerStyle = {styles.container}>
      <SliderContainer 
        caption="Günlük Ped"
        minimumValue={0}
        maximumValue={100}
        trackMarks={trackMarks} 
        productName={ProductType.Pantyliner} />

       <SliderContainer 
        caption="Süper Günlük Ped"
        minimumValue={0}
        maximumValue={100}
        trackMarks={trackMarks} 
        productName={ProductType.SuperPantyliner}/>


        <CartModal/>
  </ScrollView>
    
  )
}

export default BeijeSanitaryPad;


