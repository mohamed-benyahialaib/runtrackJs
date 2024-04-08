var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

var nombreClics = 0;

button.addEventListener("click", addOne);

function addOne() {
  nombreClics++;
  
  compteur.textContent = nombreClics;
}