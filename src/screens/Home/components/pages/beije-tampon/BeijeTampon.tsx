import { ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import SliderContainer from '../../../../../components/slider-container/SliderContainer'
import { useTheme } from '@react-navigation/native';
import createStyles from './BeijeTampon.style';
import { ProductType } from '../../../../../services/shopping-cart/reducer/ProductReducer';
import CartModal from '../../cart-modal/CartModal';



const BeijeTampon = () => {

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const trackMarks = [10, 20, 30, 40, 50, 60]

    return (
    <ScrollView contentContainerStyle = {styles.container}>


      {/* Tampon Çeşitleri    */}

      <SliderContainer 
          caption="Mini Tampon"
          minimumValue={0}
          maximumValue={60}
          trackMarks={trackMarks} 
          productName={ProductType.MiniTampon}/>

         <SliderContainer 
          caption="Standart Tampon"
          minimumValue={0}
          maximumValue={60}
          trackMarks={trackMarks} 
          productName={ProductType.Tampon}
          />

          <CartModal/>
    </ScrollView>
  )
}

export default BeijeTampon;


