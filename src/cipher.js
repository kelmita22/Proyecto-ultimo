const cipher =
    {
    encode:
    
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
          },


    decode:
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
    }


    };

export default cipher;