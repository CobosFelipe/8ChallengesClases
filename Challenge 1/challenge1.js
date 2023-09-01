//Declaración de variables
const buttonChallenge1 = document.getElementById("buttonChallenge1");

//Funcion
function challenge1() {
  const frutas = ["Manzana", "Banana", "Naranaja", "Sandia", "Cereza"];
  console.log(`Los elementos del Array son: ${frutas}`);
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
}

//Ejecucion de funciones onclick
buttonChallenge1.onclick = function () {
    challenge1();
};
