import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos(){

    //Indica o video e coloca ele em loop
    const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player =>{
        player.loop = true,
        player.play()
    })

    return <ScrollView style={estilos.fundo}>
        <StatusBar />
        <Image source={require('../../assets/Logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.titulo}>Sobre Mim</Texto>
        <Texto style={estilos.texto_sobre}>
            Malu Garrucho:
            {'\n'}
            - Tatuadora 🌻
            {'\n'}
            - Artista 🎨🖌️
            {'\n'}
            {'\n'}
            Agenda aberta para tatuagens e quadros
            {'\n'}
            Orçamentos via instagram ou Whatsapp.
            {'\n'}{'\n'}
            📍endereço: Rua Evangelista de Souza - 1471 - Sala 1
        </Texto>
        <Image source={require('../../assets/Cartao.png')} style={estilos.img_sobre}/>
        <Texto style={estilos.texto_sobre}>Exemplo Video:</Texto>
        <VideoView player={player} style={estilos.video} allowsFullscreen allowsPictureInPicture></VideoView>
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
        height: 295,
        alignSelf: "center",
        width: 502,
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