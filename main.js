/*Escucha cuando se carga completamente el HTML, y dentro de este listener luego busco los botones y el display que guardé en esas constantes*/

window.addEventListener('load', () =>{
    const display = document.querySelector('.calculator-display');
    const keypadBtn = document.getElementsByClassName('btn'); 

    /*se crea otra constante que guarda el HTMLcolection de arriba y lo convierte en array para poder iterarlo*/
    const keypadBtnArray = Array.from(keypadBtn);

        /*se itera por cada btn del array que se creo*/
    keypadBtnArray.forEach((button) =>{

        /*a cada btn se le agrega un listener para saber cuando el user hace un click e imprime lo que dice cada btn*/
        button.addEventListener('click', () =>{
            console.log(button.innerHTML);
        })
    })
});

