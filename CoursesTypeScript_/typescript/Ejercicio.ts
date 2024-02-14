//Ejercicio 1 calcular el numero fibonacci
function ejercicio1(numerofib:number) {
    let fib:number=numerofib;
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
}

//Ejercicio 2 devolucion de los primeros 100 numeros impares
function ejercicio2for() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
            console.log('Numero impar encontrado [', i, ']');
        }
    }
}

function ejercicio2while() {
    let w:number=0;
    while (w <= 100) {
        if (w%2!=0){
            console.log('Numero impar encontrado [', w, ']');
        }
        w++;
    }
}

function ejercicio2Dowhile() {
    let d:number=0;
    do{
        if (d%2!=0){
            console.log('Numero impar encontrado [', d, ']');
        }
        d++;
    }while(d <= 100);
}

function menu() {
    let op:number=2;
    switch(op){
        case 1:
            ejercicio1(8);
            break;
        case 2:
            ejercicio2for();
            break;
        case 3:
            ejercicio2while();
            break;
        case 4:
            ejercicio2Dowhile();
            break;
        default:
            console.log('Valor fuera de rango');
            break;
    }
}

menu();