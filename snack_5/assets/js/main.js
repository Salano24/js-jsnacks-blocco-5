//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
let numeri = ["1","2","3","4","5","6","7","8","9","10"]

let a = Number(prompt('Inserisci un numero da 1 a 9'))
let b = Number(prompt('Inserisci un numero maggiore di quello precedente compreso tra 2 e 10'))

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
console.log('I numeri compresi tra' + ' ' + a + ' ' + 'e' + ' ' + b + ' ' + 'sono:');
if(b <= numeri.length){
    for(let i = a; i < b - 1; i++){
        console.log(numeri[i])
    }
}