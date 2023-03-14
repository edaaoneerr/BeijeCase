import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import { isReadyRef, navigationRef } from 'react-navigation-helpers'

const Navigation = () => {

  useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer
    ref={navigationRef}
     onReady={() => {
    isReadyRef.current = true;
  }}>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
             }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation