import React from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'



export  function App () {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
