interface animal{
    nombre:string,
    edad: number,
    datos():void
}

class perro implements animal{
    nombre:string;
    edad:number;
    datos():void{
        console.log('mi perro es '+this.nombre+' tiene una edad de '+this.edad+' Años');
    }
}

let miperro = new perro();
miperro.nombre = 'solovino';
miperro.edad = 7;
miperro.datos();

type animal2 = {
    nombre:string,
    edad: number,
    datos():void
}

let jirafa:animal2={
    nombre:'jirafa bebe',
    edad:2,
    datos():void{
        console.log('mi jirafa es '+this.nombre+' tiene una edad de '+this.edad+' Años');
    }
}

jirafa.datos();