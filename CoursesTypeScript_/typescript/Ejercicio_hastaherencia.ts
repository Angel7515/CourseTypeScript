let presentacion = (): number => {
    let numero: number;
    console.log('WELCOME my name is MIGUEL ANGEL ANDRADE AYALA');
    numero = 1;
    return numero;
}

interface Persona {
    nombre: string;
    apellido: string;
    fecha_nac: string;
    estudios: string;
    direccion: string;
}

class Miguel implements Persona {
    nombre: string;
    apellido: string;
    fecha_nac: string;
    estudios: string;
    direccion: string;
    constructor(n: string, a: string, f: string, e: string, d: string) {
        this.nombre = n;
        this.apellido = a;
        this.fecha_nac = f;
        this.estudios = e;
        this.direccion = d;
    }
}

class Angel extends Miguel {
    edad:number;
    constructor(n: string, a: string, f: string, e: string, d: string, ed:number) {
        super(n,a,f,e,d);
        this.edad = ed;
    }
    datos(n:number):number{
        console.log('La persona se llama:');
        return 1;
    }
}