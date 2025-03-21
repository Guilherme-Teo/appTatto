import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style}:any){

    //Determina a estilização padrão do texto
    let estilo = estilos.padrao;

    //Verifica se o texto é para ser exibido em negrito
    if(style?.fontWeight == "bold"){
        estilo = estilos.bold;
    }

    return <Text style={[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao: {   
        fontFamily: "fonteRegular",     
        fontSize: 18,
        textAlign: "justify",
        lineHeight: 25,
    },
    bold: {
        fontFamily: "fonteBold",     
        fontSize: 18,
        textAlign: "justify",
        lineHeight: 25,
    }
})
