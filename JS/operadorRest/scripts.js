function add (...numeros){
  console.log(numeros)
}

add(1, 2, 13, 31, 29, 30);

let nomes = ["Katharine", "Lucas", "Lucca"];

function addNomes(nomes, ...novosNomes){

  let novoConjunto = [
    ...nomes,
    ...novosNomes
  ];

  return novoConjunto;

}

let outrosNomes = addNomes(nomes, "Luiza", "Laura", "Alice");

console.log(outrosNomes)