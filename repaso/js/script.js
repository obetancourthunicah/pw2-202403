document.addEventListener('DOMContentLoaded', ()=>{
    // alert("Segundo Alert");
    console.log("Tipos De Datos","");
    var intEdad = 18;
    let strEdad = "Mayor";
    const bolEsMayor = false;
    let resp = "1" + 2 + 3;

    console.log("resp", resp);
    
    // Obtener la referencia al evento submit del formulario

    const formDemo = document.getElementById('formDemo');
    formDemo.addEventListener('submit', (e)=>{
        e.preventDefault();
        const txtInt1 = document.getElementById('txtInt1');
        const txtInt2 = document.getElementById('txtInt2');

        const int1 = Number(txtInt1.value);
        const int2 = Number(txtInt2.value);

        const resp2 = int1 + int2;
        console.log("resp 2", resp2);
    });

    const arrColores = ['Azul','Verde','Rojo','Amarillo','Café'];
    const jsonTonalidad = {
        'transparente': 0,
        'translucido': 0.20,
        'palido': 0.50,
        'medioOpaco': 0.75,
        'bienOpaco': 0.95,
        'opaco': 1
    }
/*
    if (expresion) {

    } else if (expresion) {

    } else {

    }

    switch (variable) {
        case valor:
            expresions;
            break;
        case valor2:
            expresiones;
            break;
        default:
            expresiones;
            break;
    }

    for (let i = 0; i<100; i++) {

    }

    let varControl = 0;
    while (varControl < 10){
    
        varControl += 4;
    }

    let varControl2 = 0
    do {
    
        varControl++;
    } while (varControl < 100)



    */

    const resArreglo = arrColores.map(o=>`El color es: ${o}`);

    console.log(resArreglo);

});