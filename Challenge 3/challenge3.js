const buttonChallenge3 = document.getElementById("buttonChallenge3");

function challenge3() {
  // Pedimos el numero de operation entre 1 y 4  y lo convertimos a entero
  let operation = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
    )
  );
  // Validamos que la operación no sea errada o mayor 4 o menor que 1
  // isNan() nos permite validar el el valor de la variable es un NaN osea que no ingresaron numeros
  while (operation > 4 || operation < 1) {
    return alert("Opcion invalida, favor ingresar valor entre 1 y 4");
    let operation = parseInt(
        prompt(
          "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
        )
      );
  }
//   if (isNaN(operation) || operation > 4 || operation < 1) {
//     return alert("Opcion invalida, favor ingresar entre 1 y 4"); // return nos devuelve el alert y no permite seguir ejecutando el código

  // Pedimos los numeros
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let result = 0;

  // Validamos que los numeros no sean errados
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo numeros");
  }
  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

//Ejecucion de funciones onclick
buttonChallenge3.onclick = function () {
    challenge3();
};