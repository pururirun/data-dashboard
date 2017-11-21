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

/*Menú despegable 2*/
var boton2 = document.getElementById("btn2");

function showMenu2() {
  var menu2 = document.getElementById("opcsMenu2");

  if (menu2.classList.contains("disabledMenu2")){
    menu2.classList.remove("disabledMenu2");
    menu2.classList.add("enabledMenu2");
  }
  else {
    menu2.classList.remove("enabledMenu2");
    menu2.classList.add("disabledMenu2");
  }
}
boton2.addEventListener("click", showMenu2);

/*Menú despegable 4*/
var boton4 = document.getElementById("btn4");

function showMenu4() {
  var menu4 = document.getElementById("opcsMenu4");

  if (menu4.classList.contains("disabledMenu4")){
    menu4.classList.remove("disabledMenu4");
    menu4.classList.add("enabledMenu4");
  }
  else {
    menu4.classList.remove("enabledMenu4");
    menu4.classList.add("disabledMenu4");
  }
}
boton4.addEventListener("click", showMenu4);
/*Menú despegable 4 fin*/




// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
