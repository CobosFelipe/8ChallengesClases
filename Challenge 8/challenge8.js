//Declaración de variables
const buttonChallenge8 = document.getElementById("buttonChallenge8");

//Funcion
function challenge8() {
  const numero = [45, 23, 67, 89, 120, 56, 100];
  console.log("Los elementos del array son: " + numero);
  let i = 0;
  while (i < numero.length) {
    ++i;
    if (numero[i] >= 50) {
      console.log(`El primer elemento del array mayor a 50 es: ${numero[i]}`);
      return
    }
  }
}

//Ejecucion de funciones onclick
buttonChallenge8.onclick = function () {
  challenge8();
};
