// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

let persone =  [
   { nome: 'Mario', cognome: 'Rossi', eta: '21' },
   { nome: 'Luigi', cognome: 'Bianchi', eta: '14' },
   { nome: 'Alessia', cognome: 'Verdi', eta: '18' },
   { nome: 'Giuseppe', cognome: 'Antani', eta: '60' },
   { nome: 'Clara', cognome: 'Bella', eta: '32' },
   { nome: 'Michele', cognome: 'Moretti', eta: '16' },
]
let canDrive = []

persone.forEach(element => {
   if (element.eta >= 18) {
      persona = element.nome + ' ' + element.cognome + ' di anni ' + element.eta + ' può guidare.'
      canDrive.push(persona)
   } else {
      persona = element.nome + ' ' + element.cognome + ' di anni ' + element.eta + ' non può guidare.'
      canDrive.push(persona)
   }
})

console.log(canDrive)