//mecanismo para herencia
interface animal{
    nombre:string,
    edad:number,
    datos():void;
}

class perro implements animal{
    nombre:string;
    edad:number;

    constructor(n:string,e:number){
        this.nombre = n;
        this.edad = e;
    }

    datos():void{
        console.log('mi perro es '+this.nombre+' tiene una edad de '+this.edad+' Años');
    }
}

let miperro = new perro('solovino',5);
miperro.datos();

class gaviota implements animal{
    nombre: string;
    edad: number;
    constructor(n:string, e:number){
        this.nombre = n;
        this.edad = e;
    }
    datos():void{
        console.log('la gaviota se llama '+this.nombre+' tiene una edad de '+this.edad+' Años')
    }
}

let migaviota = new gaviota('aurora',7);
migaviota.datos();