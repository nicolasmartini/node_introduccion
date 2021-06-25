//1ª se instala el paquete readline-sync () - permite leer de alguna fuente de datos como en la terminal en este caso (sicrono)
const interface = require ('readline-sync');

// let nombre = interface.question('escribe tu nombre: ') //permite imprimir texto + capturar lo que se escriba en consola
// console.log('hola' + ' ' + nombre);

let response = '';
// const fs = require('fs');
//do while, para que el usuario pueda seleccionar "salir"

do {
    console.log('1.- Suma');
    console.log('2.- Resta');
    console.log('3.- Multiplicación');
    console.log('4.- División');
    console.log('5.- Salir');
    response = interface.question('Seleccionar por numero indicado el tipo de operacion matematica a realizar: ')
    if (response != '5') {
        const fisrtNumber = interface.question('Ingrese el primer numero: '); //question devuelve string, hay que convertirlo a entero
        const secondNumber = interface.question('Ingrese el segundo numero: ');
        
        //switch para las distintas opciones que el usuario haya ingresado
        switch(response){
            case '1': let sumResult = parseInt(fisrtNumber) + parseInt(secondNumber);
            console.log(`El resultado de la suma es: ${sumResult}`);
            
            break;
            case '2': let restResult = parseInt(fisrtNumber) - parseInt(secondNumber);
            console.log(`El resultado de la resta es: ${restResult}`);
            break;
            case '3': let multResult = parseInt(fisrtNumber) * parseInt(secondNumber);
            console.log(`El resultado de la multiplicacion es: ${multResult}`);
            break;
            case '4': let divResult = parseInt(fisrtNumber) / parseInt(secondNumber);
            console.log(`El resultado de la division es: ${divResult}`);
            break;
            default:
                break; //por si selecciona alguna opción que no esté
        }
        response = interface.question('PRESIONE "ENTER" PARA CONTINUAR')
    }
} while (response != '5');