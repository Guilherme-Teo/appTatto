import React from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import Item from "./item";
export default function Index({itens}:any){
    return <View style={estilos.fundo}>
        <Image source={require('../../../assets/Logo.png')} style={estilos.logo} resizeMode="contain" />
        <FlatList
                data = {itens.lista}
                renderItem = {({item}) => <Item prod={item}/>}
                keyExtractor = {itens.lista.id}
            />
    </View>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#282174",
        paddingVertical: 12,
        paddingHorizontal: 16,
        paddingBottom: 180,
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: "center",
    },
})