const cipher =
    {
              //Realizo la función dentro de la propiedad encode junto a sus parametros.
              encode: (des_cif , texto)=> {
              /*Para pasar los errores del test hago una instrucción usando operador lógico or usando un costructor para crear un error cuando 
              no se puede realizar una accion. */
              if ( des_cif == "" || des_cif == 0 || des_cif == null) {throw new TypeError("numero invalido");}
              else if (texto == "" || texto === 0 || texto == null) {throw new TypeError("Mensaje invalido");}
        
              let newText = "";
              /* 1. Para codificar utilizo un ciclo for para obtener el código de varios caracteres a la vez 
              dentro de la cual coloco una funcion de cadenas length la que me permite obtener el número de 
              caracteres dentro de un string*/
              /* 2. Creo una variable para obtener un caracter en la posicion especificada del texto */
              /* 3. En este caso sólo estoy tomando caracteres del alfabeto en mayuscula desde la ubicación 65 a 90 (A-Z) con un valor operador
              lógico and*/
              /*4 Para el cifrado primero convierto mis valores unicode en caracteres  */
              /*1*/ for (let i = 0; i < texto.length; i++){
              /*2*/ let ascii = texto.charCodeAt(i);
              /*3*/ if (ascii >= 65 && ascii <= 90){
              /*4*/ newText += String.fromCharCode(((ascii - 65 + parseInt(des_cif)) % 26) + 65);
           }
           }
           return newText;
           },

        decode: (des_des ,texto2)=>{
          
           if ( des_des == "" || des_des == 0|| des_des == null) {
            throw new TypeError("numero invalido");
           }
            else if (texto2 == "" || texto2 === 0 || texto2 == null) { 
            throw new TypeError('Mensaje invalido');
           }
        let desText = "";
        for (let i = 0; i < texto2.length; i++){
        let ascii_1 = texto2.charCodeAt(i);
        if (ascii_1 >= 65 && ascii_1 <= 90){
        desText += String.fromCharCode(((ascii_1 - 90 - des_des) % 26) + 90);
        }
    }
    return desText;
     }
    }
export default cipher;