// // **************************************************
// //esci da while quando incontri una certa condizione // FUNZIONE DA FARE
// // questo devo usare SIA PER QUANDO UTENTE "SBAGLIA" che QUANDO CONTROLLO IL NUMERO COINCIDE O MENO CON LA LISTA ARRAI

// var i = 0;
// var esci = false;
//
//
//
// while (esci == false){
//
//   var input = parseInt(prompt('numero'));
//   if (input == 4){
//     esci = true;
//   } else {
//   }
//
// }
// console.log(esci);
//
// //**************************************************
// // crea array di 16 numeri dove numeri non si devono ripetere
//
var arrayNumGen = [];

while(arrayNumGen.length < 16) {

  var numeroRandom = Math.ceil(Math.random()*100);
  var incluso = includesss(numeroRandom, arrayNumGen);

  if(incluso == false) {
    arrayNumGen.push(numeroRandom);
  }
}
console.log(arrayNumGen);


// //**************************************************
// creare funzione INCLUDE O NO


function includesss(numeroRandom, array) {
  var uguali = false;
  var i = 0;
  while(uguali == false && i < array.length){
    if (array[i] == numeroRandom)
    uguali = true;
    i++;
  }
return uguali;
}

//**************************************************
// UTENTE inserisce 100 - 16 volte max il numero non puo inserire lo stesso numero


var punti = 0;
var ar = [];
// var esci = false;
while (ar.length < 84 && includesss(utenteN, arrayNumGen) != true){


  var utenteN = parseInt(prompt('inserisci un numero tra 1 e 100'));
  var incluso1 = includesss(utenteN, ar);
  if (incluso1 != true && includesss(utenteN, arrayNumGen) != true && (utenteN > 0 && utenteN < 100)) {
    ar.push(utenteN);
    console.log(utenteN);
    // esci = true;
  }
  punti++;
  console.log(includesss(utenteN, arrayNumGen));

}
console.log(ar);
console.log('Tuoi punti: ' + (punti - 1));
