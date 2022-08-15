let numeros = [1, 2, 3, 4]

let outros = [...numeros, 5, 6, 7, 8]

console.log(outros)

let info = {
  nome: 'Katharine',
  sobrenome: 'Rabelo',
  idade: 29
}

let novaInfo = {
  ...info,
  cidade: "Gama",
  estado: "DF",
  pais: "Brasil"
};

console.log(novaInfo)

// utiliza-se os "..." para adicionar mais itens 

function addInfo(info){
    let newInfo = {
      ...info,
      status: 0,
      token: 'sdiusaassu'
    };
    return newInfo
}

console.log (addInfo ({profissao: "dev", tecnologia: "JS" }));
