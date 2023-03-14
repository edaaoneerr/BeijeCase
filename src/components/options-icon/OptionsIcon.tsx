import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const OptionsIcon = () => {
  return (
    <TouchableOpacity>
    <Svg 
    viewBox="0 0 24 24" 
    fill="none" 
    width={20}
    height={20}>
    <Path 
    stroke="#343131" 
    strokeWidth={2} 
    strokeLinecap="round" 
    strokeLinejoin="round"
    d="M3 12h18M3 6h18M3 18h18" />
    </Svg>
    </TouchableOpacity>

  )
}

export default OptionsIcon