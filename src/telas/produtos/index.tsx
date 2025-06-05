import React from "react";
import { FlatList, View, Image, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Item from "./item";
import Texto from '../../componentes/Texto';

export default function Index({ itens }: any) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#282174" }}>
            <View style={estilos.fundo}>
                <Image source={require('../../../assets/Logo.png')} style={estilos.logo} resizeMode="contain" />
                <Texto style={estilos.titulo}>Portfólio</Texto>
                <FlatList
                    data={itens.lista}
                    renderItem={({ item }) => <Item prod={item} />}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#282174",
        paddingVertical: 12,
        paddingHorizontal: 16,
        flex: 1,
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: "center",
    },
    titulo: {
        textAlign: "center",
        fontSize: 25,
        color: "#f7d5cc",
        fontWeight: "bold",
        paddingBottom: 30,
        paddingTop: 30,
    },
});
