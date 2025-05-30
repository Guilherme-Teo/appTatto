const lista_produto = {
    itens: {
      titulo: "Veja abaixo nossos produtos",
      lista: [
        {
          id: 1,
          nome: "Dragão Arco-íris",
          descricao: "Tatuagem de dragão colorido",
          imagem: require('../../assets/dragao.jpg'),
          slider:[
            require('../../assets/TattosAnimais/dragao.jpg'),
            require('../../assets/TattosAnimais/besouro.jpg'),
            require('../../assets/TattosAnimais/gatoSkate.jpg'),
          ]
        },
        {
          id: 2,
          nome: "Besouro",
          descricao: "Tatuagem de besouro",
          imagem: require('../../assets/besouro.jpg'),
          slider:[
            require('../../assets/TattosAnimais/besouro.jpg'),
            require('../../assets/TattosAnimais/dragao.jpg'),
            require('../../assets/TattosAnimais/gatoSkate.jpg'),
          ]
        },
        {
          id: 3,
          nome: "Gato Skatista",
          descricao: "Tatuagem de gato fazendo manobra em um skate",
          imagem: require('../../assets/gatoSkate.jpg'),
          slider:[
            require('../../assets/TattosAnimais/gatoSkate.jpg'),
            require('../../assets/TattosAnimais/dragao.jpg'),
            require('../../assets/TattosAnimais/besouro.jpg'),
          ]
        }
      ]
    }
  };

  export default lista_produto;  