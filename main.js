/*funcion generica que recibe el valor del boton que se clickea, y se muestra en el display xq cada boton le pasa por parametro en el HTML el numero correspondiente */
/*cifra, q en principio es una cadena vacia, va adquieriendo los valores q se clickean, y los va concatenendo con los otros nros que se aprietany mostrando en el display*/

let cifra= "";
let acumulado= 0;
let primeraOperacion= true;
let sumar= false;
let restar= false;

function display_numeros(numero){

    document.getElementById("displayJS").value= cifra + numero;
    cifra= document.getElementById("displayJS").value;
}

/**para que vaya apareciendo de a una vez los numeros al presionar el boton de sumar. La variable cifra lo va acumulando */

 //primero almaceno y luego reseteo la variable cifra

function suma(){  
    
    if (restar){
        acumulado= acumulado - parseInt(cifra);
        document.getElementById("displayJS").value= acumulado;
    }else{
        acumulado= acumulado + parseInt(cifra);
        document.getElementById("displayJS").value= acumulado;
}
    cifra="";
    sumar=true;
    restar= false;
}

/**funcion resta; si lo ultimo que hiciste fue una resta, sumale a acumulado lo que hay en el display */

function resta(){

    if(primeraOperacion==false){

    if (sumar){
        acumulado=acumulado + parseInt(cifra);
        document.getElementById("displayJS").value= acumulado;

    }else{
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("displayJS").value= acumulado;
    }
}else{
    acumulado= parseInt(cifra);
    primeraOperacion= false;
}
        cifra="";
        sumar= false;
        restar= true;
    }

/**detectar que operaciones se quiere realizar mediante el if.  */
//si sumar es true => if (sumar) es igual a: if (sumar==true)
//luego de hacer la operacion correspondiente, en acumulado almaceno lo que hay en el display.
//tmb reseteo cifra con 0 asi el nro que aparece en pantalla no interfiere con el cambio de operacion

function resultado(){
    if (sumar){

        document.getElementById("displayJS").value= acumulado + parseInt(cifra);

    }else if(restar){

        document.getElementById("displayJS").value= acumulado - parseInt(cifra);
    }

    acumulado= parseInt(document.getElementById("displayJS").value);
    cifra= 0;
}





/**dejar el siguiente codigo al final para que el display se sobreescriba con 0 cada vez que se actualice la pagina*/
document.getElementById("displayJS").value=0;