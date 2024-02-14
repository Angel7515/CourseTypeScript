class Padre{
    nombre:string;
    constructor(n:string){
        this.nombre = n;
    }
    dameNombre(){
        console.log('mi nombre es '+this.nombre)
    }
}

class Hijo extends Padre{
    edad:number;
    constructor(nom:string,e:number){
        super(nom);
        this.edad = e;
    }
    dimeEdad(){
        console.log('edad: '+this.edad);
    }
}

let p = new Padre('Angel');
p.dameNombre();
let h = new Hijo('Miguel',5);
h.dameNombre();
h.dimeEdad();


// interface & herencia 

interface Persona{
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string;
    t_sangre: string;
    imprimedatos():void;
}

class Hombre implements Persona{
    nombre: string;
    apellido: string;
    edad: number;
    direccion: string;
    t_sangre: string;
    constructor(n:string,a:string,e:number,d:string,t:string){
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
        this.direccion = d;
        this.t_sangre = t;
    }
    imprimedatos(): void {
        console.log('estos son los datos de '+this.nombre+' '+this.apellido+':\n edad: '+this.edad+'\ndireccion: '+this.direccion+'\n Tipo de sangre: '+this.t_sangre);
    }
}

//si funciona la interfaz en la clase, ahora usaremos la clase para validar una herencia del padre Hombre al Hijo desde la interfaz con esos atributos
let juan = new Hombre('Juan','Perez',18,'San Jeronimo Amanalco','O+');
juan.imprimedatos();

class HombreHijo extends Hombre{
    born_date:string;
    constructor(n:string,a:string,e:number,d:string,t:string,b:string){
        super(n,a,e,d,t);
        this.born_date = b;
    }
    dateborn():void{
        console.log('fecha de nacimiento: '+this.born_date);
    }
}

let juanhijo = new HombreHijo('Juan','Perez Hijo',0,'San Jeronimo Amanalco','O+','21/nov/2023');
juanhijo.imprimedatos();
juanhijo.dateborn();