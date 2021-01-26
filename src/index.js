import cipher from './cipher.js';
//Llamada a mis botones de cifrado y descifrado para activar los resultados / Los cambié de ser eventos onclick.
let btnCifrar = document.getElementById('encodeText')
let btnDescifrar = document.getElementById('decodeText')

// funcion para validar los desplazamientos y el ingreso de texto
function encodeText() {
  try {
        const form = document.Cifrar;
        let sourceText = form.sourceText.value;
        let des_cif = Number(form.des_cif.value);
        //Texto ingresado en el textarea y resultado por el numero de desplazamiento elegido
        form.sourceText.value = [...sourceText].map(texto => cifrar(texto, des_cif)).join('');
        //Argumento
        cipher.encode(sourceText);
    
  } catch (error) {

    console.log(error);
    
  }
  
}
  //Click en boton para cifrar el texto ingresado en el textarea
  btnCifrar.addEventListener('click', encodeText);

  
  
  // funcion para descifrar
  function decodeText() {
    try {
    const form = document.Descifrar;
    let resultText = form.ResultText.value;
    let des_des = Number(form.des_des.value);
    
    form.ResultText.value = [...resultText].map(texto2 => descifrar(texto2, des_des)).join('');
    cipher.decode(resultText);
      
    } catch (error) {
     
     console.log(error);
    }
    
    }
    btnDescifrar.addEventListener('click', decodeText)

 