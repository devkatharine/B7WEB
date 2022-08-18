//Promessa de que algo será realizado
//Usado para operações assíncronas
//carregar arquivo Leitura de uma API

function pegarTemperatura (){
  return new Promise (function(resolve, reject){
    console.log("Pegando temperatura...");

    setTimeout(function(){
      resolve('40 na sombra')
    }, 3000);
  })
}

//Promise

console.log("código antes!");

let temp = pegarTemperatura();

console.log("código durante!")

temp.then(function(resultado){
  console.log(`Temperatura: ${resultado}`)
});

temp.catch(function(error){
  console.log("Deu erro!");
});

console.log("Código depois.")