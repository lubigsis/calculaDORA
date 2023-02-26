
window.addEventListener('load', () => { //p/escuchar q' se carga el documento HTMl.
    //-------------referencio variables p/buscar el display y los botones (se guardan en un HTML collection y dsp lo convierto a array).
    let display = document.getElementById('displayJS');
    let keypadButtons = document.getElementsByClassName('btn');
//-----------acá creo otra variable p/convertir el HTMLCollection a Array
    let keypadButtonsArray = Array.from(keypadButtons);

    //----Ahora sí puedo iterar en este nuevo Array creado
    keypadButtonsArray.forEach( (button) =>{
        //---a cada boton se le agrega un listener con el forEach para escuchar cuando el user hace click y lo imprime.
        button.addEventListener('click', ()=>{

            calculadora(button, display);//se le pasa el btn q' se presionó y el display
        })
    })
});

/*---------------------------------------------------FUNCIONES------------------------------------------------------*/
//dependiendo del btn q' se presione, se va a tomar una acción predetermidada.
function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

//la palabra reservada 'eval' toma el string de la operación (lo q' marcamos en el display) y lo resuelve
function calcular(display){
    display.innerHTML = eval(display.innerHTML); //cambia el contenido del display por la resolución
}

//función q' borra el cero inicial (si existe) y le agrega al innerHTML del display, el innerHTML del btn q´el user apretó
function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
//lo de abajo pone cada n° q' se apriete uno al lado del otro
        display.innerHTML += button.innerHTML;

    
}

function borrar(display){
    display.innerHTML = 0;
}