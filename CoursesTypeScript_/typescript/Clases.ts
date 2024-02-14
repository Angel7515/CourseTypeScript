enum especie{comun,angora,siames,persa}
class gato {
    nombre:string;
    edad: number;
    esp:especie

    constructor(n:string,e:number,esp:especie){
        this.nombre = n;
        this.edad = e;
        this.esp = esp; 
    }

    metodogato():void{
        console.log('estos son los datos de tu gato: ');
        console.log('nombre: '+ this.nombre);
        console.log('edad: ' + this.edad);
        console.log('especie: ' + especie[this.esp]); //para obtener el valor del enum
    }
}

let migato = new gato('garfield',7,especie.angora);
let migato2 = new gato('garfield 2',7,especie.persa);
migato.metodogato();
migato2.metodogato();