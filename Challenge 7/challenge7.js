//Declaración de variables
const buttonChallenge7 = document.getElementById("buttonChallenge7");

//Funcion
function challenge7() {
  const numero = [45, 23, 67, 89, 120, 56, 100];
  console.log("Los elementos del array son: " + numero);
  let acumulador = 0;
  numero.forEach((e) =>{
    if (e %2 === 0) {
        acumulador += e
    }
  })
  console.log(`La suma de todos los elementos del array es: ${acumulador}`);
}

//Ejecucion de funciones onclick
buttonChallenge7.onclick = function () {
    challenge7();
};

//276 es el resultado de las suma de todos los elementos