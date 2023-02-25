window.addEventListener('load', () => { //p/escuchar q' se carga el documento HTMl.
    //-------------referencio variables p/buscar el display y los botones (se guargarn en un HTML collection y ds lo convierto a array).
    let display = document.getElementById('displayJS');
    let keypadButtons = document.getElementsByClassName('btn');
//-----------acá creo otra variable p/convertir el HTMLCollection a Array
    let keypadButtonsArray = Array.from(keypadButtons);

    //----Ahora sí puedo iterr en este nuevo Array creado
    keypadButtonsArray.forEach( (button) =>{
        //---a c/boton se le agrega un listener con el forEach para escuchar cuando el user hace click y lo imprime.
        button.addEventListener('click', ()=>{
            console.log(button.innerHTML);
        })
    })
});
