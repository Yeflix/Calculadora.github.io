document.getElementById("display").addEventListener("keypress", function(event) {
  let regex = new RegExp("^[0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]+$");
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

document.getElementById("display").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(calcular()); 
  } 
  
});
document.getElementById("inputs").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(event)
   
  }
});
function numeroCalculo (numero) {
    display.value += numero 
}

function operadores(operador) {
    display.value += operador

}
function calcular() {
    display.value = eval(display.value);
  }

function borrarOperacion(borrar) {
    display.value = borrar
  }
function borrarCaracter() {
  let inputDisplay = display.value;
      display.value = inputDisplay.substring(0, inputDisplay.length - 1);
    }