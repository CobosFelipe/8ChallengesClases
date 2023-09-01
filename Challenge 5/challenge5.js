//Declaración de variables
const buttonChallenge5 = document.getElementById("buttonChallenge5");

//Funcion
function challenge5() {
  const numero = [45, 23, 67, 89, 120, 56, 100];
  console.log("Los elementos del array son: " + numero);
  let acumulador = 0;
  numero.forEach((n) => {
    acumulador += n
     console.log(acumulador);
  });
  console.log(`El total acumulado es ${acumulador}`);
}

//Ejecucion de funciones onclick
buttonChallenge5.onclick = function () {
  challenge5();
};
