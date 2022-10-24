//Crea un array di 10 oggetti che rappresentano una zucchina, indicando, per ognuna varietà, peso e lunghezza.

const zucchine = [
    {
        peso: 200, //grammi
      lunghezza: 20 //cm  
    },
    {
        peso: 220, //grammi
      lunghezza: 23 //cm  
    },
    {
        peso: 170, //grammi
      lunghezza: 16 //cm  
    },
    {
        peso: 150, //grammi
      lunghezza: 18 //cm  
    },
    {
        peso: 210, //grammi
      lunghezza: 30 //cm  
    },
    {
        peso: 230, //grammi
      lunghezza: 27 //cm  
    },
    {
        peso: 140, //grammi
      lunghezza: 10 //cm  
    },
    {
        peso: 150, //grammi
      lunghezza: 12 //cm  
    },
    {
        peso: 160, //grammi
      lunghezza: 30 //cm  
    },
    {
        peso: 225, //grammi
      lunghezza: 24 //cm  
    },
]

//Calcola quanto pesano tutte le zucchine.

let pesoTotale = 0;

zucchine.forEach(zucchina =>{
    pesoTotale += zucchina.peso
});

console.log(pesoTotale + ' ' + 'grammi');