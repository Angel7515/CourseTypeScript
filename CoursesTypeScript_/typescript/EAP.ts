let funcion = (value: string): string => {
    try {
        console.log('welcome to CIMMYT!');
        console.log('Welcome ' + value + ' to CIMMYT Family');
        return "ok";
    } catch (Error) {
        console.log('se produjo error:   ' + Error);
        return 'Error';
    } finally {
        console.log('se ejecuta siempre')
    }
}

let respuesta: string;

respuesta = funcion('');


class trasnporte{
    nombre:string;
    tipo:string;
    pais:string;
}