import { View, Text, ViewStyle } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import createStyles from './SliderContainer.style';
import { Slider } from '@miblanchard/react-native-slider';
import { palette } from '../../../themes/Themes';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart} from '../../constants/functions/Functions';
import { ProductType } from '../../services/shopping-cart/reducer/ProductReducer';
import { Button } from 'react-native-paper';

interface SliderContainerProps {
    caption: String;
    sliderValue?: number | number[];
    trackMarks?: Array<number>;
    vertical?: boolean;
    minimumValue: number;
    style?: ViewStyle;
    maximumValue: number;
    productName: ProductType;

  }
  
  const SliderContainer = (props: SliderContainerProps) => {

    // Constants - Sabitler
    const DEFAULT_VALUE = 0;
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const {caption, sliderValue, trackMarks} = props;
    const dispatch = useDispatch();
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState(
      sliderValue ? sliderValue : DEFAULT_VALUE
    );
    const [valueHistory, setValueHistory] = useState<string[]>([]);



  // Functions - Fonksiyonlar
  //  Kaydırmadan sonraki ve önceki kaydırma noktalarının stilleri
    let renderTrackMarkComponent: ((index: number) => JSX.Element) | undefined;
    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        renderTrackMarkComponent = (index: number) => {
          
            const currentMarkValue = trackMarks[index];
            const currentSliderValue =
                value || (Array.isArray(value) && value[0]) || 0;
            const style =
                currentMarkValue > Math.max(currentSliderValue)
                    ? styles.activeMark
                    : styles.inactiveMark;

            return <View style={style} />;
        };
    }
    


    //  Kaydırdıkça beliren baş bileşeni
     const renderAboveThumbComponent = (value: any) => {
        return (
          <View style={styles.thumbContainer}>
            <View style={styles.rectangle}> 
            <Text style = {styles.thumbText}>{value.toString()}</Text>
            </View>
            <View style={styles.triangle} />
            
          </View>
        );
      };

      const handleValueChange = (newValue: number | number[]) => {  
        setValue(newValue);
        const valueString = Array.isArray(newValue) ? newValue.join(',') : newValue.toString();
        setValueHistory([...valueHistory, valueString]);
      
      
        // Kaydırıldığında değer azaldı mı?
        if (valueHistory.length >= 2 && parseInt(valueHistory[valueHistory.length-2]) < parseInt(valueHistory[valueHistory.length-1])) {
          valueHistory.splice(0, valueHistory.length - 2);
           dispatch(addToCart(props.productName));
        }
        
        // Kaydırıcının değer arttı mı?
        else if (valueHistory.length >= 2 && parseInt(valueHistory[valueHistory.length-2]) > parseInt(valueHistory[valueHistory.length-1])) {
          valueHistory.splice(0, valueHistory.length - 2);
          dispatch(removeFromCart(props.productName));
        }
 
        // Kaydırıcının bir başı var mı ve değeri değişti mi?
        else if (!Array.isArray(newValue) && newValue !== value) {
          dispatch(addToCart(props.productName));
        }
      };
      
   
     function sliderControl(value: number | number[]){
      if(value <= 0){
        setValue(0)
        dispatch(removeFromCart(props.productName));
      }
    }

    

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.titleContainer}>
                <Text style = {{color: palette.black}}>{caption}</Text>
            </View>
        <Slider
        animateTransitions
        trackMarks={trackMarks}
        trackStyle = {{height: 3}}
        step={10}
        onSlidingStart = {() => setPressed(true)}
        trackClickable={true}
        renderTrackMarkComponent={renderTrackMarkComponent}
        renderAboveThumbComponent={() => (pressed ? renderAboveThumbComponent(value) : null)} 
        thumbStyle = {{height: 17, width: 17}}
        containerStyle={{...styles.container, ...props.style}}
        maximumValue={props.maximumValue}
        minimumValue={props.minimumValue}
        value={value}
        onSlidingComplete = {() => {setPressed(false), setValue(value), sliderControl(value)}}
        onValueChange={handleValueChange}
        />

        <Text style = {styles.minValueText}>{props.minimumValue}</Text>

        <Text style = {styles.maxValueText}>{props.maximumValue}</Text>
        </View>

    );
  };

  export default SliderContainer;