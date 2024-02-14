import { Profesor } from "./Profesor";
import { Medico } from "./Medico";

let op = 3;

switch(op){
    case 1:
        let m = newMedico('Katia','14/09/2001',true,'cardiologa');
        mostrardatosMed(m);
        break;
    case 2:
        let p = new Profesor('Alfonso','27/03/1985',5);
        mostrardatosprof(p);
        break;
    case 3:
        factorial(10);
        break;
    default:
        console.log("No valido");
        break;
}

function newMedico(nom:string,fech:string,guar:boolean,espe:string):Medico{
    return new Medico(nom,fech,guar,espe);
}

function mostrardatosMed(m:Medico){
    console.log('Datos del Medico: ');
    console.log(m.nombre+'\n'+m.fechaNac+'\n'+m.especialidad);
}

function mostrardatosprof(p:Profesor){
    console.log('Datos del Profesor: ');
    console.log(p.nombre+'\n'+p.fechaNac+'\n'+p.asignatura);
}

function factorial(n:number){
    let f=1;
    for(let x=2;x<=n; x++){
        console.log(' '+ (f=f*x));
    }
}