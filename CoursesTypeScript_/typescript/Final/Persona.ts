export class Persona{
    private _nombre:string;
    private readonly _fechNacimiento:string;
    constructor(nom:string,fech:string){
        this._nombre = nom;
        this._fechNacimiento = fech;
    }
    
    get nombre():string{
        return this._nombre;
    }
    set nombre(value:string){
        this._nombre = value;
    }
    get fechaNac():string{
        return this._fechNacimiento;
    }
}