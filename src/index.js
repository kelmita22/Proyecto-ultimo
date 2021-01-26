import cipher from './cipher.js';
//Llamada a mis botones de cifrado y descifrado para activar los resultados / Los cambié de ser eventos onclick.
let btnCifrar = document.getElementById('encodeText')
let btnDescifrar = document.getElementById('decodeText')

// funcion para validar los desplazamientos y el ingreso de texto
function encodeText() {
  const form = document.Cifrar;
  let sourceText = form.sourceText.value;
  let des_cif = Number(form.des_cif.value);
  //Texto ingresado en el textarea y resultado por el numero de desplazamiento elegido
  form.sourceText.value = [...sourceText].map(texto => cifrar(texto, des_cif)).join('');
  //Argumento
  cipher.encode(sourceText);
}
  //Click en boton para cifrar el texto ingresado en el textarea
  btnCifrar.addEventListener('click', encodeText);

  function cifrar(texto, des_cif) {
    let newText = "";
    for (let i = 0; i < texto.length; i++){
    if (texto.charCodeAt(i) >= 33 && texto.charCodeAt(i) <= 90){
        newText += String.fromCharCode(((texto.charCodeAt(i) - 65 + Number(des_cif)) % 26) + 65);
      } else if (texto.charCodeAt(i) >= 97 &&  texto.charCodeAt(i) <= 122) {
        newText += String.fromCharCode(((texto.charCodeAt(i) - 97 + Number(des_cif)) % 26) + 97);
      } else if (texto.charCodeAt(i===32)) {
        newText += "";
      }
      }
      return newText;
      };
  
  // funcion para descifrar
  function decodeText() {
    const form = document.Descifrar;
    let resultText = form.ResultText.value;
    let des_des = Number(form.des_des.value);
    
    form.ResultText.value = [...resultText].map(texto2 => descifrar(texto2, des_des)).join('');
    cipher.decode(resultText);
  }
  btnDescifrar.addEventListener('click', decodeText)

  function descifrar(texto2, des_des){
    let desText = "";
    for (let i = 0; i < texto2.length; i++){

       if (texto2.charCodeAt(i) >= 33 && texto2.charCodeAt(i) <= 90){
            desText += String.fromCharCode(((texto2.charCodeAt(i) - 90 - parseInt(des_des)) % 26) + 90);
        } else if (texto2.charCodeAt(i) >= 97 &&  texto2.charCodeAt(i) <= 122) {
            desText += String.fromCharCode(((texto2.charCodeAt(i) - 122 - parseInt(des_des)) % 26) + 122);
        } else if (texto2.charCodeAt(i===32)) {
          desText += " ";
        }
    }
    return desText;
};