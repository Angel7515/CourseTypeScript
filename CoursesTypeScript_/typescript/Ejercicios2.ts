console.log('Welcome to back spectrum');
function saludar():void{
    console.log('hello my name is TypeScript\n this is a regard');
}
saludar();

let despedida = (name:string):string =>{
    return 'good bye ' + name;
}
console.log(despedida('Miguel Angel'));


//objetos 

let puerta:{
    material: string,
    tipo_chapa: string,
    altura: number,
    anchura: number 
}={
    material:'',
    tipo_chapa:'',
    altura: 0,
    anchura: 0
};

let casa:{
    direccion: string,
    telefono: string,
    n_cuartos: number,
    principal_puerta: typeof puerta
}={
    direccion:'',
    telefono:'',
    n_cuartos:0,
    principal_puerta: puerta
};


casa.direccion = 'direccion 1';
casa.telefono = '654621351654';
casa.n_cuartos = 5;
casa.principal_puerta.material = 'madera';
casa.principal_puerta.tipo_chapa = 'metal manija';
casa.principal_puerta.altura = 2.50;
casa.principal_puerta.anchura = 1.20;
console.log(casa);