import pessoa from './mosulos/pessoa.mjs'
import p from './mosulos/pessoa.mjs' // posso dar qualquer nome
import {ola} from './mosulos/util.mjs'
import {soma} from './mosulos/util.mjs'


console.log(pessoa.idade)

console.log(p) // posso dar qualquer nome

console.log(ola(p.nome)) // aqui estou usando a arrow function do arquivo util e usando o objeto do arquivo pessoa.

console.log(soma(4, 3))

// posso criar um módulo em um arquivo e usar em outro! isso é top de mais!