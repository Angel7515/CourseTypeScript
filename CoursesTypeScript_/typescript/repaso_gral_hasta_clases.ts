interface persona {
    nombre: string;
    apellido_P : string;
    apellido_M : string;
    fech_Nac : string;
    sexo : string;
}

class miguel implements persona {
    nombre: string;
    apellido_P: string;
    apellido_M: string;
    fech_Nac: string;
    sexo: string;
    constructor(nombre:string,apP:string,apM:string,fec:string,sex:string){
        this.nombre = nombre;
        this.apellido_P = apP;
        this.apellido_M = apM;
        this.fech_Nac = fec;
        this.sexo = sex;
    }
    datascreen():void{
        let datos = [this.nombre,this.apellido_P,this.apellido_M, this.fech_Nac, this.sexo];
        console.log("Data Object", datos)
    };
}

let person = new miguel('miguel angel','andrade','ayala','09/03/1999','m');
person.datascreen();

