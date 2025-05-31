import React from "react";
import { StatusBar, StyleSheet, ScrollView, Image } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import Texto from "../componentes/Texto";

export default function SobreNos() {
    const player = useVideoPlayer(require('../../assets/EditTatto.mp4'));

    React.useEffect(() => {
        if (player) {
            player.loop = true;
            player.play();
        }
    }, [player]);

    return (
        <ScrollView style={estilos.fundo}>
            <StatusBar />
            <Image source={require('../../assets/Logo.png')} style={estilos.logo} resizeMode="contain" />
            <Texto style={estilos.titulo}>Sobre Mim</Texto>
            <Texto style={estilos.texto_sobre}>
                -----------------------------------------------------------------
                {'\n'}Oi! Sou a Malu Garrucho, tatuadora apaixonada por transformar ideias em arte na pele...
                {'\n'}
                {'\n'}✨ “Tatuagens feitas com carinho de forma fácil e confortável.”
                {'\n'}
                {'\n'}📍Rua Evangelista de Souza,1471-Sala 1
                {'\n'}📞 (11) 91963-5767
                {'\n'}📸 Instagram: @malugarrucho.tattoo
                {'\n'}-----------------------------------------------------------------
            </Texto>
            <Image source={require('../../assets/QRCode.png')} style={estilos.img_sobre} />
            <Texto style={estilos.texto_sobre}>Exemplo Video:</Texto>
            <VideoView player={player} style={estilos.video} allowsFullscreen allowsPictureInPicture />
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#282174",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo: {
        width: 250,
        height: 250,
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
video: {
    width: 520,
    height: 380,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    borderColor: "#f7d5cc",
    borderWidth: 3,
    borderRadius: 100, // completamente arredondado
    overflow: "hidden",
    backgroundColor: "#1f1a5c",
}

})