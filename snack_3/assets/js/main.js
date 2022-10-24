//Scrivi una funzione che accetti una stringa come argomento 

let parola = prompt('Inserisci una parola')
let parolaGirata = ""

//e la ritorni girata (es. Ciao -> oaiC)

for(let i = parola.length - 1; i >= 0; i--){
    parolaGirata += parola[i]
}

console.log(parolaGirata)