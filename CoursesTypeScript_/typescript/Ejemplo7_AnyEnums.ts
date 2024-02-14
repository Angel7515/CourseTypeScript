let cosas: any[]=['Aguila',3,-4,.56,true,null,undefined]
console.log(cosas);

//enums

enum monedas{euro,dolar,mxn,};
enum animal{mamifero,anfibio,reptil,ave,pez};

let gato = {
    especie:'cualquiera',
    edad: 5,
    tipo: animal.mamifero
}
console.log(gato.tipo);