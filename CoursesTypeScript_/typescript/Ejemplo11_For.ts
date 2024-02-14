//For forma tradicional
let autos:string[] = ['Corvette','Ferrary','Porche'];
for(let i=0;i<autos.length;i++){
    console.log(autos[i]);
}
// for con nueva sintaxis 
for(let indice in autos){
    console.log('[',indice,']', autos[indice]);
}
