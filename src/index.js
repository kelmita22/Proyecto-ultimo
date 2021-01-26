import cipher from './cipher.js';
//Llamada a mis botones de cifrado y descifrado para activar los resultados / Los cambié de ser eventos onclick.
let btnCifrar = document.getElementById('encodeText')
let btnDescifrar = document.getElementById('decodeText')
// funcion para validar los desplazamientos y el ingreso de texto
function encodeText() {

        //const form = document.Cifrar;
        const form = document.Cifrar;
        let texto = form.newText.value.toUpperCase();
        let des_cif = parseInt(form.des_cif.value);
        form.newText.value = cipher.encode(texto, des_cif);
        }
        btnCifrar.addEventListener('click', encodeText);

  // funcion para descifrar
  function decodeText() {
          /*alert('funciona')*/
          const form = document.Descifrar;
          let des_des = parseInt(form.des_des.value);
          /*console.log(form.des_des.value)*/
          let resultText = form.resultText.value;
          /*console.log(resultText)*/
          console.log(cipher.decode(resultText, des_des))
          form.resultText.value = cipher.decode(resultText, des_des);      
          }
    btnDescifrar.addEventListener('click', decodeText)
  
 