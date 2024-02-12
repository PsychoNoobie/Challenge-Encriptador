function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloalrt = document.getElementById("titulo-alerta");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloalrt.textContent = 'Texto encriptado con exito';
    parrafo.textContent = "";
   // muñeco.src = "./img/encriptado.jpg";


  } else {
    //muñeco.src = "./img/muñeco.png";
    tituloalrt.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }


}
  


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloalrt = document.getElementById("titulo-alerta");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloalrt.textContent = 'Texto encriptado con exito';
    parrafo.textContent = "";
   // muñeco.src = "./img/encriptado.jpg";


  } else {
    //muñeco.src = "./img/muñeco.png";
    tituloalrt.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }

}