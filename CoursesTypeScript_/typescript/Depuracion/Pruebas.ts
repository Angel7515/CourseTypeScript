class Prueba{
    iteraciones:number;
    constructor(i:number){
        this.iteraciones = i;
    }
    contador():void{
        let cont = 0;
        while(cont<this.iteraciones){
            console.log("Iteracion " + cont);
            cont++;
        }
    }
}

let miprueba = new Prueba(20);
miprueba.contador();