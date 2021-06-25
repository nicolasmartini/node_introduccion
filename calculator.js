
class Operacion {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    setNum1 = function (num1) {
        this.a = num1;
    };
    setNum2 = function (num2){
        this.b = num2;
    };
    suma = function() { 
        return this.a + this.b;
    };
    resta = function() { 
        return this.a - this.b;
    };
    mult = function() { 
        return this.a * this.b;
    };
    div = function() { 
        return this.a / this.b;
    };
    } //hacer vallidacion numer entero o decimales + division por 0

module.exports = Operacion;




