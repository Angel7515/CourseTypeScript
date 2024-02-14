//getters and setters 
interface vehiculo_aereo {
    placa:string;
    librea_N:number;
    n_motor:number;
    capacidad:number;
    modelo:string;
}

class avion implements vehiculo_aereo{
    placa: string;
    librea_N: number;
    n_motor: number;
    capacidad: number;
    modelo: string;
    constructor(p:string,l:number,n:number,c:number,m:string){
        this.placa = p;
        this.librea_N = l;
        this.n_motor = n;
        this.capacidad = c;
        this.modelo = m;
    };

    get placas():string{
        return this.placa
    }
    set placas(value:string){
        this.placa = value
    }

    get librea():number{
        return this.librea_N
    }
    set librea(value:number){
        this.librea_N = value;
    }

    get motores():number{
        return this.n_motor
    }
    set motores(value:number){
        this.n_motor = value
    }

    get capacidadd():number{
        return this.capacidad
    }
    set capacidadd(value:number){
        this.capacidad = value
    }

    get modelov():string{
        return this.modelo
    }
    set modelov(value:string){
        this.modelo = value
    }

    datos():void{
        console.log('el vehiculo es: ' + this.placa + '\nNumero de Librea: ',this.librea_N,
        '\nNumero de motores: ', this.n_motor, '\ncapacidad de carga: ',this.capacidad, 
        '\nModelo del vehiculo: '+this.modelo);
    }
}

let av = new avion('s',1,2,3,'a');

av.placa= 'MX-MAAA777'
av.librea_N= 7
av.n_motor= 5
av.capacidad= 50000
av.modelo= 'Boeing777'

av.datos();