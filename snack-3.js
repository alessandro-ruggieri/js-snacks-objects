// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

let animali = [
   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
   { nome: 'testuggine', famiglia: 'testudini', classe: 'rettili' },
   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
   { nome: 'rana', famiglia: 'ranidi', classe: 'anfibi' },
   { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
]

console.log(animali)

let mammiferi = []

animali.forEach(element => {
   if (element.classe == 'mammiferi') {
      mammifero = element
      mammiferi.push(mammifero)
   } 
});

console.log(mammiferi)