import React from "react";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import {getFocusedRouteNameFromRoute, NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import SobreNos from "./src/telas/SobreNos";
import Produtos from "./src/telas/produtos";
import ListaDeDesejos from "./src/telas/ListaDeDesejos";
import Perfil from "./src/telas/Perfil";

//Configuração do Menu
const Tab = createBottomTabNavigator();

function Menu(){
  return <Tab.Navigator screenOptions ={({route})=>({
              tabBarIcon: ({focused, color, size})=>{
                let iconName: any;

                if(route.name === "Sobre Nós"){
                  iconName = focused
                  ? 'woman'
                  : 'woman-outline';
                }
                if(route.name === "Produtos"){
                  iconName = focused
                  ? 'brush'
                  : 'brush-outline';
                }
                if(route.name === "Lista de desejos"){
                  iconName = focused
                  ? 'heart'
                  : 'heart-outline';
                }
                if(route.name === "Perfil"){
                  iconName = focused
                  ? 'person'
                  : 'person-outline';
                }
                return <Ionicons name = {iconName} size = {size} color = {color}></Ionicons>
              },
              tabBarActiveTintColor: '#282174',
              tabBarInactiveColor: 'gray',
              headerShown: false,
            })}>
            <Tab.Screen name = "Sobre Nós" component = {SobreNos}/>
            <Tab.Screen name = "Produtos" component = {Produtos}/>
            <Tab.Screen name = "Lista de desejos" component = {ListaDeDesejos}/>
            <Tab.Screen name = "Perfil" component = {Perfil}/>
        </Tab.Navigator>
}

export default function App() {

  //Configuração da fonte pra app
  const [fonteCarregada] = useFonts({"FonteRegular": Montserrat_400Regular, "fonteBold": Montserrat_700Bold});

  //Verifica se a fonte foi carregada, se não, não exibe nada
  if(!fonteCarregada){
    return <View/>
  }

  return <NavigationContainer>
          <Menu/>
  </NavigationContainer>
}