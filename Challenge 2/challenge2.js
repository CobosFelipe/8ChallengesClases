const buttonChallenge2 = document.getElementById("buttonChallenge2");

//Funcion
function challenge2() {
  let frutas = ["Manzana", "Banana", "Naranaja", "Sandia", "Cereza"];
  console.log(`Los elementos del Array son: ${frutas}`);
  frutas.forEach((f) => {
    console.log(f)
  }) 
}

//Ejecucion de funciones onclick
buttonChallenge2.onclick = function () {
    challenge2();
};
