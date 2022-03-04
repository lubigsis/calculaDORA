/*funcion generica que recibe el valor del boton que se clickea, y se muestra en el display xq cada boton le pasa por parametro en el HTML el numero correspondiente */
/*cifra, q en principio es una cadena vacia, va adquieriendo los valores q se clickean, y los va concatenendo con los otros nros que se aprietan*/

let cifra= "";
function display_numeros(numero){

    document.getElementById("displayJS").value= cifra + numero;
    cifra= document.getElementById("displayJS").value;
}




/**dejar el siguiente codigo al final para que el display se sobreescriba con 0 cada vez que se actualice la pagina*/
document.getElementById("displayJS").value=0;