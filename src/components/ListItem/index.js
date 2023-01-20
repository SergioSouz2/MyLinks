import React from "react";

import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import {
   ContainerButton,
   Item,
   ActionContainer
} from './styles'

export function ListItem({ data, selectedItem, deleteItem }) {

   function RighActions() {
      return (
         <ActionContainer onPress={() => deleteItem(data.id)}>
            <Feather
               name="trash"
               size={24}
               color="#fff"
            />
         </ActionContainer>
      )
   }

   return (
      <View>
         <Swipeable
            renderRightActions={RighActions}
         >
            <ContainerButton activeOpacity={0.7} onPress={() => selectedItem(data)}>
               <Feather
                  size={24}
                  color="#fff"
                  name="link"
               />
               <Item numberOfLines={1}>{data.long_url}</Item>

            </ContainerButton>
         </Swipeable>
      </View>
   )
}
