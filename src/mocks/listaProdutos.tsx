const lista_produto = {
  itens: {
    titulo: "Veja abaixo nossos produtos",
    lista: [
      {
        id: 1,
        nome: "Animais/Criaturas",
        descricao: "Tatuagens criativas com temática animal e fantástica",
        imagem: require('../../assets/TattosAnimais/borboleta.jpg'),
        slider: [
          require('../../assets/TattosAnimais/borboleta.jpg'),
          require('../../assets/TattosAnimais/dragao.jpg'),
          require('../../assets/TattosAnimais/besouro.jpg'),
          require('../../assets/TattosAnimais/gatoSkate.jpg'),
          require('../../assets/TattosAnimais/coragem.jpg'),
          require('../../assets/TattosAnimais/cobra.jpg'),
        ]
      },
      {
        id: 2,
        nome: "Escrita",
        descricao: "Frases marcantes eternizadas com estilo e delicadeza",
        imagem: require('../../assets/Escrita/family.jpg'),
        slider: [
          require('../../assets/Escrita/family.jpg'),
          require('../../assets/Escrita/intensa.jpg'),
          require('../../assets/Escrita/escrita.jpg'),
        ]
      },
      {
        id: 3,
        nome: "Variados",
        descricao: "Explorações criativas com temas abstratos, simbólicos e visuais marcantes",
        imagem: require('../../assets/Variados/simbolos.jpg'),
        slider: [
          require('../../assets/Variados/simbolos.jpg'),
          require('../../assets/Variados/espada.jpg'),
          require('../../assets/Variados/mancha.jpg'),
          require('../../assets/Variados/flor.jpg'),
        ]
      }
    ]
  }
};

export default lista_produto;
