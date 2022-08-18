function alertar (){
  console.log("Olá, tudo bem?")
}

let nome = "Katharine";
setTimeout(alertar, 2000); //recebe uma função e um tempo para ser executada.
let sobrenome = "Rabelo";
console.log(`Nome completo: ${nome} ${sobrenome}`) 

//Função executada depois do alcance de algum resultado.
//realizar algumas atividades e depois chamar a função de volta 

setTimeout (function(){
  console.log("depois de 3s")
}, 3000)