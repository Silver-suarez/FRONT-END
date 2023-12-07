function SumarDosNumeros() { 
    var x = 2;
    var y = 5;
    var suma = x + y;
    console.log("el resultado es:" + suma);
}
   
   

// alert es lo primero que se debe hacer para confirmar que js esta funcionando 

function creardiv(){
    var newdiv = document.createElement("div");
    var texto= document.createElement("h1");
    texto.textContent="Hola mundo";
    newdiv.appendChild(texto);
    document.body.appendChild(newdiv);
}

function saludar(){
    alert("Hola!!");
}

// var= se puede redeclarar y cambiar su valor.
// leto = NO se puede redeclarar pero si cambiar su valor.
//const= NO se puede redeclarar y NO se puede cambiar su valor.

const nombre= "david"
console.log();

const MESES= 12;
const DIAS_MES=30;

let modoOscuroActivo = !modoOscuroActivo;
let DarckClass="";
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
if(modoOscuroActivo){
    DarckClass= "modo-activo";

}
