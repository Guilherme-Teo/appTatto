import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: "#282174", // Azul
    padding: 16,
},
    logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginBottom: 30,
},
imagem: {
  width: '100%',
  height: undefined,
  aspectRatio: 1414 / 2000,
  borderRadius: 12,
  marginBottom: 20,
},
  titulo: {
    textAlign: "center",
    fontSize: 25,
    color: "#f7d5cc", // Rosa
    fontWeight: "bold",
    marginVertical: 20,
  },
 card: {
  backgroundColor: "#faefce",
  borderRadius: 12,
  padding: 16,
  marginBottom: 30,
  shadowColor: "#000", // sombra sutil para destacar o card
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
subtitulo: {
  fontSize: 18,
  color: "#282174", // Azul escuro
  fontWeight: "bold",
  marginTop: 10,
  marginBottom: 4,
},
texto: {
  fontSize: 16,
  color: "#282174", // Azul escuro para boa leitura no fundo branco
  marginBottom: 6,
},
  botoes: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7B1FA2", // Roxo escuro para botões (pode ajustar se quiser)
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default estilos;
