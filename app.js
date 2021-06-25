const Operacion = require('./calculator');
const fs = require('fs');
let moment = require('moment');
let num1 = 5;
let num2 = 10;

let myDate = new Date();
myDate = moment(myDate).format('YYYY-MM-DD_hh_mm_ss');
let rutaDeLog = "log_"+myDate+".txt";


let operacion = new Operacion(num1,num2);
logueo(`El resultado de la suma es: ${operacion.suma()}`);
logueo(`El resultado de la resta es: ${operacion.resta()}`);
operacion.setNum1(4);
operacion.setNum2(2);
logueo(`El resultado de la multiplicacion es: ${operacion.mult()}`);
logueo(`El resultado de la division es: ${operacion.div()}`);

function logueo(mensaje) {
    let horaActual = moment();
    let horaFormateada = horaActual.format('YYYY-MM-DD hh:mm:ss');
    let log = horaFormateada + " " + mensaje + "\n";
    fs.appendFile(rutaDeLog, log, (error) =>{
        if(error){
            throw error;
        }else {console.log('Archivo Creado')}
    })
}
