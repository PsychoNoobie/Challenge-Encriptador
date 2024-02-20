let autolimpiar;

function encriptar() {
    let texto = document.getElementById("txt").value;
    let tituloalrt = document.getElementById("titulo-alerta");
    let parrafo = document.getElementById("parrafo");
    let image = document.getElementById("imagen");
  
    console.log(texto);

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
  if (texto.length != 0) {
    document.getElementById("txt").value = textoCifrado;
    tituloalrt.textContent = 'Texto encriptado con exito';
    parrafo.textContent = "";
    image.src = "./img/encry.png";
   


  } else {
    image.src = "./img/notfound.png";
    tituloalrt.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    Swal.fire({
      title: "Ooops",
      text: "No se ha ingresado ningun texto",
      icon: "error",
      confirmButtonText: 'Entendido'
      
    });
  }

}
  


  function desencriptar() {
    let texto = document.getElementById("txt").value;
    let tituloalrt = document.getElementById("titulo-alerta");
    let parrafo = document.getElementById("parrafo");
    let image = document.getElementById("imagen");
  
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (texto.length != 0) {
    document.getElementById("txt").value = textoCifrado;
    tituloalrt.textContent = 'Texto desencriptado con exito';
    parrafo.textContent = "";
    image.src = "./img/des.png";
    textoEncriptado = false;


  } else {
    image.src = "./img/notfound.png";
    tituloalrt.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Ooops!", "Debes ingresar un texto", "warning");
  }

}


// Pendiente a modificar el tiempo de ejecucion
//Cada vez que el usuario haga click, el timesetout
//Debera reiniciarse
function limpiartexto() {
  setTimeout(function limpiartexto(){
    document.querySelector ('#txt').value = '';
}, 20000);
recargarpagina();

}

function recargarpagina() {
  let tituloalrt = document.getElementById("titulo-alerta");
  let parrafo = document.getElementById("parrafo");
  let image = document.getElementById("imagen");

  setTimeout(function recargarpagina(){
    tituloalrt.textContent = 'Bienvenidos';
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    image.src = "./img/Welcome.png";
}, 20000);
}