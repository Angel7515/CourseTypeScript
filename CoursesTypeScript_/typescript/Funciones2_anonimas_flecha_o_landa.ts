let sumarAnonima = (x: number, y: number): number => {
    return x + y;
}

let fibo = (vecessucecion: number):number => {
    let fib: number = vecessucecion;
    let resultado: number = 0;
    function fibonacci(numero: number) {
        if (numero < 2) {
            return numero;
        } else {
            let resultado1: number = fibonacci(numero - 1);
            let resultado2: number = fibonacci(numero - 2);
            return resultado1 + resultado2;
        }
    }

    resultado = fibonacci(fib);
    console.log('El numero fibonacci de [', fib, '] es = ', resultado);
    return resultado;
}

var num1:number = 15;
var num2:number = fibo(num1);
console.log(sumarAnonima(num1,num2));