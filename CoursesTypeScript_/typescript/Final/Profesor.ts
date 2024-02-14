import { Persona } from "./Persona";

export class Profesor extends Persona{

    private _asignaturas:number;
    constructor(nom:string,fech:string,asig:number){
        super(nom,fech);
        this._asignaturas = asig;
    }

    get asignatura():number{
        return this._asignaturas;
    }
    set asignatura(value:number){
        this._asignaturas = value;
    }

}