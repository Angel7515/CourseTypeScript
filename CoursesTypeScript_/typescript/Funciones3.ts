let lanzaerror = (texto:string) => {
    throw new Error(texto);
}

lanzaerror('hola');