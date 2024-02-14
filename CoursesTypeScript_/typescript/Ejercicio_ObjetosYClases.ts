class Utilidades{
    numero: number;
    constructor(n:number){
        this.numero = n;
    }
    seriefibonacci():number[]{
        let numeros = [0,1];
        let i=2;
        while(i<=this.numero){
            numeros[i]=numeros[i-2]+numeros[i-1];
            i++
        }
        return numeros;
    }

    numerosPareImpares(pares:boolean):string{
        let resultado:string;
        resultado = "";
        let aux = 1;
        if(pares)
            aux=0;

        for (let j=0;j<100; j++){
            if(j%2==aux)
                resultado += " " + j;
        }
        return resultado;
    }
}

let u = new Utilidades(15);
let u2 = new Utilidades(100);
let option = 3;

switch(option){
    case 1:
        console.log(u.seriefibonacci());
        break;
    case 2:
        console.log(u2.numerosPareImpares(true));
        break;
    case 3:
        console.log(u2.numerosPareImpares(false));
        break;
    default:
        console.log('no contemplado');
        break;
}