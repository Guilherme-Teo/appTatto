import React from "react";
import { StyleSheet } from "react-native";

const estilosProdutos = StyleSheet.create({
    corFundo: {
        backgroundColor: "#282174",
        paddingBottom: 35,
    },
    titulo: {
        fontSize: 26,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
        width: "100%",
    },
    card: {
        width: "90%",
        margin: 5,
        alignSelf: "center",
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "#faefce",
        marginBottom: 20,
    },
    nomeProduto: {
        color: "#282174",
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    descProduto: {
        color: "#282174",
        fontSize: 16,
        paddingBottom: 10,
    },
    imagem: {
        width: "90%",
        alignSelf: "center",
        paddingBottom: 5,
    },
    imagemModal: {
        width: '90%',
        height: '75%', 
        borderRadius: 60, 
        alignSelf: "center"
    },
    modal: {
        backgroundColor: "#faefce",
        width: "85%",
        height: "75%",
        borderWidth: 4,
        borderColor: "black",
        paddingLeft: 10,
        paddingRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:  'center',
    },
    botaoModal: {
       left: "85%",
    },
    botao: {
        width: "30%",
        backgroundColor: "#282174",
        borderWidth: 1,
        borderRadius: 2,
    },
    textoBotao: {
        width: "100%",
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    imagemSlider: {
        height: "100%",
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default estilosProdutos;