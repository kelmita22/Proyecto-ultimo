       import cipher from './cipher.js';
       // importamos el objeto cipher del documento cipher.js en donde almacenamos nuestras funciones
       //Uso de selectores de dom de ID para llamar los elementos de HTML
       let btnCifrar = document.getElementById('encodeText')
       let btnDescifrar = document.getElementById('decodeText')

       // funcion para validar el cifrado (desplazamiento,ingreso de texto y boton cifrado)
       function encodeText() {

        //uso elemment.name (form) para llamar a los componentes de mi formulario(document.Cifrar),textarea (newText) e input desplazamiento (des_cif));
        const form = document.Cifrar;
        let texto = form.newText.value.toUpperCase();
        let des_cif = parseInt(form.des_cif.value);
        form.newText.value = cipher.encode(des_cif, texto);
        }
        //El texto ingresado lo convierto a mayus y llamo la función de cifrado con el objeto cipher encode para que me dé el cifrado en el textarea.
        btnCifrar.addEventListener('click', encodeText);
        //activo un evento (addevent) para que al dar click se muestre en el cuadro de texto el cifrado
        
       //En el caso de descifrado hago el mismo proceso de cifrado llamando a los elementos correctos de HTML y cipher.js
        function decodeText() {
        const form = document.Descifrar;
        let des_des = parseInt(form.des_des.value);
        let resultText = form.resultText.value.toUpperCase();
        console.log(cipher.decode(resultText, des_des))
        form.resultText.value = cipher.decode(des_des, resultText);      
        }
        btnDescifrar.addEventListener('click', decodeText)

 