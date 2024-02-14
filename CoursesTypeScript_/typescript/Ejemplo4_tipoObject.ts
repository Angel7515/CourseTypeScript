// Tipos primitivos: string,number,boolean
// Object - objeto
console.log('******************** objeto 1 **********************************');
let casa = {
    calle: 'calle Candelaria',
    numero: 90,
    portero: false
}

//imprimir todo el objeto
console.log(casa);
// por atributo o categoria
console.log(casa.calle);

// inicializacion de un objeto no inicializado
console.log('******************** objeto 2 **********************************');
let carro: {
    modelo: string,
    nombre: string,
    kilometraje: number
} = {
    modelo: 'A7',
    nombre: 'Audi',
    kilometraje: 20000
}

console.log(carro);
console.log('******************** objeto 3 **********************************');

let familia= {
    nombreFam:'Gonzalez Gutierrez',
    padre: {
        nombre: 'Juan',
        apellido: 'Gonzalez',
        edad: '40'
    },
    madre:{
        nombre:'Eva',
        apellido:'Gutierrez',
        edad: 38
    },
    hijo:{
        nombre:'Jose',
        apellido:'Gonzalez Gutierrez',
        edad: 15
    }    
}
//acceder a sus atributos incluso a los objetos anidados dentro de este opbejo familia
console.log('Nombre de la Familia1',familia.nombreFam);
//objeto con :
console.log('******************** objeto 4 **********************************');

let familia2= {
    nombreFam1:'',
    padre: {
        nombre: 'Juan',
        apellido: 'Gonzalez',
        edad: '40'
    },
    madre:{
        nombre:'Eva',
        apellido:'Gutierrez',
        edad: 38
    },
    hijo:{
        juguete:{
            nombreJ:'carrito'
        },
        nombre:'Jose',
        apellido:'Gonzalez Gutierrez',
        edad: 15
    }    
}
//acceder a sus atributos incluso a los objetos anidados dentro de este opbejo familia
familia2.nombreFam1 = 'Gonzalez Gutierrez 2';
console.log('Nombre de la Familia2',familia2.nombreFam1);
console.log(familia2.madre.apellido);
console.log(familia2.hijo.juguete.nombreJ);
console.log('******************** objeto 5 **********************************');
/* let variablecarrito = carro;
console.log(variablecarrito); */
let familia3= {
    nombreFam:'Familia de 3',
    padre: {
        nombre: 'Juan',
        apellido: 'Gonzalez',
        edad: '40'
    },
    madre:{
        nombre:'Eva',
        apellido:'Gutierrez',
        edad: 38
    },
    hijo:{
        juguete:{
            variablecarrito:carro.modelo,
            variablecarrito1:carro.nombre,
            variablecarrito2:carro.kilometraje
        },
        nombre:'Jose',
        apellido:'Gonzalez Gutierrez',
        edad: 15
    }    
}
//acceder a sus atributos incluso a los objetos anidados dentro de este opbejo familia
console.log('Nombre de la Familia',familia3.nombreFam)
console.log(familia3)

