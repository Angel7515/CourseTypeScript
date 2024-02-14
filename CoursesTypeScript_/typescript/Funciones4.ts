function multi(x:number,y:number):number{
    return x*y;
}
//asignar el tipo de funcion a una variable 
let funcionmultiplicar = multi;
console.log(funcionmultiplicar(3,4));
//asignar el tipo de funcion a una variable especificando sus parametros
//esta debe tener el mismo tipo ya que por ejemplo si no retorna en una y otra 
//si, entonces causa error

function multi2(x:number,y:number){
    console.log(x*y);
}

let funcionmultiplicar2:(x:number,y:number) => number;
funcionmultiplicar2 = multi;
