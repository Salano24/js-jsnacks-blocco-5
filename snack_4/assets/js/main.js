//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const lettere = ['a', 'b', 'c', 'd', 'e'];
const numeri = [1, 2, 3, 4, 5];
const lettereNumeri = [];

for(let i = 0; i < lettere.length; i++){
    lettereNumeri.push(lettere[i])
    lettereNumeri.push(numeri[i])
}

console.log(lettereNumeri)

