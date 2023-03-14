import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '@react-navigation/native';
import React from "react";
import BeijeTampon from '../../pages/beije-tampon/BeijeTampon';
import { palette } from '../../../../../../themes/Themes';
import BeijeSanitaryPad from '../../pages/beije-sanitary-pad/BeijeSanitaryPad';
import BeijePantyliner from '../../pages/beije-pantyliner/BeijePantyliner';


  const PackageTabBar = () => {
    const theme = useTheme();
    const { colors } = theme;
    const Tab = createMaterialTopTabNavigator();
  
    return (
      <Tab.Navigator 
      screenOptions={
        {
        tabBarPressColor: palette.background,
        tabBarStyle: {
          backgroundColor: palette.background,
          marginTop: 25, 
          width: 'auto',
          height: 48,
          elevation: 0, //android
          shadowOpacity: 0, //ios
        }, 
        tabBarIndicatorStyle: {
          backgroundColor: 'rgb(52, 49, 49)',
  
        },
        tabBarLabelStyle: {
        textTransform: 'none',  
        bottom:30,
        fontSize: 12,
        fontWeight: 'bold',
  
      },
  
    }}>
        <Tab.Screen 
    name="BeijePantyliner" 
    component={BeijePantyliner} 
    options={{
      tabBarIcon: () => null,
      tabBarLabel: 'beije Ped'
    }}
  />
        <Tab.Screen name="BeijeSanitaryPad" component={BeijeSanitaryPad} options={{
      tabBarIcon: () => null,
      tabBarLabel: 'beije Günlük Ped'
    }}/>
        <Tab.Screen name="BeijeTampon" component={BeijeTampon} options={{
      tabBarIcon: () => null,
      tabBarLabel: 'beije Tampon'
    }}/>
      </Tab.Navigator>
  
    );
  };
  
  export default PackageTabBar;