//Declaración de variables
const buttonChallenge6 = document.getElementById("buttonChallenge6");

//Funcion
function challenge6() {
  const numero = [45, 23, 67, 89, 120, 56, 100];
  console.log("Los elementos del array son: " + numero);
  let producto = 0;
  for (let i = 0; i < numero.length; i++) {
    producto = numero[i] * 2
    console.log(numero[i] +" X 2 = "+ producto);
  }
}

//Ejecucion de funciones onclick
buttonChallenge6.onclick = function () {
    challenge6();
};