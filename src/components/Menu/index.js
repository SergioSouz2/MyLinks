import React from "react";

import Feather from 'react-native-vector-icons/Feather';
import { ButtonMenu } from "./styles";

import { useNavigation } from "@react-navigation/native";



export function Menu() {

   const navigation = useNavigation();
   return (
      <ButtonMenu onPress={() => navigation.openDrawer()} >
         <Feather
            name="menu"
            size={40}
            color='#fff' />
      </ButtonMenu>
   )
}