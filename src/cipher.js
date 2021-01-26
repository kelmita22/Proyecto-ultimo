const cipher =
    {
    encode: (texto, des_cif)=> {

            if ( des_cif == "" || des_cif == 0|| des_cif == null) {
            throw new TypeError("numero invalido");
           }
            else if (texto == "" || texto === 0 || texto == null) { 
            throw new TypeError('Mensaje invalido');
           }

            let newText = "";
            for (let i = 0; i < texto.length; i++){
            let ascii = texto.charCodeAt(i);
            if (ascii >= 65 && ascii <= 90){
            newText += String.fromCharCode(((ascii - 65 + parseInt(des_cif)) % 26) + 65);
           }
           }
           return newText;
           },

        decode: (texto2, des_des)=>{
          console.log(texto2, des_des);
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