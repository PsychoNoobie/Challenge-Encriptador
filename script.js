//Funcion Encriptar
function encriptar() {
  //Se llaman las variables y se empieza a extraer su valor y pasarla a las variables locales
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
  
      //Validamos que el texto no este vacio. Si tiene contenido, mostrara el codigo desencriptado y actualizara las imagenes y textos seleccioandos.
  if (texto.length != 0) {
    document.getElementById("txt").value = textoCifrado;
    tituloalrt.textContent = 'Texto encriptado con exito';
    parrafo.textContent = "";
    image.src = "./img/encry.png";
   

    //Si el texto esta vacio. actualizamos las imagenes y texto seleccionados con la informacion establecida y creamos un alert personalizado
    //Que nos muestra que no hay texto por desencriptar
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
  

//Funcion Desencriptar
  function desencriptar() {
    //Se llaman las variables y se empieza a extraer su valor y pasarla a las variables locales
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
  
    //Validamos que el texto no este vacio. Si tiene contenido, mostrara el codigo desencriptado y actualizara las imagenes y textos seleccioandos.
  if (texto.length != 0) {
    document.getElementById("txt").value = textoCifrado;
    tituloalrt.textContent = 'Texto desencriptado con exito';
    parrafo.textContent = "";
    image.src = "./img/des.png";
    

    //Si el texto esta vacio. actualizamos las imagenes y texto seleccionados con la informacion establecida y creamos un alert personalizado
    //Que nos muestra que no hay texto por desencriptar
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

//Funcion de Copiar El texto
function copiartexto() {
  //Se llaman las variables y se empieza a extraer su valor y pasarla a las variables locales
  let texto = document.getElementById("txt").value;
  let tituloalrt = document.getElementById("titulo-alerta");
  let parrafo = document.getElementById("parrafo");
  let image = document.getElementById("imagen");

  if (texto.length != 0) {
    
    //Se implementa un try catch para controlar los errores.
  try {
    tituloalrt.textContent = 'Texto copiado con exito';
    parrafo.textContent = "";
    image.src = "./img/Copiado.png";
    navigator.clipboard.writeText(texto);
  } catch (error) {
    console.log(error)
  }
    

    //Si el texto esta vacio. actualizamos las imagenes y texto seleccionados con la informacion establecida y creamos un alert personalizado
    //Que nos muestra que no hay texto por desencriptar
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

