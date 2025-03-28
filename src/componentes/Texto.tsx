import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Texto({children, style}:any){

    return <Text style={[estilos.padrao, style]}>{children}</Text>
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
