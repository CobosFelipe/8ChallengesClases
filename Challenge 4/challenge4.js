//Declaración de variables
const buttonChallenge4 = document.getElementById("buttonChallenge4");

//Funcion
function challenge4() {
  const numero = [45, 23, 67, 89, 120, 56, 100];
  console.log("Los elementos del array son: " + numero);
  let max = 0;
  for (let i = 0; i < numero.length; i++) {
    if (max < numero[i]) {
        max = numero[i]
    }
  }
  console.log("El valor mas grande del Array es: "+ max);
}

//Ejecucion de funciones onclick
buttonChallenge4.onclick = function () {
    challenge4();
};
