interface automovil {
    nombre: string;
    modelo: string;
    n_asientos: number;
    n_ruedas: number;
    n_puertas: number;
    costo: number;
    printdatos():void;
}

class ford implements automovil {
    nombre:string;
    modelo:string;
    n_asientos:number;
    n_ruedas:number;
    n_puertas:number;
    costo:number;
    constructor(n:string, m:string, nas:number, nru:number, npu: number, c:number){
        this.nombre = n;
        this.modelo = m;
        this.n_asientos = nas;
        this.n_ruedas = nru;
        this.n_puertas = npu;
        this.costo = c;
    }
    printdatos():void{
        console.log('el auto ' + this.nombre + ' pertenece al modelo ' + this.modelo +
            ' tiene [' + this.n_puertas + '] puertas, [' + this.n_asientos + '] asientos, [' + this.n_ruedas + '] ruedas, tiene un costo de $'+this.costo);
    };
}

let carrito = new ford('Audi','A04',5,4,4,24000);
carrito.printdatos();