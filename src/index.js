import cipher from './cipher.js';
//Llamada a mis botones de cifrado y descifrado para activar los resultados
let btnCifrar = document.getElementById('encodeText')
let btnDescifrar = document.getElementById('decodeText')

console.log(cipher);
// Mi alfabeto en Mayusculas sera la constante en el proyecto para que el resultado salga en mayuscula.
const alphabet = ['A','B','C','D','E','F',
                  'G','H','I','J','K','L',
                  'M','N','O','P','Q','R',
                  'S','T','U','V','W','X',
                  'Y','Z'];
// funcion para validar los desplazamientos y el ingreso de texto
const encodeText=()=> {
    
    const form = document.Cifrar;
    let sourceText = form.sourceText.value;
    let des_cif = Number(form.des_cif.value);
    //Texto ingresado en el textarea y resultado por el numero de desplazamiento elegido
    cipher.encode(sourceText)

    des_cif = (alphabet.length +des_cif) % alphabet.length;

    form.sourceText.value = [... sourceText ].map(texto =>
    cifrar(texto,des_cif)).join('');
  }
    //Click en boton para cifrar el texto ingresado en el textarea
    btnCifrar.addEventListener('click', encodeText)

// funcion para cifrar
function cifrar(texto, des_cif) {
  //Mi alfabeto el mayusucal
  let include = alphabet.includes( texto .toUpperCase());
 
  if (include){
   let position = alphabet.indexOf( texto.toUpperCase());
   let newPosition = (position +des_cif) % alphabet.length;

   return alphabet[newPosition];
 }
 else
 return texto;
}
// funcion para descifrar
const decodeText=()=> {
    const form = document.Descifrar;
    let des_des = Number(form.des_des.value);
    let resultText = form.ResultText.value;
    cipher.decode (resultText)

    des_des = (alphabet.length -des_des) % alphabet.length;

    form.ResultText.value = [... resultText ].map(texto =>
    cifrar(texto,des_des)).join('');
  }
  btnDescifrar.addEventListener('click', decodeText)



