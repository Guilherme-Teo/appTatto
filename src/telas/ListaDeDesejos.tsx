import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

 export default function ListaDeDesejos(){
    return <ScrollView style = {estilos.fundo}>
    <StatusBar/>
    <Texto style = {estilos.titulo}>Estamos trablhando nisso</Texto>
    </ScrollView>

    
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#282174",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
        marginBottom: 30,
    },
    titulo:{
        textAlign: "center",
        fontSize: 25,
        color: "#f7d5cc",
        fontWeight: "bold",
        paddingBottom: 10,
    },
    texto_sobre:{
        color: "#f7d5cc",
    },
    img_sobre: {
        height: 300,
        alignSelf: "center",
        width: 500,
        marginTop: 30,
        marginBottom: 30,
    },
    video:{
        width: 350,
        height: 275,
        alignSelf: "center",
        marginTop: 30,
    }
})
