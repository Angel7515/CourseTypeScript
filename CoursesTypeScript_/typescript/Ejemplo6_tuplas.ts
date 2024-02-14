let silla:['ejecutiva','negra',7];
let silla2:[string,string,number]=['ejecutiva','negra',7];

silla2[0]='Directiva';
console.log(silla2);

//podemos crear un molde para las tuplas como por ejemplo 
type moldesillas = [string,string,number];
let sillam1:moldesillas = ['silla1','negra',6];
let sillam2:moldesillas = ['silla2','negra',3];
let sillam3:moldesillas = ['silla3','negra',4];
console.log(sillam1);