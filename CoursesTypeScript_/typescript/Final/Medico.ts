import { Persona } from "./Persona";

export class Medico extends Persona{
    private _guardias:boolean;
    private _especialidad:string;

    constructor(nom:string,fech:string,guar:boolean,espe:string){
        super(nom,fech);
        this._guardias = guar;
        this._especialidad = espe;
    }

    get especialidad():string{
        return this._especialidad;
    }
    set especialidad(value:string){
        this._especialidad = value;
    }

    get guardias():boolean{
        return this._guardias;
    }
    set guardias(value:boolean){
        this._guardias = value;
    }

}