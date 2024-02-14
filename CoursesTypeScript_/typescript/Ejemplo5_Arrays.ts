//array de numeros 
let numeros = [1,2,3,4,5,6,7];
console.log(numeros);
//array de string
let cadenas = ['hola','como estas','bye']
console.log(cadenas);

//definiendo el tipo
let cadenas2:string[];
cadenas2 = ['estamos','en la practica','de arrays']
console.log(cadenas2);

// mezclando los tipos de datos primitivos
let mezcla:any[];
mezcla = ['hola',777,'este es un array de mexcla',1.5,'no recomendable']
console.log(mezcla);

//mezclano tipos de dato object (any) ya que contienen diferentes tipos de datos
let mezcla2:any[];

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

mezcla2 = [
    familia2,'ese fue un object',77,true
]
console.log(mezcla2);