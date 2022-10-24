//Crea 10 oggetti che rappresentano una zucchina.
const zucchine = [
    {
       numero: 1,
        peso: 200, //grammi
      lunghezza: 10 //cm  
    },
    {
       numero: 2,
        peso: 220, //grammi
      lunghezza: 13 //cm  
    },
    {
       numero: 3,
        peso: 170, //grammi
      lunghezza: 14 //cm  
    },
    {
      numero: 4,
        peso: 150, //grammi
      lunghezza: 18 //cm  
    },
    {
       numero: 5,
        peso: 210, //grammi
      lunghezza: 30 //cm  
    },
    {
       numero: 6,
        peso: 230, //grammi
      lunghezza: 27 //cm  
    },
    {
       numero: 7,
        peso: 140, //grammi
      lunghezza: 10 //cm  
    },
    {
       numero: 8,
        peso: 150, //grammi
      lunghezza: 12 //cm  
    },
    {
       numero: 9,
        peso: 160, //grammi
      lunghezza: 30 //cm  
    },
    {
       numero: 10,
        peso: 225, //grammi
      lunghezza: 24 //cm  
    },
]

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.

let zucchineUnder15 = [];
let zucchineOver15 = [];

zucchine.forEach(zucchina => {
    if(zucchina.lunghezza <=15){
        zucchineOver15 += zucchina.numero + ' '
    } else if(zucchina.lunghezza >=15){
        zucchineUnder15 += zucchina.numero + ' '
    }
});

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

console.log(zucchineOver15);
console.log(zucchineUnder15);