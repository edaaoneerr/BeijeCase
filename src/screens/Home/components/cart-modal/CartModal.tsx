import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { palette } from '../../../../../themes/Themes';
import Modal from "react-native-modal";
import { Button, Card, IconButton } from 'react-native-paper';
import { Path, Svg } from 'react-native-svg';
import Store from '../../../../services/Store';
import { ProductType } from '../../../../services/shopping-cart/reducer/ProductReducer';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../constants/functions/Functions';
import createStyles from './CartModal.style';
import { useTheme } from '@react-navigation/native';
import SyncIcon from '../../../../components/sync-icon/SyncIcon';


const CartModal = ({ handleButtonPress }) => {


  { /* Constants - Sabitler */}
  const [isModalVisible, setModalVisible] = useState(false);
  const [isExpanded, setExpanded] = useState(true)
  const sanitaryPad = Store.getState().sanitaryPad;
  const superSanitaryPad = Store.getState().superSanitaryPad;
  const superPlusSanitaryPad = Store.getState().superPlusSanitaryPad;
  const pantyliner = Store.getState().pantyliner;
  const superPantyliner = Store.getState().superPantyliner;
  const tampon = Store.getState().tampon;
  const miniTampon = Store.getState().miniTampon
  const image = require('./../../../../../assets/images/packet.jpg')
  const [isTamponVisible, setTamponVisible] = useState(false)
  const [isPantyVisible, setPantyVisible] = useState(false)
  const [isSanitaryVisible, setSanitaryVisible] = useState(false)
  const dispatch = useDispatch()
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

   
   { /* Functions - Fonksiyonlar */}
  function checkCount(){

    if (Store.getState().totalCount == 0) {
      setPantyVisible(false)
      setSanitaryVisible(false)
      setTamponVisible(false)
    }
    
     if (Store.getState().pantyliner.productCount > 0 || Store.getState().superPantyliner.productCount > 0) {
         setPantyVisible(true)
        
    }

     if (Store.getState().sanitaryPad.productCount > 0 || Store.getState().superSanitaryPad.productCount > 0 || Store.getState().superPlusSanitaryPad.productCount > 0) {
      setSanitaryVisible(true)

    }
     if (Store.getState().tampon.productCount > 0 || Store.getState().miniTampon.productCount > 0){
      setTamponVisible(true)
    }
  }


  const toggleModal = () => { 
    setModalVisible(!isModalVisible);
    checkCount()
  }
   
  function setToZeroSanitary(){
    
    Store.getState().sanitaryPad.productCount = 0
    dispatch(removeFromCart(ProductType.SanitaryPad))

    Store.getState().superSanitaryPad.productCount = 0
    dispatch(removeFromCart(ProductType.SuperSanitaryPad))

    Store.getState().superPlusSanitaryPad.productCount = 0
    dispatch(removeFromCart(ProductType.SuperPlusSanitaryPad))

    checkCount()
  }

  function setToZeroPanty(){
   
    Store.getState().pantyliner.productCount = 0
    dispatch(removeFromCart(ProductType.Pantyliner))

    dispatch(removeFromCart(ProductType.SuperPantyliner))
    Store.getState().superPantyliner.productCount = 0
    
    checkCount()
  }
    
   function setToZeroTampon(){
    Store.getState().tampon.productCount = 0
    dispatch(removeFromCart(ProductType.Tampon))

    Store.getState().miniTampon.productCount = 0
    dispatch(removeFromCart(ProductType.MiniTampon))
  }
  
    
    return (
      <View>
      <Button mode= "contained" style = {styles.seePackageButton} onPress={toggleModal}> Paketini Gör </Button>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>


        <View>
        <View style={isExpanded ? styles.expandedPackageContainer : styles.packageContainer}>

        <Text style = {styles.specialPackageText}>Özel Paketin</Text>

        {/* Kapatma Butonu */}
        <IconButton icon="close" iconColor= {palette.grey} size={20} style = {{bottom:30, left: 15}}  onPress={toggleModal}/>


         {/* 2 Ayda 1 Gönderim*/}
          <View style = {styles.sendOnceInTwoMonthsContainer}>
          <SyncIcon />
            <Text style = {styles.sendOnceInTwoMonthsText}> 2 ayda 1 gönderim </Text>
          </View>


          <View style = {{alignSelf: 'center'}}>

             {/* Paket Resmi */}
             <Image style = {{width: 300, height: 140, alignSelf: 'center'}} source = {image}/>


              {/*Ped Paket İçeriği */}
               <Card style = {isSanitaryVisible ? styles.sanitaryPackageContainer : styles.invisibleContainer}>              
               <Card.Title title= 'Ped Paketleri' titleStyle = {styles.packageTitleText}/>
               <Text style = {sanitaryPad.productCount  != 0 || superSanitaryPad.productCount  != 0 || superPlusSanitaryPad.productCount  != 0 
                ? styles.packageContextText
                : styles.invisibleContainer}>
                  {sanitaryPad.productCount != 0 ? `${sanitaryPad.productCount} ${sanitaryPad.name}` : ''}
                  {sanitaryPad.productCount != 0 && (superSanitaryPad.productCount != 0 || superPlusSanitaryPad.productCount != 0) ? ' ve ' : ''}
                  {superSanitaryPad.productCount != 0 ? `${superSanitaryPad.productCount} ${superSanitaryPad.name}` : ''}
                  {superSanitaryPad.productCount != 0 && superPlusSanitaryPad.productCount != 0 ? ' ve ' : ''}
                  {superPlusSanitaryPad.productCount != 0 ? `${superPlusSanitaryPad.productCount} ${superPlusSanitaryPad.name}` : ''}

                </Text>


              {/* Paketten Çıkar Butonu */}
              <TouchableOpacity style = {styles.removeFromPackageButton}  
              onPress={() => [setSanitaryVisible(false), setToZeroSanitary()]}>
              <Text style = {styles.removeFromPackageText}>Paketten Çıkar</Text>
              </TouchableOpacity>
             </Card>


              {/*Günlük Ped Paket İçeriği */}
              <Card style = {isPantyVisible ? styles.pantylinerPackageContainer : styles.invisibleContainer}>              
              <Card.Title title='Günlük Ped Paketleri' titleStyle = {styles.packageTitleText} />
              <Text style = {pantyliner.productCount  != 0 || superPantyliner.productCount  != 0 ? styles.packageContextText :  styles.invisibleContainer} >
                  {pantyliner.productCount != 0 ? `${pantyliner.productCount} ${pantyliner.name} ` : ''}
                  {pantyliner.productCount != 0 && superPantyliner.productCount != 0 ? ' ve ' : ''}
                  {superPantyliner.productCount != 0 ? `${superPantyliner.productCount} ${superPantyliner.name} ` : ''}
              </Text>

              {/* Paketten Çıkar Butonu */}
              <TouchableOpacity style = {styles.removeFromPackageButton}  
              onPress={() => [setPantyVisible(false), setToZeroPanty()]}>
              <Text style = {styles.removeFromPackageText}>Paketten Çıkar</Text>
              </TouchableOpacity>
             </Card>
            

              {/*Tampon Paket İçeriği */}
             <Card style = {isTamponVisible ? styles.tamponPackageContainer : styles.invisibleContainer}>              
             <Card.Title title='Tampon Paketleri' titleStyle={styles.packageTitleText} />
             <Text style={tampon.productCount != 0 || miniTampon.productCount != 0 ? styles.packageContextText : styles.packageContextText}>
              {tampon.productCount != 0 ? `${tampon.productCount} ${tampon.name} ` : ''}
              {tampon.productCount != 0 && miniTampon.productCount != 0 ? ' ve ' : ''}
              {miniTampon.productCount != 0 ? `${miniTampon.productCount} ${miniTampon.name} ` : ''}
              </Text>

              {/* Paketten Çıkar Butonu */}
              <TouchableOpacity style = {styles.removeFromPackageButton} 
              onPress={() => [setTamponVisible(false), setToZeroTampon(), handleButtonPress]}>
              <Text style = {styles.removeFromPackageText}>Paketten Çıkar</Text>
              </TouchableOpacity>
             </Card>
                      


             </View>

               {/* Sepete Ekle Butonu */}
               <Button mode= "contained" 
             disabled = {Store.getState().totalPrice === 0 ? true : false}
             buttonColor = {palette.black}
             style = {isExpanded ? styles.addToCartButton : null}
             onPress={toggleModal}>
                Sepete Ekle (₺{Store.getState().totalPrice.toFixed(2)})
           </Button>

             



        </View>

       
        


        </View>
      </Modal>
        

      </View>

    );
  
}
export default CartModal;

