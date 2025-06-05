import React from "react";
import { ScrollView, View, TouchableOpacity, Linking, Image } from "react-native";
import Texto from "../componentes/Texto";
import Ionicons from "react-native-vector-icons/Ionicons";
import estilos from "../cuidados/estiloCuidados";

export default function Cuidados() {
  return (
    <ScrollView style={estilos.fundo}>
      <Image source={require('../../assets/Logo.png')} style={estilos.logo} resizeMode="contain" />
      <Texto style={estilos.titulo}>🧼 Cuidados com a Tatuagem</Texto>
            <Image 
        source={require('../../assets/cuidados.png')} 
        style={estilos.imagem} 
        resizeMode="cover" 
      />
      <View style={estilos.card}>
        <Texto style={estilos.subtitulo}>Antes da Tatuagem:</Texto>
        <Texto style={estilos.texto}>• Hidrate bem a pele nos dias anteriores.</Texto>
        <Texto style={estilos.texto}>• Evite álcool, sol e exercícios intensos.</Texto>
        <Texto style={estilos.texto}>• Durma bem e alimente-se.</Texto>

        <Texto style={estilos.subtitulo}>Depois da Tatuagem:</Texto>
        <Texto style={estilos.texto}>• Lave com sabão neutro 2x ao dia.</Texto>
        <Texto style={estilos.texto}>• Aplique pomada cicatrizante.</Texto>
        <Texto style={estilos.texto}>• Não coçar e evitar sol por 30 dias.</Texto>
        <Texto style={estilos.texto}>• Evite praia, piscina e academia.</Texto>
      </View>

      <Texto style={estilos.titulo}>📲 Agendamento & Contato</Texto>
      <View style={estilos.card}>
        <Texto style={estilos.texto}>📍 Rua Evangelista de Souza, 1471 - Sala 1</Texto>
        <Texto style={estilos.texto}>📞 (11) 91963-5767</Texto>
        <Texto style={estilos.texto}>📸 Instagram: @malugarrucho.tattoo</Texto>

        <View style={estilos.botoes}>
          <TouchableOpacity style={estilos.botao} onPress={() => Linking.openURL("https://wa.me/5511919635767")}>
            <Ionicons name="logo-whatsapp" size={20} color="white" />
            <Texto style={estilos.textoBotao}> WhatsApp</Texto>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botao} onPress={() => Linking.openURL("https://instagram.com/malugarrucho.tattoo")}>
            <Ionicons name="logo-instagram" size={20} color="white" />
            <Texto style={estilos.textoBotao}> Instagram</Texto>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
