import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const ProfileIcon = () => {
  return (
    <TouchableOpacity>
    <Svg  
    viewBox="0 0 24 24" 
    fill="none" 
    width={20}
    height={20}>
    <Path stroke="#343131" 
    strokeWidth={2} 
    strokeLinecap="round" 
    strokeLinejoin="round"
     d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 
     0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 
     21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
     </Svg>
     </TouchableOpacity>
  )
}

export default ProfileIcon