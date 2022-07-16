// DOM// 
// getElementById// 
document.getElementById("prueba1").innerHTML= "Esto es un elemento modificado con JS";
// getElementByTagName// 
let btn=document.getElementById("prueba2");
btn.addEventListener('click',() =>{
    let headings= document.getElementsByTagName('h1');
    alert(`La cantidad de h1 que hay son: ${headings.length}`);
});
// getElementByClassName// 
var divs = document.getElementsByClassName("prueba color");
divs[0].style.backgroundColor = "yellow";
// getElementByCss// 
document.querySelector(".azul").style.color = "red";
// getElementByHtml// 
var coleccion = document.getElementsByTagName("span");
var btn2 = document.getElementById("prueba4");
btn2.addEventListener("click", () => { 
coleccion[0].innerHTML = 'Soy la prueba'});
//Control de flujos// 
//If else// 
let checkbox= document.getElementById("prueba6")
checkbox.addEventListener("change", () => {
    if(checkbox.checked){
        document.getElementById("prueba5").style.color='red'
    }
    else{
        document.getElementById("prueba5").style.color='black'
    }
})
//Switches//
var btn4 = document.getElementById("prueba7");

switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miércoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case 6:
    day = "Sábado";
}

btn4.addEventListener("click", () => 
{ 
  alert(`Hoy es: ` + day);
}); 
//TRY CATCH//
function myFunction() {
    const message = document.getElementById("mensaje");
    message.innerHTML = "";
    let x = document.getElementById("input2").value;
    try { 
      if(x == "")  throw "Vacío";
      if(isNaN(x)) throw "No es un número";
      if(x > 100)   throw "Muy alto, menor a 100";
      if(x < 30)  throw "Muy bajo, mayor a 30";
    }
    catch(err) {
      message.innerHTML = "Error: " + err;}
    }
    //INTERACIONES//
        //CICLO FOR//

    let text = "";
var btn5=document.getElementById("prueba8");
btn5.addEventListener("click", () =>{
    for (let i = 0; i < 5; i++) {
  text += "Esto es un texto " + "<br>";
}

document.getElementById("demo").innerHTML = text;
})
    //WHILE//

let texto = "";
var btn6= document.getElementById("prueba9")
let i = 0;
btn6.addEventListener("click",() =>{
    while (i < 10) {
  text += "<br>El numero es " + i;
  i++;
}
document.getElementById("prueba10").innerHTML = text;
})
    //DO WHILE//

let textop = ""
let j = 0;
var btn7=document.getElementById("prueba11")
btn7.addEventListener("click", () =>{
    
do {
  textop += "<br>Estos numeros son " + j;
  j++;
}
while (j < 10);  

document.getElementById("prueba12").innerHTML = textop;
})

  //FUNCIONES//
  function Saludar(nombre, edad){
  
    this.nombre = nombre;
    this.edad = edad;  
    console.log("Hola mi nombre es: "+ this.nombre + " y tengo: " + this.edad + " años." );
  }
  //Operadores aritmeticos

function Sumar(){
  var suma =  Number(document.getElementById('valor1').value) + Number(document.getElementById('valor2').value);

  alert("Resultado: "+ suma);
}

function Restar(){
  var suma =  Number(document.getElementById('valor1').value) - Number(document.getElementById('valor2').value);

  alert("Resultado: "+ suma);
}
//Operadores lógicos

function AND(){
  alert(document.getElementById('chk1').checked&&document.getElementById('chk2').checked);
}

function OR(){
  alert(document.getElementById('chk1').checked||document.getElementById('chk2').checked);
}

function NOT(){
  alert(!(document.getElementById('chk1').checked&&document.getElementById('chk2').checked));
}

// MAth

function AlertE(){
  alert(Math.E);
}

function AlertRaiz(){
  alert(Math.SQRT2);
}

function AlertPI(){
  alert(Math.PI);
}
//date
var hoy = new Date();
function AlertToday(){
  alert(hoy);
}

function AlertDAY(){
  alert(hoy.getDay());
}
function AlertMonth(){
  alert(hoy.getMonth());
}
function AlertYear(){
  alert(hoy.getFullYear());
}
//Cadenas Literales
function NoCadenasLiterales() {
  console.log("línea 1 de cadena de texto" + 
  "línea de texto");
}

function CadenasLiterales() {
  console.log(`línea 1 de la cadena de texto
  línea texto`);
}
//Objeto String

function Mayuscula(){
  var text = document.getElementById("Mayus");
  text.innerHTML = text.innerHTML.toUpperCase();
}

//Arreglos

function PrintArray() {
  var mensaje = document.getElementById("arrayR");
  var nombres = ["Alfredo", "Juan"];

  mensaje.innerHTML = nombres;
}
//arreglos tipados

function PrintTArray() {
  var buffer = new ArrayBuffer(16);
  if (buffer.byteLength === 16) {
    alert("Sí, son 16 bytes");
  } else {
    alert("¡Oh no, es del tamaño incorrecto!");
  }
}