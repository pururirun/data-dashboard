/*Menú despegable*/
var boton = document.getElementById("btn");

function showMenu() {
  var menu = document.getElementById("opcsMenu");

  if (menu.classList.contains("disabledMenu")){
    menu.classList.remove("disabledMenu");
    menu.classList.add("enabledMenu");
  }
  else {
    menu.classList.remove("enabledMenu");
    menu.classList.add("disabledMenu");
  }
}
boton.addEventListener("click", showMenu);
/*Menú despegable fin*/






// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
