import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { Home } from './pages/Home'
import { MyLinks } from './pages/MyLinks'

const Drawer = createDrawerNavigator();

export function Routes() {

   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name='Home'
            component={Home}
            options={{
               title: 'Home',
               drawerActiveBackgroundColor: '#2ccbb9',
               drawerActiveTintColor: '#fff',
               headerShown: false,
               drawerIcon: ({ focused, size, color }) => (
                  <Ionicons
                     name={focused ? 'cube' : 'cube-outline'}
                     color={color}
                     size={size}
                  />
               )
            }}
         />
         <Drawer.Screen
            name="MyLinks"
            component={MyLinks}
            options={{
               title: 'Meus Links',
               drawerActiveBackgroundColor: '#2ccbb9',
               drawerActiveTintColor: '#fff',
               headerShown: false,
               drawerIcon: ({ focused, size, color }) => (
                  <Ionicons
                     name={focused ? 'stats-chart' : 'stats-chart-outline'}
                     color={color}
                     size={size}
                  />
               )
            }}
         />
      </Drawer.Navigator>
   )
}