// //ambito global
// var nombre = "Juan"
// let nombre = "Pedro"
// const nombnreConst = ["Jesus", "Maria","Jose"];

// {
//     var nombreVar = "Juan";
//     nombreLet = "Pedro";
//     nombreConst.push("amgel");
//     //ambito local
//     document.write("--------ambito local-------<br>");
//     document.write("nombre var:"+nombreVar+ "<br>");
//     document.write("nombre let:"+nombreLet+"<br>");
//     document.write("nombre const:"+nombreConst);


// }
// //ambito global
// document.write("----------ambito global");
// document.write("nombre var:"+nombreVar+"<br>");
// document.write("nombre let:"+nombreLet+"<br>");

//////////////////////////////////////////////////////////
//FUNCION ANONIMA NORMAL
// (function(nombre){
//     document.write("hola"+nombre+"<br>");
// }) ("Maria");
// //FUNCION FLECHA
// let saludarConFlecha = ( nombre ) => document.write("hola"+nombre+"con flecha <br>");
// saludarConFlecha ("Pedro");
// //FUNCION DE FLECHA ANONIMA
// ((nombre) =>{
//     document.write("hola"+nombre+"con flecha anonima <br>");
// }) ("ANGEL");
/////////////////////////////////////////////////////////////
// FUNCION CALLBACK
// function saludar (nombre){
//     document.write("hola"+nombre+"<br>");
    
// }

// //funcion call back
// function callBack (nombre, saludar, despedir){
//     saludar (nombre);
//     despedir (nombre);
// }
// // llamar callback
// callBack("JESUS", saludar, ()=>{
//     document.write("chao......")
// });
// let nombres = ["Juan", "Pedro", "Ana"];
// nombres.forEach((n,i)=>{
//     document.write("hola"+n+"pos:"+i+"<br>")
// });
/////////////////////////////////////////////////////
let boton = document.querySelector(".btn");
let div = document.querySelector("#div");

boton.addEventListener("click", ()=>{
    if(div.style.display == "block"){
        div.style.display == "None"
    }
    else{
        div.style.display == "block"
    }
});
console.log(boton);
